import _m0 from "protobufjs/minimal";
import { Empty } from "../../../../../google/protobuf/empty";
export declare const protobufPackage = "yandex.cloud.datatransfer.v1.endpoint";
export declare enum ObjectTransferStage {
    OBJECT_TRANSFER_STAGE_UNSPECIFIED = 0,
    BEFORE_DATA = 1,
    AFTER_DATA = 2,
    NEVER = 3,
    UNRECOGNIZED = -1
}
export declare function objectTransferStageFromJSON(object: any): ObjectTransferStage;
export declare function objectTransferStageToJSON(object: ObjectTransferStage): string;
export declare enum CleanupPolicy {
    CLEANUP_POLICY_UNSPECIFIED = 0,
    DISABLED = 1,
    DROP = 2,
    TRUNCATE = 3,
    UNRECOGNIZED = -1
}
export declare function cleanupPolicyFromJSON(object: any): CleanupPolicy;
export declare function cleanupPolicyToJSON(object: CleanupPolicy): string;
export interface AltName {
    $type: "yandex.cloud.datatransfer.v1.endpoint.AltName";
    /** From table name */
    fromName: string;
    /** To table name */
    toName: string;
}
export interface Secret {
    $type: "yandex.cloud.datatransfer.v1.endpoint.Secret";
    /** Password */
    raw: string | undefined;
}
export interface TLSMode {
    $type: "yandex.cloud.datatransfer.v1.endpoint.TLSMode";
    disabled?: Empty | undefined;
    enabled?: TLSConfig | undefined;
}
export interface TLSConfig {
    $type: "yandex.cloud.datatransfer.v1.endpoint.TLSConfig";
    /**
     * CA certificate
     *
     * X.509 certificate of the certificate authority which issued the server's
     * certificate, in PEM format. When CA certificate is specified TLS is used to
     * connect to the server.
     */
    caCertificate: string;
}
export interface ColumnValue {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ColumnValue";
    stringValue: string | undefined;
}
export declare const AltName: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.AltName";
    encode(message: AltName, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AltName;
    fromJSON(object: any): AltName;
    toJSON(message: AltName): unknown;
    fromPartial<I extends {
        fromName?: string | undefined;
        toName?: string | undefined;
    } & {
        fromName?: string | undefined;
        toName?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "fromName" | "toName">, never>>(object: I): AltName;
};
export declare const Secret: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.Secret";
    encode(message: Secret, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Secret;
    fromJSON(object: any): Secret;
    toJSON(message: Secret): unknown;
    fromPartial<I extends {
        raw?: string | undefined;
    } & {
        raw?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "raw">, never>>(object: I): Secret;
};
export declare const TLSMode: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.TLSMode";
    encode(message: TLSMode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TLSMode;
    fromJSON(object: any): TLSMode;
    toJSON(message: TLSMode): unknown;
    fromPartial<I extends {
        enabled?: {
            caCertificate?: string | undefined;
        } | undefined;
        disabled?: {} | undefined;
    } & {
        enabled?: ({
            caCertificate?: string | undefined;
        } & {
            caCertificate?: string | undefined;
        } & Record<Exclude<keyof I["enabled"], "$type" | "caCertificate">, never>) | undefined;
        disabled?: ({} & {} & Record<Exclude<keyof I["disabled"], "$type">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "enabled" | "disabled">, never>>(object: I): TLSMode;
};
export declare const TLSConfig: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.TLSConfig";
    encode(message: TLSConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TLSConfig;
    fromJSON(object: any): TLSConfig;
    toJSON(message: TLSConfig): unknown;
    fromPartial<I extends {
        caCertificate?: string | undefined;
    } & {
        caCertificate?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "caCertificate">, never>>(object: I): TLSConfig;
};
export declare const ColumnValue: {
    $type: "yandex.cloud.datatransfer.v1.endpoint.ColumnValue";
    encode(message: ColumnValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ColumnValue;
    fromJSON(object: any): ColumnValue;
    toJSON(message: ColumnValue): unknown;
    fromPartial<I extends {
        stringValue?: string | undefined;
    } & {
        stringValue?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "stringValue">, never>>(object: I): ColumnValue;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P> | "$type">, never>;
export {};
