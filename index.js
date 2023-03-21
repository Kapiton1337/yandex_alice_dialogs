const {Alice, Reply, Markup} = require('yandex-dialogs-sdk');
const {responses, requests} = require("./phrases/dictionary");
const {matcher} = require("./scenes/commandCreator");
const store = require("./phrases/dictionary");
/**
 * Entry-point for Serverless Function.
 *
 * @param event {Object} request payload.
 * @param context {Object} information about current execution context.
 *
 * @return {Promise<Object>} response to be serialized as JSON.
 */
module.exports.handler = async (event, context) => {
    const {version, session, request} = event;

    let text = responses["capability"]["skills"];

    if (request['original_utterance'].length > 0) {
        const [key, found] = matcher(requests, request['original_utterance']);
        text = responses[key][found];
    }
    return {
        version,
        session,
        response: {
            text: text,
            end_session: false,
        },
    };
};

const [key, found] = matcher(requests, "как подготовиться к приему в ВУЦ");
console.log(responses[key][found]);