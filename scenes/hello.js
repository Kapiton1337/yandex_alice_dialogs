const {Alice, Reply, Markup} = require('yandex-dialogs-sdk');
const {requests, responses} =require('../phrases/dictionary');

const M = Markup;

exports.matcher = (ctx) => {
    return ctx.data.session.new === true;
}

exports.handler = (ctx) => {
    return Reply.text(responses.main.start, {buttons: [M.button("Что ты умеешь? "), M.button("Расскажи про категории "), M.button("Помощь "), ]})
}