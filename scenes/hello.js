const {Alice, Reply, Markup} = require('yandex-dialogs-sdk');
const {base} =require('../phrases/dictionary');
const {buttonCreator} = require("../buttonCreator");

const M = Markup;

exports.matcher = (ctx) => {
    return ctx.data.session.new === true;
}

exports.handler = (ctx) => {
    return Reply.text(base.start, buttonCreator(["Что ты умеешь? ", "Расскажи про категории ", "Помощь "]));
}