import {Reply} from "yandex-dialogs-sdk";
import {buttonCreator} from "../buttonCreator";

exports.matcher = (ctx, request) => request;
exports.handler = (ctx, response, btn_requests) => Reply.text(response, {buttons: buttonCreator(btn_requests)});
