const {requests, responses} = require("../phrases/dictionary");

const capItems = Object.keys(responses.capability);

exports.commandCreator = (alice, Reply, category) => {
    const items = Object.keys(responses[category]);
    return items.map(item =>
        alice.command(requests[category][item], async (ctx) => {
            return Reply.text(responses[category][item]);
        }))
}
