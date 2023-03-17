const {Markup} = require('yandex-dialogs-sdk');

exports.buttonCreator = (dict) => {
    return {buttons: dict.map(question => Markup.button(question))};
}