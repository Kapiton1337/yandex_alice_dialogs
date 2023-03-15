const { Alice, Reply, Markup } = require('yandex-dialogs-sdk')
const alice = new Alice();
const {requests} = require("./phrases/dictionary")
const {responses} = require("./phrases/dictionary")
const any = require("./scenes/any");
const hello = require('./scenes/hello')

const M = Markup;

alice.command(hello.matcher, hello.handler);

alice.any(any)

const server = alice.listen(3000, '/');