"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecognizerClient = exports.RecognizerService = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const stt_1 = require("../../../../../yandex/cloud/ai/stt/v3/stt");
exports.protobufPackage = "speechkit.stt.v3";
/** A set of methods for voice recognition. */
exports.RecognizerService = {
    /** Expects audio in real-time */
    recognizeStreaming: {
        path: "/speechkit.stt.v3.Recognizer/RecognizeStreaming",
        requestStream: true,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(stt_1.StreamingRequest.encode(value).finish()),
        requestDeserialize: (value) => stt_1.StreamingRequest.decode(value),
        responseSerialize: (value) => Buffer.from(stt_1.StreamingResponse.encode(value).finish()),
        responseDeserialize: (value) => stt_1.StreamingResponse.decode(value),
    },
};
exports.RecognizerClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.RecognizerService, "speechkit.stt.v3.Recognizer");
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
