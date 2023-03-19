"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnValue = exports.TLSConfig = exports.TLSMode = exports.Secret = exports.AltName = exports.cleanupPolicyToJSON = exports.cleanupPolicyFromJSON = exports.CleanupPolicy = exports.objectTransferStageToJSON = exports.objectTransferStageFromJSON = exports.ObjectTransferStage = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const empty_1 = require("../../../../../google/protobuf/empty");
exports.protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
var ObjectTransferStage;
(function (ObjectTransferStage) {
    ObjectTransferStage[ObjectTransferStage["OBJECT_TRANSFER_STAGE_UNSPECIFIED"] = 0] = "OBJECT_TRANSFER_STAGE_UNSPECIFIED";
    ObjectTransferStage[ObjectTransferStage["BEFORE_DATA"] = 1] = "BEFORE_DATA";
    ObjectTransferStage[ObjectTransferStage["AFTER_DATA"] = 2] = "AFTER_DATA";
    ObjectTransferStage[ObjectTransferStage["NEVER"] = 3] = "NEVER";
    ObjectTransferStage[ObjectTransferStage["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ObjectTransferStage = exports.ObjectTransferStage || (exports.ObjectTransferStage = {}));
function objectTransferStageFromJSON(object) {
    switch (object) {
        case 0:
        case "OBJECT_TRANSFER_STAGE_UNSPECIFIED":
            return ObjectTransferStage.OBJECT_TRANSFER_STAGE_UNSPECIFIED;
        case 1:
        case "BEFORE_DATA":
            return ObjectTransferStage.BEFORE_DATA;
        case 2:
        case "AFTER_DATA":
            return ObjectTransferStage.AFTER_DATA;
        case 3:
        case "NEVER":
            return ObjectTransferStage.NEVER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ObjectTransferStage.UNRECOGNIZED;
    }
}
exports.objectTransferStageFromJSON = objectTransferStageFromJSON;
function objectTransferStageToJSON(object) {
    switch (object) {
        case ObjectTransferStage.OBJECT_TRANSFER_STAGE_UNSPECIFIED:
            return "OBJECT_TRANSFER_STAGE_UNSPECIFIED";
        case ObjectTransferStage.BEFORE_DATA:
            return "BEFORE_DATA";
        case ObjectTransferStage.AFTER_DATA:
            return "AFTER_DATA";
        case ObjectTransferStage.NEVER:
            return "NEVER";
        default:
            return "UNKNOWN";
    }
}
exports.objectTransferStageToJSON = objectTransferStageToJSON;
var CleanupPolicy;
(function (CleanupPolicy) {
    CleanupPolicy[CleanupPolicy["CLEANUP_POLICY_UNSPECIFIED"] = 0] = "CLEANUP_POLICY_UNSPECIFIED";
    CleanupPolicy[CleanupPolicy["DISABLED"] = 1] = "DISABLED";
    CleanupPolicy[CleanupPolicy["DROP"] = 2] = "DROP";
    CleanupPolicy[CleanupPolicy["TRUNCATE"] = 3] = "TRUNCATE";
    CleanupPolicy[CleanupPolicy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CleanupPolicy = exports.CleanupPolicy || (exports.CleanupPolicy = {}));
function cleanupPolicyFromJSON(object) {
    switch (object) {
        case 0:
        case "CLEANUP_POLICY_UNSPECIFIED":
            return CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED;
        case 1:
        case "DISABLED":
            return CleanupPolicy.DISABLED;
        case 2:
        case "DROP":
            return CleanupPolicy.DROP;
        case 3:
        case "TRUNCATE":
            return CleanupPolicy.TRUNCATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CleanupPolicy.UNRECOGNIZED;
    }
}
exports.cleanupPolicyFromJSON = cleanupPolicyFromJSON;
function cleanupPolicyToJSON(object) {
    switch (object) {
        case CleanupPolicy.CLEANUP_POLICY_UNSPECIFIED:
            return "CLEANUP_POLICY_UNSPECIFIED";
        case CleanupPolicy.DISABLED:
            return "DISABLED";
        case CleanupPolicy.DROP:
            return "DROP";
        case CleanupPolicy.TRUNCATE:
            return "TRUNCATE";
        default:
            return "UNKNOWN";
    }
}
exports.cleanupPolicyToJSON = cleanupPolicyToJSON;
const baseAltName = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.AltName",
    fromName: "",
    toName: "",
};
exports.AltName = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.AltName",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.fromName !== "") {
            writer.uint32(10).string(message.fromName);
        }
        if (message.toName !== "") {
            writer.uint32(18).string(message.toName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseAltName);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fromName = reader.string();
                    break;
                case 2:
                    message.toName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseAltName);
        message.fromName =
            object.fromName !== undefined && object.fromName !== null
                ? String(object.fromName)
                : "";
        message.toName =
            object.toName !== undefined && object.toName !== null
                ? String(object.toName)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fromName !== undefined && (obj.fromName = message.fromName);
        message.toName !== undefined && (obj.toName = message.toName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseAltName);
        message.fromName = (_a = object.fromName) !== null && _a !== void 0 ? _a : "";
        message.toName = (_b = object.toName) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.AltName.$type, exports.AltName);
const baseSecret = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.Secret",
};
exports.Secret = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.Secret",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.raw !== undefined) {
            writer.uint32(10).string(message.raw);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSecret);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.raw = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSecret);
        message.raw =
            object.raw !== undefined && object.raw !== null
                ? String(object.raw)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.raw !== undefined && (obj.raw = message.raw);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseSecret);
        message.raw = (_a = object.raw) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.Secret.$type, exports.Secret);
const baseTLSMode = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.TLSMode",
};
exports.TLSMode = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.TLSMode",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.disabled !== undefined) {
            empty_1.Empty.encode(message.disabled, writer.uint32(10).fork()).ldelim();
        }
        if (message.enabled !== undefined) {
            exports.TLSConfig.encode(message.enabled, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTLSMode);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.disabled = empty_1.Empty.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.enabled = exports.TLSConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTLSMode);
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? empty_1.Empty.fromJSON(object.disabled)
                : undefined;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? exports.TLSConfig.fromJSON(object.enabled)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.disabled !== undefined &&
            (obj.disabled = message.disabled
                ? empty_1.Empty.toJSON(message.disabled)
                : undefined);
        message.enabled !== undefined &&
            (obj.enabled = message.enabled
                ? exports.TLSConfig.toJSON(message.enabled)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseTLSMode);
        message.disabled =
            object.disabled !== undefined && object.disabled !== null
                ? empty_1.Empty.fromPartial(object.disabled)
                : undefined;
        message.enabled =
            object.enabled !== undefined && object.enabled !== null
                ? exports.TLSConfig.fromPartial(object.enabled)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TLSMode.$type, exports.TLSMode);
const baseTLSConfig = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.TLSConfig",
    caCertificate: "",
};
exports.TLSConfig = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.TLSConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.caCertificate !== "") {
            writer.uint32(10).string(message.caCertificate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTLSConfig);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.caCertificate = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTLSConfig);
        message.caCertificate =
            object.caCertificate !== undefined && object.caCertificate !== null
                ? String(object.caCertificate)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.caCertificate !== undefined &&
            (obj.caCertificate = message.caCertificate);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseTLSConfig);
        message.caCertificate = (_a = object.caCertificate) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.TLSConfig.$type, exports.TLSConfig);
const baseColumnValue = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ColumnValue",
};
exports.ColumnValue = {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ColumnValue",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.stringValue !== undefined) {
            writer.uint32(10).string(message.stringValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseColumnValue);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stringValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseColumnValue);
        message.stringValue =
            object.stringValue !== undefined && object.stringValue !== null
                ? String(object.stringValue)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.stringValue !== undefined &&
            (obj.stringValue = message.stringValue);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseColumnValue);
        message.stringValue = (_a = object.stringValue) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ColumnValue.$type, exports.ColumnValue);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
