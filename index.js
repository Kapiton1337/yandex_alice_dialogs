const {responses, requests} = require("./phrases/dictionary");
const {matcher} = require("./scenes/commandCreator");

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