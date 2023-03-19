"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamingResponse = exports.SessionUuid = exports.StatusCode = exports.FinalRefinement = exports.AudioCursors = exports.AlternativeUpdate = exports.EouUpdate = exports.Alternative = exports.Word = exports.StreamingRequest = exports.Eou = exports.SilenceChunk = exports.AudioChunk = exports.StreamingOptions = exports.RecognitionModelOptions = exports.LanguageRestrictionOptions = exports.AudioFormatOptions = exports.ContainerAudio = exports.RawAudio = exports.EouClassifierOptions = exports.ExternalEouClassifier = exports.DefaultEouClassifier = exports.TextNormalizationOptions = exports.recognitionModelOptions_AudioProcessingTypeToJSON = exports.recognitionModelOptions_AudioProcessingTypeFromJSON = exports.RecognitionModelOptions_AudioProcessingType = exports.languageRestrictionOptions_LanguageRestrictionTypeToJSON = exports.languageRestrictionOptions_LanguageRestrictionTypeFromJSON = exports.LanguageRestrictionOptions_LanguageRestrictionType = exports.containerAudio_ContainerAudioTypeToJSON = exports.containerAudio_ContainerAudioTypeFromJSON = exports.ContainerAudio_ContainerAudioType = exports.rawAudio_AudioEncodingToJSON = exports.rawAudio_AudioEncodingFromJSON = exports.RawAudio_AudioEncoding = exports.defaultEouClassifier_EouSensitivityToJSON = exports.defaultEouClassifier_EouSensitivityFromJSON = exports.DefaultEouClassifier_EouSensitivity = exports.textNormalizationOptions_TextNormalizationToJSON = exports.textNormalizationOptions_TextNormalizationFromJSON = exports.TextNormalizationOptions_TextNormalization = exports.codeTypeToJSON = exports.codeTypeFromJSON = exports.CodeType = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "speechkit.stt.v3";
var CodeType;
(function (CodeType) {
    CodeType[CodeType["CODE_TYPE_UNSPECIFIED"] = 0] = "CODE_TYPE_UNSPECIFIED";
    /** WORKING - all good */
    CodeType[CodeType["WORKING"] = 1] = "WORKING";
    /** WARNING - for example, if speech is sent not in real time. or unknown context (and we've made fallback). */
    CodeType[CodeType["WARNING"] = 2] = "WARNING";
    /** CLOSED - after session was closed. */
    CodeType[CodeType["CLOSED"] = 3] = "CLOSED";
    CodeType[CodeType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CodeType = exports.CodeType || (exports.CodeType = {}));
function codeTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CODE_TYPE_UNSPECIFIED":
            return CodeType.CODE_TYPE_UNSPECIFIED;
        case 1:
        case "WORKING":
            return CodeType.WORKING;
        case 2:
        case "WARNING":
            return CodeType.WARNING;
        case 3:
        case "CLOSED":
            return CodeType.CLOSED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CodeType.UNRECOGNIZED;
    }
}
exports.codeTypeFromJSON = codeTypeFromJSON;
function codeTypeToJSON(object) {
    switch (object) {
        case CodeType.CODE_TYPE_UNSPECIFIED:
            return "CODE_TYPE_UNSPECIFIED";
        case CodeType.WORKING:
            return "WORKING";
        case CodeType.WARNING:
            return "WARNING";
        case CodeType.CLOSED:
            return "CLOSED";
        default:
            return "UNKNOWN";
    }
}
exports.codeTypeToJSON = codeTypeToJSON;
/** Normalization */
var TextNormalizationOptions_TextNormalization;
(function (TextNormalizationOptions_TextNormalization) {
    TextNormalizationOptions_TextNormalization[TextNormalizationOptions_TextNormalization["TEXT_NORMALIZATION_UNSPECIFIED"] = 0] = "TEXT_NORMALIZATION_UNSPECIFIED";
    /** TEXT_NORMALIZATION_ENABLED - Enable normalization */
    TextNormalizationOptions_TextNormalization[TextNormalizationOptions_TextNormalization["TEXT_NORMALIZATION_ENABLED"] = 1] = "TEXT_NORMALIZATION_ENABLED";
    /** TEXT_NORMALIZATION_DISABLED - Disable normalization */
    TextNormalizationOptions_TextNormalization[TextNormalizationOptions_TextNormalization["TEXT_NORMALIZATION_DISABLED"] = 2] = "TEXT_NORMALIZATION_DISABLED";
    TextNormalizationOptions_TextNormalization[TextNormalizationOptions_TextNormalization["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TextNormalizationOptions_TextNormalization = exports.TextNormalizationOptions_TextNormalization || (exports.TextNormalizationOptions_TextNormalization = {}));
function textNormalizationOptions_TextNormalizationFromJSON(object) {
    switch (object) {
        case 0:
        case "TEXT_NORMALIZATION_UNSPECIFIED":
            return TextNormalizationOptions_TextNormalization.TEXT_NORMALIZATION_UNSPECIFIED;
        case 1:
        case "TEXT_NORMALIZATION_ENABLED":
            return TextNormalizationOptions_TextNormalization.TEXT_NORMALIZATION_ENABLED;
        case 2:
        case "TEXT_NORMALIZATION_DISABLED":
            return TextNormalizationOptions_TextNormalization.TEXT_NORMALIZATION_DISABLED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TextNormalizationOptions_TextNormalization.UNRECOGNIZED;
    }
}
exports.textNormalizationOptions_TextNormalizationFromJSON = textNormalizationOptions_TextNormalizationFromJSON;
function textNormalizationOptions_TextNormalizationToJSON(object) {
    switch (object) {
        case TextNormalizationOptions_TextNormalization.TEXT_NORMALIZATION_UNSPECIFIED:
            return "TEXT_NORMALIZATION_UNSPECIFIED";
        case TextNormalizationOptions_TextNormalization.TEXT_NORMALIZATION_ENABLED:
            return "TEXT_NORMALIZATION_ENABLED";
        case TextNormalizationOptions_TextNormalization.TEXT_NORMALIZATION_DISABLED:
            return "TEXT_NORMALIZATION_DISABLED";
        default:
            return "UNKNOWN";
    }
}
exports.textNormalizationOptions_TextNormalizationToJSON = textNormalizationOptions_TextNormalizationToJSON;
var DefaultEouClassifier_EouSensitivity;
(function (DefaultEouClassifier_EouSensitivity) {
    DefaultEouClassifier_EouSensitivity[DefaultEouClassifier_EouSensitivity["EOU_SENSITIVITY_UNSPECIFIED"] = 0] = "EOU_SENSITIVITY_UNSPECIFIED";
    DefaultEouClassifier_EouSensitivity[DefaultEouClassifier_EouSensitivity["DEFAULT"] = 1] = "DEFAULT";
    DefaultEouClassifier_EouSensitivity[DefaultEouClassifier_EouSensitivity["HIGH"] = 2] = "HIGH";
    DefaultEouClassifier_EouSensitivity[DefaultEouClassifier_EouSensitivity["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DefaultEouClassifier_EouSensitivity = exports.DefaultEouClassifier_EouSensitivity || (exports.DefaultEouClassifier_EouSensitivity = {}));
function defaultEouClassifier_EouSensitivityFromJSON(object) {
    switch (object) {
        case 0:
        case "EOU_SENSITIVITY_UNSPECIFIED":
            return DefaultEouClassifier_EouSensitivity.EOU_SENSITIVITY_UNSPECIFIED;
        case 1:
        case "DEFAULT":
            return DefaultEouClassifier_EouSensitivity.DEFAULT;
        case 2:
        case "HIGH":
            return DefaultEouClassifier_EouSensitivity.HIGH;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DefaultEouClassifier_EouSensitivity.UNRECOGNIZED;
    }
}
exports.defaultEouClassifier_EouSensitivityFromJSON = defaultEouClassifier_EouSensitivityFromJSON;
function defaultEouClassifier_EouSensitivityToJSON(object) {
    switch (object) {
        case DefaultEouClassifier_EouSensitivity.EOU_SENSITIVITY_UNSPECIFIED:
            return "EOU_SENSITIVITY_UNSPECIFIED";
        case DefaultEouClassifier_EouSensitivity.DEFAULT:
            return "DEFAULT";
        case DefaultEouClassifier_EouSensitivity.HIGH:
            return "HIGH";
        default:
            return "UNKNOWN";
    }
}
exports.defaultEouClassifier_EouSensitivityToJSON = defaultEouClassifier_EouSensitivityToJSON;
var RawAudio_AudioEncoding;
(function (RawAudio_AudioEncoding) {
    RawAudio_AudioEncoding[RawAudio_AudioEncoding["AUDIO_ENCODING_UNSPECIFIED"] = 0] = "AUDIO_ENCODING_UNSPECIFIED";
    /** LINEAR16_PCM - Audio bit depth 16-bit signed little-endian (Linear PCM). */
    RawAudio_AudioEncoding[RawAudio_AudioEncoding["LINEAR16_PCM"] = 1] = "LINEAR16_PCM";
    RawAudio_AudioEncoding[RawAudio_AudioEncoding["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RawAudio_AudioEncoding = exports.RawAudio_AudioEncoding || (exports.RawAudio_AudioEncoding = {}));
function rawAudio_AudioEncodingFromJSON(object) {
    switch (object) {
        case 0:
        case "AUDIO_ENCODING_UNSPECIFIED":
            return RawAudio_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED;
        case 1:
        case "LINEAR16_PCM":
            return RawAudio_AudioEncoding.LINEAR16_PCM;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RawAudio_AudioEncoding.UNRECOGNIZED;
    }
}
exports.rawAudio_AudioEncodingFromJSON = rawAudio_AudioEncodingFromJSON;
function rawAudio_AudioEncodingToJSON(object) {
    switch (object) {
        case RawAudio_AudioEncoding.AUDIO_ENCODING_UNSPECIFIED:
            return "AUDIO_ENCODING_UNSPECIFIED";
        case RawAudio_AudioEncoding.LINEAR16_PCM:
            return "LINEAR16_PCM";
        default:
            return "UNKNOWN";
    }
}
exports.rawAudio_AudioEncodingToJSON = rawAudio_AudioEncodingToJSON;
var ContainerAudio_ContainerAudioType;
(function (ContainerAudio_ContainerAudioType) {
    ContainerAudio_ContainerAudioType[ContainerAudio_ContainerAudioType["CONTAINER_AUDIO_TYPE_UNSPECIFIED"] = 0] = "CONTAINER_AUDIO_TYPE_UNSPECIFIED";
    /** WAV - Audio bit depth 16-bit signed little-endian (Linear PCM). */
    ContainerAudio_ContainerAudioType[ContainerAudio_ContainerAudioType["WAV"] = 1] = "WAV";
    /** OGG_OPUS - Data is encoded using the OPUS audio codec and compressed using the OGG container format. */
    ContainerAudio_ContainerAudioType[ContainerAudio_ContainerAudioType["OGG_OPUS"] = 2] = "OGG_OPUS";
    /** MP3 - Data is encoded using MPEG-1/2 Layer III and compressed using the MP3 container format. */
    ContainerAudio_ContainerAudioType[ContainerAudio_ContainerAudioType["MP3"] = 3] = "MP3";
    ContainerAudio_ContainerAudioType[ContainerAudio_ContainerAudioType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ContainerAudio_ContainerAudioType = exports.ContainerAudio_ContainerAudioType || (exports.ContainerAudio_ContainerAudioType = {}));
function containerAudio_ContainerAudioTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CONTAINER_AUDIO_TYPE_UNSPECIFIED":
            return ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_UNSPECIFIED;
        case 1:
        case "WAV":
            return ContainerAudio_ContainerAudioType.WAV;
        case 2:
        case "OGG_OPUS":
            return ContainerAudio_ContainerAudioType.OGG_OPUS;
        case 3:
        case "MP3":
            return ContainerAudio_ContainerAudioType.MP3;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ContainerAudio_ContainerAudioType.UNRECOGNIZED;
    }
}
exports.containerAudio_ContainerAudioTypeFromJSON = containerAudio_ContainerAudioTypeFromJSON;
function containerAudio_ContainerAudioTypeToJSON(object) {
    switch (object) {
        case ContainerAudio_ContainerAudioType.CONTAINER_AUDIO_TYPE_UNSPECIFIED:
            return "CONTAINER_AUDIO_TYPE_UNSPECIFIED";
        case ContainerAudio_ContainerAudioType.WAV:
            return "WAV";
        case ContainerAudio_ContainerAudioType.OGG_OPUS:
            return "OGG_OPUS";
        case ContainerAudio_ContainerAudioType.MP3:
            return "MP3";
        default:
            return "UNKNOWN";
    }
}
exports.containerAudio_ContainerAudioTypeToJSON = containerAudio_ContainerAudioTypeToJSON;
var LanguageRestrictionOptions_LanguageRestrictionType;
(function (LanguageRestrictionOptions_LanguageRestrictionType) {
    LanguageRestrictionOptions_LanguageRestrictionType[LanguageRestrictionOptions_LanguageRestrictionType["LANGUAGE_RESTRICTION_TYPE_UNSPECIFIED"] = 0] = "LANGUAGE_RESTRICTION_TYPE_UNSPECIFIED";
    LanguageRestrictionOptions_LanguageRestrictionType[LanguageRestrictionOptions_LanguageRestrictionType["WHITELIST"] = 1] = "WHITELIST";
    LanguageRestrictionOptions_LanguageRestrictionType[LanguageRestrictionOptions_LanguageRestrictionType["BLACKLIST"] = 2] = "BLACKLIST";
    LanguageRestrictionOptions_LanguageRestrictionType[LanguageRestrictionOptions_LanguageRestrictionType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LanguageRestrictionOptions_LanguageRestrictionType = exports.LanguageRestrictionOptions_LanguageRestrictionType || (exports.LanguageRestrictionOptions_LanguageRestrictionType = {}));
function languageRestrictionOptions_LanguageRestrictionTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "LANGUAGE_RESTRICTION_TYPE_UNSPECIFIED":
            return LanguageRestrictionOptions_LanguageRestrictionType.LANGUAGE_RESTRICTION_TYPE_UNSPECIFIED;
        case 1:
        case "WHITELIST":
            return LanguageRestrictionOptions_LanguageRestrictionType.WHITELIST;
        case 2:
        case "BLACKLIST":
            return LanguageRestrictionOptions_LanguageRestrictionType.BLACKLIST;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LanguageRestrictionOptions_LanguageRestrictionType.UNRECOGNIZED;
    }
}
exports.languageRestrictionOptions_LanguageRestrictionTypeFromJSON = languageRestrictionOptions_LanguageRestrictionTypeFromJSON;
function languageRestrictionOptions_LanguageRestrictionTypeToJSON(object) {
    switch (object) {
        case LanguageRestrictionOptions_LanguageRestrictionType.LANGUAGE_RESTRICTION_TYPE_UNSPECIFIED:
            return "LANGUAGE_RESTRICTION_TYPE_UNSPECIFIED";
        case LanguageRestrictionOptions_LanguageRestrictionType.WHITELIST:
            return "WHITELIST";
        case LanguageRestrictionOptions_LanguageRestrictionType.BLACKLIST:
            return "BLACKLIST";
        default:
            return "UNKNOWN";
    }
}
exports.languageRestrictionOptions_LanguageRestrictionTypeToJSON = languageRestrictionOptions_LanguageRestrictionTypeToJSON;
var RecognitionModelOptions_AudioProcessingType;
(function (RecognitionModelOptions_AudioProcessingType) {
    RecognitionModelOptions_AudioProcessingType[RecognitionModelOptions_AudioProcessingType["AUDIO_PROCESSING_TYPE_UNSPECIFIED"] = 0] = "AUDIO_PROCESSING_TYPE_UNSPECIFIED";
    RecognitionModelOptions_AudioProcessingType[RecognitionModelOptions_AudioProcessingType["REAL_TIME"] = 1] = "REAL_TIME";
    RecognitionModelOptions_AudioProcessingType[RecognitionModelOptions_AudioProcessingType["FULL_DATA"] = 2] = "FULL_DATA";
    RecognitionModelOptions_AudioProcessingType[RecognitionModelOptions_AudioProcessingType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(RecognitionModelOptions_AudioProcessingType = exports.RecognitionModelOptions_AudioProcessingType || (exports.RecognitionModelOptions_AudioProcessingType = {}));
function recognitionModelOptions_AudioProcessingTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "AUDIO_PROCESSING_TYPE_UNSPECIFIED":
            return RecognitionModelOptions_AudioProcessingType.AUDIO_PROCESSING_TYPE_UNSPECIFIED;
        case 1:
        case "REAL_TIME":
            return RecognitionModelOptions_AudioProcessingType.REAL_TIME;
        case 2:
        case "FULL_DATA":
            return RecognitionModelOptions_AudioProcessingType.FULL_DATA;
        case -1:
        case "UNRECOGNIZED":
        default:
            return RecognitionModelOptions_AudioProcessingType.UNRECOGNIZED;
    }
}
exports.recognitionModelOptions_AudioProcessingTypeFromJSON = recognitionModelOptions_AudioProcessingTypeFromJSON;
function recognitionModelOptions_AudioProcessingTypeToJSON(object) {
    switch (object) {
        case RecognitionModelOptions_AudioProcessingType.AUDIO_PROCESSING_TYPE_UNSPECIFIED:
            return "AUDIO_PROCESSING_TYPE_UNSPECIFIED";
        case RecognitionModelOptions_AudioProcessingType.REAL_TIME:
            return "REAL_TIME";
        case RecognitionModelOptions_AudioProcessingType.FULL_DATA:
            return "FULL_DATA";
        default:
            return "UNKNOWN";
    }
}
exports.recognitionModelOptions_AudioProcessingTypeToJSON = recognitionModelOptions_AudioProcessingTypeToJSON;
const baseTextNormalizationOptions = {
    $type: "speechkit.stt.v3.TextNormalizationOptions",
    textNormalization: 0,
    profanityFilter: false,
    literatureText: false,
};
exports.TextNormalizationOptions = {
    $type: "speechkit.stt.v3.TextNormalizationOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.textNormalization !== 0) {
            writer.uint32(8).int32(message.textNormalization);
        }
        if (message.profanityFilter === true) {
            writer.uint32(16).bool(message.profanityFilter);
        }
        if (message.literatureText === true) {
            writer.uint32(24).bool(message.literatureText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTextNormalizationOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.textNormalization = reader.int32();
                    break;
                case 2:
                    message.profanityFilter = reader.bool();
                    break;
                case 3:
                    message.literatureText = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTextNormalizationOptions);
        message.textNormalization =
            object.textNormalization !== undefined &&
                object.textNormalization !== null
                ? textNormalizationOptions_TextNormalizationFromJSON(object.textNormalization)
                : 0;
        message.profanityFilter =
            object.profanityFilter !== undefined && object.profanityFilter !== null
                ? Boolean(object.profanityFilter)
                : false;
        message.literatureText =
            object.literatureText !== undefined && object.literatureText !== null
                ? Boolean(object.literatureText)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.textNormalization !== undefined &&
            (obj.textNormalization = textNormalizationOptions_TextNormalizationToJSON(message.textNormalization));
        message.profanityFilter !== undefined &&
            (obj.profanityFilter = message.profanityFilter);
        message.literatureText !== undefined &&
            (obj.literatureText = message.literatureText);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseTextNormalizationOptions);
        message.textNormalization = (_a = object.textNormalization) !== null && _a !== void 0 ? _a : 0;
        message.profanityFilter = (_b = object.profanityFilter) !== null && _b !== void 0 ? _b : false;
        message.literatureText = (_c = object.literatureText) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TextNormalizationOptions.$type, exports.TextNormalizationOptions);
const baseDefaultEouClassifier = {
    $type: "speechkit.stt.v3.DefaultEouClassifier",
    type: 0,
    maxPauseBetweenWordsHintMs: 0,
};
exports.DefaultEouClassifier = {
    $type: "speechkit.stt.v3.DefaultEouClassifier",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.maxPauseBetweenWordsHintMs !== 0) {
            writer.uint32(16).int64(message.maxPauseBetweenWordsHintMs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDefaultEouClassifier);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.maxPauseBetweenWordsHintMs = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDefaultEouClassifier);
        message.type =
            object.type !== undefined && object.type !== null
                ? defaultEouClassifier_EouSensitivityFromJSON(object.type)
                : 0;
        message.maxPauseBetweenWordsHintMs =
            object.maxPauseBetweenWordsHintMs !== undefined &&
                object.maxPauseBetweenWordsHintMs !== null
                ? Number(object.maxPauseBetweenWordsHintMs)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = defaultEouClassifier_EouSensitivityToJSON(message.type));
        message.maxPauseBetweenWordsHintMs !== undefined &&
            (obj.maxPauseBetweenWordsHintMs = Math.round(message.maxPauseBetweenWordsHintMs));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseDefaultEouClassifier);
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.maxPauseBetweenWordsHintMs = (_b = object.maxPauseBetweenWordsHintMs) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.DefaultEouClassifier.$type, exports.DefaultEouClassifier);
const baseExternalEouClassifier = {
    $type: "speechkit.stt.v3.ExternalEouClassifier",
};
exports.ExternalEouClassifier = {
    $type: "speechkit.stt.v3.ExternalEouClassifier",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseExternalEouClassifier);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseExternalEouClassifier);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseExternalEouClassifier);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ExternalEouClassifier.$type, exports.ExternalEouClassifier);
const baseEouClassifierOptions = {
    $type: "speechkit.stt.v3.EouClassifierOptions",
};
exports.EouClassifierOptions = {
    $type: "speechkit.stt.v3.EouClassifierOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.defaultClassifier !== undefined) {
            exports.DefaultEouClassifier.encode(message.defaultClassifier, writer.uint32(10).fork()).ldelim();
        }
        if (message.externalClassifier !== undefined) {
            exports.ExternalEouClassifier.encode(message.externalClassifier, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEouClassifierOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.defaultClassifier = exports.DefaultEouClassifier.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.externalClassifier = exports.ExternalEouClassifier.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEouClassifierOptions);
        message.defaultClassifier =
            object.defaultClassifier !== undefined &&
                object.defaultClassifier !== null
                ? exports.DefaultEouClassifier.fromJSON(object.defaultClassifier)
                : undefined;
        message.externalClassifier =
            object.externalClassifier !== undefined &&
                object.externalClassifier !== null
                ? exports.ExternalEouClassifier.fromJSON(object.externalClassifier)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.defaultClassifier !== undefined &&
            (obj.defaultClassifier = message.defaultClassifier
                ? exports.DefaultEouClassifier.toJSON(message.defaultClassifier)
                : undefined);
        message.externalClassifier !== undefined &&
            (obj.externalClassifier = message.externalClassifier
                ? exports.ExternalEouClassifier.toJSON(message.externalClassifier)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseEouClassifierOptions);
        message.defaultClassifier =
            object.defaultClassifier !== undefined &&
                object.defaultClassifier !== null
                ? exports.DefaultEouClassifier.fromPartial(object.defaultClassifier)
                : undefined;
        message.externalClassifier =
            object.externalClassifier !== undefined &&
                object.externalClassifier !== null
                ? exports.ExternalEouClassifier.fromPartial(object.externalClassifier)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.EouClassifierOptions.$type, exports.EouClassifierOptions);
const baseRawAudio = {
    $type: "speechkit.stt.v3.RawAudio",
    audioEncoding: 0,
    sampleRateHertz: 0,
    audioChannelCount: 0,
};
exports.RawAudio = {
    $type: "speechkit.stt.v3.RawAudio",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.audioEncoding !== 0) {
            writer.uint32(8).int32(message.audioEncoding);
        }
        if (message.sampleRateHertz !== 0) {
            writer.uint32(16).int64(message.sampleRateHertz);
        }
        if (message.audioChannelCount !== 0) {
            writer.uint32(24).int64(message.audioChannelCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRawAudio);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.audioEncoding = reader.int32();
                    break;
                case 2:
                    message.sampleRateHertz = longToNumber(reader.int64());
                    break;
                case 3:
                    message.audioChannelCount = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRawAudio);
        message.audioEncoding =
            object.audioEncoding !== undefined && object.audioEncoding !== null
                ? rawAudio_AudioEncodingFromJSON(object.audioEncoding)
                : 0;
        message.sampleRateHertz =
            object.sampleRateHertz !== undefined && object.sampleRateHertz !== null
                ? Number(object.sampleRateHertz)
                : 0;
        message.audioChannelCount =
            object.audioChannelCount !== undefined &&
                object.audioChannelCount !== null
                ? Number(object.audioChannelCount)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.audioEncoding !== undefined &&
            (obj.audioEncoding = rawAudio_AudioEncodingToJSON(message.audioEncoding));
        message.sampleRateHertz !== undefined &&
            (obj.sampleRateHertz = Math.round(message.sampleRateHertz));
        message.audioChannelCount !== undefined &&
            (obj.audioChannelCount = Math.round(message.audioChannelCount));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseRawAudio);
        message.audioEncoding = (_a = object.audioEncoding) !== null && _a !== void 0 ? _a : 0;
        message.sampleRateHertz = (_b = object.sampleRateHertz) !== null && _b !== void 0 ? _b : 0;
        message.audioChannelCount = (_c = object.audioChannelCount) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RawAudio.$type, exports.RawAudio);
const baseContainerAudio = {
    $type: "speechkit.stt.v3.ContainerAudio",
    containerAudioType: 0,
};
exports.ContainerAudio = {
    $type: "speechkit.stt.v3.ContainerAudio",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.containerAudioType !== 0) {
            writer.uint32(8).int32(message.containerAudioType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseContainerAudio);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.containerAudioType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseContainerAudio);
        message.containerAudioType =
            object.containerAudioType !== undefined &&
                object.containerAudioType !== null
                ? containerAudio_ContainerAudioTypeFromJSON(object.containerAudioType)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.containerAudioType !== undefined &&
            (obj.containerAudioType = containerAudio_ContainerAudioTypeToJSON(message.containerAudioType));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseContainerAudio);
        message.containerAudioType = (_a = object.containerAudioType) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ContainerAudio.$type, exports.ContainerAudio);
const baseAudioFormatOptions = {
    $type: "speechkit.stt.v3.AudioFormatOptions",
};
exports.AudioFormatOptions = {
    $type: "speechkit.stt.v3.AudioFormatOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.rawAudio !== undefined) {
            exports.RawAudio.encode(message.rawAudio, writer.uint32(10).fork()).ldelim();
        }
        if (message.containerAudio !== undefined) {
            exports.ContainerAudio.encode(message.containerAudio, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAudioFormatOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rawAudio = exports.RawAudio.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.containerAudio = exports.ContainerAudio.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAudioFormatOptions);
        message.rawAudio =
            object.rawAudio !== undefined && object.rawAudio !== null
                ? exports.RawAudio.fromJSON(object.rawAudio)
                : undefined;
        message.containerAudio =
            object.containerAudio !== undefined && object.containerAudio !== null
                ? exports.ContainerAudio.fromJSON(object.containerAudio)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.rawAudio !== undefined &&
            (obj.rawAudio = message.rawAudio
                ? exports.RawAudio.toJSON(message.rawAudio)
                : undefined);
        message.containerAudio !== undefined &&
            (obj.containerAudio = message.containerAudio
                ? exports.ContainerAudio.toJSON(message.containerAudio)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseAudioFormatOptions);
        message.rawAudio =
            object.rawAudio !== undefined && object.rawAudio !== null
                ? exports.RawAudio.fromPartial(object.rawAudio)
                : undefined;
        message.containerAudio =
            object.containerAudio !== undefined && object.containerAudio !== null
                ? exports.ContainerAudio.fromPartial(object.containerAudio)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AudioFormatOptions.$type, exports.AudioFormatOptions);
const baseLanguageRestrictionOptions = {
    $type: "speechkit.stt.v3.LanguageRestrictionOptions",
    restrictionType: 0,
    languageCode: "",
};
exports.LanguageRestrictionOptions = {
    $type: "speechkit.stt.v3.LanguageRestrictionOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.restrictionType !== 0) {
            writer.uint32(8).int32(message.restrictionType);
        }
        for (const v of message.languageCode) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseLanguageRestrictionOptions);
        message.languageCode = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.restrictionType = reader.int32();
                    break;
                case 2:
                    message.languageCode.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseLanguageRestrictionOptions);
        message.restrictionType =
            object.restrictionType !== undefined && object.restrictionType !== null
                ? languageRestrictionOptions_LanguageRestrictionTypeFromJSON(object.restrictionType)
                : 0;
        message.languageCode = ((_a = object.languageCode) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.restrictionType !== undefined &&
            (obj.restrictionType =
                languageRestrictionOptions_LanguageRestrictionTypeToJSON(message.restrictionType));
        if (message.languageCode) {
            obj.languageCode = message.languageCode.map((e) => e);
        }
        else {
            obj.languageCode = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseLanguageRestrictionOptions);
        message.restrictionType = (_a = object.restrictionType) !== null && _a !== void 0 ? _a : 0;
        message.languageCode = ((_b = object.languageCode) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.LanguageRestrictionOptions.$type, exports.LanguageRestrictionOptions);
const baseRecognitionModelOptions = {
    $type: "speechkit.stt.v3.RecognitionModelOptions",
    model: "",
    audioProcessingType: 0,
};
exports.RecognitionModelOptions = {
    $type: "speechkit.stt.v3.RecognitionModelOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.model !== "") {
            writer.uint32(10).string(message.model);
        }
        if (message.audioFormat !== undefined) {
            exports.AudioFormatOptions.encode(message.audioFormat, writer.uint32(18).fork()).ldelim();
        }
        if (message.textNormalization !== undefined) {
            exports.TextNormalizationOptions.encode(message.textNormalization, writer.uint32(26).fork()).ldelim();
        }
        if (message.languageRestriction !== undefined) {
            exports.LanguageRestrictionOptions.encode(message.languageRestriction, writer.uint32(34).fork()).ldelim();
        }
        if (message.audioProcessingType !== 0) {
            writer.uint32(40).int32(message.audioProcessingType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseRecognitionModelOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.model = reader.string();
                    break;
                case 2:
                    message.audioFormat = exports.AudioFormatOptions.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.textNormalization = exports.TextNormalizationOptions.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.languageRestriction = exports.LanguageRestrictionOptions.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.audioProcessingType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseRecognitionModelOptions);
        message.model =
            object.model !== undefined && object.model !== null
                ? String(object.model)
                : "";
        message.audioFormat =
            object.audioFormat !== undefined && object.audioFormat !== null
                ? exports.AudioFormatOptions.fromJSON(object.audioFormat)
                : undefined;
        message.textNormalization =
            object.textNormalization !== undefined &&
                object.textNormalization !== null
                ? exports.TextNormalizationOptions.fromJSON(object.textNormalization)
                : undefined;
        message.languageRestriction =
            object.languageRestriction !== undefined &&
                object.languageRestriction !== null
                ? exports.LanguageRestrictionOptions.fromJSON(object.languageRestriction)
                : undefined;
        message.audioProcessingType =
            object.audioProcessingType !== undefined &&
                object.audioProcessingType !== null
                ? recognitionModelOptions_AudioProcessingTypeFromJSON(object.audioProcessingType)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.model !== undefined && (obj.model = message.model);
        message.audioFormat !== undefined &&
            (obj.audioFormat = message.audioFormat
                ? exports.AudioFormatOptions.toJSON(message.audioFormat)
                : undefined);
        message.textNormalization !== undefined &&
            (obj.textNormalization = message.textNormalization
                ? exports.TextNormalizationOptions.toJSON(message.textNormalization)
                : undefined);
        message.languageRestriction !== undefined &&
            (obj.languageRestriction = message.languageRestriction
                ? exports.LanguageRestrictionOptions.toJSON(message.languageRestriction)
                : undefined);
        message.audioProcessingType !== undefined &&
            (obj.audioProcessingType =
                recognitionModelOptions_AudioProcessingTypeToJSON(message.audioProcessingType));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseRecognitionModelOptions);
        message.model = (_a = object.model) !== null && _a !== void 0 ? _a : "";
        message.audioFormat =
            object.audioFormat !== undefined && object.audioFormat !== null
                ? exports.AudioFormatOptions.fromPartial(object.audioFormat)
                : undefined;
        message.textNormalization =
            object.textNormalization !== undefined &&
                object.textNormalization !== null
                ? exports.TextNormalizationOptions.fromPartial(object.textNormalization)
                : undefined;
        message.languageRestriction =
            object.languageRestriction !== undefined &&
                object.languageRestriction !== null
                ? exports.LanguageRestrictionOptions.fromPartial(object.languageRestriction)
                : undefined;
        message.audioProcessingType = (_b = object.audioProcessingType) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.RecognitionModelOptions.$type, exports.RecognitionModelOptions);
const baseStreamingOptions = {
    $type: "speechkit.stt.v3.StreamingOptions",
};
exports.StreamingOptions = {
    $type: "speechkit.stt.v3.StreamingOptions",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.recognitionModel !== undefined) {
            exports.RecognitionModelOptions.encode(message.recognitionModel, writer.uint32(10).fork()).ldelim();
        }
        if (message.eouClassifier !== undefined) {
            exports.EouClassifierOptions.encode(message.eouClassifier, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStreamingOptions);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recognitionModel = exports.RecognitionModelOptions.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.eouClassifier = exports.EouClassifierOptions.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStreamingOptions);
        message.recognitionModel =
            object.recognitionModel !== undefined && object.recognitionModel !== null
                ? exports.RecognitionModelOptions.fromJSON(object.recognitionModel)
                : undefined;
        message.eouClassifier =
            object.eouClassifier !== undefined && object.eouClassifier !== null
                ? exports.EouClassifierOptions.fromJSON(object.eouClassifier)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.recognitionModel !== undefined &&
            (obj.recognitionModel = message.recognitionModel
                ? exports.RecognitionModelOptions.toJSON(message.recognitionModel)
                : undefined);
        message.eouClassifier !== undefined &&
            (obj.eouClassifier = message.eouClassifier
                ? exports.EouClassifierOptions.toJSON(message.eouClassifier)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseStreamingOptions);
        message.recognitionModel =
            object.recognitionModel !== undefined && object.recognitionModel !== null
                ? exports.RecognitionModelOptions.fromPartial(object.recognitionModel)
                : undefined;
        message.eouClassifier =
            object.eouClassifier !== undefined && object.eouClassifier !== null
                ? exports.EouClassifierOptions.fromPartial(object.eouClassifier)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StreamingOptions.$type, exports.StreamingOptions);
const baseAudioChunk = { $type: "speechkit.stt.v3.AudioChunk" };
exports.AudioChunk = {
    $type: "speechkit.stt.v3.AudioChunk",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAudioChunk);
        message.data = Buffer.alloc(0);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAudioChunk);
        message.data =
            object.data !== undefined && object.data !== null
                ? Buffer.from(bytesFromBase64(object.data))
                : Buffer.alloc(0);
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : Buffer.alloc(0)));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseAudioChunk);
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : Buffer.alloc(0);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AudioChunk.$type, exports.AudioChunk);
const baseSilenceChunk = {
    $type: "speechkit.stt.v3.SilenceChunk",
    durationMs: 0,
};
exports.SilenceChunk = {
    $type: "speechkit.stt.v3.SilenceChunk",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.durationMs !== 0) {
            writer.uint32(8).int64(message.durationMs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSilenceChunk);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.durationMs = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSilenceChunk);
        message.durationMs =
            object.durationMs !== undefined && object.durationMs !== null
                ? Number(object.durationMs)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.durationMs !== undefined &&
            (obj.durationMs = Math.round(message.durationMs));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSilenceChunk);
        message.durationMs = (_a = object.durationMs) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SilenceChunk.$type, exports.SilenceChunk);
const baseEou = { $type: "speechkit.stt.v3.Eou" };
exports.Eou = {
    $type: "speechkit.stt.v3.Eou",
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEou);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = Object.assign({}, baseEou);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseEou);
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Eou.$type, exports.Eou);
const baseStreamingRequest = {
    $type: "speechkit.stt.v3.StreamingRequest",
};
exports.StreamingRequest = {
    $type: "speechkit.stt.v3.StreamingRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sessionOptions !== undefined) {
            exports.StreamingOptions.encode(message.sessionOptions, writer.uint32(10).fork()).ldelim();
        }
        if (message.chunk !== undefined) {
            exports.AudioChunk.encode(message.chunk, writer.uint32(18).fork()).ldelim();
        }
        if (message.silenceChunk !== undefined) {
            exports.SilenceChunk.encode(message.silenceChunk, writer.uint32(26).fork()).ldelim();
        }
        if (message.eou !== undefined) {
            exports.Eou.encode(message.eou, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStreamingRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sessionOptions = exports.StreamingOptions.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chunk = exports.AudioChunk.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.silenceChunk = exports.SilenceChunk.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.eou = exports.Eou.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStreamingRequest);
        message.sessionOptions =
            object.sessionOptions !== undefined && object.sessionOptions !== null
                ? exports.StreamingOptions.fromJSON(object.sessionOptions)
                : undefined;
        message.chunk =
            object.chunk !== undefined && object.chunk !== null
                ? exports.AudioChunk.fromJSON(object.chunk)
                : undefined;
        message.silenceChunk =
            object.silenceChunk !== undefined && object.silenceChunk !== null
                ? exports.SilenceChunk.fromJSON(object.silenceChunk)
                : undefined;
        message.eou =
            object.eou !== undefined && object.eou !== null
                ? exports.Eou.fromJSON(object.eou)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sessionOptions !== undefined &&
            (obj.sessionOptions = message.sessionOptions
                ? exports.StreamingOptions.toJSON(message.sessionOptions)
                : undefined);
        message.chunk !== undefined &&
            (obj.chunk = message.chunk
                ? exports.AudioChunk.toJSON(message.chunk)
                : undefined);
        message.silenceChunk !== undefined &&
            (obj.silenceChunk = message.silenceChunk
                ? exports.SilenceChunk.toJSON(message.silenceChunk)
                : undefined);
        message.eou !== undefined &&
            (obj.eou = message.eou ? exports.Eou.toJSON(message.eou) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseStreamingRequest);
        message.sessionOptions =
            object.sessionOptions !== undefined && object.sessionOptions !== null
                ? exports.StreamingOptions.fromPartial(object.sessionOptions)
                : undefined;
        message.chunk =
            object.chunk !== undefined && object.chunk !== null
                ? exports.AudioChunk.fromPartial(object.chunk)
                : undefined;
        message.silenceChunk =
            object.silenceChunk !== undefined && object.silenceChunk !== null
                ? exports.SilenceChunk.fromPartial(object.silenceChunk)
                : undefined;
        message.eou =
            object.eou !== undefined && object.eou !== null
                ? exports.Eou.fromPartial(object.eou)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StreamingRequest.$type, exports.StreamingRequest);
const baseWord = {
    $type: "speechkit.stt.v3.Word",
    text: "",
    startTimeMs: 0,
    endTimeMs: 0,
};
exports.Word = {
    $type: "speechkit.stt.v3.Word",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.text !== "") {
            writer.uint32(10).string(message.text);
        }
        if (message.startTimeMs !== 0) {
            writer.uint32(16).int64(message.startTimeMs);
        }
        if (message.endTimeMs !== 0) {
            writer.uint32(24).int64(message.endTimeMs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWord);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.text = reader.string();
                    break;
                case 2:
                    message.startTimeMs = longToNumber(reader.int64());
                    break;
                case 3:
                    message.endTimeMs = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseWord);
        message.text =
            object.text !== undefined && object.text !== null
                ? String(object.text)
                : "";
        message.startTimeMs =
            object.startTimeMs !== undefined && object.startTimeMs !== null
                ? Number(object.startTimeMs)
                : 0;
        message.endTimeMs =
            object.endTimeMs !== undefined && object.endTimeMs !== null
                ? Number(object.endTimeMs)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.text !== undefined && (obj.text = message.text);
        message.startTimeMs !== undefined &&
            (obj.startTimeMs = Math.round(message.startTimeMs));
        message.endTimeMs !== undefined &&
            (obj.endTimeMs = Math.round(message.endTimeMs));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseWord);
        message.text = (_a = object.text) !== null && _a !== void 0 ? _a : "";
        message.startTimeMs = (_b = object.startTimeMs) !== null && _b !== void 0 ? _b : 0;
        message.endTimeMs = (_c = object.endTimeMs) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Word.$type, exports.Word);
const baseAlternative = {
    $type: "speechkit.stt.v3.Alternative",
    text: "",
    startTimeMs: 0,
    endTimeMs: 0,
    confidence: 0,
};
exports.Alternative = {
    $type: "speechkit.stt.v3.Alternative",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.words) {
            exports.Word.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.text !== "") {
            writer.uint32(18).string(message.text);
        }
        if (message.startTimeMs !== 0) {
            writer.uint32(24).int64(message.startTimeMs);
        }
        if (message.endTimeMs !== 0) {
            writer.uint32(32).int64(message.endTimeMs);
        }
        if (message.confidence !== 0) {
            writer.uint32(41).double(message.confidence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAlternative);
        message.words = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.words.push(exports.Word.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.text = reader.string();
                    break;
                case 3:
                    message.startTimeMs = longToNumber(reader.int64());
                    break;
                case 4:
                    message.endTimeMs = longToNumber(reader.int64());
                    break;
                case 5:
                    message.confidence = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseAlternative);
        message.words = ((_a = object.words) !== null && _a !== void 0 ? _a : []).map((e) => exports.Word.fromJSON(e));
        message.text =
            object.text !== undefined && object.text !== null
                ? String(object.text)
                : "";
        message.startTimeMs =
            object.startTimeMs !== undefined && object.startTimeMs !== null
                ? Number(object.startTimeMs)
                : 0;
        message.endTimeMs =
            object.endTimeMs !== undefined && object.endTimeMs !== null
                ? Number(object.endTimeMs)
                : 0;
        message.confidence =
            object.confidence !== undefined && object.confidence !== null
                ? Number(object.confidence)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.words) {
            obj.words = message.words.map((e) => (e ? exports.Word.toJSON(e) : undefined));
        }
        else {
            obj.words = [];
        }
        message.text !== undefined && (obj.text = message.text);
        message.startTimeMs !== undefined &&
            (obj.startTimeMs = Math.round(message.startTimeMs));
        message.endTimeMs !== undefined &&
            (obj.endTimeMs = Math.round(message.endTimeMs));
        message.confidence !== undefined && (obj.confidence = message.confidence);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseAlternative);
        message.words = ((_a = object.words) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Word.fromPartial(e))) || [];
        message.text = (_b = object.text) !== null && _b !== void 0 ? _b : "";
        message.startTimeMs = (_c = object.startTimeMs) !== null && _c !== void 0 ? _c : 0;
        message.endTimeMs = (_d = object.endTimeMs) !== null && _d !== void 0 ? _d : 0;
        message.confidence = (_e = object.confidence) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Alternative.$type, exports.Alternative);
const baseEouUpdate = {
    $type: "speechkit.stt.v3.EouUpdate",
    timeMs: 0,
};
exports.EouUpdate = {
    $type: "speechkit.stt.v3.EouUpdate",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timeMs !== 0) {
            writer.uint32(16).int64(message.timeMs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseEouUpdate);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.timeMs = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseEouUpdate);
        message.timeMs =
            object.timeMs !== undefined && object.timeMs !== null
                ? Number(object.timeMs)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.timeMs !== undefined && (obj.timeMs = Math.round(message.timeMs));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseEouUpdate);
        message.timeMs = (_a = object.timeMs) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.EouUpdate.$type, exports.EouUpdate);
const baseAlternativeUpdate = {
    $type: "speechkit.stt.v3.AlternativeUpdate",
    channelTag: "",
};
exports.AlternativeUpdate = {
    $type: "speechkit.stt.v3.AlternativeUpdate",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.alternatives) {
            exports.Alternative.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.channelTag !== "") {
            writer.uint32(18).string(message.channelTag);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAlternativeUpdate);
        message.alternatives = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.alternatives.push(exports.Alternative.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.channelTag = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseAlternativeUpdate);
        message.alternatives = ((_a = object.alternatives) !== null && _a !== void 0 ? _a : []).map((e) => exports.Alternative.fromJSON(e));
        message.channelTag =
            object.channelTag !== undefined && object.channelTag !== null
                ? String(object.channelTag)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.alternatives) {
            obj.alternatives = message.alternatives.map((e) => e ? exports.Alternative.toJSON(e) : undefined);
        }
        else {
            obj.alternatives = [];
        }
        message.channelTag !== undefined && (obj.channelTag = message.channelTag);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAlternativeUpdate);
        message.alternatives =
            ((_a = object.alternatives) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Alternative.fromPartial(e))) || [];
        message.channelTag = (_b = object.channelTag) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AlternativeUpdate.$type, exports.AlternativeUpdate);
const baseAudioCursors = {
    $type: "speechkit.stt.v3.AudioCursors",
    receivedDataMs: 0,
    resetTimeMs: 0,
    partialTimeMs: 0,
    finalTimeMs: 0,
    finalIndex: 0,
    eouTimeMs: 0,
};
exports.AudioCursors = {
    $type: "speechkit.stt.v3.AudioCursors",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.receivedDataMs !== 0) {
            writer.uint32(8).int64(message.receivedDataMs);
        }
        if (message.resetTimeMs !== 0) {
            writer.uint32(16).int64(message.resetTimeMs);
        }
        if (message.partialTimeMs !== 0) {
            writer.uint32(24).int64(message.partialTimeMs);
        }
        if (message.finalTimeMs !== 0) {
            writer.uint32(32).int64(message.finalTimeMs);
        }
        if (message.finalIndex !== 0) {
            writer.uint32(40).int64(message.finalIndex);
        }
        if (message.eouTimeMs !== 0) {
            writer.uint32(48).int64(message.eouTimeMs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAudioCursors);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.receivedDataMs = longToNumber(reader.int64());
                    break;
                case 2:
                    message.resetTimeMs = longToNumber(reader.int64());
                    break;
                case 3:
                    message.partialTimeMs = longToNumber(reader.int64());
                    break;
                case 4:
                    message.finalTimeMs = longToNumber(reader.int64());
                    break;
                case 5:
                    message.finalIndex = longToNumber(reader.int64());
                    break;
                case 6:
                    message.eouTimeMs = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAudioCursors);
        message.receivedDataMs =
            object.receivedDataMs !== undefined && object.receivedDataMs !== null
                ? Number(object.receivedDataMs)
                : 0;
        message.resetTimeMs =
            object.resetTimeMs !== undefined && object.resetTimeMs !== null
                ? Number(object.resetTimeMs)
                : 0;
        message.partialTimeMs =
            object.partialTimeMs !== undefined && object.partialTimeMs !== null
                ? Number(object.partialTimeMs)
                : 0;
        message.finalTimeMs =
            object.finalTimeMs !== undefined && object.finalTimeMs !== null
                ? Number(object.finalTimeMs)
                : 0;
        message.finalIndex =
            object.finalIndex !== undefined && object.finalIndex !== null
                ? Number(object.finalIndex)
                : 0;
        message.eouTimeMs =
            object.eouTimeMs !== undefined && object.eouTimeMs !== null
                ? Number(object.eouTimeMs)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.receivedDataMs !== undefined &&
            (obj.receivedDataMs = Math.round(message.receivedDataMs));
        message.resetTimeMs !== undefined &&
            (obj.resetTimeMs = Math.round(message.resetTimeMs));
        message.partialTimeMs !== undefined &&
            (obj.partialTimeMs = Math.round(message.partialTimeMs));
        message.finalTimeMs !== undefined &&
            (obj.finalTimeMs = Math.round(message.finalTimeMs));
        message.finalIndex !== undefined &&
            (obj.finalIndex = Math.round(message.finalIndex));
        message.eouTimeMs !== undefined &&
            (obj.eouTimeMs = Math.round(message.eouTimeMs));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseAudioCursors);
        message.receivedDataMs = (_a = object.receivedDataMs) !== null && _a !== void 0 ? _a : 0;
        message.resetTimeMs = (_b = object.resetTimeMs) !== null && _b !== void 0 ? _b : 0;
        message.partialTimeMs = (_c = object.partialTimeMs) !== null && _c !== void 0 ? _c : 0;
        message.finalTimeMs = (_d = object.finalTimeMs) !== null && _d !== void 0 ? _d : 0;
        message.finalIndex = (_e = object.finalIndex) !== null && _e !== void 0 ? _e : 0;
        message.eouTimeMs = (_f = object.eouTimeMs) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AudioCursors.$type, exports.AudioCursors);
const baseFinalRefinement = {
    $type: "speechkit.stt.v3.FinalRefinement",
    finalIndex: 0,
};
exports.FinalRefinement = {
    $type: "speechkit.stt.v3.FinalRefinement",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.finalIndex !== 0) {
            writer.uint32(8).int64(message.finalIndex);
        }
        if (message.normalizedText !== undefined) {
            exports.AlternativeUpdate.encode(message.normalizedText, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseFinalRefinement);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.finalIndex = longToNumber(reader.int64());
                    break;
                case 2:
                    message.normalizedText = exports.AlternativeUpdate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseFinalRefinement);
        message.finalIndex =
            object.finalIndex !== undefined && object.finalIndex !== null
                ? Number(object.finalIndex)
                : 0;
        message.normalizedText =
            object.normalizedText !== undefined && object.normalizedText !== null
                ? exports.AlternativeUpdate.fromJSON(object.normalizedText)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.finalIndex !== undefined &&
            (obj.finalIndex = Math.round(message.finalIndex));
        message.normalizedText !== undefined &&
            (obj.normalizedText = message.normalizedText
                ? exports.AlternativeUpdate.toJSON(message.normalizedText)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseFinalRefinement);
        message.finalIndex = (_a = object.finalIndex) !== null && _a !== void 0 ? _a : 0;
        message.normalizedText =
            object.normalizedText !== undefined && object.normalizedText !== null
                ? exports.AlternativeUpdate.fromPartial(object.normalizedText)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.FinalRefinement.$type, exports.FinalRefinement);
const baseStatusCode = {
    $type: "speechkit.stt.v3.StatusCode",
    codeType: 0,
    message: "",
};
exports.StatusCode = {
    $type: "speechkit.stt.v3.StatusCode",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.codeType !== 0) {
            writer.uint32(8).int32(message.codeType);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStatusCode);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codeType = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStatusCode);
        message.codeType =
            object.codeType !== undefined && object.codeType !== null
                ? codeTypeFromJSON(object.codeType)
                : 0;
        message.message =
            object.message !== undefined && object.message !== null
                ? String(object.message)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.codeType !== undefined &&
            (obj.codeType = codeTypeToJSON(message.codeType));
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseStatusCode);
        message.codeType = (_a = object.codeType) !== null && _a !== void 0 ? _a : 0;
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StatusCode.$type, exports.StatusCode);
const baseSessionUuid = {
    $type: "speechkit.stt.v3.SessionUuid",
    uuid: "",
    userRequestId: "",
};
exports.SessionUuid = {
    $type: "speechkit.stt.v3.SessionUuid",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.uuid !== "") {
            writer.uint32(10).string(message.uuid);
        }
        if (message.userRequestId !== "") {
            writer.uint32(18).string(message.userRequestId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSessionUuid);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.userRequestId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSessionUuid);
        message.uuid =
            object.uuid !== undefined && object.uuid !== null
                ? String(object.uuid)
                : "";
        message.userRequestId =
            object.userRequestId !== undefined && object.userRequestId !== null
                ? String(object.userRequestId)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.uuid !== undefined && (obj.uuid = message.uuid);
        message.userRequestId !== undefined &&
            (obj.userRequestId = message.userRequestId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseSessionUuid);
        message.uuid = (_a = object.uuid) !== null && _a !== void 0 ? _a : "";
        message.userRequestId = (_b = object.userRequestId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SessionUuid.$type, exports.SessionUuid);
const baseStreamingResponse = {
    $type: "speechkit.stt.v3.StreamingResponse",
    responseWallTimeMs: 0,
};
exports.StreamingResponse = {
    $type: "speechkit.stt.v3.StreamingResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.sessionUuid !== undefined) {
            exports.SessionUuid.encode(message.sessionUuid, writer.uint32(10).fork()).ldelim();
        }
        if (message.audioCursors !== undefined) {
            exports.AudioCursors.encode(message.audioCursors, writer.uint32(18).fork()).ldelim();
        }
        if (message.responseWallTimeMs !== 0) {
            writer.uint32(24).int64(message.responseWallTimeMs);
        }
        if (message.partial !== undefined) {
            exports.AlternativeUpdate.encode(message.partial, writer.uint32(34).fork()).ldelim();
        }
        if (message.final !== undefined) {
            exports.AlternativeUpdate.encode(message.final, writer.uint32(42).fork()).ldelim();
        }
        if (message.eouUpdate !== undefined) {
            exports.EouUpdate.encode(message.eouUpdate, writer.uint32(50).fork()).ldelim();
        }
        if (message.finalRefinement !== undefined) {
            exports.FinalRefinement.encode(message.finalRefinement, writer.uint32(58).fork()).ldelim();
        }
        if (message.statusCode !== undefined) {
            exports.StatusCode.encode(message.statusCode, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseStreamingResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sessionUuid = exports.SessionUuid.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.audioCursors = exports.AudioCursors.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.responseWallTimeMs = longToNumber(reader.int64());
                    break;
                case 4:
                    message.partial = exports.AlternativeUpdate.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.final = exports.AlternativeUpdate.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.eouUpdate = exports.EouUpdate.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.finalRefinement = exports.FinalRefinement.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.statusCode = exports.StatusCode.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseStreamingResponse);
        message.sessionUuid =
            object.sessionUuid !== undefined && object.sessionUuid !== null
                ? exports.SessionUuid.fromJSON(object.sessionUuid)
                : undefined;
        message.audioCursors =
            object.audioCursors !== undefined && object.audioCursors !== null
                ? exports.AudioCursors.fromJSON(object.audioCursors)
                : undefined;
        message.responseWallTimeMs =
            object.responseWallTimeMs !== undefined &&
                object.responseWallTimeMs !== null
                ? Number(object.responseWallTimeMs)
                : 0;
        message.partial =
            object.partial !== undefined && object.partial !== null
                ? exports.AlternativeUpdate.fromJSON(object.partial)
                : undefined;
        message.final =
            object.final !== undefined && object.final !== null
                ? exports.AlternativeUpdate.fromJSON(object.final)
                : undefined;
        message.eouUpdate =
            object.eouUpdate !== undefined && object.eouUpdate !== null
                ? exports.EouUpdate.fromJSON(object.eouUpdate)
                : undefined;
        message.finalRefinement =
            object.finalRefinement !== undefined && object.finalRefinement !== null
                ? exports.FinalRefinement.fromJSON(object.finalRefinement)
                : undefined;
        message.statusCode =
            object.statusCode !== undefined && object.statusCode !== null
                ? exports.StatusCode.fromJSON(object.statusCode)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sessionUuid !== undefined &&
            (obj.sessionUuid = message.sessionUuid
                ? exports.SessionUuid.toJSON(message.sessionUuid)
                : undefined);
        message.audioCursors !== undefined &&
            (obj.audioCursors = message.audioCursors
                ? exports.AudioCursors.toJSON(message.audioCursors)
                : undefined);
        message.responseWallTimeMs !== undefined &&
            (obj.responseWallTimeMs = Math.round(message.responseWallTimeMs));
        message.partial !== undefined &&
            (obj.partial = message.partial
                ? exports.AlternativeUpdate.toJSON(message.partial)
                : undefined);
        message.final !== undefined &&
            (obj.final = message.final
                ? exports.AlternativeUpdate.toJSON(message.final)
                : undefined);
        message.eouUpdate !== undefined &&
            (obj.eouUpdate = message.eouUpdate
                ? exports.EouUpdate.toJSON(message.eouUpdate)
                : undefined);
        message.finalRefinement !== undefined &&
            (obj.finalRefinement = message.finalRefinement
                ? exports.FinalRefinement.toJSON(message.finalRefinement)
                : undefined);
        message.statusCode !== undefined &&
            (obj.statusCode = message.statusCode
                ? exports.StatusCode.toJSON(message.statusCode)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseStreamingResponse);
        message.sessionUuid =
            object.sessionUuid !== undefined && object.sessionUuid !== null
                ? exports.SessionUuid.fromPartial(object.sessionUuid)
                : undefined;
        message.audioCursors =
            object.audioCursors !== undefined && object.audioCursors !== null
                ? exports.AudioCursors.fromPartial(object.audioCursors)
                : undefined;
        message.responseWallTimeMs = (_a = object.responseWallTimeMs) !== null && _a !== void 0 ? _a : 0;
        message.partial =
            object.partial !== undefined && object.partial !== null
                ? exports.AlternativeUpdate.fromPartial(object.partial)
                : undefined;
        message.final =
            object.final !== undefined && object.final !== null
                ? exports.AlternativeUpdate.fromPartial(object.final)
                : undefined;
        message.eouUpdate =
            object.eouUpdate !== undefined && object.eouUpdate !== null
                ? exports.EouUpdate.fromPartial(object.eouUpdate)
                : undefined;
        message.finalRefinement =
            object.finalRefinement !== undefined && object.finalRefinement !== null
                ? exports.FinalRefinement.fromPartial(object.finalRefinement)
                : undefined;
        message.statusCode =
            object.statusCode !== undefined && object.statusCode !== null
                ? exports.StatusCode.fromPartial(object.statusCode)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.StreamingResponse.$type, exports.StreamingResponse);
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(""));
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
