/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleUnaryCall, Client, ClientUnaryCall, Metadata, CallOptions, ServiceError } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { FieldMask } from "../../../../../google/protobuf/field_mask";
import { Resources, Connectivity, ProvisionPolicy, Command, Args, Container, Revision, Secret } from "../../../../../yandex/cloud/serverless/containers/v1/container";
import { Duration } from "../../../../../google/protobuf/duration";
import { Operation } from "../../../../../yandex/cloud/operation/operation";
import { ListAccessBindingsRequest, ListAccessBindingsResponse, SetAccessBindingsRequest, UpdateAccessBindingsRequest } from "../../../../../yandex/cloud/access/access";
export declare const protobufPackage = "yandex.cloud.serverless.containers.v1";
export interface GetContainerRequest {
    $type: "yandex.cloud.serverless.containers.v1.GetContainerRequest";
    containerId: string;
}
export interface ListContainersRequest {
    $type: "yandex.cloud.serverless.containers.v1.ListContainersRequest";
    folderId: string;
    pageSize: number;
    pageToken: string;
    filter: string;
}
export interface ListContainersResponse {
    $type: "yandex.cloud.serverless.containers.v1.ListContainersResponse";
    containers: Container[];
    nextPageToken: string;
}
export interface CreateContainerRequest {
    $type: "yandex.cloud.serverless.containers.v1.CreateContainerRequest";
    folderId: string;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
}
export interface CreateContainerRequest_LabelsEntry {
    $type: "yandex.cloud.serverless.containers.v1.CreateContainerRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface CreateContainerMetadata {
    $type: "yandex.cloud.serverless.containers.v1.CreateContainerMetadata";
    containerId: string;
}
export interface UpdateContainerRequest {
    $type: "yandex.cloud.serverless.containers.v1.UpdateContainerRequest";
    containerId: string;
    updateMask?: FieldMask;
    name: string;
    description: string;
    labels: {
        [key: string]: string;
    };
}
export interface UpdateContainerRequest_LabelsEntry {
    $type: "yandex.cloud.serverless.containers.v1.UpdateContainerRequest.LabelsEntry";
    key: string;
    value: string;
}
export interface UpdateContainerMetadata {
    $type: "yandex.cloud.serverless.containers.v1.UpdateContainerMetadata";
    containerId: string;
}
export interface DeleteContainerRequest {
    $type: "yandex.cloud.serverless.containers.v1.DeleteContainerRequest";
    containerId: string;
}
export interface DeleteContainerMetadata {
    $type: "yandex.cloud.serverless.containers.v1.DeleteContainerMetadata";
    containerId: string;
}
export interface GetContainerRevisionRequest {
    $type: "yandex.cloud.serverless.containers.v1.GetContainerRevisionRequest";
    containerRevisionId: string;
}
export interface ListContainersRevisionsRequest {
    $type: "yandex.cloud.serverless.containers.v1.ListContainersRevisionsRequest";
    folderId: string | undefined;
    containerId: string | undefined;
    pageSize: number;
    pageToken: string;
    filter: string;
}
export interface ListContainersRevisionsResponse {
    $type: "yandex.cloud.serverless.containers.v1.ListContainersRevisionsResponse";
    revisions: Revision[];
    nextPageToken: string;
}
export interface DeployContainerRevisionRequest {
    $type: "yandex.cloud.serverless.containers.v1.DeployContainerRevisionRequest";
    containerId: string;
    description: string;
    resources?: Resources;
    executionTimeout?: Duration;
    serviceAccountId: string;
    imageSpec?: ImageSpec;
    concurrency: number;
    secrets: Secret[];
    connectivity?: Connectivity;
    provisionPolicy?: ProvisionPolicy;
}
export interface ImageSpec {
    $type: "yandex.cloud.serverless.containers.v1.ImageSpec";
    imageUrl: string;
    command?: Command;
    args?: Args;
    environment: {
        [key: string]: string;
    };
    workingDir: string;
}
export interface ImageSpec_EnvironmentEntry {
    $type: "yandex.cloud.serverless.containers.v1.ImageSpec.EnvironmentEntry";
    key: string;
    value: string;
}
export interface DeployContainerRevisionMetadata {
    $type: "yandex.cloud.serverless.containers.v1.DeployContainerRevisionMetadata";
    containerRevisionId: string;
}
export interface RollbackContainerRequest {
    $type: "yandex.cloud.serverless.containers.v1.RollbackContainerRequest";
    containerId: string;
    revisionId: string;
}
export interface RollbackContainerMetadata {
    $type: "yandex.cloud.serverless.containers.v1.RollbackContainerMetadata";
    containerId: string;
    revisionId: string;
}
export interface ListContainerOperationsRequest {
    $type: "yandex.cloud.serverless.containers.v1.ListContainerOperationsRequest";
    containerId: string;
    pageSize: number;
    pageToken: string;
    filter: string;
}
export interface ListContainerOperationsResponse {
    $type: "yandex.cloud.serverless.containers.v1.ListContainerOperationsResponse";
    operations: Operation[];
    nextPageToken: string;
}
export declare const GetContainerRequest: {
    $type: "yandex.cloud.serverless.containers.v1.GetContainerRequest";
    encode(message: GetContainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetContainerRequest;
    fromJSON(object: any): GetContainerRequest;
    toJSON(message: GetContainerRequest): unknown;
    fromPartial<I extends {
        containerId?: string | undefined;
    } & {
        containerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerId">, never>>(object: I): GetContainerRequest;
};
export declare const ListContainersRequest: {
    $type: "yandex.cloud.serverless.containers.v1.ListContainersRequest";
    encode(message: ListContainersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListContainersRequest;
    fromJSON(object: any): ListContainersRequest;
    toJSON(message: ListContainersRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId">, never>>(object: I): ListContainersRequest;
};
export declare const ListContainersResponse: {
    $type: "yandex.cloud.serverless.containers.v1.ListContainersResponse";
    encode(message: ListContainersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListContainersResponse;
    fromJSON(object: any): ListContainersResponse;
    toJSON(message: ListContainersResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        containers?: {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Container_Status | undefined;
            name?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            url?: string | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        containers?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Container_Status | undefined;
            name?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            url?: string | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Container_Status | undefined;
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
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Container_Status | undefined;
            name?: string | undefined;
            labels?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["containers"][number]["labels"], string | number>, never>) | undefined;
            url?: string | undefined;
        } & Record<Exclude<keyof I["containers"][number], "$type" | "description" | "id" | "createdAt" | "folderId" | "status" | "name" | "labels" | "url">, never>)[] & Record<Exclude<keyof I["containers"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            folderId?: string | undefined;
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Container_Status | undefined;
            name?: string | undefined;
            labels?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            url?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "containers">, never>>(object: I): ListContainersResponse;
};
export declare const CreateContainerRequest: {
    $type: "yandex.cloud.serverless.containers.v1.CreateContainerRequest";
    encode(message: CreateContainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateContainerRequest;
    fromJSON(object: any): CreateContainerRequest;
    toJSON(message: CreateContainerRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        folderId?: string | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
        folderId?: string | undefined;
        name?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "folderId" | "name" | "labels">, never>>(object: I): CreateContainerRequest;
};
export declare const CreateContainerRequest_LabelsEntry: {
    $type: "yandex.cloud.serverless.containers.v1.CreateContainerRequest.LabelsEntry";
    encode(message: CreateContainerRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateContainerRequest_LabelsEntry;
    fromJSON(object: any): CreateContainerRequest_LabelsEntry;
    toJSON(message: CreateContainerRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): CreateContainerRequest_LabelsEntry;
};
export declare const CreateContainerMetadata: {
    $type: "yandex.cloud.serverless.containers.v1.CreateContainerMetadata";
    encode(message: CreateContainerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateContainerMetadata;
    fromJSON(object: any): CreateContainerMetadata;
    toJSON(message: CreateContainerMetadata): unknown;
    fromPartial<I extends {
        containerId?: string | undefined;
    } & {
        containerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerId">, never>>(object: I): CreateContainerMetadata;
};
export declare const UpdateContainerRequest: {
    $type: "yandex.cloud.serverless.containers.v1.UpdateContainerRequest";
    encode(message: UpdateContainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateContainerRequest;
    fromJSON(object: any): UpdateContainerRequest;
    toJSON(message: UpdateContainerRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
        name?: string | undefined;
        labels?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
        updateMask?: {
            paths?: string[] | undefined;
        } | undefined;
        containerId?: string | undefined;
    } & {
        description?: string | undefined;
        name?: string | undefined;
        labels?: ({
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } & Record<Exclude<keyof I["labels"], string | number>, never>) | undefined;
        updateMask?: ({
            paths?: string[] | undefined;
        } & {
            paths?: (string[] & string[] & Record<Exclude<keyof I["updateMask"]["paths"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["updateMask"], "$type" | "paths">, never>) | undefined;
        containerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "name" | "labels" | "updateMask" | "containerId">, never>>(object: I): UpdateContainerRequest;
};
export declare const UpdateContainerRequest_LabelsEntry: {
    $type: "yandex.cloud.serverless.containers.v1.UpdateContainerRequest.LabelsEntry";
    encode(message: UpdateContainerRequest_LabelsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateContainerRequest_LabelsEntry;
    fromJSON(object: any): UpdateContainerRequest_LabelsEntry;
    toJSON(message: UpdateContainerRequest_LabelsEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): UpdateContainerRequest_LabelsEntry;
};
export declare const UpdateContainerMetadata: {
    $type: "yandex.cloud.serverless.containers.v1.UpdateContainerMetadata";
    encode(message: UpdateContainerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateContainerMetadata;
    fromJSON(object: any): UpdateContainerMetadata;
    toJSON(message: UpdateContainerMetadata): unknown;
    fromPartial<I extends {
        containerId?: string | undefined;
    } & {
        containerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerId">, never>>(object: I): UpdateContainerMetadata;
};
export declare const DeleteContainerRequest: {
    $type: "yandex.cloud.serverless.containers.v1.DeleteContainerRequest";
    encode(message: DeleteContainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteContainerRequest;
    fromJSON(object: any): DeleteContainerRequest;
    toJSON(message: DeleteContainerRequest): unknown;
    fromPartial<I extends {
        containerId?: string | undefined;
    } & {
        containerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerId">, never>>(object: I): DeleteContainerRequest;
};
export declare const DeleteContainerMetadata: {
    $type: "yandex.cloud.serverless.containers.v1.DeleteContainerMetadata";
    encode(message: DeleteContainerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteContainerMetadata;
    fromJSON(object: any): DeleteContainerMetadata;
    toJSON(message: DeleteContainerMetadata): unknown;
    fromPartial<I extends {
        containerId?: string | undefined;
    } & {
        containerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerId">, never>>(object: I): DeleteContainerMetadata;
};
export declare const GetContainerRevisionRequest: {
    $type: "yandex.cloud.serverless.containers.v1.GetContainerRevisionRequest";
    encode(message: GetContainerRevisionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetContainerRevisionRequest;
    fromJSON(object: any): GetContainerRevisionRequest;
    toJSON(message: GetContainerRevisionRequest): unknown;
    fromPartial<I extends {
        containerRevisionId?: string | undefined;
    } & {
        containerRevisionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerRevisionId">, never>>(object: I): GetContainerRevisionRequest;
};
export declare const ListContainersRevisionsRequest: {
    $type: "yandex.cloud.serverless.containers.v1.ListContainersRevisionsRequest";
    encode(message: ListContainersRevisionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListContainersRevisionsRequest;
    fromJSON(object: any): ListContainersRevisionsRequest;
    toJSON(message: ListContainersRevisionsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
        containerId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        folderId?: string | undefined;
        containerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "folderId" | "containerId">, never>>(object: I): ListContainersRevisionsRequest;
};
export declare const ListContainersRevisionsResponse: {
    $type: "yandex.cloud.serverless.containers.v1.ListContainersRevisionsResponse";
    encode(message: ListContainersRevisionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListContainersRevisionsResponse;
    fromJSON(object: any): ListContainersRevisionsResponse;
    toJSON(message: ListContainersRevisionsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        revisions?: {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Revision_Status | undefined;
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
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        revisions?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Revision_Status | undefined;
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
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Revision_Status | undefined;
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
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Revision_Status | undefined;
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
                    args?: (string[] & string[] & Record<Exclude<keyof I["revisions"][number]["image"]["args"]["args"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["revisions"][number]["image"]["args"], "$type" | "args">, never>) | undefined;
                environment?: ({
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & {
                    [x: string]: string | undefined;
                    [x: number]: string | undefined;
                } & Record<Exclude<keyof I["revisions"][number]["image"]["environment"], string | number>, never>) | undefined;
                imageDigest?: string | undefined;
                command?: ({
                    command?: string[] | undefined;
                } & {
                    command?: (string[] & string[] & Record<Exclude<keyof I["revisions"][number]["image"]["command"]["command"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["revisions"][number]["image"]["command"], "$type" | "command">, never>) | undefined;
                workingDir?: string | undefined;
            } & Record<Exclude<keyof I["revisions"][number]["image"], "$type" | "imageUrl" | "args" | "environment" | "imageDigest" | "command" | "workingDir">, never>) | undefined;
            resources?: ({
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
            } & {
                memory?: number | undefined;
                cores?: number | undefined;
                coreFraction?: number | undefined;
            } & Record<Exclude<keyof I["revisions"][number]["resources"], "$type" | "memory" | "cores" | "coreFraction">, never>) | undefined;
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
            } & Record<Exclude<keyof I["revisions"][number]["secrets"][number], "$type" | "id" | "key" | "versionId" | "environmentVariable">, never>)[] & Record<Exclude<keyof I["revisions"][number]["secrets"], "$type" | keyof {
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
                subnetIds?: (string[] & string[] & Record<Exclude<keyof I["revisions"][number]["connectivity"]["subnetIds"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["revisions"][number]["connectivity"], "$type" | "networkId" | "subnetIds">, never>) | undefined;
            containerId?: string | undefined;
            concurrency?: number | undefined;
            executionTimeout?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["revisions"][number]["executionTimeout"], "$type" | "seconds" | "nanos">, never>) | undefined;
            provisionPolicy?: ({
                minInstances?: number | undefined;
            } & {
                minInstances?: number | undefined;
            } & Record<Exclude<keyof I["revisions"][number]["provisionPolicy"], "$type" | "minInstances">, never>) | undefined;
        } & Record<Exclude<keyof I["revisions"][number], "$type" | "description" | "id" | "createdAt" | "status" | "image" | "resources" | "serviceAccountId" | "secrets" | "connectivity" | "containerId" | "concurrency" | "executionTimeout" | "provisionPolicy">, never>)[] & Record<Exclude<keyof I["revisions"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            createdAt?: Date | undefined;
            status?: import("../../../../../yandex/cloud/serverless/containers/v1/container").Revision_Status | undefined;
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
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "revisions">, never>>(object: I): ListContainersRevisionsResponse;
};
export declare const DeployContainerRevisionRequest: {
    $type: "yandex.cloud.serverless.containers.v1.DeployContainerRevisionRequest";
    encode(message: DeployContainerRevisionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeployContainerRevisionRequest;
    fromJSON(object: any): DeployContainerRevisionRequest;
    toJSON(message: DeployContainerRevisionRequest): unknown;
    fromPartial<I extends {
        description?: string | undefined;
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
        imageSpec?: {
            imageUrl?: string | undefined;
            args?: {
                args?: string[] | undefined;
            } | undefined;
            environment?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            command?: {
                command?: string[] | undefined;
            } | undefined;
            workingDir?: string | undefined;
        } | undefined;
    } & {
        description?: string | undefined;
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
        imageSpec?: ({
            imageUrl?: string | undefined;
            args?: {
                args?: string[] | undefined;
            } | undefined;
            environment?: {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } | undefined;
            command?: {
                command?: string[] | undefined;
            } | undefined;
            workingDir?: string | undefined;
        } & {
            imageUrl?: string | undefined;
            args?: ({
                args?: string[] | undefined;
            } & {
                args?: (string[] & string[] & Record<Exclude<keyof I["imageSpec"]["args"]["args"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["imageSpec"]["args"], "$type" | "args">, never>) | undefined;
            environment?: ({
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & {
                [x: string]: string | undefined;
                [x: number]: string | undefined;
            } & Record<Exclude<keyof I["imageSpec"]["environment"], string | number>, never>) | undefined;
            command?: ({
                command?: string[] | undefined;
            } & {
                command?: (string[] & string[] & Record<Exclude<keyof I["imageSpec"]["command"]["command"], "$type" | keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["imageSpec"]["command"], "$type" | "command">, never>) | undefined;
            workingDir?: string | undefined;
        } & Record<Exclude<keyof I["imageSpec"], "$type" | "imageUrl" | "args" | "environment" | "command" | "workingDir">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "description" | "resources" | "serviceAccountId" | "secrets" | "connectivity" | "containerId" | "concurrency" | "executionTimeout" | "provisionPolicy" | "imageSpec">, never>>(object: I): DeployContainerRevisionRequest;
};
export declare const ImageSpec: {
    $type: "yandex.cloud.serverless.containers.v1.ImageSpec";
    encode(message: ImageSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ImageSpec;
    fromJSON(object: any): ImageSpec;
    toJSON(message: ImageSpec): unknown;
    fromPartial<I extends {
        imageUrl?: string | undefined;
        args?: {
            args?: string[] | undefined;
        } | undefined;
        environment?: {
            [x: string]: string | undefined;
            [x: number]: string | undefined;
        } | undefined;
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
        command?: ({
            command?: string[] | undefined;
        } & {
            command?: (string[] & string[] & Record<Exclude<keyof I["command"]["command"], "$type" | keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["command"], "$type" | "command">, never>) | undefined;
        workingDir?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "imageUrl" | "args" | "environment" | "command" | "workingDir">, never>>(object: I): ImageSpec;
};
export declare const ImageSpec_EnvironmentEntry: {
    $type: "yandex.cloud.serverless.containers.v1.ImageSpec.EnvironmentEntry";
    encode(message: ImageSpec_EnvironmentEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ImageSpec_EnvironmentEntry;
    fromJSON(object: any): ImageSpec_EnvironmentEntry;
    toJSON(message: ImageSpec_EnvironmentEntry): unknown;
    fromPartial<I extends {
        value?: string | undefined;
        key?: string | undefined;
    } & {
        value?: string | undefined;
        key?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "value" | "key">, never>>(object: I): ImageSpec_EnvironmentEntry;
};
export declare const DeployContainerRevisionMetadata: {
    $type: "yandex.cloud.serverless.containers.v1.DeployContainerRevisionMetadata";
    encode(message: DeployContainerRevisionMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeployContainerRevisionMetadata;
    fromJSON(object: any): DeployContainerRevisionMetadata;
    toJSON(message: DeployContainerRevisionMetadata): unknown;
    fromPartial<I extends {
        containerRevisionId?: string | undefined;
    } & {
        containerRevisionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerRevisionId">, never>>(object: I): DeployContainerRevisionMetadata;
};
export declare const RollbackContainerRequest: {
    $type: "yandex.cloud.serverless.containers.v1.RollbackContainerRequest";
    encode(message: RollbackContainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RollbackContainerRequest;
    fromJSON(object: any): RollbackContainerRequest;
    toJSON(message: RollbackContainerRequest): unknown;
    fromPartial<I extends {
        containerId?: string | undefined;
        revisionId?: string | undefined;
    } & {
        containerId?: string | undefined;
        revisionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerId" | "revisionId">, never>>(object: I): RollbackContainerRequest;
};
export declare const RollbackContainerMetadata: {
    $type: "yandex.cloud.serverless.containers.v1.RollbackContainerMetadata";
    encode(message: RollbackContainerMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RollbackContainerMetadata;
    fromJSON(object: any): RollbackContainerMetadata;
    toJSON(message: RollbackContainerMetadata): unknown;
    fromPartial<I extends {
        containerId?: string | undefined;
        revisionId?: string | undefined;
    } & {
        containerId?: string | undefined;
        revisionId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerId" | "revisionId">, never>>(object: I): RollbackContainerMetadata;
};
export declare const ListContainerOperationsRequest: {
    $type: "yandex.cloud.serverless.containers.v1.ListContainerOperationsRequest";
    encode(message: ListContainerOperationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListContainerOperationsRequest;
    fromJSON(object: any): ListContainerOperationsRequest;
    toJSON(message: ListContainerOperationsRequest): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        containerId?: string | undefined;
    } & {
        pageSize?: number | undefined;
        pageToken?: string | undefined;
        filter?: string | undefined;
        containerId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "pageSize" | "pageToken" | "filter" | "containerId">, never>>(object: I): ListContainerOperationsRequest;
};
export declare const ListContainerOperationsResponse: {
    $type: "yandex.cloud.serverless.containers.v1.ListContainerOperationsResponse";
    encode(message: ListContainerOperationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListContainerOperationsResponse;
    fromJSON(object: any): ListContainerOperationsResponse;
    toJSON(message: ListContainerOperationsResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        operations?: {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        operations?: ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[] & ({
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        } & {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["metadata"], "$type" | "typeUrl" | "value">, never>) | undefined;
            error?: ({
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } & {
                code?: number | undefined;
                message?: string | undefined;
                details?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & Record<Exclude<keyof I["operations"][number]["error"]["details"][number], "$type" | "typeUrl" | "value">, never>)[] & Record<Exclude<keyof I["operations"][number]["error"]["details"], "$type" | keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["operations"][number]["error"], "$type" | "code" | "message" | "details">, never>) | undefined;
            response?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & Record<Exclude<keyof I["operations"][number]["response"], "$type" | "typeUrl" | "value">, never>) | undefined;
        } & Record<Exclude<keyof I["operations"][number], "$type" | "description" | "id" | "createdBy" | "done" | "createdAt" | "modifiedAt" | "metadata" | "error" | "response">, never>)[] & Record<Exclude<keyof I["operations"], "$type" | keyof {
            description?: string | undefined;
            id?: string | undefined;
            createdBy?: string | undefined;
            done?: boolean | undefined;
            createdAt?: Date | undefined;
            modifiedAt?: Date | undefined;
            metadata?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                message?: string | undefined;
                details?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] | undefined;
            } | undefined;
            response?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "nextPageToken" | "operations">, never>>(object: I): ListContainerOperationsResponse;
};
export declare const ContainerServiceService: {
    readonly get: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetContainerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetContainerRequest;
        readonly responseSerialize: (value: Container) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Container;
    };
    readonly list: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListContainersRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListContainersRequest;
        readonly responseSerialize: (value: ListContainersResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListContainersResponse;
    };
    readonly create: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateContainerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateContainerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly update: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateContainerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateContainerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly delete: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/Delete";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteContainerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteContainerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly deployRevision: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/DeployRevision";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeployContainerRevisionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeployContainerRevisionRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly rollback: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/Rollback";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RollbackContainerRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RollbackContainerRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly getRevision: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/GetRevision";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetContainerRevisionRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetContainerRevisionRequest;
        readonly responseSerialize: (value: Revision) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Revision;
    };
    readonly listRevisions: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/ListRevisions";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListContainersRevisionsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListContainersRevisionsRequest;
        readonly responseSerialize: (value: ListContainersRevisionsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListContainersRevisionsResponse;
    };
    readonly listOperations: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/ListOperations";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListContainerOperationsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListContainerOperationsRequest;
        readonly responseSerialize: (value: ListContainerOperationsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListContainerOperationsResponse;
    };
    readonly listAccessBindings: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/ListAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListAccessBindingsRequest;
        readonly responseSerialize: (value: ListAccessBindingsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListAccessBindingsResponse;
    };
    readonly setAccessBindings: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/SetAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
    readonly updateAccessBindings: {
        readonly path: "/yandex.cloud.serverless.containers.v1.ContainerService/UpdateAccessBindings";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateAccessBindingsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateAccessBindingsRequest;
        readonly responseSerialize: (value: Operation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Operation;
    };
};
export interface ContainerServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<GetContainerRequest, Container>;
    list: handleUnaryCall<ListContainersRequest, ListContainersResponse>;
    create: handleUnaryCall<CreateContainerRequest, Operation>;
    update: handleUnaryCall<UpdateContainerRequest, Operation>;
    delete: handleUnaryCall<DeleteContainerRequest, Operation>;
    deployRevision: handleUnaryCall<DeployContainerRevisionRequest, Operation>;
    rollback: handleUnaryCall<RollbackContainerRequest, Operation>;
    getRevision: handleUnaryCall<GetContainerRevisionRequest, Revision>;
    listRevisions: handleUnaryCall<ListContainersRevisionsRequest, ListContainersRevisionsResponse>;
    listOperations: handleUnaryCall<ListContainerOperationsRequest, ListContainerOperationsResponse>;
    listAccessBindings: handleUnaryCall<ListAccessBindingsRequest, ListAccessBindingsResponse>;
    setAccessBindings: handleUnaryCall<SetAccessBindingsRequest, Operation>;
    updateAccessBindings: handleUnaryCall<UpdateAccessBindingsRequest, Operation>;
}
export interface ContainerServiceClient extends Client {
    get(request: GetContainerRequest, callback: (error: ServiceError | null, response: Container) => void): ClientUnaryCall;
    get(request: GetContainerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Container) => void): ClientUnaryCall;
    get(request: GetContainerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Container) => void): ClientUnaryCall;
    list(request: ListContainersRequest, callback: (error: ServiceError | null, response: ListContainersResponse) => void): ClientUnaryCall;
    list(request: ListContainersRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListContainersResponse) => void): ClientUnaryCall;
    list(request: ListContainersRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListContainersResponse) => void): ClientUnaryCall;
    create(request: CreateContainerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateContainerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    create(request: CreateContainerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateContainerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateContainerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    update(request: UpdateContainerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteContainerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteContainerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    delete(request: DeleteContainerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deployRevision(request: DeployContainerRevisionRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deployRevision(request: DeployContainerRevisionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    deployRevision(request: DeployContainerRevisionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rollback(request: RollbackContainerRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rollback(request: RollbackContainerRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    rollback(request: RollbackContainerRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    getRevision(request: GetContainerRevisionRequest, callback: (error: ServiceError | null, response: Revision) => void): ClientUnaryCall;
    getRevision(request: GetContainerRevisionRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Revision) => void): ClientUnaryCall;
    getRevision(request: GetContainerRevisionRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Revision) => void): ClientUnaryCall;
    listRevisions(request: ListContainersRevisionsRequest, callback: (error: ServiceError | null, response: ListContainersRevisionsResponse) => void): ClientUnaryCall;
    listRevisions(request: ListContainersRevisionsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListContainersRevisionsResponse) => void): ClientUnaryCall;
    listRevisions(request: ListContainersRevisionsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListContainersRevisionsResponse) => void): ClientUnaryCall;
    listOperations(request: ListContainerOperationsRequest, callback: (error: ServiceError | null, response: ListContainerOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListContainerOperationsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListContainerOperationsResponse) => void): ClientUnaryCall;
    listOperations(request: ListContainerOperationsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListContainerOperationsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    listAccessBindings(request: ListAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListAccessBindingsResponse) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    setAccessBindings(request: SetAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
    updateAccessBindings(request: UpdateAccessBindingsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Operation) => void): ClientUnaryCall;
}
export declare const ContainerServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ContainerServiceClient;
    service: typeof ContainerServiceService;
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
