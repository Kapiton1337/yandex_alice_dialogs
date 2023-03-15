const {Reply, Markup} = require('yandex-dialogs-sdk')
const {sample} = require('lodash');

const M = Markup;

module.exports = (ctx) => {
    return Reply.text(`${sample(["Я Вас не поняла ", "Ваш запрос не распознан. "])}` + `Повторите запрос еще раз, или спросите: Что ты умеешь? \n`,
        {
            buttons: [M.button('Что ты умеешь?')]
        });
}