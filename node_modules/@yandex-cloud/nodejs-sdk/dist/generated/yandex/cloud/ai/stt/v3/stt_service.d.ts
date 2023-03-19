/// <reference types="node" />
import { ChannelCredentials, ChannelOptions, UntypedServiceImplementation, handleBidiStreamingCall, Client, ClientDuplexStream, CallOptions, Metadata } from "@grpc/grpc-js";
import { StreamingRequest, StreamingResponse } from "../../../../../yandex/cloud/ai/stt/v3/stt";
export declare const protobufPackage = "speechkit.stt.v3";
/** A set of methods for voice recognition. */
export declare const RecognizerService: {
    /** Expects audio in real-time */
    readonly recognizeStreaming: {
        readonly path: "/speechkit.stt.v3.Recognizer/RecognizeStreaming";
        readonly requestStream: true;
        readonly responseStream: true;
        readonly requestSerialize: (value: StreamingRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StreamingRequest;
        readonly responseSerialize: (value: StreamingResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StreamingResponse;
    };
};
export interface RecognizerServer extends UntypedServiceImplementation {
    /** Expects audio in real-time */
    recognizeStreaming: handleBidiStreamingCall<StreamingRequest, StreamingResponse>;
}
export interface RecognizerClient extends Client {
    /** Expects audio in real-time */
    recognizeStreaming(): ClientDuplexStream<StreamingRequest, StreamingResponse>;
    recognizeStreaming(options: Partial<CallOptions>): ClientDuplexStream<StreamingRequest, StreamingResponse>;
    recognizeStreaming(metadata: Metadata, options?: Partial<CallOptions>): ClientDuplexStream<StreamingRequest, StreamingResponse>;
}
export declare const RecognizerClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): RecognizerClient;
    service: typeof RecognizerService;
};
