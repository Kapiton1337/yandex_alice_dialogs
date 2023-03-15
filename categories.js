const { Alice, Reply} = require('yandex-dialogs-sdk');
const {matcher, handler} = require("./scenes/hello");
const {requests, responses} =require('../phrases/dictionary');
const {buttonCreator} = require("./buttonCreator");
const alice = new Alice();

exports.matcher = requests.main.categories;

exports.handler = (ctx) => {
    return Reply.text(responses.capability.categories, {buttons: buttonCreator(requests.main.categories)});
}

alice.command(matcher, handler);