import _m0 from "protobufjs/minimal";
import { Duration } from "../../../../../google/protobuf/duration";
export declare const protobufPackage = "yandex.cloud.serverless.containers.v1";
export interface Container {
    $type: "yandex.cloud.serverless.containers.v1.Container";
    id: string;
    folderId: string;
    createdAt?: Date;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
    url: string;
    status: Container_Status;
}
export declare enum Container_Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    DELETING = 3,
    ERROR = 4,
    UNRECOGNIZED = -1
}
export declare function container_StatusFromJSON(object: any): Container_Status;
export declare function container_StatusToJSON(object: Container_Status): string;
export interface Container_LabelsEntry {
    $type: "yandex.cloud.serverless.containers.v1.Container.LabelsEntry";
    key: string;
    value: string;
}
export interface Revision {
    $type: "yandex.cloud.serverless.containers.v1.Revision";
    id: string;
    containerId: string;
    description: string;
    createdAt?: Date;
    image?: Image;
    resources?: Resources;
    executionTimeout?: Duration;
    concurrency: number;
    serviceAccountId: string;
    status: Revision_Status;
    secrets: Secret[];
    connectivity?: Connectivity;
    provisionPolicy?: ProvisionPolicy;
}
export declare enum Revision_Status {
    STATUS_UNSPECIFIED = 0,
    CREATING = 1,
    ACTIVE = 2,
    OBSOLETE = 3,
    UNRECOGNIZED = -1
}
export declare function revision_StatusFromJSON(object: any): Revision_Status;
export declare function revision_StatusToJSON(object: Revision_Status): string;
export interface Image {
    $type: "yandex.cloud.serverless.containers.v1.Image";
    imageUrl: string;
    imageDigest: string;
    command?: Command;
    args?: Args;
    environment: {
        [key: string]: string;
    };
    workingDir: string;
}
export interface Image_EnvironmentEntry {
    $type: "yandex.cloud.serverless.containers.v1.Image.EnvironmentEntry";
    key: string;
    value: string;
}
export interface Command {
    $type: "yandex.cloud.serverless.containers.v1.Command";
    command: string[];
}
export interface Args {
    $type: "yandex.cloud.serverless.containers.v1.Args";
    args: string[];
}
export interface Resources {
    $type: "yandex.cloud.serverless.containers.v1.Resources";
    memory: number;
    cores: number;
    coreFraction: number;
}
export interface ProvisionPolicy {
    $type: "yandex.cloud.serverless.containers.v1.ProvisionPolicy";
    minInstances: number;
}
export interface Secret {
    $type: "yandex.cloud.serverless.containers.v1.Secret";
    id: string;
    versionId: string;
    key: string;
    environmentVariable: string | undefined;
}
export interface Connectivity {
    $type: "yandex.cloud.serverless.containers.v1.Connectivity";
    networkId: string;
    subnetIds: string[];
}
export declare const Container: {
    $type: "yandex.cloud.serverless.containers.v1.Container";
    encode(message: Container, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Container;
    fromJSON(object: any): Container;
    toJSON(message: Container): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        status?: Container_Status | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        url?: string | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        folderId?: string | undefined;
        status?: Container_Status | undefined;
        name?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        url?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "createdAt" | "folderId" | "status" | "name" | "labels" | "url">, never>>(object: I): Container;
};
export declare const Container_LabelsEntry: {
    $type: "yandex.cloud.serverless.containers.v1.Container.LabelsEntry";
    encode(message: Container_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Container_LabelsEntry;
    fromJSON(object: any): Container_LabelsEntry;
    toJSON(message: Container_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Container_LabelsEntry;
};
export declare const Revision: {
    $type: "yandex.cloud.serverless.containers.v1.Revision";
    encode(message: Revision, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Revision;
    fromJSON(object: any): Revision;
    toJSON(message: Revision): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        status?: Revision_Status | undefined;
        image?: {
            imageUrl?: string | undefined;
            args?: {
                args?: string[] | undefined;
            } | undefined;
            environment?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            imageDigest?: string | undefined;
            command?: {
                command?: string[] | undefined;
            } | undefined;
            workingDir?: string | undefined;
        } | undefined;
        resources?: {
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
        } | undefined;
        serviceAccountId?: string | undefined;
        secrets?: {
            id?: string | undefined;
            key?: string | undefined;
            versionId?: string | undefined;
            environmentVariable?: string | undefined;
        }[] | undefined;
        connectivity?: {
            networkId?: string | undefined;
            subnetIds?: string[] | undefined;
        } | undefined;
        containerId?: string | undefined;
        concurrency?: number | undefined;
        executionTimeout?: {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } | undefined;
        provisionPolicy?: {
            minInstances?: number | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        id?: string | undefined;
        createdAt?: Date | undefined;
        status?: Revision_Status | undefined;
        image?: ({
            imageUrl?: string | undefined;
            args?: {
                args?: string[] | undefined;
            } | undefined;
            environment?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            imageDigest?: string | undefined;
            command?: {
                command?: string[] | undefined;
            } | undefined;
            workingDir?: string | undefined;
        } & {
            imageUrl?: string | undefined;
            args?: ({
                args?: string[] | undefined;
            } & {
                args?: (string[] & string[] & Record<Exclude<keyof I["image"]["args"]["args"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["image"]["args"], "$type" | "args">, never>) | undefined;
            environment?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["image"]["environment"], string | number>, never>) | undefined;
            imageDigest?: string | undefined;
            command?: ({
                command?: string[] | undefined;
            } & {
                command?: (string[] & string[] & Record<Exclude<keyof I["image"]["command"]["command"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["image"]["command"], "$type" | "command">, never>) | undefined;
            workingDir?: string | undefined;
        } & Record<Exclude<keyof I["image"], "$type" | "imageUrl" | "args" | "environment" | "imageDigest" | "command" | "workingDir">, never>) | undefined;
        resources?: ({
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
        } & {
            memory?: number | undefined;
            cores?: number | undefined;
            coreFraction?: number | undefined;
        } & Record<Exclude<keyof I["resources"], "$type" | "memory" | "cores" | "coreFraction">, never>) | undefined;
        serviceAccountId?: string | undefined;
        secrets?: ({
            id?: string | undefined;
            key?: string | undefined;
            versionId?: string | undefined;
            environmentVariable?: string | undefined;
        }[] & ({
            id?: string | undefined;
            key?: string | undefined;
            versionId?: string | undefined;
            environmentVariable?: string | undefined;
        } & {
            id?: string | undefined;
            key?: string | undefined;
            versionId?: string | undefined;
            environmentVariable?: string | undefined;
        } & Record<Exclude<keyof I["secrets"][number], "$type" | "id" | "key" | "versionId" | "environmentVariable">, never>)[] & Record<Exclude<keyof I["secrets"], "$type" | keyof {
            id?: string | undefined;
            key?: string | undefined;
            versionId?: string | undefined;
            environmentVariable?: string | undefined;
        }[]>, never>) | undefined;
        connectivity?: ({
            networkId?: string | undefined;
            subnetIds?: string[] | undefined;
        } & {
            networkId?: string | undefined;
            subnetIds?: (string[] & string[] & Record<Exclude<keyof I["connectivity"]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["connectivity"], "$type" | "networkId" | "subnetIds">, never>) | undefined;
        containerId?: string | undefined;
        concurrency?: number | undefined;
        executionTimeout?: ({
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: number | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["executionTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
        provisionPolicy?: ({
            minInstances?: number | undefined;
        } & {
            minInstances?: number | undefined;
        } & Record<Exclude<keyof I["provisionPolicy"], "$type" | "minInstances">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "id" | "createdAt" | "status" | "image" | "resources" | "serviceAccountId" | "secrets" | "connectivity" | "containerId" | "concurrency" | "executionTimeout" | "provisionPolicy">, never>>(object: I): Revision;
};
export declare const Image: {
    $type: "yandex.cloud.serverless.containers.v1.Image";
    encode(message: Image, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Image;
    fromJSON(object: any): Image;
    toJSON(message: Image): unknown;
    fromPartial<I extends {
        imageUrl?: string | undefined;
        args?: {
            args?: string[] | undefined;
        } | undefined;
        environment?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        imageDigest?: string | undefined;
        command?: {
            command?: string[] | undefined;
        } | undefined;
        workingDir?: string | undefined;
    } & {
        imageUrl?: string | undefined;
        args?: ({
            args?: string[] | undefined;
        } & {
            args?: (string[] & string[] & Record<Exclude<keyof I["args"]["args"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["args"], "$type" | "args">, never>) | undefined;
        environment?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["environment"], string | number>, never>) | undefined;
        imageDigest?: string | undefined;
        command?: ({
            command?: string[] | undefined;
        } & {
            command?: (string[] & string[] & Record<Exclude<keyof I["command"]["command"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["command"], "$type" | "command">, never>) | undefined;
        workingDir?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "imageUrl" | "args" | "environment" | "imageDigest" | "command" | "workingDir">, never>>(object: I): Image;
};
export declare const Image_EnvironmentEntry: {
    $type: "yandex.cloud.serverless.containers.v1.Image.EnvironmentEntry";
    encode(message: Image_EnvironmentEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Image_EnvironmentEntry;
    fromJSON(object: any): Image_EnvironmentEntry;
    toJSON(message: Image_EnvironmentEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): Image_EnvironmentEntry;
};
export declare const Command: {
    $type: "yandex.cloud.serverless.containers.v1.Command";
    encode(message: Command, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Command;
    fromJSON(object: any): Command;
    toJSON(message: Command): unknown;
    fromPartial<I extends {
        command?: string[] | undefined;
    } & {
        command?: (string[] & string[] & Record<Exclude<keyof I["command"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "command">, never>>(object: I): Command;
};
export declare const Args: {
    $type: "yandex.cloud.serverless.containers.v1.Args";
    encode(message: Args, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Args;
    fromJSON(object: any): Args;
    toJSON(message: Args): unknown;
    fromPartial<I extends {
        args?: string[] | undefined;
    } & {
        args?: (string[] & string[] & Record<Exclude<keyof I["args"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "args">, never>>(object: I): Args;
};
export declare const Resources: {
    $type: "yandex.cloud.serverless.containers.v1.Resources";
    encode(message: Resources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Resources;
    fromJSON(object: any): Resources;
    toJSON(message: Resources): unknown;
    fromPartial<I extends {
        memory?: number | undefined;
        cores?: number | undefined;
        coreFraction?: number | undefined;
    } & {
        memory?: number | undefined;
        cores?: number | undefined;
        coreFraction?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "memory" | "cores" | "coreFraction">, never>>(object: I): Resources;
};
export declare const ProvisionPolicy: {
    $type: "yandex.cloud.serverless.containers.v1.ProvisionPolicy";
    encode(message: ProvisionPolicy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProvisionPolicy;
    fromJSON(object: any): ProvisionPolicy;
    toJSON(message: ProvisionPolicy): unknown;
    fromPartial<I extends {
        minInstances?: number | undefined;
    } & {
        minInstances?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "minInstances">, never>>(object: I): ProvisionPolicy;
};
export declare const Secret: {
    $type: "yandex.cloud.serverless.containers.v1.Secret";
    encode(message: Secret, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Secret;
    fromJSON(object: any): Secret;
    toJSON(message: Secret): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        key?: string | undefined;
        versionId?: string | undefined;
        environmentVariable?: string | undefined;
    } & {
        id?: string | undefined;
        key?: string | undefined;
        versionId?: string | undefined;
        environmentVariable?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "id" | "key" | "versionId" | "environmentVariable">, never>>(object: I): Secret;
};
export declare const Connectivity: {
    $type: "yandex.cloud.serverless.containers.v1.Connectivity";
    encode(message: Connectivity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Connectivity;
    fromJSON(object: any): Connectivity;
    toJSON(message: Connectivity): unknown;
    fromPartial<I extends {
        networkId?: string | undefined;
        subnetIds?: string[] | undefined;
    } & {
        networkId?: string | undefined;
        subnetIds?: (string[] & string[] & Record<Exclude<keyof I["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "networkId" | "subnetIds">, never>>(object: I): Connectivity;
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
