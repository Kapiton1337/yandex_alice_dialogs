const {commandCreator} = require("./commandCreator");
const {Reply} = require("yandex-dialogs-sdk");
const {CAPABILITY} = require("../constants");

commandCreator(alice, Reply, CAPABILITY);

const a = 0;