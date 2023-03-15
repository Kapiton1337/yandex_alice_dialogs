const {Markup} = require('yandex-dialogs-sdk');

exports.buttonCreator = (dict) => {
    return dict.map(question => Markup.button(question));
}