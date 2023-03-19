import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface PlacementGroup {
    $type: "yandex.cloud.compute.v1.PlacementGroup";
    /** ID of the placement group. Generated at creation time. */
    id: string;
    /** ID of the folder that the placement group belongs to. */
    folderId: string;
    /** Creation timestamp. */
    createdAt?: Date;
    /**
     * Name of the placement group.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the placement group. 0-256 characters long. */
    description: string;
    /** Placement group labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    /**
     * Anti-affinity placement strategy (`spread`). Instances are distributed
     * over distinct failure domains.
     */
    spreadPlacementStrategy?: SpreadPlacementStrategy | undefined;
}
export interface PlacementGroup_LabelsEntry {
    $type: "yandex.cloud.compute.v1.PlacementGroup.LabelsEntry";
    key: string;
    value: string;
}
/**
 * This is an empty structure that must be passed to explicitly
 * specify the required placement strategy.
 */
export interface SpreadPlacementStrategy {
    $type: "yandex.cloud.compute.v1.SpreadPlacementStrategy";
}
export declare const PlacementGroup: {
    $type: "yandex.cloud.compute.v1.PlacementGroup";
    encode(message: PlacementGroup, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PlacementGroup;
    fromJSON(object: any): PlacementGroup;
    toJSON(message: PlacementGroup): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        spreadPlacementStrategy?: {} | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        name?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        spreadPlacementStrategy?: ({} & {} & Record<Exclude<keyof I["spreadPlacementStrategy"], "$type">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "createdAt" | "folderId" | "name" | "labels" | "spreadPlacementStrategy">, never>>(object: I): PlacementGroup;
};
export declare const PlacementGroup_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.PlacementGroup.LabelsEntry";
    encode(message: PlacementGroup_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PlacementGroup_LabelsEntry;
    fromJSON(object: any): PlacementGroup_LabelsEntry;
    toJSON(message: PlacementGroup_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): PlacementGroup_LabelsEntry;
};
export declare const SpreadPlacementStrategy: {
    $type: "yandex.cloud.compute.v1.SpreadPlacementStrategy";
    encode(_: SpreadPlacementStrategy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SpreadPlacementStrategy;
    fromJSON(_: any): SpreadPlacementStrategy;
    toJSON(_: SpreadPlacementStrategy): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): SpreadPlacementStrategy;
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
