"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickhouseConfigSet = exports.ClickhouseConfig_GraphiteRollup_Pattern_Retention = exports.ClickhouseConfig_GraphiteRollup_Pattern = exports.ClickhouseConfig_GraphiteRollup = exports.ClickhouseConfig_ExternalDictionary_Range = exports.ClickhouseConfig_ExternalDictionary_Layout = exports.ClickhouseConfig_ExternalDictionary_Structure_Key = exports.ClickhouseConfig_ExternalDictionary_Structure_Id = exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute = exports.ClickhouseConfig_ExternalDictionary_Structure = exports.ClickhouseConfig_ExternalDictionary_PostgresqlSource = exports.ClickhouseConfig_ExternalDictionary_MongodbSource = exports.ClickhouseConfig_ExternalDictionary_ClickhouseSource = exports.ClickhouseConfig_ExternalDictionary_MysqlSource_Replica = exports.ClickhouseConfig_ExternalDictionary_MysqlSource = exports.ClickhouseConfig_ExternalDictionary_HttpSource = exports.ClickhouseConfig_ExternalDictionary = exports.ClickhouseConfig_Compression = exports.ClickhouseConfig_Rabbitmq = exports.ClickhouseConfig_KafkaTopic = exports.ClickhouseConfig_Kafka = exports.ClickhouseConfig_MergeTree = exports.ClickhouseConfig = exports.clickhouseConfig_ExternalDictionary_Layout_TypeToJSON = exports.clickhouseConfig_ExternalDictionary_Layout_TypeFromJSON = exports.ClickhouseConfig_ExternalDictionary_Layout_Type = exports.clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeToJSON = exports.clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeFromJSON = exports.ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode = exports.clickhouseConfig_Compression_MethodToJSON = exports.clickhouseConfig_Compression_MethodFromJSON = exports.ClickhouseConfig_Compression_Method = exports.clickhouseConfig_Kafka_SaslMechanismToJSON = exports.clickhouseConfig_Kafka_SaslMechanismFromJSON = exports.ClickhouseConfig_Kafka_SaslMechanism = exports.clickhouseConfig_Kafka_SecurityProtocolToJSON = exports.clickhouseConfig_Kafka_SecurityProtocolFromJSON = exports.ClickhouseConfig_Kafka_SecurityProtocol = exports.clickhouseConfig_LogLevelToJSON = exports.clickhouseConfig_LogLevelFromJSON = exports.ClickhouseConfig_LogLevel = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const wrappers_1 = require("../../../../../../google/protobuf/wrappers");
exports.protobufPackage = "yandex.cloud.mdb.clickhouse.v1.config";
var ClickhouseConfig_LogLevel;
(function (ClickhouseConfig_LogLevel) {
    ClickhouseConfig_LogLevel[ClickhouseConfig_LogLevel["LOG_LEVEL_UNSPECIFIED"] = 0] = "LOG_LEVEL_UNSPECIFIED";
    ClickhouseConfig_LogLevel[ClickhouseConfig_LogLevel["TRACE"] = 1] = "TRACE";
    ClickhouseConfig_LogLevel[ClickhouseConfig_LogLevel["DEBUG"] = 2] = "DEBUG";
    ClickhouseConfig_LogLevel[ClickhouseConfig_LogLevel["INFORMATION"] = 3] = "INFORMATION";
    ClickhouseConfig_LogLevel[ClickhouseConfig_LogLevel["WARNING"] = 4] = "WARNING";
    ClickhouseConfig_LogLevel[ClickhouseConfig_LogLevel["ERROR"] = 5] = "ERROR";
    ClickhouseConfig_LogLevel[ClickhouseConfig_LogLevel["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClickhouseConfig_LogLevel = exports.ClickhouseConfig_LogLevel || (exports.ClickhouseConfig_LogLevel = {}));
function clickhouseConfig_LogLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "LOG_LEVEL_UNSPECIFIED":
            return ClickhouseConfig_LogLevel.LOG_LEVEL_UNSPECIFIED;
        case 1:
        case "TRACE":
            return ClickhouseConfig_LogLevel.TRACE;
        case 2:
        case "DEBUG":
            return ClickhouseConfig_LogLevel.DEBUG;
        case 3:
        case "INFORMATION":
            return ClickhouseConfig_LogLevel.INFORMATION;
        case 4:
        case "WARNING":
            return ClickhouseConfig_LogLevel.WARNING;
        case 5:
        case "ERROR":
            return ClickhouseConfig_LogLevel.ERROR;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClickhouseConfig_LogLevel.UNRECOGNIZED;
    }
}
exports.clickhouseConfig_LogLevelFromJSON = clickhouseConfig_LogLevelFromJSON;
function clickhouseConfig_LogLevelToJSON(object) {
    switch (object) {
        case ClickhouseConfig_LogLevel.LOG_LEVEL_UNSPECIFIED:
            return "LOG_LEVEL_UNSPECIFIED";
        case ClickhouseConfig_LogLevel.TRACE:
            return "TRACE";
        case ClickhouseConfig_LogLevel.DEBUG:
            return "DEBUG";
        case ClickhouseConfig_LogLevel.INFORMATION:
            return "INFORMATION";
        case ClickhouseConfig_LogLevel.WARNING:
            return "WARNING";
        case ClickhouseConfig_LogLevel.ERROR:
            return "ERROR";
        default:
            return "UNKNOWN";
    }
}
exports.clickhouseConfig_LogLevelToJSON = clickhouseConfig_LogLevelToJSON;
var ClickhouseConfig_Kafka_SecurityProtocol;
(function (ClickhouseConfig_Kafka_SecurityProtocol) {
    ClickhouseConfig_Kafka_SecurityProtocol[ClickhouseConfig_Kafka_SecurityProtocol["SECURITY_PROTOCOL_UNSPECIFIED"] = 0] = "SECURITY_PROTOCOL_UNSPECIFIED";
    ClickhouseConfig_Kafka_SecurityProtocol[ClickhouseConfig_Kafka_SecurityProtocol["SECURITY_PROTOCOL_PLAINTEXT"] = 1] = "SECURITY_PROTOCOL_PLAINTEXT";
    ClickhouseConfig_Kafka_SecurityProtocol[ClickhouseConfig_Kafka_SecurityProtocol["SECURITY_PROTOCOL_SSL"] = 2] = "SECURITY_PROTOCOL_SSL";
    ClickhouseConfig_Kafka_SecurityProtocol[ClickhouseConfig_Kafka_SecurityProtocol["SECURITY_PROTOCOL_SASL_PLAINTEXT"] = 3] = "SECURITY_PROTOCOL_SASL_PLAINTEXT";
    ClickhouseConfig_Kafka_SecurityProtocol[ClickhouseConfig_Kafka_SecurityProtocol["SECURITY_PROTOCOL_SASL_SSL"] = 4] = "SECURITY_PROTOCOL_SASL_SSL";
    ClickhouseConfig_Kafka_SecurityProtocol[ClickhouseConfig_Kafka_SecurityProtocol["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClickhouseConfig_Kafka_SecurityProtocol = exports.ClickhouseConfig_Kafka_SecurityProtocol || (exports.ClickhouseConfig_Kafka_SecurityProtocol = {}));
function clickhouseConfig_Kafka_SecurityProtocolFromJSON(object) {
    switch (object) {
        case 0:
        case "SECURITY_PROTOCOL_UNSPECIFIED":
            return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_UNSPECIFIED;
        case 1:
        case "SECURITY_PROTOCOL_PLAINTEXT":
            return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_PLAINTEXT;
        case 2:
        case "SECURITY_PROTOCOL_SSL":
            return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SSL;
        case 3:
        case "SECURITY_PROTOCOL_SASL_PLAINTEXT":
            return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SASL_PLAINTEXT;
        case 4:
        case "SECURITY_PROTOCOL_SASL_SSL":
            return ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SASL_SSL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClickhouseConfig_Kafka_SecurityProtocol.UNRECOGNIZED;
    }
}
exports.clickhouseConfig_Kafka_SecurityProtocolFromJSON = clickhouseConfig_Kafka_SecurityProtocolFromJSON;
function clickhouseConfig_Kafka_SecurityProtocolToJSON(object) {
    switch (object) {
        case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_UNSPECIFIED:
            return "SECURITY_PROTOCOL_UNSPECIFIED";
        case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_PLAINTEXT:
            return "SECURITY_PROTOCOL_PLAINTEXT";
        case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SSL:
            return "SECURITY_PROTOCOL_SSL";
        case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SASL_PLAINTEXT:
            return "SECURITY_PROTOCOL_SASL_PLAINTEXT";
        case ClickhouseConfig_Kafka_SecurityProtocol.SECURITY_PROTOCOL_SASL_SSL:
            return "SECURITY_PROTOCOL_SASL_SSL";
        default:
            return "UNKNOWN";
    }
}
exports.clickhouseConfig_Kafka_SecurityProtocolToJSON = clickhouseConfig_Kafka_SecurityProtocolToJSON;
var ClickhouseConfig_Kafka_SaslMechanism;
(function (ClickhouseConfig_Kafka_SaslMechanism) {
    ClickhouseConfig_Kafka_SaslMechanism[ClickhouseConfig_Kafka_SaslMechanism["SASL_MECHANISM_UNSPECIFIED"] = 0] = "SASL_MECHANISM_UNSPECIFIED";
    ClickhouseConfig_Kafka_SaslMechanism[ClickhouseConfig_Kafka_SaslMechanism["SASL_MECHANISM_GSSAPI"] = 1] = "SASL_MECHANISM_GSSAPI";
    ClickhouseConfig_Kafka_SaslMechanism[ClickhouseConfig_Kafka_SaslMechanism["SASL_MECHANISM_PLAIN"] = 2] = "SASL_MECHANISM_PLAIN";
    ClickhouseConfig_Kafka_SaslMechanism[ClickhouseConfig_Kafka_SaslMechanism["SASL_MECHANISM_SCRAM_SHA_256"] = 3] = "SASL_MECHANISM_SCRAM_SHA_256";
    ClickhouseConfig_Kafka_SaslMechanism[ClickhouseConfig_Kafka_SaslMechanism["SASL_MECHANISM_SCRAM_SHA_512"] = 4] = "SASL_MECHANISM_SCRAM_SHA_512";
    ClickhouseConfig_Kafka_SaslMechanism[ClickhouseConfig_Kafka_SaslMechanism["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClickhouseConfig_Kafka_SaslMechanism = exports.ClickhouseConfig_Kafka_SaslMechanism || (exports.ClickhouseConfig_Kafka_SaslMechanism = {}));
function clickhouseConfig_Kafka_SaslMechanismFromJSON(object) {
    switch (object) {
        case 0:
        case "SASL_MECHANISM_UNSPECIFIED":
            return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_UNSPECIFIED;
        case 1:
        case "SASL_MECHANISM_GSSAPI":
            return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_GSSAPI;
        case 2:
        case "SASL_MECHANISM_PLAIN":
            return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_PLAIN;
        case 3:
        case "SASL_MECHANISM_SCRAM_SHA_256":
            return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_SCRAM_SHA_256;
        case 4:
        case "SASL_MECHANISM_SCRAM_SHA_512":
            return ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_SCRAM_SHA_512;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClickhouseConfig_Kafka_SaslMechanism.UNRECOGNIZED;
    }
}
exports.clickhouseConfig_Kafka_SaslMechanismFromJSON = clickhouseConfig_Kafka_SaslMechanismFromJSON;
function clickhouseConfig_Kafka_SaslMechanismToJSON(object) {
    switch (object) {
        case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_UNSPECIFIED:
            return "SASL_MECHANISM_UNSPECIFIED";
        case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_GSSAPI:
            return "SASL_MECHANISM_GSSAPI";
        case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_PLAIN:
            return "SASL_MECHANISM_PLAIN";
        case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_SCRAM_SHA_256:
            return "SASL_MECHANISM_SCRAM_SHA_256";
        case ClickhouseConfig_Kafka_SaslMechanism.SASL_MECHANISM_SCRAM_SHA_512:
            return "SASL_MECHANISM_SCRAM_SHA_512";
        default:
            return "UNKNOWN";
    }
}
exports.clickhouseConfig_Kafka_SaslMechanismToJSON = clickhouseConfig_Kafka_SaslMechanismToJSON;
var ClickhouseConfig_Compression_Method;
(function (ClickhouseConfig_Compression_Method) {
    ClickhouseConfig_Compression_Method[ClickhouseConfig_Compression_Method["METHOD_UNSPECIFIED"] = 0] = "METHOD_UNSPECIFIED";
    /** LZ4 - [LZ4 compression algorithm](https://lz4.github.io/lz4/). */
    ClickhouseConfig_Compression_Method[ClickhouseConfig_Compression_Method["LZ4"] = 1] = "LZ4";
    /** ZSTD - [Zstandard compression algorithm](https://facebook.github.io/zstd/). */
    ClickhouseConfig_Compression_Method[ClickhouseConfig_Compression_Method["ZSTD"] = 2] = "ZSTD";
    ClickhouseConfig_Compression_Method[ClickhouseConfig_Compression_Method["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClickhouseConfig_Compression_Method = exports.ClickhouseConfig_Compression_Method || (exports.ClickhouseConfig_Compression_Method = {}));
function clickhouseConfig_Compression_MethodFromJSON(object) {
    switch (object) {
        case 0:
        case "METHOD_UNSPECIFIED":
            return ClickhouseConfig_Compression_Method.METHOD_UNSPECIFIED;
        case 1:
        case "LZ4":
            return ClickhouseConfig_Compression_Method.LZ4;
        case 2:
        case "ZSTD":
            return ClickhouseConfig_Compression_Method.ZSTD;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClickhouseConfig_Compression_Method.UNRECOGNIZED;
    }
}
exports.clickhouseConfig_Compression_MethodFromJSON = clickhouseConfig_Compression_MethodFromJSON;
function clickhouseConfig_Compression_MethodToJSON(object) {
    switch (object) {
        case ClickhouseConfig_Compression_Method.METHOD_UNSPECIFIED:
            return "METHOD_UNSPECIFIED";
        case ClickhouseConfig_Compression_Method.LZ4:
            return "LZ4";
        case ClickhouseConfig_Compression_Method.ZSTD:
            return "ZSTD";
        default:
            return "UNKNOWN";
    }
}
exports.clickhouseConfig_Compression_MethodToJSON = clickhouseConfig_Compression_MethodToJSON;
var ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode;
(function (ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode) {
    ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode[ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode["SSL_MODE_UNSPECIFIED"] = 0] = "SSL_MODE_UNSPECIFIED";
    /** DISABLE - Only try a non-SSL connection. */
    ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode[ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode["DISABLE"] = 1] = "DISABLE";
    /** ALLOW - First try a non-SSL connection; if that fails, try an SSL connection. */
    ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode[ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode["ALLOW"] = 2] = "ALLOW";
    /** PREFER - First try an SSL connection; if that fails, try a non-SSL connection. */
    ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode[ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode["PREFER"] = 3] = "PREFER";
    /** VERIFY_CA - Only try an SSL connection, and verify that the server certificate is issued by a trusted certificate authority (CA). */
    ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode[ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode["VERIFY_CA"] = 4] = "VERIFY_CA";
    /** VERIFY_FULL - Only try an SSL connection, verify that the server certificate is issued by a trusted CA and that the requested server host name matches that in the certificate. */
    ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode[ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode["VERIFY_FULL"] = 5] = "VERIFY_FULL";
    ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode[ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode = exports.ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode || (exports.ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode = {}));
function clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeFromJSON(object) {
    switch (object) {
        case 0:
        case "SSL_MODE_UNSPECIFIED":
            return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.SSL_MODE_UNSPECIFIED;
        case 1:
        case "DISABLE":
            return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.DISABLE;
        case 2:
        case "ALLOW":
            return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.ALLOW;
        case 3:
        case "PREFER":
            return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.PREFER;
        case 4:
        case "VERIFY_CA":
            return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.VERIFY_CA;
        case 5:
        case "VERIFY_FULL":
            return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.VERIFY_FULL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.UNRECOGNIZED;
    }
}
exports.clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeFromJSON = clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeFromJSON;
function clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeToJSON(object) {
    switch (object) {
        case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.SSL_MODE_UNSPECIFIED:
            return "SSL_MODE_UNSPECIFIED";
        case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.DISABLE:
            return "DISABLE";
        case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.ALLOW:
            return "ALLOW";
        case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.PREFER:
            return "PREFER";
        case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.VERIFY_CA:
            return "VERIFY_CA";
        case ClickhouseConfig_ExternalDictionary_PostgresqlSource_SslMode.VERIFY_FULL:
            return "VERIFY_FULL";
        default:
            return "UNKNOWN";
    }
}
exports.clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeToJSON = clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeToJSON;
var ClickhouseConfig_ExternalDictionary_Layout_Type;
(function (ClickhouseConfig_ExternalDictionary_Layout_Type) {
    ClickhouseConfig_ExternalDictionary_Layout_Type[ClickhouseConfig_ExternalDictionary_Layout_Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    /**
     * FLAT - The entire dictionary is stored in memory in the form of flat arrays.
     * Available for all dictionary sources.
     */
    ClickhouseConfig_ExternalDictionary_Layout_Type[ClickhouseConfig_ExternalDictionary_Layout_Type["FLAT"] = 1] = "FLAT";
    /**
     * HASHED - The entire dictionary is stored in memory in the form of a hash table.
     * Available for all dictionary sources.
     */
    ClickhouseConfig_ExternalDictionary_Layout_Type[ClickhouseConfig_ExternalDictionary_Layout_Type["HASHED"] = 2] = "HASHED";
    /**
     * COMPLEX_KEY_HASHED - Similar to HASHED, to be used with composite keys.
     * Available for all dictionary sources.
     */
    ClickhouseConfig_ExternalDictionary_Layout_Type[ClickhouseConfig_ExternalDictionary_Layout_Type["COMPLEX_KEY_HASHED"] = 3] = "COMPLEX_KEY_HASHED";
    /**
     * RANGE_HASHED - The entire dictionary is stored in memory in the form of a hash table,
     * with an ordered array of ranges and their corresponding values.
     * Available for all dictionary sources.
     */
    ClickhouseConfig_ExternalDictionary_Layout_Type[ClickhouseConfig_ExternalDictionary_Layout_Type["RANGE_HASHED"] = 4] = "RANGE_HASHED";
    /**
     * CACHE - The dictionary is stored in a cache with a set number of cells.
     * Available for MySQL, ClickHouse and HTTP dictionary sources.
     */
    ClickhouseConfig_ExternalDictionary_Layout_Type[ClickhouseConfig_ExternalDictionary_Layout_Type["CACHE"] = 5] = "CACHE";
    /**
     * COMPLEX_KEY_CACHE - Similar to CACHE, to be used with composite keys.
     * Available for MySQL, ClickHouse and HTTP dictionary sources.
     */
    ClickhouseConfig_ExternalDictionary_Layout_Type[ClickhouseConfig_ExternalDictionary_Layout_Type["COMPLEX_KEY_CACHE"] = 6] = "COMPLEX_KEY_CACHE";
    ClickhouseConfig_ExternalDictionary_Layout_Type[ClickhouseConfig_ExternalDictionary_Layout_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClickhouseConfig_ExternalDictionary_Layout_Type = exports.ClickhouseConfig_ExternalDictionary_Layout_Type || (exports.ClickhouseConfig_ExternalDictionary_Layout_Type = {}));
function clickhouseConfig_ExternalDictionary_Layout_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return ClickhouseConfig_ExternalDictionary_Layout_Type.TYPE_UNSPECIFIED;
        case 1:
        case "FLAT":
            return ClickhouseConfig_ExternalDictionary_Layout_Type.FLAT;
        case 2:
        case "HASHED":
            return ClickhouseConfig_ExternalDictionary_Layout_Type.HASHED;
        case 3:
        case "COMPLEX_KEY_HASHED":
            return ClickhouseConfig_ExternalDictionary_Layout_Type.COMPLEX_KEY_HASHED;
        case 4:
        case "RANGE_HASHED":
            return ClickhouseConfig_ExternalDictionary_Layout_Type.RANGE_HASHED;
        case 5:
        case "CACHE":
            return ClickhouseConfig_ExternalDictionary_Layout_Type.CACHE;
        case 6:
        case "COMPLEX_KEY_CACHE":
            return ClickhouseConfig_ExternalDictionary_Layout_Type.COMPLEX_KEY_CACHE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClickhouseConfig_ExternalDictionary_Layout_Type.UNRECOGNIZED;
    }
}
exports.clickhouseConfig_ExternalDictionary_Layout_TypeFromJSON = clickhouseConfig_ExternalDictionary_Layout_TypeFromJSON;
function clickhouseConfig_ExternalDictionary_Layout_TypeToJSON(object) {
    switch (object) {
        case ClickhouseConfig_ExternalDictionary_Layout_Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case ClickhouseConfig_ExternalDictionary_Layout_Type.FLAT:
            return "FLAT";
        case ClickhouseConfig_ExternalDictionary_Layout_Type.HASHED:
            return "HASHED";
        case ClickhouseConfig_ExternalDictionary_Layout_Type.COMPLEX_KEY_HASHED:
            return "COMPLEX_KEY_HASHED";
        case ClickhouseConfig_ExternalDictionary_Layout_Type.RANGE_HASHED:
            return "RANGE_HASHED";
        case ClickhouseConfig_ExternalDictionary_Layout_Type.CACHE:
            return "CACHE";
        case ClickhouseConfig_ExternalDictionary_Layout_Type.COMPLEX_KEY_CACHE:
            return "COMPLEX_KEY_CACHE";
        default:
            return "UNKNOWN";
    }
}
exports.clickhouseConfig_ExternalDictionary_Layout_TypeToJSON = clickhouseConfig_ExternalDictionary_Layout_TypeToJSON;
const baseClickhouseConfig = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig",
    logLevel: 0,
    timezone: "",
    geobaseUri: "",
    textLogLevel: 0,
};
exports.ClickhouseConfig = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.logLevel !== 0) {
            writer.uint32(8).int32(message.logLevel);
        }
        if (message.mergeTree !== undefined) {
            exports.ClickhouseConfig_MergeTree.encode(message.mergeTree, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.compression) {
            exports.ClickhouseConfig_Compression.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.dictionaries) {
            exports.ClickhouseConfig_ExternalDictionary.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.graphiteRollup) {
            exports.ClickhouseConfig_GraphiteRollup.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.kafka !== undefined) {
            exports.ClickhouseConfig_Kafka.encode(message.kafka, writer.uint32(282).fork()).ldelim();
        }
        for (const v of message.kafkaTopics) {
            exports.ClickhouseConfig_KafkaTopic.encode(v, writer.uint32(290).fork()).ldelim();
        }
        if (message.rabbitmq !== undefined) {
            exports.ClickhouseConfig_Rabbitmq.encode(message.rabbitmq, writer.uint32(298).fork()).ldelim();
        }
        if (message.maxConnections !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.maxConnections }, writer.uint32(50).fork()).ldelim();
        }
        if (message.maxConcurrentQueries !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxConcurrentQueries,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.keepAliveTimeout !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.keepAliveTimeout,
            }, writer.uint32(66).fork()).ldelim();
        }
        if (message.uncompressedCacheSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.uncompressedCacheSize,
            }, writer.uint32(74).fork()).ldelim();
        }
        if (message.markCacheSize !== undefined) {
            wrappers_1.Int64Value.encode({ $type: "google.protobuf.Int64Value", value: message.markCacheSize }, writer.uint32(82).fork()).ldelim();
        }
        if (message.maxTableSizeToDrop !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxTableSizeToDrop,
            }, writer.uint32(90).fork()).ldelim();
        }
        if (message.maxPartitionSizeToDrop !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxPartitionSizeToDrop,
            }, writer.uint32(106).fork()).ldelim();
        }
        if (message.builtinDictionariesReloadInterval !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.builtinDictionariesReloadInterval,
            }, writer.uint32(98).fork()).ldelim();
        }
        if (message.timezone !== "") {
            writer.uint32(114).string(message.timezone);
        }
        if (message.geobaseUri !== "") {
            writer.uint32(122).string(message.geobaseUri);
        }
        if (message.queryLogRetentionSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.queryLogRetentionSize,
            }, writer.uint32(130).fork()).ldelim();
        }
        if (message.queryLogRetentionTime !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.queryLogRetentionTime,
            }, writer.uint32(138).fork()).ldelim();
        }
        if (message.queryThreadLogEnabled !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.queryThreadLogEnabled,
            }, writer.uint32(146).fork()).ldelim();
        }
        if (message.queryThreadLogRetentionSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.queryThreadLogRetentionSize,
            }, writer.uint32(154).fork()).ldelim();
        }
        if (message.queryThreadLogRetentionTime !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.queryThreadLogRetentionTime,
            }, writer.uint32(162).fork()).ldelim();
        }
        if (message.partLogRetentionSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.partLogRetentionSize,
            }, writer.uint32(170).fork()).ldelim();
        }
        if (message.partLogRetentionTime !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.partLogRetentionTime,
            }, writer.uint32(178).fork()).ldelim();
        }
        if (message.metricLogEnabled !== undefined) {
            wrappers_1.BoolValue.encode({
                $type: "google.protobuf.BoolValue",
                value: message.metricLogEnabled,
            }, writer.uint32(186).fork()).ldelim();
        }
        if (message.metricLogRetentionSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.metricLogRetentionSize,
            }, writer.uint32(194).fork()).ldelim();
        }
        if (message.metricLogRetentionTime !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.metricLogRetentionTime,
            }, writer.uint32(202).fork()).ldelim();
        }
        if (message.traceLogEnabled !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.traceLogEnabled }, writer.uint32(210).fork()).ldelim();
        }
        if (message.traceLogRetentionSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.traceLogRetentionSize,
            }, writer.uint32(218).fork()).ldelim();
        }
        if (message.traceLogRetentionTime !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.traceLogRetentionTime,
            }, writer.uint32(226).fork()).ldelim();
        }
        if (message.textLogEnabled !== undefined) {
            wrappers_1.BoolValue.encode({ $type: "google.protobuf.BoolValue", value: message.textLogEnabled }, writer.uint32(234).fork()).ldelim();
        }
        if (message.textLogRetentionSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.textLogRetentionSize,
            }, writer.uint32(242).fork()).ldelim();
        }
        if (message.textLogRetentionTime !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.textLogRetentionTime,
            }, writer.uint32(250).fork()).ldelim();
        }
        if (message.textLogLevel !== 0) {
            writer.uint32(256).int32(message.textLogLevel);
        }
        if (message.backgroundPoolSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.backgroundPoolSize,
            }, writer.uint32(266).fork()).ldelim();
        }
        if (message.backgroundSchedulePoolSize !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.backgroundSchedulePoolSize,
            }, writer.uint32(274).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig);
        message.compression = [];
        message.dictionaries = [];
        message.graphiteRollup = [];
        message.kafkaTopics = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.logLevel = reader.int32();
                    break;
                case 2:
                    message.mergeTree = exports.ClickhouseConfig_MergeTree.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.compression.push(exports.ClickhouseConfig_Compression.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.dictionaries.push(exports.ClickhouseConfig_ExternalDictionary.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.graphiteRollup.push(exports.ClickhouseConfig_GraphiteRollup.decode(reader, reader.uint32()));
                    break;
                case 35:
                    message.kafka = exports.ClickhouseConfig_Kafka.decode(reader, reader.uint32());
                    break;
                case 36:
                    message.kafkaTopics.push(exports.ClickhouseConfig_KafkaTopic.decode(reader, reader.uint32()));
                    break;
                case 37:
                    message.rabbitmq = exports.ClickhouseConfig_Rabbitmq.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.maxConnections = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.maxConcurrentQueries = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.keepAliveTimeout = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 9:
                    message.uncompressedCacheSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 10:
                    message.markCacheSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 11:
                    message.maxTableSizeToDrop = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 13:
                    message.maxPartitionSizeToDrop = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 12:
                    message.builtinDictionariesReloadInterval = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 14:
                    message.timezone = reader.string();
                    break;
                case 15:
                    message.geobaseUri = reader.string();
                    break;
                case 16:
                    message.queryLogRetentionSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 17:
                    message.queryLogRetentionTime = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 18:
                    message.queryThreadLogEnabled = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 19:
                    message.queryThreadLogRetentionSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 20:
                    message.queryThreadLogRetentionTime = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 21:
                    message.partLogRetentionSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 22:
                    message.partLogRetentionTime = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 23:
                    message.metricLogEnabled = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 24:
                    message.metricLogRetentionSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 25:
                    message.metricLogRetentionTime = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 26:
                    message.traceLogEnabled = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 27:
                    message.traceLogRetentionSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 28:
                    message.traceLogRetentionTime = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 29:
                    message.textLogEnabled = wrappers_1.BoolValue.decode(reader, reader.uint32()).value;
                    break;
                case 30:
                    message.textLogRetentionSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 31:
                    message.textLogRetentionTime = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 32:
                    message.textLogLevel = reader.int32();
                    break;
                case 33:
                    message.backgroundPoolSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 34:
                    message.backgroundSchedulePoolSize = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseClickhouseConfig);
        message.logLevel =
            object.logLevel !== undefined && object.logLevel !== null
                ? clickhouseConfig_LogLevelFromJSON(object.logLevel)
                : 0;
        message.mergeTree =
            object.mergeTree !== undefined && object.mergeTree !== null
                ? exports.ClickhouseConfig_MergeTree.fromJSON(object.mergeTree)
                : undefined;
        message.compression = ((_a = object.compression) !== null && _a !== void 0 ? _a : []).map((e) => exports.ClickhouseConfig_Compression.fromJSON(e));
        message.dictionaries = ((_b = object.dictionaries) !== null && _b !== void 0 ? _b : []).map((e) => exports.ClickhouseConfig_ExternalDictionary.fromJSON(e));
        message.graphiteRollup = ((_c = object.graphiteRollup) !== null && _c !== void 0 ? _c : []).map((e) => exports.ClickhouseConfig_GraphiteRollup.fromJSON(e));
        message.kafka =
            object.kafka !== undefined && object.kafka !== null
                ? exports.ClickhouseConfig_Kafka.fromJSON(object.kafka)
                : undefined;
        message.kafkaTopics = ((_d = object.kafkaTopics) !== null && _d !== void 0 ? _d : []).map((e) => exports.ClickhouseConfig_KafkaTopic.fromJSON(e));
        message.rabbitmq =
            object.rabbitmq !== undefined && object.rabbitmq !== null
                ? exports.ClickhouseConfig_Rabbitmq.fromJSON(object.rabbitmq)
                : undefined;
        message.maxConnections =
            object.maxConnections !== undefined && object.maxConnections !== null
                ? Number(object.maxConnections)
                : undefined;
        message.maxConcurrentQueries =
            object.maxConcurrentQueries !== undefined &&
                object.maxConcurrentQueries !== null
                ? Number(object.maxConcurrentQueries)
                : undefined;
        message.keepAliveTimeout =
            object.keepAliveTimeout !== undefined && object.keepAliveTimeout !== null
                ? Number(object.keepAliveTimeout)
                : undefined;
        message.uncompressedCacheSize =
            object.uncompressedCacheSize !== undefined &&
                object.uncompressedCacheSize !== null
                ? Number(object.uncompressedCacheSize)
                : undefined;
        message.markCacheSize =
            object.markCacheSize !== undefined && object.markCacheSize !== null
                ? Number(object.markCacheSize)
                : undefined;
        message.maxTableSizeToDrop =
            object.maxTableSizeToDrop !== undefined &&
                object.maxTableSizeToDrop !== null
                ? Number(object.maxTableSizeToDrop)
                : undefined;
        message.maxPartitionSizeToDrop =
            object.maxPartitionSizeToDrop !== undefined &&
                object.maxPartitionSizeToDrop !== null
                ? Number(object.maxPartitionSizeToDrop)
                : undefined;
        message.builtinDictionariesReloadInterval =
            object.builtinDictionariesReloadInterval !== undefined &&
                object.builtinDictionariesReloadInterval !== null
                ? Number(object.builtinDictionariesReloadInterval)
                : undefined;
        message.timezone =
            object.timezone !== undefined && object.timezone !== null
                ? String(object.timezone)
                : "";
        message.geobaseUri =
            object.geobaseUri !== undefined && object.geobaseUri !== null
                ? String(object.geobaseUri)
                : "";
        message.queryLogRetentionSize =
            object.queryLogRetentionSize !== undefined &&
                object.queryLogRetentionSize !== null
                ? Number(object.queryLogRetentionSize)
                : undefined;
        message.queryLogRetentionTime =
            object.queryLogRetentionTime !== undefined &&
                object.queryLogRetentionTime !== null
                ? Number(object.queryLogRetentionTime)
                : undefined;
        message.queryThreadLogEnabled =
            object.queryThreadLogEnabled !== undefined &&
                object.queryThreadLogEnabled !== null
                ? Boolean(object.queryThreadLogEnabled)
                : undefined;
        message.queryThreadLogRetentionSize =
            object.queryThreadLogRetentionSize !== undefined &&
                object.queryThreadLogRetentionSize !== null
                ? Number(object.queryThreadLogRetentionSize)
                : undefined;
        message.queryThreadLogRetentionTime =
            object.queryThreadLogRetentionTime !== undefined &&
                object.queryThreadLogRetentionTime !== null
                ? Number(object.queryThreadLogRetentionTime)
                : undefined;
        message.partLogRetentionSize =
            object.partLogRetentionSize !== undefined &&
                object.partLogRetentionSize !== null
                ? Number(object.partLogRetentionSize)
                : undefined;
        message.partLogRetentionTime =
            object.partLogRetentionTime !== undefined &&
                object.partLogRetentionTime !== null
                ? Number(object.partLogRetentionTime)
                : undefined;
        message.metricLogEnabled =
            object.metricLogEnabled !== undefined && object.metricLogEnabled !== null
                ? Boolean(object.metricLogEnabled)
                : undefined;
        message.metricLogRetentionSize =
            object.metricLogRetentionSize !== undefined &&
                object.metricLogRetentionSize !== null
                ? Number(object.metricLogRetentionSize)
                : undefined;
        message.metricLogRetentionTime =
            object.metricLogRetentionTime !== undefined &&
                object.metricLogRetentionTime !== null
                ? Number(object.metricLogRetentionTime)
                : undefined;
        message.traceLogEnabled =
            object.traceLogEnabled !== undefined && object.traceLogEnabled !== null
                ? Boolean(object.traceLogEnabled)
                : undefined;
        message.traceLogRetentionSize =
            object.traceLogRetentionSize !== undefined &&
                object.traceLogRetentionSize !== null
                ? Number(object.traceLogRetentionSize)
                : undefined;
        message.traceLogRetentionTime =
            object.traceLogRetentionTime !== undefined &&
                object.traceLogRetentionTime !== null
                ? Number(object.traceLogRetentionTime)
                : undefined;
        message.textLogEnabled =
            object.textLogEnabled !== undefined && object.textLogEnabled !== null
                ? Boolean(object.textLogEnabled)
                : undefined;
        message.textLogRetentionSize =
            object.textLogRetentionSize !== undefined &&
                object.textLogRetentionSize !== null
                ? Number(object.textLogRetentionSize)
                : undefined;
        message.textLogRetentionTime =
            object.textLogRetentionTime !== undefined &&
                object.textLogRetentionTime !== null
                ? Number(object.textLogRetentionTime)
                : undefined;
        message.textLogLevel =
            object.textLogLevel !== undefined && object.textLogLevel !== null
                ? clickhouseConfig_LogLevelFromJSON(object.textLogLevel)
                : 0;
        message.backgroundPoolSize =
            object.backgroundPoolSize !== undefined &&
                object.backgroundPoolSize !== null
                ? Number(object.backgroundPoolSize)
                : undefined;
        message.backgroundSchedulePoolSize =
            object.backgroundSchedulePoolSize !== undefined &&
                object.backgroundSchedulePoolSize !== null
                ? Number(object.backgroundSchedulePoolSize)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.logLevel !== undefined &&
            (obj.logLevel = clickhouseConfig_LogLevelToJSON(message.logLevel));
        message.mergeTree !== undefined &&
            (obj.mergeTree = message.mergeTree
                ? exports.ClickhouseConfig_MergeTree.toJSON(message.mergeTree)
                : undefined);
        if (message.compression) {
            obj.compression = message.compression.map((e) => e ? exports.ClickhouseConfig_Compression.toJSON(e) : undefined);
        }
        else {
            obj.compression = [];
        }
        if (message.dictionaries) {
            obj.dictionaries = message.dictionaries.map((e) => e ? exports.ClickhouseConfig_ExternalDictionary.toJSON(e) : undefined);
        }
        else {
            obj.dictionaries = [];
        }
        if (message.graphiteRollup) {
            obj.graphiteRollup = message.graphiteRollup.map((e) => e ? exports.ClickhouseConfig_GraphiteRollup.toJSON(e) : undefined);
        }
        else {
            obj.graphiteRollup = [];
        }
        message.kafka !== undefined &&
            (obj.kafka = message.kafka
                ? exports.ClickhouseConfig_Kafka.toJSON(message.kafka)
                : undefined);
        if (message.kafkaTopics) {
            obj.kafkaTopics = message.kafkaTopics.map((e) => e ? exports.ClickhouseConfig_KafkaTopic.toJSON(e) : undefined);
        }
        else {
            obj.kafkaTopics = [];
        }
        message.rabbitmq !== undefined &&
            (obj.rabbitmq = message.rabbitmq
                ? exports.ClickhouseConfig_Rabbitmq.toJSON(message.rabbitmq)
                : undefined);
        message.maxConnections !== undefined &&
            (obj.maxConnections = message.maxConnections);
        message.maxConcurrentQueries !== undefined &&
            (obj.maxConcurrentQueries = message.maxConcurrentQueries);
        message.keepAliveTimeout !== undefined &&
            (obj.keepAliveTimeout = message.keepAliveTimeout);
        message.uncompressedCacheSize !== undefined &&
            (obj.uncompressedCacheSize = message.uncompressedCacheSize);
        message.markCacheSize !== undefined &&
            (obj.markCacheSize = message.markCacheSize);
        message.maxTableSizeToDrop !== undefined &&
            (obj.maxTableSizeToDrop = message.maxTableSizeToDrop);
        message.maxPartitionSizeToDrop !== undefined &&
            (obj.maxPartitionSizeToDrop = message.maxPartitionSizeToDrop);
        message.builtinDictionariesReloadInterval !== undefined &&
            (obj.builtinDictionariesReloadInterval =
                message.builtinDictionariesReloadInterval);
        message.timezone !== undefined && (obj.timezone = message.timezone);
        message.geobaseUri !== undefined && (obj.geobaseUri = message.geobaseUri);
        message.queryLogRetentionSize !== undefined &&
            (obj.queryLogRetentionSize = message.queryLogRetentionSize);
        message.queryLogRetentionTime !== undefined &&
            (obj.queryLogRetentionTime = message.queryLogRetentionTime);
        message.queryThreadLogEnabled !== undefined &&
            (obj.queryThreadLogEnabled = message.queryThreadLogEnabled);
        message.queryThreadLogRetentionSize !== undefined &&
            (obj.queryThreadLogRetentionSize = message.queryThreadLogRetentionSize);
        message.queryThreadLogRetentionTime !== undefined &&
            (obj.queryThreadLogRetentionTime = message.queryThreadLogRetentionTime);
        message.partLogRetentionSize !== undefined &&
            (obj.partLogRetentionSize = message.partLogRetentionSize);
        message.partLogRetentionTime !== undefined &&
            (obj.partLogRetentionTime = message.partLogRetentionTime);
        message.metricLogEnabled !== undefined &&
            (obj.metricLogEnabled = message.metricLogEnabled);
        message.metricLogRetentionSize !== undefined &&
            (obj.metricLogRetentionSize = message.metricLogRetentionSize);
        message.metricLogRetentionTime !== undefined &&
            (obj.metricLogRetentionTime = message.metricLogRetentionTime);
        message.traceLogEnabled !== undefined &&
            (obj.traceLogEnabled = message.traceLogEnabled);
        message.traceLogRetentionSize !== undefined &&
            (obj.traceLogRetentionSize = message.traceLogRetentionSize);
        message.traceLogRetentionTime !== undefined &&
            (obj.traceLogRetentionTime = message.traceLogRetentionTime);
        message.textLogEnabled !== undefined &&
            (obj.textLogEnabled = message.textLogEnabled);
        message.textLogRetentionSize !== undefined &&
            (obj.textLogRetentionSize = message.textLogRetentionSize);
        message.textLogRetentionTime !== undefined &&
            (obj.textLogRetentionTime = message.textLogRetentionTime);
        message.textLogLevel !== undefined &&
            (obj.textLogLevel = clickhouseConfig_LogLevelToJSON(message.textLogLevel));
        message.backgroundPoolSize !== undefined &&
            (obj.backgroundPoolSize = message.backgroundPoolSize);
        message.backgroundSchedulePoolSize !== undefined &&
            (obj.backgroundSchedulePoolSize = message.backgroundSchedulePoolSize);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9;
        const message = Object.assign({}, baseClickhouseConfig);
        message.logLevel = (_a = object.logLevel) !== null && _a !== void 0 ? _a : 0;
        message.mergeTree =
            object.mergeTree !== undefined && object.mergeTree !== null
                ? exports.ClickhouseConfig_MergeTree.fromPartial(object.mergeTree)
                : undefined;
        message.compression =
            ((_b = object.compression) === null || _b === void 0 ? void 0 : _b.map((e) => exports.ClickhouseConfig_Compression.fromPartial(e))) || [];
        message.dictionaries =
            ((_c = object.dictionaries) === null || _c === void 0 ? void 0 : _c.map((e) => exports.ClickhouseConfig_ExternalDictionary.fromPartial(e))) || [];
        message.graphiteRollup =
            ((_d = object.graphiteRollup) === null || _d === void 0 ? void 0 : _d.map((e) => exports.ClickhouseConfig_GraphiteRollup.fromPartial(e))) || [];
        message.kafka =
            object.kafka !== undefined && object.kafka !== null
                ? exports.ClickhouseConfig_Kafka.fromPartial(object.kafka)
                : undefined;
        message.kafkaTopics =
            ((_e = object.kafkaTopics) === null || _e === void 0 ? void 0 : _e.map((e) => exports.ClickhouseConfig_KafkaTopic.fromPartial(e))) || [];
        message.rabbitmq =
            object.rabbitmq !== undefined && object.rabbitmq !== null
                ? exports.ClickhouseConfig_Rabbitmq.fromPartial(object.rabbitmq)
                : undefined;
        message.maxConnections = (_f = object.maxConnections) !== null && _f !== void 0 ? _f : undefined;
        message.maxConcurrentQueries = (_g = object.maxConcurrentQueries) !== null && _g !== void 0 ? _g : undefined;
        message.keepAliveTimeout = (_h = object.keepAliveTimeout) !== null && _h !== void 0 ? _h : undefined;
        message.uncompressedCacheSize = (_j = object.uncompressedCacheSize) !== null && _j !== void 0 ? _j : undefined;
        message.markCacheSize = (_k = object.markCacheSize) !== null && _k !== void 0 ? _k : undefined;
        message.maxTableSizeToDrop = (_l = object.maxTableSizeToDrop) !== null && _l !== void 0 ? _l : undefined;
        message.maxPartitionSizeToDrop = (_m = object.maxPartitionSizeToDrop) !== null && _m !== void 0 ? _m : undefined;
        message.builtinDictionariesReloadInterval =
            (_o = object.builtinDictionariesReloadInterval) !== null && _o !== void 0 ? _o : undefined;
        message.timezone = (_p = object.timezone) !== null && _p !== void 0 ? _p : "";
        message.geobaseUri = (_q = object.geobaseUri) !== null && _q !== void 0 ? _q : "";
        message.queryLogRetentionSize = (_r = object.queryLogRetentionSize) !== null && _r !== void 0 ? _r : undefined;
        message.queryLogRetentionTime = (_s = object.queryLogRetentionTime) !== null && _s !== void 0 ? _s : undefined;
        message.queryThreadLogEnabled = (_t = object.queryThreadLogEnabled) !== null && _t !== void 0 ? _t : undefined;
        message.queryThreadLogRetentionSize =
            (_u = object.queryThreadLogRetentionSize) !== null && _u !== void 0 ? _u : undefined;
        message.queryThreadLogRetentionTime =
            (_v = object.queryThreadLogRetentionTime) !== null && _v !== void 0 ? _v : undefined;
        message.partLogRetentionSize = (_w = object.partLogRetentionSize) !== null && _w !== void 0 ? _w : undefined;
        message.partLogRetentionTime = (_x = object.partLogRetentionTime) !== null && _x !== void 0 ? _x : undefined;
        message.metricLogEnabled = (_y = object.metricLogEnabled) !== null && _y !== void 0 ? _y : undefined;
        message.metricLogRetentionSize = (_z = object.metricLogRetentionSize) !== null && _z !== void 0 ? _z : undefined;
        message.metricLogRetentionTime = (_0 = object.metricLogRetentionTime) !== null && _0 !== void 0 ? _0 : undefined;
        message.traceLogEnabled = (_1 = object.traceLogEnabled) !== null && _1 !== void 0 ? _1 : undefined;
        message.traceLogRetentionSize = (_2 = object.traceLogRetentionSize) !== null && _2 !== void 0 ? _2 : undefined;
        message.traceLogRetentionTime = (_3 = object.traceLogRetentionTime) !== null && _3 !== void 0 ? _3 : undefined;
        message.textLogEnabled = (_4 = object.textLogEnabled) !== null && _4 !== void 0 ? _4 : undefined;
        message.textLogRetentionSize = (_5 = object.textLogRetentionSize) !== null && _5 !== void 0 ? _5 : undefined;
        message.textLogRetentionTime = (_6 = object.textLogRetentionTime) !== null && _6 !== void 0 ? _6 : undefined;
        message.textLogLevel = (_7 = object.textLogLevel) !== null && _7 !== void 0 ? _7 : 0;
        message.backgroundPoolSize = (_8 = object.backgroundPoolSize) !== null && _8 !== void 0 ? _8 : undefined;
        message.backgroundSchedulePoolSize =
            (_9 = object.backgroundSchedulePoolSize) !== null && _9 !== void 0 ? _9 : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig.$type, exports.ClickhouseConfig);
const baseClickhouseConfig_MergeTree = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.MergeTree",
};
exports.ClickhouseConfig_MergeTree = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.MergeTree",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.replicatedDeduplicationWindow !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.replicatedDeduplicationWindow,
            }, writer.uint32(10).fork()).ldelim();
        }
        if (message.replicatedDeduplicationWindowSeconds !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.replicatedDeduplicationWindowSeconds,
            }, writer.uint32(18).fork()).ldelim();
        }
        if (message.partsToDelayInsert !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.partsToDelayInsert,
            }, writer.uint32(26).fork()).ldelim();
        }
        if (message.partsToThrowInsert !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.partsToThrowInsert,
            }, writer.uint32(34).fork()).ldelim();
        }
        if (message.maxReplicatedMergesInQueue !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxReplicatedMergesInQueue,
            }, writer.uint32(42).fork()).ldelim();
        }
        if (message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge,
            }, writer.uint32(50).fork()).ldelim();
        }
        if (message.maxBytesToMergeAtMinSpaceInPool !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxBytesToMergeAtMinSpaceInPool,
            }, writer.uint32(58).fork()).ldelim();
        }
        if (message.maxBytesToMergeAtMaxSpaceInPool !== undefined) {
            wrappers_1.Int64Value.encode({
                $type: "google.protobuf.Int64Value",
                value: message.maxBytesToMergeAtMaxSpaceInPool,
            }, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_MergeTree);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.replicatedDeduplicationWindow = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 2:
                    message.replicatedDeduplicationWindowSeconds = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 3:
                    message.partsToDelayInsert = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 4:
                    message.partsToThrowInsert = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 5:
                    message.maxReplicatedMergesInQueue = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 6:
                    message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge =
                        wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 7:
                    message.maxBytesToMergeAtMinSpaceInPool = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                case 8:
                    message.maxBytesToMergeAtMaxSpaceInPool = wrappers_1.Int64Value.decode(reader, reader.uint32()).value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseConfig_MergeTree);
        message.replicatedDeduplicationWindow =
            object.replicatedDeduplicationWindow !== undefined &&
                object.replicatedDeduplicationWindow !== null
                ? Number(object.replicatedDeduplicationWindow)
                : undefined;
        message.replicatedDeduplicationWindowSeconds =
            object.replicatedDeduplicationWindowSeconds !== undefined &&
                object.replicatedDeduplicationWindowSeconds !== null
                ? Number(object.replicatedDeduplicationWindowSeconds)
                : undefined;
        message.partsToDelayInsert =
            object.partsToDelayInsert !== undefined &&
                object.partsToDelayInsert !== null
                ? Number(object.partsToDelayInsert)
                : undefined;
        message.partsToThrowInsert =
            object.partsToThrowInsert !== undefined &&
                object.partsToThrowInsert !== null
                ? Number(object.partsToThrowInsert)
                : undefined;
        message.maxReplicatedMergesInQueue =
            object.maxReplicatedMergesInQueue !== undefined &&
                object.maxReplicatedMergesInQueue !== null
                ? Number(object.maxReplicatedMergesInQueue)
                : undefined;
        message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge =
            object.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge !== undefined &&
                object.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge !== null
                ? Number(object.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge)
                : undefined;
        message.maxBytesToMergeAtMinSpaceInPool =
            object.maxBytesToMergeAtMinSpaceInPool !== undefined &&
                object.maxBytesToMergeAtMinSpaceInPool !== null
                ? Number(object.maxBytesToMergeAtMinSpaceInPool)
                : undefined;
        message.maxBytesToMergeAtMaxSpaceInPool =
            object.maxBytesToMergeAtMaxSpaceInPool !== undefined &&
                object.maxBytesToMergeAtMaxSpaceInPool !== null
                ? Number(object.maxBytesToMergeAtMaxSpaceInPool)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.replicatedDeduplicationWindow !== undefined &&
            (obj.replicatedDeduplicationWindow =
                message.replicatedDeduplicationWindow);
        message.replicatedDeduplicationWindowSeconds !== undefined &&
            (obj.replicatedDeduplicationWindowSeconds =
                message.replicatedDeduplicationWindowSeconds);
        message.partsToDelayInsert !== undefined &&
            (obj.partsToDelayInsert = message.partsToDelayInsert);
        message.partsToThrowInsert !== undefined &&
            (obj.partsToThrowInsert = message.partsToThrowInsert);
        message.maxReplicatedMergesInQueue !== undefined &&
            (obj.maxReplicatedMergesInQueue = message.maxReplicatedMergesInQueue);
        message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge !== undefined &&
            (obj.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge =
                message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge);
        message.maxBytesToMergeAtMinSpaceInPool !== undefined &&
            (obj.maxBytesToMergeAtMinSpaceInPool =
                message.maxBytesToMergeAtMinSpaceInPool);
        message.maxBytesToMergeAtMaxSpaceInPool !== undefined &&
            (obj.maxBytesToMergeAtMaxSpaceInPool =
                message.maxBytesToMergeAtMaxSpaceInPool);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseClickhouseConfig_MergeTree);
        message.replicatedDeduplicationWindow =
            (_a = object.replicatedDeduplicationWindow) !== null && _a !== void 0 ? _a : undefined;
        message.replicatedDeduplicationWindowSeconds =
            (_b = object.replicatedDeduplicationWindowSeconds) !== null && _b !== void 0 ? _b : undefined;
        message.partsToDelayInsert = (_c = object.partsToDelayInsert) !== null && _c !== void 0 ? _c : undefined;
        message.partsToThrowInsert = (_d = object.partsToThrowInsert) !== null && _d !== void 0 ? _d : undefined;
        message.maxReplicatedMergesInQueue =
            (_e = object.maxReplicatedMergesInQueue) !== null && _e !== void 0 ? _e : undefined;
        message.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge =
            (_f = object.numberOfFreeEntriesInPoolToLowerMaxSizeOfMerge) !== null && _f !== void 0 ? _f : undefined;
        message.maxBytesToMergeAtMinSpaceInPool =
            (_g = object.maxBytesToMergeAtMinSpaceInPool) !== null && _g !== void 0 ? _g : undefined;
        message.maxBytesToMergeAtMaxSpaceInPool =
            (_h = object.maxBytesToMergeAtMaxSpaceInPool) !== null && _h !== void 0 ? _h : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_MergeTree.$type, exports.ClickhouseConfig_MergeTree);
const baseClickhouseConfig_Kafka = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Kafka",
    securityProtocol: 0,
    saslMechanism: 0,
    saslUsername: "",
    saslPassword: "",
};
exports.ClickhouseConfig_Kafka = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Kafka",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.securityProtocol !== 0) {
            writer.uint32(8).int32(message.securityProtocol);
        }
        if (message.saslMechanism !== 0) {
            writer.uint32(16).int32(message.saslMechanism);
        }
        if (message.saslUsername !== "") {
            writer.uint32(26).string(message.saslUsername);
        }
        if (message.saslPassword !== "") {
            writer.uint32(34).string(message.saslPassword);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_Kafka);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.securityProtocol = reader.int32();
                    break;
                case 2:
                    message.saslMechanism = reader.int32();
                    break;
                case 3:
                    message.saslUsername = reader.string();
                    break;
                case 4:
                    message.saslPassword = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseConfig_Kafka);
        message.securityProtocol =
            object.securityProtocol !== undefined && object.securityProtocol !== null
                ? clickhouseConfig_Kafka_SecurityProtocolFromJSON(object.securityProtocol)
                : 0;
        message.saslMechanism =
            object.saslMechanism !== undefined && object.saslMechanism !== null
                ? clickhouseConfig_Kafka_SaslMechanismFromJSON(object.saslMechanism)
                : 0;
        message.saslUsername =
            object.saslUsername !== undefined && object.saslUsername !== null
                ? String(object.saslUsername)
                : "";
        message.saslPassword =
            object.saslPassword !== undefined && object.saslPassword !== null
                ? String(object.saslPassword)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.securityProtocol !== undefined &&
            (obj.securityProtocol = clickhouseConfig_Kafka_SecurityProtocolToJSON(message.securityProtocol));
        message.saslMechanism !== undefined &&
            (obj.saslMechanism = clickhouseConfig_Kafka_SaslMechanismToJSON(message.saslMechanism));
        message.saslUsername !== undefined &&
            (obj.saslUsername = message.saslUsername);
        message.saslPassword !== undefined &&
            (obj.saslPassword = message.saslPassword);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseClickhouseConfig_Kafka);
        message.securityProtocol = (_a = object.securityProtocol) !== null && _a !== void 0 ? _a : 0;
        message.saslMechanism = (_b = object.saslMechanism) !== null && _b !== void 0 ? _b : 0;
        message.saslUsername = (_c = object.saslUsername) !== null && _c !== void 0 ? _c : "";
        message.saslPassword = (_d = object.saslPassword) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_Kafka.$type, exports.ClickhouseConfig_Kafka);
const baseClickhouseConfig_KafkaTopic = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.KafkaTopic",
    name: "",
};
exports.ClickhouseConfig_KafkaTopic = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.KafkaTopic",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.settings !== undefined) {
            exports.ClickhouseConfig_Kafka.encode(message.settings, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_KafkaTopic);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.settings = exports.ClickhouseConfig_Kafka.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseConfig_KafkaTopic);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? exports.ClickhouseConfig_Kafka.fromJSON(object.settings)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.settings !== undefined &&
            (obj.settings = message.settings
                ? exports.ClickhouseConfig_Kafka.toJSON(message.settings)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseClickhouseConfig_KafkaTopic);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.settings =
            object.settings !== undefined && object.settings !== null
                ? exports.ClickhouseConfig_Kafka.fromPartial(object.settings)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_KafkaTopic.$type, exports.ClickhouseConfig_KafkaTopic);
const baseClickhouseConfig_Rabbitmq = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Rabbitmq",
    username: "",
    password: "",
};
exports.ClickhouseConfig_Rabbitmq = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Rabbitmq",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.username !== "") {
            writer.uint32(10).string(message.username);
        }
        if (message.password !== "") {
            writer.uint32(18).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_Rabbitmq);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseConfig_Rabbitmq);
        message.username =
            object.username !== undefined && object.username !== null
                ? String(object.username)
                : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.username !== undefined && (obj.username = message.username);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseClickhouseConfig_Rabbitmq);
        message.username = (_a = object.username) !== null && _a !== void 0 ? _a : "";
        message.password = (_b = object.password) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_Rabbitmq.$type, exports.ClickhouseConfig_Rabbitmq);
const baseClickhouseConfig_Compression = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Compression",
    method: 0,
    minPartSize: 0,
    minPartSizeRatio: 0,
};
exports.ClickhouseConfig_Compression = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.Compression",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.method !== 0) {
            writer.uint32(8).int32(message.method);
        }
        if (message.minPartSize !== 0) {
            writer.uint32(16).int64(message.minPartSize);
        }
        if (message.minPartSizeRatio !== 0) {
            writer.uint32(25).double(message.minPartSizeRatio);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_Compression);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.method = reader.int32();
                    break;
                case 2:
                    message.minPartSize = longToNumber(reader.int64());
                    break;
                case 3:
                    message.minPartSizeRatio = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseConfig_Compression);
        message.method =
            object.method !== undefined && object.method !== null
                ? clickhouseConfig_Compression_MethodFromJSON(object.method)
                : 0;
        message.minPartSize =
            object.minPartSize !== undefined && object.minPartSize !== null
                ? Number(object.minPartSize)
                : 0;
        message.minPartSizeRatio =
            object.minPartSizeRatio !== undefined && object.minPartSizeRatio !== null
                ? Number(object.minPartSizeRatio)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.method !== undefined &&
            (obj.method = clickhouseConfig_Compression_MethodToJSON(message.method));
        message.minPartSize !== undefined &&
            (obj.minPartSize = Math.round(message.minPartSize));
        message.minPartSizeRatio !== undefined &&
            (obj.minPartSizeRatio = message.minPartSizeRatio);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseClickhouseConfig_Compression);
        message.method = (_a = object.method) !== null && _a !== void 0 ? _a : 0;
        message.minPartSize = (_b = object.minPartSize) !== null && _b !== void 0 ? _b : 0;
        message.minPartSizeRatio = (_c = object.minPartSizeRatio) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_Compression.$type, exports.ClickhouseConfig_Compression);
const baseClickhouseConfig_ExternalDictionary = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary",
    name: "",
};
exports.ClickhouseConfig_ExternalDictionary = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.structure !== undefined) {
            exports.ClickhouseConfig_ExternalDictionary_Structure.encode(message.structure, writer.uint32(18).fork()).ldelim();
        }
        if (message.layout !== undefined) {
            exports.ClickhouseConfig_ExternalDictionary_Layout.encode(message.layout, writer.uint32(26).fork()).ldelim();
        }
        if (message.fixedLifetime !== undefined) {
            writer.uint32(32).int64(message.fixedLifetime);
        }
        if (message.lifetimeRange !== undefined) {
            exports.ClickhouseConfig_ExternalDictionary_Range.encode(message.lifetimeRange, writer.uint32(42).fork()).ldelim();
        }
        if (message.httpSource !== undefined) {
            exports.ClickhouseConfig_ExternalDictionary_HttpSource.encode(message.httpSource, writer.uint32(50).fork()).ldelim();
        }
        if (message.mysqlSource !== undefined) {
            exports.ClickhouseConfig_ExternalDictionary_MysqlSource.encode(message.mysqlSource, writer.uint32(58).fork()).ldelim();
        }
        if (message.clickhouseSource !== undefined) {
            exports.ClickhouseConfig_ExternalDictionary_ClickhouseSource.encode(message.clickhouseSource, writer.uint32(66).fork()).ldelim();
        }
        if (message.mongodbSource !== undefined) {
            exports.ClickhouseConfig_ExternalDictionary_MongodbSource.encode(message.mongodbSource, writer.uint32(74).fork()).ldelim();
        }
        if (message.postgresqlSource !== undefined) {
            exports.ClickhouseConfig_ExternalDictionary_PostgresqlSource.encode(message.postgresqlSource, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.structure =
                        exports.ClickhouseConfig_ExternalDictionary_Structure.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.layout = exports.ClickhouseConfig_ExternalDictionary_Layout.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.fixedLifetime = longToNumber(reader.int64());
                    break;
                case 5:
                    message.lifetimeRange =
                        exports.ClickhouseConfig_ExternalDictionary_Range.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.httpSource =
                        exports.ClickhouseConfig_ExternalDictionary_HttpSource.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.mysqlSource =
                        exports.ClickhouseConfig_ExternalDictionary_MysqlSource.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.clickhouseSource =
                        exports.ClickhouseConfig_ExternalDictionary_ClickhouseSource.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.mongodbSource =
                        exports.ClickhouseConfig_ExternalDictionary_MongodbSource.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.postgresqlSource =
                        exports.ClickhouseConfig_ExternalDictionary_PostgresqlSource.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.structure =
            object.structure !== undefined && object.structure !== null
                ? exports.ClickhouseConfig_ExternalDictionary_Structure.fromJSON(object.structure)
                : undefined;
        message.layout =
            object.layout !== undefined && object.layout !== null
                ? exports.ClickhouseConfig_ExternalDictionary_Layout.fromJSON(object.layout)
                : undefined;
        message.fixedLifetime =
            object.fixedLifetime !== undefined && object.fixedLifetime !== null
                ? Number(object.fixedLifetime)
                : undefined;
        message.lifetimeRange =
            object.lifetimeRange !== undefined && object.lifetimeRange !== null
                ? exports.ClickhouseConfig_ExternalDictionary_Range.fromJSON(object.lifetimeRange)
                : undefined;
        message.httpSource =
            object.httpSource !== undefined && object.httpSource !== null
                ? exports.ClickhouseConfig_ExternalDictionary_HttpSource.fromJSON(object.httpSource)
                : undefined;
        message.mysqlSource =
            object.mysqlSource !== undefined && object.mysqlSource !== null
                ? exports.ClickhouseConfig_ExternalDictionary_MysqlSource.fromJSON(object.mysqlSource)
                : undefined;
        message.clickhouseSource =
            object.clickhouseSource !== undefined && object.clickhouseSource !== null
                ? exports.ClickhouseConfig_ExternalDictionary_ClickhouseSource.fromJSON(object.clickhouseSource)
                : undefined;
        message.mongodbSource =
            object.mongodbSource !== undefined && object.mongodbSource !== null
                ? exports.ClickhouseConfig_ExternalDictionary_MongodbSource.fromJSON(object.mongodbSource)
                : undefined;
        message.postgresqlSource =
            object.postgresqlSource !== undefined && object.postgresqlSource !== null
                ? exports.ClickhouseConfig_ExternalDictionary_PostgresqlSource.fromJSON(object.postgresqlSource)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.structure !== undefined &&
            (obj.structure = message.structure
                ? exports.ClickhouseConfig_ExternalDictionary_Structure.toJSON(message.structure)
                : undefined);
        message.layout !== undefined &&
            (obj.layout = message.layout
                ? exports.ClickhouseConfig_ExternalDictionary_Layout.toJSON(message.layout)
                : undefined);
        message.fixedLifetime !== undefined &&
            (obj.fixedLifetime = Math.round(message.fixedLifetime));
        message.lifetimeRange !== undefined &&
            (obj.lifetimeRange = message.lifetimeRange
                ? exports.ClickhouseConfig_ExternalDictionary_Range.toJSON(message.lifetimeRange)
                : undefined);
        message.httpSource !== undefined &&
            (obj.httpSource = message.httpSource
                ? exports.ClickhouseConfig_ExternalDictionary_HttpSource.toJSON(message.httpSource)
                : undefined);
        message.mysqlSource !== undefined &&
            (obj.mysqlSource = message.mysqlSource
                ? exports.ClickhouseConfig_ExternalDictionary_MysqlSource.toJSON(message.mysqlSource)
                : undefined);
        message.clickhouseSource !== undefined &&
            (obj.clickhouseSource = message.clickhouseSource
                ? exports.ClickhouseConfig_ExternalDictionary_ClickhouseSource.toJSON(message.clickhouseSource)
                : undefined);
        message.mongodbSource !== undefined &&
            (obj.mongodbSource = message.mongodbSource
                ? exports.ClickhouseConfig_ExternalDictionary_MongodbSource.toJSON(message.mongodbSource)
                : undefined);
        message.postgresqlSource !== undefined &&
            (obj.postgresqlSource = message.postgresqlSource
                ? exports.ClickhouseConfig_ExternalDictionary_PostgresqlSource.toJSON(message.postgresqlSource)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.structure =
            object.structure !== undefined && object.structure !== null
                ? exports.ClickhouseConfig_ExternalDictionary_Structure.fromPartial(object.structure)
                : undefined;
        message.layout =
            object.layout !== undefined && object.layout !== null
                ? exports.ClickhouseConfig_ExternalDictionary_Layout.fromPartial(object.layout)
                : undefined;
        message.fixedLifetime = (_b = object.fixedLifetime) !== null && _b !== void 0 ? _b : undefined;
        message.lifetimeRange =
            object.lifetimeRange !== undefined && object.lifetimeRange !== null
                ? exports.ClickhouseConfig_ExternalDictionary_Range.fromPartial(object.lifetimeRange)
                : undefined;
        message.httpSource =
            object.httpSource !== undefined && object.httpSource !== null
                ? exports.ClickhouseConfig_ExternalDictionary_HttpSource.fromPartial(object.httpSource)
                : undefined;
        message.mysqlSource =
            object.mysqlSource !== undefined && object.mysqlSource !== null
                ? exports.ClickhouseConfig_ExternalDictionary_MysqlSource.fromPartial(object.mysqlSource)
                : undefined;
        message.clickhouseSource =
            object.clickhouseSource !== undefined && object.clickhouseSource !== null
                ? exports.ClickhouseConfig_ExternalDictionary_ClickhouseSource.fromPartial(object.clickhouseSource)
                : undefined;
        message.mongodbSource =
            object.mongodbSource !== undefined && object.mongodbSource !== null
                ? exports.ClickhouseConfig_ExternalDictionary_MongodbSource.fromPartial(object.mongodbSource)
                : undefined;
        message.postgresqlSource =
            object.postgresqlSource !== undefined && object.postgresqlSource !== null
                ? exports.ClickhouseConfig_ExternalDictionary_PostgresqlSource.fromPartial(object.postgresqlSource)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_ExternalDictionary.$type, exports.ClickhouseConfig_ExternalDictionary);
const baseClickhouseConfig_ExternalDictionary_HttpSource = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.HttpSource",
    url: "",
    format: "",
};
exports.ClickhouseConfig_ExternalDictionary_HttpSource = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.HttpSource",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.url !== "") {
            writer.uint32(10).string(message.url);
        }
        if (message.format !== "") {
            writer.uint32(18).string(message.format);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_HttpSource);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.url = reader.string();
                    break;
                case 2:
                    message.format = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_HttpSource);
        message.url =
            object.url !== undefined && object.url !== null ? String(object.url) : "";
        message.format =
            object.format !== undefined && object.format !== null
                ? String(object.format)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.url !== undefined && (obj.url = message.url);
        message.format !== undefined && (obj.format = message.format);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_HttpSource);
        message.url = (_a = object.url) !== null && _a !== void 0 ? _a : "";
        message.format = (_b = object.format) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_ExternalDictionary_HttpSource.$type, exports.ClickhouseConfig_ExternalDictionary_HttpSource);
const baseClickhouseConfig_ExternalDictionary_MysqlSource = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource",
    db: "",
    table: "",
    port: 0,
    user: "",
    password: "",
    where: "",
    invalidateQuery: "",
};
exports.ClickhouseConfig_ExternalDictionary_MysqlSource = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.db !== "") {
            writer.uint32(10).string(message.db);
        }
        if (message.table !== "") {
            writer.uint32(18).string(message.table);
        }
        if (message.port !== 0) {
            writer.uint32(24).int64(message.port);
        }
        if (message.user !== "") {
            writer.uint32(34).string(message.user);
        }
        if (message.password !== "") {
            writer.uint32(42).string(message.password);
        }
        for (const v of message.replicas) {
            exports.ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.where !== "") {
            writer.uint32(58).string(message.where);
        }
        if (message.invalidateQuery !== "") {
            writer.uint32(66).string(message.invalidateQuery);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_MysqlSource);
        message.replicas = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.db = reader.string();
                    break;
                case 2:
                    message.table = reader.string();
                    break;
                case 3:
                    message.port = longToNumber(reader.int64());
                    break;
                case 4:
                    message.user = reader.string();
                    break;
                case 5:
                    message.password = reader.string();
                    break;
                case 6:
                    message.replicas.push(exports.ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.where = reader.string();
                    break;
                case 8:
                    message.invalidateQuery = reader.string();
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
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_MysqlSource);
        message.db =
            object.db !== undefined && object.db !== null ? String(object.db) : "";
        message.table =
            object.table !== undefined && object.table !== null
                ? String(object.table)
                : "";
        message.port =
            object.port !== undefined && object.port !== null
                ? Number(object.port)
                : 0;
        message.user =
            object.user !== undefined && object.user !== null
                ? String(object.user)
                : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : "";
        message.replicas = ((_a = object.replicas) !== null && _a !== void 0 ? _a : []).map((e) => exports.ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.fromJSON(e));
        message.where =
            object.where !== undefined && object.where !== null
                ? String(object.where)
                : "";
        message.invalidateQuery =
            object.invalidateQuery !== undefined && object.invalidateQuery !== null
                ? String(object.invalidateQuery)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.db !== undefined && (obj.db = message.db);
        message.table !== undefined && (obj.table = message.table);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined && (obj.password = message.password);
        if (message.replicas) {
            obj.replicas = message.replicas.map((e) => e
                ? exports.ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.toJSON(e)
                : undefined);
        }
        else {
            obj.replicas = [];
        }
        message.where !== undefined && (obj.where = message.where);
        message.invalidateQuery !== undefined &&
            (obj.invalidateQuery = message.invalidateQuery);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_MysqlSource);
        message.db = (_a = object.db) !== null && _a !== void 0 ? _a : "";
        message.table = (_b = object.table) !== null && _b !== void 0 ? _b : "";
        message.port = (_c = object.port) !== null && _c !== void 0 ? _c : 0;
        message.user = (_d = object.user) !== null && _d !== void 0 ? _d : "";
        message.password = (_e = object.password) !== null && _e !== void 0 ? _e : "";
        message.replicas =
            ((_f = object.replicas) === null || _f === void 0 ? void 0 : _f.map((e) => exports.ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.fromPartial(e))) || [];
        message.where = (_g = object.where) !== null && _g !== void 0 ? _g : "";
        message.invalidateQuery = (_h = object.invalidateQuery) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_ExternalDictionary_MysqlSource.$type, exports.ClickhouseConfig_ExternalDictionary_MysqlSource);
const baseClickhouseConfig_ExternalDictionary_MysqlSource_Replica = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource.Replica",
    host: "",
    priority: 0,
    port: 0,
    user: "",
    password: "",
};
exports.ClickhouseConfig_ExternalDictionary_MysqlSource_Replica = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MysqlSource.Replica",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.host !== "") {
            writer.uint32(10).string(message.host);
        }
        if (message.priority !== 0) {
            writer.uint32(16).int64(message.priority);
        }
        if (message.port !== 0) {
            writer.uint32(24).int64(message.port);
        }
        if (message.user !== "") {
            writer.uint32(34).string(message.user);
        }
        if (message.password !== "") {
            writer.uint32(42).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_MysqlSource_Replica);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host = reader.string();
                    break;
                case 2:
                    message.priority = longToNumber(reader.int64());
                    break;
                case 3:
                    message.port = longToNumber(reader.int64());
                    break;
                case 4:
                    message.user = reader.string();
                    break;
                case 5:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_MysqlSource_Replica);
        message.host =
            object.host !== undefined && object.host !== null
                ? String(object.host)
                : "";
        message.priority =
            object.priority !== undefined && object.priority !== null
                ? Number(object.priority)
                : 0;
        message.port =
            object.port !== undefined && object.port !== null
                ? Number(object.port)
                : 0;
        message.user =
            object.user !== undefined && object.user !== null
                ? String(object.user)
                : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.host !== undefined && (obj.host = message.host);
        message.priority !== undefined &&
            (obj.priority = Math.round(message.priority));
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_MysqlSource_Replica);
        message.host = (_a = object.host) !== null && _a !== void 0 ? _a : "";
        message.priority = (_b = object.priority) !== null && _b !== void 0 ? _b : 0;
        message.port = (_c = object.port) !== null && _c !== void 0 ? _c : 0;
        message.user = (_d = object.user) !== null && _d !== void 0 ? _d : "";
        message.password = (_e = object.password) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_ExternalDictionary_MysqlSource_Replica.$type, exports.ClickhouseConfig_ExternalDictionary_MysqlSource_Replica);
const baseClickhouseConfig_ExternalDictionary_ClickhouseSource = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.ClickhouseSource",
    db: "",
    table: "",
    host: "",
    port: 0,
    user: "",
    password: "",
    where: "",
};
exports.ClickhouseConfig_ExternalDictionary_ClickhouseSource = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.ClickhouseSource",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.db !== "") {
            writer.uint32(10).string(message.db);
        }
        if (message.table !== "") {
            writer.uint32(18).string(message.table);
        }
        if (message.host !== "") {
            writer.uint32(26).string(message.host);
        }
        if (message.port !== 0) {
            writer.uint32(32).int64(message.port);
        }
        if (message.user !== "") {
            writer.uint32(42).string(message.user);
        }
        if (message.password !== "") {
            writer.uint32(50).string(message.password);
        }
        if (message.where !== "") {
            writer.uint32(58).string(message.where);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_ClickhouseSource);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.db = reader.string();
                    break;
                case 2:
                    message.table = reader.string();
                    break;
                case 3:
                    message.host = reader.string();
                    break;
                case 4:
                    message.port = longToNumber(reader.int64());
                    break;
                case 5:
                    message.user = reader.string();
                    break;
                case 6:
                    message.password = reader.string();
                    break;
                case 7:
                    message.where = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_ClickhouseSource);
        message.db =
            object.db !== undefined && object.db !== null ? String(object.db) : "";
        message.table =
            object.table !== undefined && object.table !== null
                ? String(object.table)
                : "";
        message.host =
            object.host !== undefined && object.host !== null
                ? String(object.host)
                : "";
        message.port =
            object.port !== undefined && object.port !== null
                ? Number(object.port)
                : 0;
        message.user =
            object.user !== undefined && object.user !== null
                ? String(object.user)
                : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : "";
        message.where =
            object.where !== undefined && object.where !== null
                ? String(object.where)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.db !== undefined && (obj.db = message.db);
        message.table !== undefined && (obj.table = message.table);
        message.host !== undefined && (obj.host = message.host);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined && (obj.password = message.password);
        message.where !== undefined && (obj.where = message.where);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_ClickhouseSource);
        message.db = (_a = object.db) !== null && _a !== void 0 ? _a : "";
        message.table = (_b = object.table) !== null && _b !== void 0 ? _b : "";
        message.host = (_c = object.host) !== null && _c !== void 0 ? _c : "";
        message.port = (_d = object.port) !== null && _d !== void 0 ? _d : 0;
        message.user = (_e = object.user) !== null && _e !== void 0 ? _e : "";
        message.password = (_f = object.password) !== null && _f !== void 0 ? _f : "";
        message.where = (_g = object.where) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_ExternalDictionary_ClickhouseSource.$type, exports.ClickhouseConfig_ExternalDictionary_ClickhouseSource);
const baseClickhouseConfig_ExternalDictionary_MongodbSource = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MongodbSource",
    db: "",
    collection: "",
    host: "",
    port: 0,
    user: "",
    password: "",
};
exports.ClickhouseConfig_ExternalDictionary_MongodbSource = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.MongodbSource",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.db !== "") {
            writer.uint32(10).string(message.db);
        }
        if (message.collection !== "") {
            writer.uint32(18).string(message.collection);
        }
        if (message.host !== "") {
            writer.uint32(26).string(message.host);
        }
        if (message.port !== 0) {
            writer.uint32(32).int64(message.port);
        }
        if (message.user !== "") {
            writer.uint32(42).string(message.user);
        }
        if (message.password !== "") {
            writer.uint32(50).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_MongodbSource);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.db = reader.string();
                    break;
                case 2:
                    message.collection = reader.string();
                    break;
                case 3:
                    message.host = reader.string();
                    break;
                case 4:
                    message.port = longToNumber(reader.int64());
                    break;
                case 5:
                    message.user = reader.string();
                    break;
                case 6:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_MongodbSource);
        message.db =
            object.db !== undefined && object.db !== null ? String(object.db) : "";
        message.collection =
            object.collection !== undefined && object.collection !== null
                ? String(object.collection)
                : "";
        message.host =
            object.host !== undefined && object.host !== null
                ? String(object.host)
                : "";
        message.port =
            object.port !== undefined && object.port !== null
                ? Number(object.port)
                : 0;
        message.user =
            object.user !== undefined && object.user !== null
                ? String(object.user)
                : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.db !== undefined && (obj.db = message.db);
        message.collection !== undefined && (obj.collection = message.collection);
        message.host !== undefined && (obj.host = message.host);
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined && (obj.password = message.password);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_MongodbSource);
        message.db = (_a = object.db) !== null && _a !== void 0 ? _a : "";
        message.collection = (_b = object.collection) !== null && _b !== void 0 ? _b : "";
        message.host = (_c = object.host) !== null && _c !== void 0 ? _c : "";
        message.port = (_d = object.port) !== null && _d !== void 0 ? _d : 0;
        message.user = (_e = object.user) !== null && _e !== void 0 ? _e : "";
        message.password = (_f = object.password) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_ExternalDictionary_MongodbSource.$type, exports.ClickhouseConfig_ExternalDictionary_MongodbSource);
const baseClickhouseConfig_ExternalDictionary_PostgresqlSource = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.PostgresqlSource",
    db: "",
    table: "",
    hosts: "",
    port: 0,
    user: "",
    password: "",
    invalidateQuery: "",
    sslMode: 0,
};
exports.ClickhouseConfig_ExternalDictionary_PostgresqlSource = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.PostgresqlSource",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.db !== "") {
            writer.uint32(10).string(message.db);
        }
        if (message.table !== "") {
            writer.uint32(18).string(message.table);
        }
        for (const v of message.hosts) {
            writer.uint32(26).string(v);
        }
        if (message.port !== 0) {
            writer.uint32(32).int64(message.port);
        }
        if (message.user !== "") {
            writer.uint32(42).string(message.user);
        }
        if (message.password !== "") {
            writer.uint32(50).string(message.password);
        }
        if (message.invalidateQuery !== "") {
            writer.uint32(58).string(message.invalidateQuery);
        }
        if (message.sslMode !== 0) {
            writer.uint32(64).int32(message.sslMode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_PostgresqlSource);
        message.hosts = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.db = reader.string();
                    break;
                case 2:
                    message.table = reader.string();
                    break;
                case 3:
                    message.hosts.push(reader.string());
                    break;
                case 4:
                    message.port = longToNumber(reader.int64());
                    break;
                case 5:
                    message.user = reader.string();
                    break;
                case 6:
                    message.password = reader.string();
                    break;
                case 7:
                    message.invalidateQuery = reader.string();
                    break;
                case 8:
                    message.sslMode = reader.int32();
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
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_PostgresqlSource);
        message.db =
            object.db !== undefined && object.db !== null ? String(object.db) : "";
        message.table =
            object.table !== undefined && object.table !== null
                ? String(object.table)
                : "";
        message.hosts = ((_a = object.hosts) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.port =
            object.port !== undefined && object.port !== null
                ? Number(object.port)
                : 0;
        message.user =
            object.user !== undefined && object.user !== null
                ? String(object.user)
                : "";
        message.password =
            object.password !== undefined && object.password !== null
                ? String(object.password)
                : "";
        message.invalidateQuery =
            object.invalidateQuery !== undefined && object.invalidateQuery !== null
                ? String(object.invalidateQuery)
                : "";
        message.sslMode =
            object.sslMode !== undefined && object.sslMode !== null
                ? clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeFromJSON(object.sslMode)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.db !== undefined && (obj.db = message.db);
        message.table !== undefined && (obj.table = message.table);
        if (message.hosts) {
            obj.hosts = message.hosts.map((e) => e);
        }
        else {
            obj.hosts = [];
        }
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.user !== undefined && (obj.user = message.user);
        message.password !== undefined && (obj.password = message.password);
        message.invalidateQuery !== undefined &&
            (obj.invalidateQuery = message.invalidateQuery);
        message.sslMode !== undefined &&
            (obj.sslMode =
                clickhouseConfig_ExternalDictionary_PostgresqlSource_SslModeToJSON(message.sslMode));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_PostgresqlSource);
        message.db = (_a = object.db) !== null && _a !== void 0 ? _a : "";
        message.table = (_b = object.table) !== null && _b !== void 0 ? _b : "";
        message.hosts = ((_c = object.hosts) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.port = (_d = object.port) !== null && _d !== void 0 ? _d : 0;
        message.user = (_e = object.user) !== null && _e !== void 0 ? _e : "";
        message.password = (_f = object.password) !== null && _f !== void 0 ? _f : "";
        message.invalidateQuery = (_g = object.invalidateQuery) !== null && _g !== void 0 ? _g : "";
        message.sslMode = (_h = object.sslMode) !== null && _h !== void 0 ? _h : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_ExternalDictionary_PostgresqlSource.$type, exports.ClickhouseConfig_ExternalDictionary_PostgresqlSource);
const baseClickhouseConfig_ExternalDictionary_Structure = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure",
};
exports.ClickhouseConfig_ExternalDictionary_Structure = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== undefined) {
            exports.ClickhouseConfig_ExternalDictionary_Structure_Id.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.key !== undefined) {
            exports.ClickhouseConfig_ExternalDictionary_Structure_Key.encode(message.key, writer.uint32(26).fork()).ldelim();
        }
        if (message.rangeMin !== undefined) {
            exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.encode(message.rangeMin, writer.uint32(34).fork()).ldelim();
        }
        if (message.rangeMax !== undefined) {
            exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.encode(message.rangeMax, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.attributes) {
            exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_Structure);
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = exports.ClickhouseConfig_ExternalDictionary_Structure_Id.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.key =
                        exports.ClickhouseConfig_ExternalDictionary_Structure_Key.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.rangeMin =
                        exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.rangeMax =
                        exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.attributes.push(exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_Structure);
        message.id =
            object.id !== undefined && object.id !== null
                ? exports.ClickhouseConfig_ExternalDictionary_Structure_Id.fromJSON(object.id)
                : undefined;
        message.key =
            object.key !== undefined && object.key !== null
                ? exports.ClickhouseConfig_ExternalDictionary_Structure_Key.fromJSON(object.key)
                : undefined;
        message.rangeMin =
            object.rangeMin !== undefined && object.rangeMin !== null
                ? exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromJSON(object.rangeMin)
                : undefined;
        message.rangeMax =
            object.rangeMax !== undefined && object.rangeMax !== null
                ? exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromJSON(object.rangeMax)
                : undefined;
        message.attributes = ((_a = object.attributes) !== null && _a !== void 0 ? _a : []).map((e) => exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id
                ? exports.ClickhouseConfig_ExternalDictionary_Structure_Id.toJSON(message.id)
                : undefined);
        message.key !== undefined &&
            (obj.key = message.key
                ? exports.ClickhouseConfig_ExternalDictionary_Structure_Key.toJSON(message.key)
                : undefined);
        message.rangeMin !== undefined &&
            (obj.rangeMin = message.rangeMin
                ? exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.toJSON(message.rangeMin)
                : undefined);
        message.rangeMax !== undefined &&
            (obj.rangeMax = message.rangeMax
                ? exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.toJSON(message.rangeMax)
                : undefined);
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e
                ? exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.toJSON(e)
                : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_Structure);
        message.id =
            object.id !== undefined && object.id !== null
                ? exports.ClickhouseConfig_ExternalDictionary_Structure_Id.fromPartial(object.id)
                : undefined;
        message.key =
            object.key !== undefined && object.key !== null
                ? exports.ClickhouseConfig_ExternalDictionary_Structure_Key.fromPartial(object.key)
                : undefined;
        message.rangeMin =
            object.rangeMin !== undefined && object.rangeMin !== null
                ? exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromPartial(object.rangeMin)
                : undefined;
        message.rangeMax =
            object.rangeMax !== undefined && object.rangeMax !== null
                ? exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromPartial(object.rangeMax)
                : undefined;
        message.attributes =
            ((_a = object.attributes) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_ExternalDictionary_Structure.$type, exports.ClickhouseConfig_ExternalDictionary_Structure);
const baseClickhouseConfig_ExternalDictionary_Structure_Attribute = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Attribute",
    name: "",
    type: "",
    nullValue: "",
    expression: "",
    hierarchical: false,
    injective: false,
};
exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Attribute",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.nullValue !== "") {
            writer.uint32(26).string(message.nullValue);
        }
        if (message.expression !== "") {
            writer.uint32(34).string(message.expression);
        }
        if (message.hierarchical === true) {
            writer.uint32(40).bool(message.hierarchical);
        }
        if (message.injective === true) {
            writer.uint32(48).bool(message.injective);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_Structure_Attribute);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.nullValue = reader.string();
                    break;
                case 4:
                    message.expression = reader.string();
                    break;
                case 5:
                    message.hierarchical = reader.bool();
                    break;
                case 6:
                    message.injective = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_Structure_Attribute);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? String(object.type)
                : "";
        message.nullValue =
            object.nullValue !== undefined && object.nullValue !== null
                ? String(object.nullValue)
                : "";
        message.expression =
            object.expression !== undefined && object.expression !== null
                ? String(object.expression)
                : "";
        message.hierarchical =
            object.hierarchical !== undefined && object.hierarchical !== null
                ? Boolean(object.hierarchical)
                : false;
        message.injective =
            object.injective !== undefined && object.injective !== null
                ? Boolean(object.injective)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.type !== undefined && (obj.type = message.type);
        message.nullValue !== undefined && (obj.nullValue = message.nullValue);
        message.expression !== undefined && (obj.expression = message.expression);
        message.hierarchical !== undefined &&
            (obj.hierarchical = message.hierarchical);
        message.injective !== undefined && (obj.injective = message.injective);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_Structure_Attribute);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : "";
        message.nullValue = (_c = object.nullValue) !== null && _c !== void 0 ? _c : "";
        message.expression = (_d = object.expression) !== null && _d !== void 0 ? _d : "";
        message.hierarchical = (_e = object.hierarchical) !== null && _e !== void 0 ? _e : false;
        message.injective = (_f = object.injective) !== null && _f !== void 0 ? _f : false;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.$type, exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute);
const baseClickhouseConfig_ExternalDictionary_Structure_Id = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Id",
    name: "",
};
exports.ClickhouseConfig_ExternalDictionary_Structure_Id = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Id",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_Structure_Id);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_Structure_Id);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_Structure_Id);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_ExternalDictionary_Structure_Id.$type, exports.ClickhouseConfig_ExternalDictionary_Structure_Id);
const baseClickhouseConfig_ExternalDictionary_Structure_Key = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Key",
};
exports.ClickhouseConfig_ExternalDictionary_Structure_Key = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Structure.Key",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.attributes) {
            exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_Structure_Key);
        message.attributes = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.attributes.push(exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_Structure_Key);
        message.attributes = ((_a = object.attributes) !== null && _a !== void 0 ? _a : []).map((e) => exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.attributes) {
            obj.attributes = message.attributes.map((e) => e
                ? exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.toJSON(e)
                : undefined);
        }
        else {
            obj.attributes = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_Structure_Key);
        message.attributes =
            ((_a = object.attributes) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ClickhouseConfig_ExternalDictionary_Structure_Attribute.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_ExternalDictionary_Structure_Key.$type, exports.ClickhouseConfig_ExternalDictionary_Structure_Key);
const baseClickhouseConfig_ExternalDictionary_Layout = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Layout",
    type: 0,
    sizeInCells: 0,
};
exports.ClickhouseConfig_ExternalDictionary_Layout = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Layout",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.sizeInCells !== 0) {
            writer.uint32(16).int64(message.sizeInCells);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_Layout);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.sizeInCells = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_Layout);
        message.type =
            object.type !== undefined && object.type !== null
                ? clickhouseConfig_ExternalDictionary_Layout_TypeFromJSON(object.type)
                : 0;
        message.sizeInCells =
            object.sizeInCells !== undefined && object.sizeInCells !== null
                ? Number(object.sizeInCells)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = clickhouseConfig_ExternalDictionary_Layout_TypeToJSON(message.type));
        message.sizeInCells !== undefined &&
            (obj.sizeInCells = Math.round(message.sizeInCells));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_Layout);
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.sizeInCells = (_b = object.sizeInCells) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_ExternalDictionary_Layout.$type, exports.ClickhouseConfig_ExternalDictionary_Layout);
const baseClickhouseConfig_ExternalDictionary_Range = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Range",
    min: 0,
    max: 0,
};
exports.ClickhouseConfig_ExternalDictionary_Range = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.ExternalDictionary.Range",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.min !== 0) {
            writer.uint32(8).int64(message.min);
        }
        if (message.max !== 0) {
            writer.uint32(16).int64(message.max);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_Range);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.min = longToNumber(reader.int64());
                    break;
                case 2:
                    message.max = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_Range);
        message.min =
            object.min !== undefined && object.min !== null ? Number(object.min) : 0;
        message.max =
            object.max !== undefined && object.max !== null ? Number(object.max) : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.min !== undefined && (obj.min = Math.round(message.min));
        message.max !== undefined && (obj.max = Math.round(message.max));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseClickhouseConfig_ExternalDictionary_Range);
        message.min = (_a = object.min) !== null && _a !== void 0 ? _a : 0;
        message.max = (_b = object.max) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_ExternalDictionary_Range.$type, exports.ClickhouseConfig_ExternalDictionary_Range);
const baseClickhouseConfig_GraphiteRollup = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup",
    name: "",
};
exports.ClickhouseConfig_GraphiteRollup = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.patterns) {
            exports.ClickhouseConfig_GraphiteRollup_Pattern.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_GraphiteRollup);
        message.patterns = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.patterns.push(exports.ClickhouseConfig_GraphiteRollup_Pattern.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseClickhouseConfig_GraphiteRollup);
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.patterns = ((_a = object.patterns) !== null && _a !== void 0 ? _a : []).map((e) => exports.ClickhouseConfig_GraphiteRollup_Pattern.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        if (message.patterns) {
            obj.patterns = message.patterns.map((e) => e ? exports.ClickhouseConfig_GraphiteRollup_Pattern.toJSON(e) : undefined);
        }
        else {
            obj.patterns = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseClickhouseConfig_GraphiteRollup);
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.patterns =
            ((_b = object.patterns) === null || _b === void 0 ? void 0 : _b.map((e) => exports.ClickhouseConfig_GraphiteRollup_Pattern.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_GraphiteRollup.$type, exports.ClickhouseConfig_GraphiteRollup);
const baseClickhouseConfig_GraphiteRollup_Pattern = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern",
    regexp: "",
    function: "",
};
exports.ClickhouseConfig_GraphiteRollup_Pattern = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.regexp !== "") {
            writer.uint32(10).string(message.regexp);
        }
        if (message.function !== "") {
            writer.uint32(18).string(message.function);
        }
        for (const v of message.retention) {
            exports.ClickhouseConfig_GraphiteRollup_Pattern_Retention.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_GraphiteRollup_Pattern);
        message.retention = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.regexp = reader.string();
                    break;
                case 2:
                    message.function = reader.string();
                    break;
                case 3:
                    message.retention.push(exports.ClickhouseConfig_GraphiteRollup_Pattern_Retention.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseClickhouseConfig_GraphiteRollup_Pattern);
        message.regexp =
            object.regexp !== undefined && object.regexp !== null
                ? String(object.regexp)
                : "";
        message.function =
            object.function !== undefined && object.function !== null
                ? String(object.function)
                : "";
        message.retention = ((_a = object.retention) !== null && _a !== void 0 ? _a : []).map((e) => exports.ClickhouseConfig_GraphiteRollup_Pattern_Retention.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.regexp !== undefined && (obj.regexp = message.regexp);
        message.function !== undefined && (obj.function = message.function);
        if (message.retention) {
            obj.retention = message.retention.map((e) => e
                ? exports.ClickhouseConfig_GraphiteRollup_Pattern_Retention.toJSON(e)
                : undefined);
        }
        else {
            obj.retention = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseClickhouseConfig_GraphiteRollup_Pattern);
        message.regexp = (_a = object.regexp) !== null && _a !== void 0 ? _a : "";
        message.function = (_b = object.function) !== null && _b !== void 0 ? _b : "";
        message.retention =
            ((_c = object.retention) === null || _c === void 0 ? void 0 : _c.map((e) => exports.ClickhouseConfig_GraphiteRollup_Pattern_Retention.fromPartial(e))) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_GraphiteRollup_Pattern.$type, exports.ClickhouseConfig_GraphiteRollup_Pattern);
const baseClickhouseConfig_GraphiteRollup_Pattern_Retention = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern.Retention",
    age: 0,
    precision: 0,
};
exports.ClickhouseConfig_GraphiteRollup_Pattern_Retention = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfig.GraphiteRollup.Pattern.Retention",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.age !== 0) {
            writer.uint32(8).int64(message.age);
        }
        if (message.precision !== 0) {
            writer.uint32(16).int64(message.precision);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfig_GraphiteRollup_Pattern_Retention);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.age = longToNumber(reader.int64());
                    break;
                case 2:
                    message.precision = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseConfig_GraphiteRollup_Pattern_Retention);
        message.age =
            object.age !== undefined && object.age !== null ? Number(object.age) : 0;
        message.precision =
            object.precision !== undefined && object.precision !== null
                ? Number(object.precision)
                : 0;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.age !== undefined && (obj.age = Math.round(message.age));
        message.precision !== undefined &&
            (obj.precision = Math.round(message.precision));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseClickhouseConfig_GraphiteRollup_Pattern_Retention);
        message.age = (_a = object.age) !== null && _a !== void 0 ? _a : 0;
        message.precision = (_b = object.precision) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfig_GraphiteRollup_Pattern_Retention.$type, exports.ClickhouseConfig_GraphiteRollup_Pattern_Retention);
const baseClickhouseConfigSet = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfigSet",
};
exports.ClickhouseConfigSet = {
    $type: "yandex.cloud.mdb.clickhouse.v1.config.ClickhouseConfigSet",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.effectiveConfig !== undefined) {
            exports.ClickhouseConfig.encode(message.effectiveConfig, writer.uint32(10).fork()).ldelim();
        }
        if (message.userConfig !== undefined) {
            exports.ClickhouseConfig.encode(message.userConfig, writer.uint32(18).fork()).ldelim();
        }
        if (message.defaultConfig !== undefined) {
            exports.ClickhouseConfig.encode(message.defaultConfig, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseClickhouseConfigSet);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.effectiveConfig = exports.ClickhouseConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.userConfig = exports.ClickhouseConfig.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.defaultConfig = exports.ClickhouseConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseClickhouseConfigSet);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.ClickhouseConfig.fromJSON(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.ClickhouseConfig.fromJSON(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.ClickhouseConfig.fromJSON(object.defaultConfig)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.effectiveConfig !== undefined &&
            (obj.effectiveConfig = message.effectiveConfig
                ? exports.ClickhouseConfig.toJSON(message.effectiveConfig)
                : undefined);
        message.userConfig !== undefined &&
            (obj.userConfig = message.userConfig
                ? exports.ClickhouseConfig.toJSON(message.userConfig)
                : undefined);
        message.defaultConfig !== undefined &&
            (obj.defaultConfig = message.defaultConfig
                ? exports.ClickhouseConfig.toJSON(message.defaultConfig)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseClickhouseConfigSet);
        message.effectiveConfig =
            object.effectiveConfig !== undefined && object.effectiveConfig !== null
                ? exports.ClickhouseConfig.fromPartial(object.effectiveConfig)
                : undefined;
        message.userConfig =
            object.userConfig !== undefined && object.userConfig !== null
                ? exports.ClickhouseConfig.fromPartial(object.userConfig)
                : undefined;
        message.defaultConfig =
            object.defaultConfig !== undefined && object.defaultConfig !== null
                ? exports.ClickhouseConfig.fromPartial(object.defaultConfig)
                : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.ClickhouseConfigSet.$type, exports.ClickhouseConfigSet);
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
