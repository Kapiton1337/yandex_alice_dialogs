const {Alice, Reply, Markup} = require('yandex-dialogs-sdk')
const alice = new Alice();
const any = require("./scenes/any");
const hello = require('./scenes/hello')
const {commandCreator} = require("./scenes/commandCreator");
const {CAPABILITY, CATEGORIES, CONTRACT, GRANDS, DORMITORY, TRANSFER, STRUCTURE, SPORT, SCHEDULE, MEDICINE, MILITARYDEP} = require("./constants");

const M = Markup;

alice.command(hello.matcher, hello.handler);

commandCreator(alice, Reply, CAPABILITY);
commandCreator(alice, Reply, CATEGORIES);
commandCreator(alice, Reply, GRANDS);
commandCreator(alice, Reply, DORMITORY);
commandCreator(alice, Reply, TRANSFER);
commandCreator(alice, Reply, CONTRACT);
commandCreator(alice, Reply, STRUCTURE);
commandCreator(alice, Reply, SPORT);
commandCreator(alice, Reply, SCHEDULE);
commandCreator(alice, Reply, MEDICINE);
commandCreator(alice, Reply, MILITARYDEP);

alice.any(any)

const server = alice.listen(3000, '/');