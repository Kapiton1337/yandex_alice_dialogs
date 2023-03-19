import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../google/protobuf/duration";
export declare const protobufPackage = "yandex.cloud.compute.v1";
export interface SnapshotSchedule {
    $type: "yandex.cloud.compute.v1.SnapshotSchedule";
    /** ID of the snapshot schedule policy. */
    id: string;
    /** ID of the folder that the scheduler policy belongs to. */
    folderId: string;
    createdAt?: Date;
    /**
     * Name of the schedule policy.
     * The name is unique within the folder.
     */
    name: string;
    /** Description of the schedule policy. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
    status: SnapshotSchedule_Status;
    /** schedule properties */
    schedulePolicy?: SchedulePolicy;
    retentionPeriod?: Duration | undefined;
    snapshotCount: number | undefined;
    /** properties to create snapshot with. */
    snapshotSpec?: SnapshotSpec;
}
export declare enum SnapshotSchedule_Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    INACTIVE = 3,
    DELETING = 4,
    UPDATING = 5,
    UNRECOGNIZED = -1
}
export declare function snapshotSchedule_StatusFromJSON(object: any): SnapshotSchedule_Status;
export declare function snapshotSchedule_StatusToJSON(object: SnapshotSchedule_Status): string;
export interface SnapshotSchedule_LabelsEntry {
    $type: "yandex.cloud.compute.v1.SnapshotSchedule.LabelsEntry";
    key: string;
    value: string;
}
export interface SchedulePolicy {
    $type: "yandex.cloud.compute.v1.SchedulePolicy";
    /** start time for the first run. */
    startAt?: Date;
    /** cron format (* * * * *) */
    expression: string;
}
/** Properties of created snapshot backup */
export interface SnapshotSpec {
    $type: "yandex.cloud.compute.v1.SnapshotSpec";
    /** Description of the created snapshot. */
    description: string;
    /** Resource labels as `key:value` pairs. */
    labels: {
        [key: string]: string;
    };
}
export interface SnapshotSpec_LabelsEntry {
    $type: "yandex.cloud.compute.v1.SnapshotSpec.LabelsEntry";
    key: string;
    value: string;
}
export declare const SnapshotSchedule: {
    $type: "yandex.cloud.compute.v1.SnapshotSchedule";
    encode(message: SnapshotSchedule, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SnapshotSchedule;
    fromJSON(object: any): SnapshotSchedule;
    toJSON(message: SnapshotSchedule): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        status?: SnapshotSchedule_Status | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        schedulePolicy?: {
            startAt?: Date | undefined;
            expression?: string | undefined;
        } | undefined;
        retentionPeriod?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        snapshotCount?: number | undefined;
        snapshotSpec?: {
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        status?: SnapshotSchedule_Status | undefined;
        name?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        schedulePolicy?: ({
            startAt?: Date | undefined;
            expression?: string | undefined;
        } & {
            startAt?: Date | undefined;
            expression?: string | undefined;
        } & Record<Exclude<keyof I["schedulePolicy"], "$type" | "startAt" | "expression">, never>) | undefined;
        retentionPeriod?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["retentionPeriod"], "$type" | "seconds" | "nanos">, never>) | undefined;
        snapshotCount?: number | undefined;
        snapshotSpec?: ({
            description?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["snapshotSpec"]["labels"], string | number>, never>) | undefined;
        } & Record<Exclude<keyof I["snapshotSpec"], "$type" | "description" | "labels">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "createdAt" | "folderId" | "status" | "name" | "labels" | "schedulePolicy" | "retentionPeriod" | "snapshotCount" | "snapshotSpec">, never>>(object: I): SnapshotSchedule;
};
export declare const SnapshotSchedule_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.SnapshotSchedule.LabelsEntry";
    encode(message: SnapshotSchedule_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SnapshotSchedule_LabelsEntry;
    fromJSON(object: any): SnapshotSchedule_LabelsEntry;
    toJSON(message: SnapshotSchedule_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): SnapshotSchedule_LabelsEntry;
};
export declare const SchedulePolicy: {
    $type: "yandex.cloud.compute.v1.SchedulePolicy";
    encode(message: SchedulePolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SchedulePolicy;
    fromJSON(object: any): SchedulePolicy;
    toJSON(message: SchedulePolicy): unknown;
    fromPartial<I extends {
        startAt?: Date | undefined;
        expression?: string | undefined;
    } & {
        startAt?: Date | undefined;
        expression?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "startAt" | "expression">, never>>(object: I): SchedulePolicy;
};
export declare const SnapshotSpec: {
    $type: "yandex.cloud.compute.v1.SnapshotSpec";
    encode(message: SnapshotSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SnapshotSpec;
    fromJSON(object: any): SnapshotSpec;
    toJSON(message: SnapshotSpec): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "labels">, never>>(object: I): SnapshotSpec;
};
export declare const SnapshotSpec_LabelsEntry: {
    $type: "yandex.cloud.compute.v1.SnapshotSpec.LabelsEntry";
    encode(message: SnapshotSpec_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SnapshotSpec_LabelsEntry;
    fromJSON(object: any): SnapshotSpec_LabelsEntry;
    toJSON(message: SnapshotSpec_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): SnapshotSpec_LabelsEntry;
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
