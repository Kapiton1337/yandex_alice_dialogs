/// <reference types="node" />
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "speechkit.stt.v3";
export declare enum CodeType {
    CODE_TYPE_UNSPECIFIED = 0,
    /** WORKING - all good */
    WORKING = 1,
    /** WARNING - for example, if speech is sent not in real time. or unknown context (and we've made fallback). */
    WARNING = 2,
    /** CLOSED - after session was closed. */
    CLOSED = 3,
    UNRECOGNIZED = -1
}
export declare function codeTypeFromJSON(object: any): CodeType;
export declare function codeTypeToJSON(object: CodeType): string;
/** options */
export interface TextNormalizationOptions {
    $type: "speechkit.stt.v3.TextNormalizationOptions";
    textNormalization: TextNormalizationOptions_TextNormalization;
    /** Filter profanity (default: false). */
    profanityFilter: boolean;
    /** Rewrite text in literature style (default: false). */
    literatureText: boolean;
}
/** Normalization */
export declare enum TextNormalizationOptions_TextNormalization {
    TEXT_NORMALIZATION_UNSPECIFIED = 0,
    /** TEXT_NORMALIZATION_ENABLED - Enable normalization */
    TEXT_NORMALIZATION_ENABLED = 1,
    /** TEXT_NORMALIZATION_DISABLED - Disable normalization */
    TEXT_NORMALIZATION_DISABLED = 2,
    UNRECOGNIZED = -1
}
export declare function textNormalizationOptions_TextNormalizationFromJSON(object: any): TextNormalizationOptions_TextNormalization;
export declare function textNormalizationOptions_TextNormalizationToJSON(object: TextNormalizationOptions_TextNormalization): string;
export interface DefaultEouClassifier {
    $type: "speechkit.stt.v3.DefaultEouClassifier";
    /** EOU sensitivity. Currently two levels, faster with more error and more conservative (our default). */
    type: DefaultEouClassifier_EouSensitivity;
    /** Hint for max pause between words. Our EoU detector could use this information to distinguish between end of utterance and slow speech (like one <long pause> two <long pause> three, etc). */
    maxPauseBetweenWordsHintMs: number;
}
export declare enum DefaultEouClassifier_EouSensitivity {
    EOU_SENSITIVITY_UNSPECIFIED = 0,
    DEFAULT = 1,
    HIGH = 2,
    UNRECOGNIZED = -1
}
export declare function defaultEouClassifier_EouSensitivityFromJSON(object: any): DefaultEouClassifier_EouSensitivity;
export declare function defaultEouClassifier_EouSensitivityToJSON(object: DefaultEouClassifier_EouSensitivity): string;
/** Use EOU provided by user */
export interface ExternalEouClassifier {
    $type: "speechkit.stt.v3.ExternalEouClassifier";
}
export interface EouClassifierOptions {
    $type: "speechkit.stt.v3.EouClassifierOptions";
    /** EOU classifier provided by SpeechKit. Default. */
    defaultClassifier?: DefaultEouClassifier | undefined;
    /** EoU is enforced by external messages from user. */
    externalClassifier?: ExternalEouClassifier | undefined;
}
/** RAW Audio format spec (no container to infer type). Used in AudioFormat options. */
export interface RawAudio {
    $type: "speechkit.stt.v3.RawAudio";
    /** Type of audio encoding */
    audioEncoding: RawAudio_AudioEncoding;
    /** PCM sample rate */
    sampleRateHertz: number;
    /** PCM channel count. Currently only single channel audio is supported in real-time recognition. */
    audioChannelCount: number;
}
export declare enum RawAudio_AudioEncoding {
    AUDIO_ENCODING_UNSPECIFIED = 0,
    /** LINEAR16_PCM - Audio bit depth 16-bit signed little-endian (Linear PCM). */
    LINEAR16_PCM = 1,
    UNRECOGNIZED = -1
}
export declare function rawAudio_AudioEncodingFromJSON(object: any): RawAudio_AudioEncoding;
export declare function rawAudio_AudioEncodingToJSON(object: RawAudio_AudioEncoding): string;
/** Audio with fixed type in container. Used in AudioFormat options. */
export interface ContainerAudio {
    $type: "speechkit.stt.v3.ContainerAudio";
    /** Type of audio container. */
    containerAudioType: ContainerAudio_ContainerAudioType;
}
export declare enum ContainerAudio_ContainerAudioType {
    CONTAINER_AUDIO_TYPE_UNSPECIFIED = 0,
    /** WAV - Audio bit depth 16-bit signed little-endian (Linear PCM). */
    WAV = 1,
    /** OGG_OPUS - Data is encoded using the OPUS audio codec and compressed using the OGG container format. */
    OGG_OPUS = 2,
    /** MP3 - Data is encoded using MPEG-1/2 Layer III and compressed using the MP3 container format. */
    MP3 = 3,
    UNRECOGNIZED = -1
}
export declare function containerAudio_ContainerAudioTypeFromJSON(object: any): ContainerAudio_ContainerAudioType;
export declare function containerAudio_ContainerAudioTypeToJSON(object: ContainerAudio_ContainerAudioType): string;
/** Audio format options. */
export interface AudioFormatOptions {
    $type: "speechkit.stt.v3.AudioFormatOptions";
    /** Audio without container. */
    rawAudio?: RawAudio | undefined;
    /** Audio is wrapped in container. */
    containerAudio?: ContainerAudio | undefined;
}
export interface LanguageRestrictionOptions {
    $type: "speechkit.stt.v3.LanguageRestrictionOptions";
    restrictionType: LanguageRestrictionOptions_LanguageRestrictionType;
    languageCode: string[];
}
export declare enum LanguageRestrictionOptions_LanguageRestrictionType {
    LANGUAGE_RESTRICTION_TYPE_UNSPECIFIED = 0,
    WHITELIST = 1,
    BLACKLIST = 2,
    UNRECOGNIZED = -1
}
export declare function languageRestrictionOptions_LanguageRestrictionTypeFromJSON(object: any): LanguageRestrictionOptions_LanguageRestrictionType;
export declare function languageRestrictionOptions_LanguageRestrictionTypeToJSON(object: LanguageRestrictionOptions_LanguageRestrictionType): string;
export interface RecognitionModelOptions {
    $type: "speechkit.stt.v3.RecognitionModelOptions";
    /** Reserved for future, do not use. */
    model: string;
    /** Specified input audio. */
    audioFormat?: AudioFormatOptions;
    /** Text normalization options. */
    textNormalization?: TextNormalizationOptions;
    /** Possible languages in audio. */
    languageRestriction?: LanguageRestrictionOptions;
    /** How to deal with audio data (in real time, after all data is received, etc). Default is REAL_TIME. */
    audioProcessingType: RecognitionModelOptions_AudioProcessingType;
}
export declare enum RecognitionModelOptions_AudioProcessingType {
    AUDIO_PROCESSING_TYPE_UNSPECIFIED = 0,
    REAL_TIME = 1,
    FULL_DATA = 2,
    UNRECOGNIZED = -1
}
export declare function recognitionModelOptions_AudioProcessingTypeFromJSON(object: any): RecognitionModelOptions_AudioProcessingType;
export declare function recognitionModelOptions_AudioProcessingTypeToJSON(object: RecognitionModelOptions_AudioProcessingType): string;
export interface StreamingOptions {
    $type: "speechkit.stt.v3.StreamingOptions";
    /** Configuration for speech recognition model. */
    recognitionModel?: RecognitionModelOptions;
    /** Configuration for end of utterance detection model. */
    eouClassifier?: EouClassifierOptions;
}
/** Data chunk with audio. */
export interface AudioChunk {
    $type: "speechkit.stt.v3.AudioChunk";
    /** Bytes with audio data. */
    data: Buffer;
}
export interface SilenceChunk {
    $type: "speechkit.stt.v3.SilenceChunk";
    /** Duration of silence chunk in ms. */
    durationMs: number;
}
/** Force EOU */
export interface Eou {
    $type: "speechkit.stt.v3.Eou";
}
/**
 * Streaming audio request
 * Events are control messages from user.
 * First message should be session options.
 * The next messages are audio data chunks or control messages.
 */
export interface StreamingRequest {
    $type: "speechkit.stt.v3.StreamingRequest";
    /** Session options. should be first message from user */
    sessionOptions?: StreamingOptions | undefined;
    /** Chunk with audio data. */
    chunk?: AudioChunk | undefined;
    /** Chunk with silence. */
    silenceChunk?: SilenceChunk | undefined;
    /** Request to end current utterance. Works only with external EoU detector. */
    eou?: Eou | undefined;
}
/** Recognized word. */
export interface Word {
    $type: "speechkit.stt.v3.Word";
    /** Word text. */
    text: string;
    /** Estimation of word start time in ms */
    startTimeMs: number;
    /** Estimation of word end time in ms */
    endTimeMs: number;
}
/** Recognition of specific time frame. */
export interface Alternative {
    $type: "speechkit.stt.v3.Alternative";
    /** Words in time frame. */
    words: Word[];
    /** Text in time frame. */
    text: string;
    /** Start of time frame. */
    startTimeMs: number;
    /** End of time frame. */
    endTimeMs: number;
    /** Hypothesis confidence. Currently is not used. */
    confidence: number;
}
/** Update information from */
export interface EouUpdate {
    $type: "speechkit.stt.v3.EouUpdate";
    /** End of utterance estimated time. */
    timeMs: number;
}
/** Update of hypothesis. */
export interface AlternativeUpdate {
    $type: "speechkit.stt.v3.AlternativeUpdate";
    /** List of hypothesis for timeframes. */
    alternatives: Alternative[];
    /** Tag for distinguish audio channels. */
    channelTag: string;
}
/** AudioCursors are state of ASR recognition stream. */
export interface AudioCursors {
    $type: "speechkit.stt.v3.AudioCursors";
    /** Amount of audio chunks server received. This cursor is moved after each audio chunk was received by server. */
    receivedDataMs: number;
    /** Input stream reset data. */
    resetTimeMs: number;
    /**
     * How much audio was processed. This time includes trimming silences as well. This cursor is moved after server received enough data
     *  to update recognition results (includes silence as well).
     */
    partialTimeMs: number;
    /**
     * Time of last final. This cursor is moved when server decides that recognition from start of audio until final_time_ms will not change anymore
     *  usually this even is followed by EOU detection (but this could change in future).
     */
    finalTimeMs: number;
    /** This is index of last final server send. Incremented after each new final. */
    finalIndex: number;
    /**
     * Estimated time of EOU. Cursor is updated after each new EOU is sent.
     *  For external classifier this equals to received_data_ms at the moment EOU event arrives.
     *  For internal classifier this is estimation of time. The time is not exact and has the same guarantees as word timings.
     */
    eouTimeMs: number;
}
/** Refinement for final hypo. For example, text normalization is refinement. */
export interface FinalRefinement {
    $type: "speechkit.stt.v3.FinalRefinement";
    /** Index of final for which server sends additional information. */
    finalIndex: number;
    /** Normalized text instead of raw one. */
    normalizedText?: AlternativeUpdate | undefined;
}
/** Status message */
export interface StatusCode {
    $type: "speechkit.stt.v3.StatusCode";
    /** Code type. */
    codeType: CodeType;
    /** Human readable message. */
    message: string;
}
/** Session identifier. */
export interface SessionUuid {
    $type: "speechkit.stt.v3.SessionUuid";
    /** Internal session identifier. */
    uuid: string;
    /** User session identifier. */
    userRequestId: string;
}
/**
 * Responses from server.
 * Each response contains session uuid
 * AudioCursors
 * plus specific event
 */
export interface StreamingResponse {
    $type: "speechkit.stt.v3.StreamingResponse";
    /** Session identifier */
    sessionUuid?: SessionUuid;
    /** Progress bar for stream session recognition: how many data we obtained; final and partial times; etc. */
    audioCursors?: AudioCursors;
    /** Wall clock on server side. This is time when server wrote results to stream */
    responseWallTimeMs: number;
    /**
     * Partial results, server will send them regularly after enough audio data was received from user. This are current text estimation
     *  from final_time_ms to partial_time_ms. Could change after new data will arrive.
     */
    partial?: AlternativeUpdate | undefined;
    /** Final results, the recognition is now fixed until final_time_ms. For now, final is sent only if the EOU event was triggered. This could be change in future releases. */
    final?: AlternativeUpdate | undefined;
    /**
     * After EOU classifier, send the message with final, send the EouUpdate with time of EOU
     *  before eou_update we send final with the same time. there could be several finals before eou update.
     */
    eouUpdate?: EouUpdate | undefined;
    /**
     * For each final, if normalization is enabled, sent the normalized text (or some other advanced post-processing).
     *    Final normalization will introduce additional latency.
     */
    finalRefinement?: FinalRefinement | undefined;
    /** Status messages, send by server with fixed interval (keep-alive). */
    statusCode?: StatusCode | undefined;
}
export declare const TextNormalizationOptions: {
    $type: "speechkit.stt.v3.TextNormalizationOptions";
    encode(message: TextNormalizationOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TextNormalizationOptions;
    fromJSON(object: any): TextNormalizationOptions;
    toJSON(message: TextNormalizationOptions): unknown;
    fromPartial<I extends {
        profanityFilter?: boolean | undefined;
        literatureText?: boolean | undefined;
        textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
    } & {
        profanityFilter?: boolean | undefined;
        literatureText?: boolean | undefined;
        textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
    } & Record<Exclude<keyof I, "$type" | "profanityFilter" | "literatureText" | "textNormalization">, never>>(object: I): TextNormalizationOptions;
};
export declare const DefaultEouClassifier: {
    $type: "speechkit.stt.v3.DefaultEouClassifier";
    encode(message: DefaultEouClassifier, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DefaultEouClassifier;
    fromJSON(object: any): DefaultEouClassifier;
    toJSON(message: DefaultEouClassifier): unknown;
    fromPartial<I extends {
        type?: DefaultEouClassifier_EouSensitivity | undefined;
        maxPauseBetweenWordsHintMs?: number | undefined;
    } & {
        type?: DefaultEouClassifier_EouSensitivity | undefined;
        maxPauseBetweenWordsHintMs?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "type" | "maxPauseBetweenWordsHintMs">, never>>(object: I): DefaultEouClassifier;
};
export declare const ExternalEouClassifier: {
    $type: "speechkit.stt.v3.ExternalEouClassifier";
    encode(_: ExternalEouClassifier, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExternalEouClassifier;
    fromJSON(_: any): ExternalEouClassifier;
    toJSON(_: ExternalEouClassifier): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): ExternalEouClassifier;
};
export declare const EouClassifierOptions: {
    $type: "speechkit.stt.v3.EouClassifierOptions";
    encode(message: EouClassifierOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EouClassifierOptions;
    fromJSON(object: any): EouClassifierOptions;
    toJSON(message: EouClassifierOptions): unknown;
    fromPartial<I extends {
        defaultClassifier?: {
            type?: DefaultEouClassifier_EouSensitivity | undefined;
            maxPauseBetweenWordsHintMs?: number | undefined;
        } | undefined;
        externalClassifier?: {} | undefined;
    } & {
        defaultClassifier?: ({
            type?: DefaultEouClassifier_EouSensitivity | undefined;
            maxPauseBetweenWordsHintMs?: number | undefined;
        } & {
            type?: DefaultEouClassifier_EouSensitivity | undefined;
            maxPauseBetweenWordsHintMs?: number | undefined;
        } & Record<Exclude<keyof I["defaultClassifier"], "$type" | "type" | "maxPauseBetweenWordsHintMs">, never>) | undefined;
        externalClassifier?: ({} & {} & Record<Exclude<keyof I["externalClassifier"], "$type">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "defaultClassifier" | "externalClassifier">, never>>(object: I): EouClassifierOptions;
};
export declare const RawAudio: {
    $type: "speechkit.stt.v3.RawAudio";
    encode(message: RawAudio, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RawAudio;
    fromJSON(object: any): RawAudio;
    toJSON(message: RawAudio): unknown;
    fromPartial<I extends {
        audioEncoding?: RawAudio_AudioEncoding | undefined;
        sampleRateHertz?: number | undefined;
        audioChannelCount?: number | undefined;
    } & {
        audioEncoding?: RawAudio_AudioEncoding | undefined;
        sampleRateHertz?: number | undefined;
        audioChannelCount?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "audioEncoding" | "sampleRateHertz" | "audioChannelCount">, never>>(object: I): RawAudio;
};
export declare const ContainerAudio: {
    $type: "speechkit.stt.v3.ContainerAudio";
    encode(message: ContainerAudio, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ContainerAudio;
    fromJSON(object: any): ContainerAudio;
    toJSON(message: ContainerAudio): unknown;
    fromPartial<I extends {
        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
    } & {
        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
    } & Record<Exclude<keyof I, "$type" | "containerAudioType">, never>>(object: I): ContainerAudio;
};
export declare const AudioFormatOptions: {
    $type: "speechkit.stt.v3.AudioFormatOptions";
    encode(message: AudioFormatOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AudioFormatOptions;
    fromJSON(object: any): AudioFormatOptions;
    toJSON(message: AudioFormatOptions): unknown;
    fromPartial<I extends {
        rawAudio?: {
            audioEncoding?: RawAudio_AudioEncoding | undefined;
            sampleRateHertz?: number | undefined;
            audioChannelCount?: number | undefined;
        } | undefined;
        containerAudio?: {
            containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
        } | undefined;
    } & {
        rawAudio?: ({
            audioEncoding?: RawAudio_AudioEncoding | undefined;
            sampleRateHertz?: number | undefined;
            audioChannelCount?: number | undefined;
        } & {
            audioEncoding?: RawAudio_AudioEncoding | undefined;
            sampleRateHertz?: number | undefined;
            audioChannelCount?: number | undefined;
        } & Record<Exclude<keyof I["rawAudio"], "$type" | "audioEncoding" | "sampleRateHertz" | "audioChannelCount">, never>) | undefined;
        containerAudio?: ({
            containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
        } & {
            containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
        } & Record<Exclude<keyof I["containerAudio"], "$type" | "containerAudioType">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "rawAudio" | "containerAudio">, never>>(object: I): AudioFormatOptions;
};
export declare const LanguageRestrictionOptions: {
    $type: "speechkit.stt.v3.LanguageRestrictionOptions";
    encode(message: LanguageRestrictionOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LanguageRestrictionOptions;
    fromJSON(object: any): LanguageRestrictionOptions;
    toJSON(message: LanguageRestrictionOptions): unknown;
    fromPartial<I extends {
        languageCode?: string[] | undefined;
        restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
    } & {
        languageCode?: (string[] & string[] & Record<Exclude<keyof I["languageCode"], "$type" | keyof string[]>, never>) | undefined;
        restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
    } & Record<Exclude<keyof I, "$type" | "languageCode" | "restrictionType">, never>>(object: I): LanguageRestrictionOptions;
};
export declare const RecognitionModelOptions: {
    $type: "speechkit.stt.v3.RecognitionModelOptions";
    encode(message: RecognitionModelOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RecognitionModelOptions;
    fromJSON(object: any): RecognitionModelOptions;
    toJSON(message: RecognitionModelOptions): unknown;
    fromPartial<I extends {
        model?: string | undefined;
        textNormalization?: {
            profanityFilter?: boolean | undefined;
            literatureText?: boolean | undefined;
            textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
        } | undefined;
        audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
        audioFormat?: {
            rawAudio?: {
                audioEncoding?: RawAudio_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
                audioChannelCount?: number | undefined;
            } | undefined;
            containerAudio?: {
                containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
            } | undefined;
        } | undefined;
        languageRestriction?: {
            languageCode?: string[] | undefined;
            restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
        } | undefined;
    } & {
        model?: string | undefined;
        textNormalization?: ({
            profanityFilter?: boolean | undefined;
            literatureText?: boolean | undefined;
            textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
        } & {
            profanityFilter?: boolean | undefined;
            literatureText?: boolean | undefined;
            textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
        } & Record<Exclude<keyof I["textNormalization"], "$type" | "profanityFilter" | "literatureText" | "textNormalization">, never>) | undefined;
        audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
        audioFormat?: ({
            rawAudio?: {
                audioEncoding?: RawAudio_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
                audioChannelCount?: number | undefined;
            } | undefined;
            containerAudio?: {
                containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
            } | undefined;
        } & {
            rawAudio?: ({
                audioEncoding?: RawAudio_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
                audioChannelCount?: number | undefined;
            } & {
                audioEncoding?: RawAudio_AudioEncoding | undefined;
                sampleRateHertz?: number | undefined;
                audioChannelCount?: number | undefined;
            } & Record<Exclude<keyof I["audioFormat"]["rawAudio"], "$type" | "audioEncoding" | "sampleRateHertz" | "audioChannelCount">, never>) | undefined;
            containerAudio?: ({
                containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
            } & {
                containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
            } & Record<Exclude<keyof I["audioFormat"]["containerAudio"], "$type" | "containerAudioType">, never>) | undefined;
        } & Record<Exclude<keyof I["audioFormat"], "$type" | "rawAudio" | "containerAudio">, never>) | undefined;
        languageRestriction?: ({
            languageCode?: string[] | undefined;
            restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
        } & {
            languageCode?: (string[] & string[] & Record<Exclude<keyof I["languageRestriction"]["languageCode"], "$type" | keyof string[]>, never>) | undefined;
            restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
        } & Record<Exclude<keyof I["languageRestriction"], "$type" | "languageCode" | "restrictionType">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "model" | "textNormalization" | "audioProcessingType" | "audioFormat" | "languageRestriction">, never>>(object: I): RecognitionModelOptions;
};
export declare const StreamingOptions: {
    $type: "speechkit.stt.v3.StreamingOptions";
    encode(message: StreamingOptions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamingOptions;
    fromJSON(object: any): StreamingOptions;
    toJSON(message: StreamingOptions): unknown;
    fromPartial<I extends {
        recognitionModel?: {
            model?: string | undefined;
            textNormalization?: {
                profanityFilter?: boolean | undefined;
                literatureText?: boolean | undefined;
                textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
            } | undefined;
            audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
            audioFormat?: {
                rawAudio?: {
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                    audioChannelCount?: number | undefined;
                } | undefined;
                containerAudio?: {
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } | undefined;
            } | undefined;
            languageRestriction?: {
                languageCode?: string[] | undefined;
                restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
            } | undefined;
        } | undefined;
        eouClassifier?: {
            defaultClassifier?: {
                type?: DefaultEouClassifier_EouSensitivity | undefined;
                maxPauseBetweenWordsHintMs?: number | undefined;
            } | undefined;
            externalClassifier?: {} | undefined;
        } | undefined;
    } & {
        recognitionModel?: ({
            model?: string | undefined;
            textNormalization?: {
                profanityFilter?: boolean | undefined;
                literatureText?: boolean | undefined;
                textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
            } | undefined;
            audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
            audioFormat?: {
                rawAudio?: {
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                    audioChannelCount?: number | undefined;
                } | undefined;
                containerAudio?: {
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } | undefined;
            } | undefined;
            languageRestriction?: {
                languageCode?: string[] | undefined;
                restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
            } | undefined;
        } & {
            model?: string | undefined;
            textNormalization?: ({
                profanityFilter?: boolean | undefined;
                literatureText?: boolean | undefined;
                textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
            } & {
                profanityFilter?: boolean | undefined;
                literatureText?: boolean | undefined;
                textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
            } & Record<Exclude<keyof I["recognitionModel"]["textNormalization"], "$type" | "profanityFilter" | "literatureText" | "textNormalization">, never>) | undefined;
            audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
            audioFormat?: ({
                rawAudio?: {
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                    audioChannelCount?: number | undefined;
                } | undefined;
                containerAudio?: {
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } | undefined;
            } & {
                rawAudio?: ({
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                    audioChannelCount?: number | undefined;
                } & {
                    audioEncoding?: RawAudio_AudioEncoding | undefined;
                    sampleRateHertz?: number | undefined;
                    audioChannelCount?: number | undefined;
                } & Record<Exclude<keyof I["recognitionModel"]["audioFormat"]["rawAudio"], "$type" | "audioEncoding" | "sampleRateHertz" | "audioChannelCount">, never>) | undefined;
                containerAudio?: ({
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } & {
                    containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                } & Record<Exclude<keyof I["recognitionModel"]["audioFormat"]["containerAudio"], "$type" | "containerAudioType">, never>) | undefined;
            } & Record<Exclude<keyof I["recognitionModel"]["audioFormat"], "$type" | "rawAudio" | "containerAudio">, never>) | undefined;
            languageRestriction?: ({
                languageCode?: string[] | undefined;
                restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
            } & {
                languageCode?: (string[] & string[] & Record<Exclude<keyof I["recognitionModel"]["languageRestriction"]["languageCode"], "$type" | keyof string[]>, never>) | undefined;
                restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
            } & Record<Exclude<keyof I["recognitionModel"]["languageRestriction"], "$type" | "languageCode" | "restrictionType">, never>) | undefined;
        } & Record<Exclude<keyof I["recognitionModel"], "$type" | "model" | "textNormalization" | "audioProcessingType" | "audioFormat" | "languageRestriction">, never>) | undefined;
        eouClassifier?: ({
            defaultClassifier?: {
                type?: DefaultEouClassifier_EouSensitivity | undefined;
                maxPauseBetweenWordsHintMs?: number | undefined;
            } | undefined;
            externalClassifier?: {} | undefined;
        } & {
            defaultClassifier?: ({
                type?: DefaultEouClassifier_EouSensitivity | undefined;
                maxPauseBetweenWordsHintMs?: number | undefined;
            } & {
                type?: DefaultEouClassifier_EouSensitivity | undefined;
                maxPauseBetweenWordsHintMs?: number | undefined;
            } & Record<Exclude<keyof I["eouClassifier"]["defaultClassifier"], "$type" | "type" | "maxPauseBetweenWordsHintMs">, never>) | undefined;
            externalClassifier?: ({} & {} & Record<Exclude<keyof I["eouClassifier"]["externalClassifier"], "$type">, never>) | undefined;
        } & Record<Exclude<keyof I["eouClassifier"], "$type" | "defaultClassifier" | "externalClassifier">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "recognitionModel" | "eouClassifier">, never>>(object: I): StreamingOptions;
};
export declare const AudioChunk: {
    $type: "speechkit.stt.v3.AudioChunk";
    encode(message: AudioChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AudioChunk;
    fromJSON(object: any): AudioChunk;
    toJSON(message: AudioChunk): unknown;
    fromPartial<I extends {
        data?: Buffer | undefined;
    } & {
        data?: Buffer | undefined;
    } & Record<Exclude<keyof I, "$type" | "data">, never>>(object: I): AudioChunk;
};
export declare const SilenceChunk: {
    $type: "speechkit.stt.v3.SilenceChunk";
    encode(message: SilenceChunk, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SilenceChunk;
    fromJSON(object: any): SilenceChunk;
    toJSON(message: SilenceChunk): unknown;
    fromPartial<I extends {
        durationMs?: number | undefined;
    } & {
        durationMs?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "durationMs">, never>>(object: I): SilenceChunk;
};
export declare const Eou: {
    $type: "speechkit.stt.v3.Eou";
    encode(_: Eou, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Eou;
    fromJSON(_: any): Eou;
    toJSON(_: Eou): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, "$type">, never>>(_: I): Eou;
};
export declare const StreamingRequest: {
    $type: "speechkit.stt.v3.StreamingRequest";
    encode(message: StreamingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamingRequest;
    fromJSON(object: any): StreamingRequest;
    toJSON(message: StreamingRequest): unknown;
    fromPartial<I extends {
        chunk?: {
            data?: Buffer | undefined;
        } | undefined;
        sessionOptions?: {
            recognitionModel?: {
                model?: string | undefined;
                textNormalization?: {
                    profanityFilter?: boolean | undefined;
                    literatureText?: boolean | undefined;
                    textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
                } | undefined;
                audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
                audioFormat?: {
                    rawAudio?: {
                        audioEncoding?: RawAudio_AudioEncoding | undefined;
                        sampleRateHertz?: number | undefined;
                        audioChannelCount?: number | undefined;
                    } | undefined;
                    containerAudio?: {
                        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                    } | undefined;
                } | undefined;
                languageRestriction?: {
                    languageCode?: string[] | undefined;
                    restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
                } | undefined;
            } | undefined;
            eouClassifier?: {
                defaultClassifier?: {
                    type?: DefaultEouClassifier_EouSensitivity | undefined;
                    maxPauseBetweenWordsHintMs?: number | undefined;
                } | undefined;
                externalClassifier?: {} | undefined;
            } | undefined;
        } | undefined;
        silenceChunk?: {
            durationMs?: number | undefined;
        } | undefined;
        eou?: {} | undefined;
    } & {
        chunk?: ({
            data?: Buffer | undefined;
        } & {
            data?: Buffer | undefined;
        } & Record<Exclude<keyof I["chunk"], "$type" | "data">, never>) | undefined;
        sessionOptions?: ({
            recognitionModel?: {
                model?: string | undefined;
                textNormalization?: {
                    profanityFilter?: boolean | undefined;
                    literatureText?: boolean | undefined;
                    textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
                } | undefined;
                audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
                audioFormat?: {
                    rawAudio?: {
                        audioEncoding?: RawAudio_AudioEncoding | undefined;
                        sampleRateHertz?: number | undefined;
                        audioChannelCount?: number | undefined;
                    } | undefined;
                    containerAudio?: {
                        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                    } | undefined;
                } | undefined;
                languageRestriction?: {
                    languageCode?: string[] | undefined;
                    restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
                } | undefined;
            } | undefined;
            eouClassifier?: {
                defaultClassifier?: {
                    type?: DefaultEouClassifier_EouSensitivity | undefined;
                    maxPauseBetweenWordsHintMs?: number | undefined;
                } | undefined;
                externalClassifier?: {} | undefined;
            } | undefined;
        } & {
            recognitionModel?: ({
                model?: string | undefined;
                textNormalization?: {
                    profanityFilter?: boolean | undefined;
                    literatureText?: boolean | undefined;
                    textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
                } | undefined;
                audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
                audioFormat?: {
                    rawAudio?: {
                        audioEncoding?: RawAudio_AudioEncoding | undefined;
                        sampleRateHertz?: number | undefined;
                        audioChannelCount?: number | undefined;
                    } | undefined;
                    containerAudio?: {
                        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                    } | undefined;
                } | undefined;
                languageRestriction?: {
                    languageCode?: string[] | undefined;
                    restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
                } | undefined;
            } & {
                model?: string | undefined;
                textNormalization?: ({
                    profanityFilter?: boolean | undefined;
                    literatureText?: boolean | undefined;
                    textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
                } & {
                    profanityFilter?: boolean | undefined;
                    literatureText?: boolean | undefined;
                    textNormalization?: TextNormalizationOptions_TextNormalization | undefined;
                } & Record<Exclude<keyof I["sessionOptions"]["recognitionModel"]["textNormalization"], "$type" | "profanityFilter" | "literatureText" | "textNormalization">, never>) | undefined;
                audioProcessingType?: RecognitionModelOptions_AudioProcessingType | undefined;
                audioFormat?: ({
                    rawAudio?: {
                        audioEncoding?: RawAudio_AudioEncoding | undefined;
                        sampleRateHertz?: number | undefined;
                        audioChannelCount?: number | undefined;
                    } | undefined;
                    containerAudio?: {
                        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                    } | undefined;
                } & {
                    rawAudio?: ({
                        audioEncoding?: RawAudio_AudioEncoding | undefined;
                        sampleRateHertz?: number | undefined;
                        audioChannelCount?: number | undefined;
                    } & {
                        audioEncoding?: RawAudio_AudioEncoding | undefined;
                        sampleRateHertz?: number | undefined;
                        audioChannelCount?: number | undefined;
                    } & Record<Exclude<keyof I["sessionOptions"]["recognitionModel"]["audioFormat"]["rawAudio"], "$type" | "audioEncoding" | "sampleRateHertz" | "audioChannelCount">, never>) | undefined;
                    containerAudio?: ({
                        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                    } & {
                        containerAudioType?: ContainerAudio_ContainerAudioType | undefined;
                    } & Record<Exclude<keyof I["sessionOptions"]["recognitionModel"]["audioFormat"]["containerAudio"], "$type" | "containerAudioType">, never>) | undefined;
                } & Record<Exclude<keyof I["sessionOptions"]["recognitionModel"]["audioFormat"], "$type" | "rawAudio" | "containerAudio">, never>) | undefined;
                languageRestriction?: ({
                    languageCode?: string[] | undefined;
                    restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
                } & {
                    languageCode?: (string[] & string[] & Record<Exclude<keyof I["sessionOptions"]["recognitionModel"]["languageRestriction"]["languageCode"], "$type" | keyof string[]>, never>) | undefined;
                    restrictionType?: LanguageRestrictionOptions_LanguageRestrictionType | undefined;
                } & Record<Exclude<keyof I["sessionOptions"]["recognitionModel"]["languageRestriction"], "$type" | "languageCode" | "restrictionType">, never>) | undefined;
            } & Record<Exclude<keyof I["sessionOptions"]["recognitionModel"], "$type" | "model" | "textNormalization" | "audioProcessingType" | "audioFormat" | "languageRestriction">, never>) | undefined;
            eouClassifier?: ({
                defaultClassifier?: {
                    type?: DefaultEouClassifier_EouSensitivity | undefined;
                    maxPauseBetweenWordsHintMs?: number | undefined;
                } | undefined;
                externalClassifier?: {} | undefined;
            } & {
                defaultClassifier?: ({
                    type?: DefaultEouClassifier_EouSensitivity | undefined;
                    maxPauseBetweenWordsHintMs?: number | undefined;
                } & {
                    type?: DefaultEouClassifier_EouSensitivity | undefined;
                    maxPauseBetweenWordsHintMs?: number | undefined;
                } & Record<Exclude<keyof I["sessionOptions"]["eouClassifier"]["defaultClassifier"], "$type" | "type" | "maxPauseBetweenWordsHintMs">, never>) | undefined;
                externalClassifier?: ({} & {} & Record<Exclude<keyof I["sessionOptions"]["eouClassifier"]["externalClassifier"], "$type">, never>) | undefined;
            } & Record<Exclude<keyof I["sessionOptions"]["eouClassifier"], "$type" | "defaultClassifier" | "externalClassifier">, never>) | undefined;
        } & Record<Exclude<keyof I["sessionOptions"], "$type" | "recognitionModel" | "eouClassifier">, never>) | undefined;
        silenceChunk?: ({
            durationMs?: number | undefined;
        } & {
            durationMs?: number | undefined;
        } & Record<Exclude<keyof I["silenceChunk"], "$type" | "durationMs">, never>) | undefined;
        eou?: ({} & {} & Record<Exclude<keyof I["eou"], "$type">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "chunk" | "sessionOptions" | "silenceChunk" | "eou">, never>>(object: I): StreamingRequest;
};
export declare const Word: {
    $type: "speechkit.stt.v3.Word";
    encode(message: Word, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Word;
    fromJSON(object: any): Word;
    toJSON(message: Word): unknown;
    fromPartial<I extends {
        text?: string | undefined;
        startTimeMs?: number | undefined;
        endTimeMs?: number | undefined;
    } & {
        text?: string | undefined;
        startTimeMs?: number | undefined;
        endTimeMs?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "text" | "startTimeMs" | "endTimeMs">, never>>(object: I): Word;
};
export declare const Alternative: {
    $type: "speechkit.stt.v3.Alternative";
    encode(message: Alternative, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Alternative;
    fromJSON(object: any): Alternative;
    toJSON(message: Alternative): unknown;
    fromPartial<I extends {
        text?: string | undefined;
        confidence?: number | undefined;
        words?: {
            text?: string | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        }[] | undefined;
        startTimeMs?: number | undefined;
        endTimeMs?: number | undefined;
    } & {
        text?: string | undefined;
        confidence?: number | undefined;
        words?: ({
            text?: string | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        }[] & ({
            text?: string | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        } & {
            text?: string | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        } & Record<Exclude<keyof I["words"][number], "$type" | "text" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["words"], "$type" | keyof {
            text?: string | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        }[]>, never>) | undefined;
        startTimeMs?: number | undefined;
        endTimeMs?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "text" | "confidence" | "words" | "startTimeMs" | "endTimeMs">, never>>(object: I): Alternative;
};
export declare const EouUpdate: {
    $type: "speechkit.stt.v3.EouUpdate";
    encode(message: EouUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EouUpdate;
    fromJSON(object: any): EouUpdate;
    toJSON(message: EouUpdate): unknown;
    fromPartial<I extends {
        timeMs?: number | undefined;
    } & {
        timeMs?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "timeMs">, never>>(object: I): EouUpdate;
};
export declare const AlternativeUpdate: {
    $type: "speechkit.stt.v3.AlternativeUpdate";
    encode(message: AlternativeUpdate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AlternativeUpdate;
    fromJSON(object: any): AlternativeUpdate;
    toJSON(message: AlternativeUpdate): unknown;
    fromPartial<I extends {
        alternatives?: {
            text?: string | undefined;
            confidence?: number | undefined;
            words?: {
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        }[] | undefined;
        channelTag?: string | undefined;
    } & {
        alternatives?: ({
            text?: string | undefined;
            confidence?: number | undefined;
            words?: {
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        }[] & ({
            text?: string | undefined;
            confidence?: number | undefined;
            words?: {
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        } & {
            text?: string | undefined;
            confidence?: number | undefined;
            words?: ({
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] & ({
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & {
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & Record<Exclude<keyof I["alternatives"][number]["words"][number], "$type" | "text" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["alternatives"][number]["words"], "$type" | keyof {
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[]>, never>) | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        } & Record<Exclude<keyof I["alternatives"][number], "$type" | "text" | "confidence" | "words" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["alternatives"], "$type" | keyof {
            text?: string | undefined;
            confidence?: number | undefined;
            words?: {
                text?: string | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            startTimeMs?: number | undefined;
            endTimeMs?: number | undefined;
        }[]>, never>) | undefined;
        channelTag?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "alternatives" | "channelTag">, never>>(object: I): AlternativeUpdate;
};
export declare const AudioCursors: {
    $type: "speechkit.stt.v3.AudioCursors";
    encode(message: AudioCursors, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AudioCursors;
    fromJSON(object: any): AudioCursors;
    toJSON(message: AudioCursors): unknown;
    fromPartial<I extends {
        receivedDataMs?: number | undefined;
        resetTimeMs?: number | undefined;
        partialTimeMs?: number | undefined;
        finalTimeMs?: number | undefined;
        finalIndex?: number | undefined;
        eouTimeMs?: number | undefined;
    } & {
        receivedDataMs?: number | undefined;
        resetTimeMs?: number | undefined;
        partialTimeMs?: number | undefined;
        finalTimeMs?: number | undefined;
        finalIndex?: number | undefined;
        eouTimeMs?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "receivedDataMs" | "resetTimeMs" | "partialTimeMs" | "finalTimeMs" | "finalIndex" | "eouTimeMs">, never>>(object: I): AudioCursors;
};
export declare const FinalRefinement: {
    $type: "speechkit.stt.v3.FinalRefinement";
    encode(message: FinalRefinement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FinalRefinement;
    fromJSON(object: any): FinalRefinement;
    toJSON(message: FinalRefinement): unknown;
    fromPartial<I extends {
        finalIndex?: number | undefined;
        normalizedText?: {
            alternatives?: {
                text?: string | undefined;
                confidence?: number | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            channelTag?: string | undefined;
        } | undefined;
    } & {
        finalIndex?: number | undefined;
        normalizedText?: ({
            alternatives?: {
                text?: string | undefined;
                confidence?: number | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            channelTag?: string | undefined;
        } & {
            alternatives?: ({
                text?: string | undefined;
                confidence?: number | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] & ({
                text?: string | undefined;
                confidence?: number | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & {
                text?: string | undefined;
                confidence?: number | undefined;
                words?: ({
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] & ({
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & Record<Exclude<keyof I["normalizedText"]["alternatives"][number]["words"][number], "$type" | "text" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["normalizedText"]["alternatives"][number]["words"], "$type" | keyof {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[]>, never>) | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & Record<Exclude<keyof I["normalizedText"]["alternatives"][number], "$type" | "text" | "confidence" | "words" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["normalizedText"]["alternatives"], "$type" | keyof {
                text?: string | undefined;
                confidence?: number | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[]>, never>) | undefined;
            channelTag?: string | undefined;
        } & Record<Exclude<keyof I["normalizedText"], "$type" | "alternatives" | "channelTag">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "finalIndex" | "normalizedText">, never>>(object: I): FinalRefinement;
};
export declare const StatusCode: {
    $type: "speechkit.stt.v3.StatusCode";
    encode(message: StatusCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StatusCode;
    fromJSON(object: any): StatusCode;
    toJSON(message: StatusCode): unknown;
    fromPartial<I extends {
        message?: string | undefined;
        codeType?: CodeType | undefined;
    } & {
        message?: string | undefined;
        codeType?: CodeType | undefined;
    } & Record<Exclude<keyof I, "$type" | "message" | "codeType">, never>>(object: I): StatusCode;
};
export declare const SessionUuid: {
    $type: "speechkit.stt.v3.SessionUuid";
    encode(message: SessionUuid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SessionUuid;
    fromJSON(object: any): SessionUuid;
    toJSON(message: SessionUuid): unknown;
    fromPartial<I extends {
        uuid?: string | undefined;
        userRequestId?: string | undefined;
    } & {
        uuid?: string | undefined;
        userRequestId?: string | undefined;
    } & Record<Exclude<keyof I, "$type" | "uuid" | "userRequestId">, never>>(object: I): SessionUuid;
};
export declare const StreamingResponse: {
    $type: "speechkit.stt.v3.StreamingResponse";
    encode(message: StreamingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamingResponse;
    fromJSON(object: any): StreamingResponse;
    toJSON(message: StreamingResponse): unknown;
    fromPartial<I extends {
        final?: {
            alternatives?: {
                text?: string | undefined;
                confidence?: number | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            channelTag?: string | undefined;
        } | undefined;
        responseWallTimeMs?: number | undefined;
        sessionUuid?: {
            uuid?: string | undefined;
            userRequestId?: string | undefined;
        } | undefined;
        audioCursors?: {
            receivedDataMs?: number | undefined;
            resetTimeMs?: number | undefined;
            partialTimeMs?: number | undefined;
            finalTimeMs?: number | undefined;
            finalIndex?: number | undefined;
            eouTimeMs?: number | undefined;
        } | undefined;
        partial?: {
            alternatives?: {
                text?: string | undefined;
                confidence?: number | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            channelTag?: string | undefined;
        } | undefined;
        eouUpdate?: {
            timeMs?: number | undefined;
        } | undefined;
        finalRefinement?: {
            finalIndex?: number | undefined;
            normalizedText?: {
                alternatives?: {
                    text?: string | undefined;
                    confidence?: number | undefined;
                    words?: {
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    }[] | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                channelTag?: string | undefined;
            } | undefined;
        } | undefined;
        statusCode?: {
            message?: string | undefined;
            codeType?: CodeType | undefined;
        } | undefined;
    } & {
        final?: ({
            alternatives?: {
                text?: string | undefined;
                confidence?: number | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            channelTag?: string | undefined;
        } & {
            alternatives?: ({
                text?: string | undefined;
                confidence?: number | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] & ({
                text?: string | undefined;
                confidence?: number | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & {
                text?: string | undefined;
                confidence?: number | undefined;
                words?: ({
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] & ({
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & Record<Exclude<keyof I["final"]["alternatives"][number]["words"][number], "$type" | "text" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["final"]["alternatives"][number]["words"], "$type" | keyof {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[]>, never>) | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & Record<Exclude<keyof I["final"]["alternatives"][number], "$type" | "text" | "confidence" | "words" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["final"]["alternatives"], "$type" | keyof {
                text?: string | undefined;
                confidence?: number | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[]>, never>) | undefined;
            channelTag?: string | undefined;
        } & Record<Exclude<keyof I["final"], "$type" | "alternatives" | "channelTag">, never>) | undefined;
        responseWallTimeMs?: number | undefined;
        sessionUuid?: ({
            uuid?: string | undefined;
            userRequestId?: string | undefined;
        } & {
            uuid?: string | undefined;
            userRequestId?: string | undefined;
        } & Record<Exclude<keyof I["sessionUuid"], "$type" | "uuid" | "userRequestId">, never>) | undefined;
        audioCursors?: ({
            receivedDataMs?: number | undefined;
            resetTimeMs?: number | undefined;
            partialTimeMs?: number | undefined;
            finalTimeMs?: number | undefined;
            finalIndex?: number | undefined;
            eouTimeMs?: number | undefined;
        } & {
            receivedDataMs?: number | undefined;
            resetTimeMs?: number | undefined;
            partialTimeMs?: number | undefined;
            finalTimeMs?: number | undefined;
            finalIndex?: number | undefined;
            eouTimeMs?: number | undefined;
        } & Record<Exclude<keyof I["audioCursors"], "$type" | "receivedDataMs" | "resetTimeMs" | "partialTimeMs" | "finalTimeMs" | "finalIndex" | "eouTimeMs">, never>) | undefined;
        partial?: ({
            alternatives?: {
                text?: string | undefined;
                confidence?: number | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] | undefined;
            channelTag?: string | undefined;
        } & {
            alternatives?: ({
                text?: string | undefined;
                confidence?: number | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[] & ({
                text?: string | undefined;
                confidence?: number | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & {
                text?: string | undefined;
                confidence?: number | undefined;
                words?: ({
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] & ({
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & Record<Exclude<keyof I["partial"]["alternatives"][number]["words"][number], "$type" | "text" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["partial"]["alternatives"][number]["words"], "$type" | keyof {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[]>, never>) | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            } & Record<Exclude<keyof I["partial"]["alternatives"][number], "$type" | "text" | "confidence" | "words" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["partial"]["alternatives"], "$type" | keyof {
                text?: string | undefined;
                confidence?: number | undefined;
                words?: {
                    text?: string | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                startTimeMs?: number | undefined;
                endTimeMs?: number | undefined;
            }[]>, never>) | undefined;
            channelTag?: string | undefined;
        } & Record<Exclude<keyof I["partial"], "$type" | "alternatives" | "channelTag">, never>) | undefined;
        eouUpdate?: ({
            timeMs?: number | undefined;
        } & {
            timeMs?: number | undefined;
        } & Record<Exclude<keyof I["eouUpdate"], "$type" | "timeMs">, never>) | undefined;
        finalRefinement?: ({
            finalIndex?: number | undefined;
            normalizedText?: {
                alternatives?: {
                    text?: string | undefined;
                    confidence?: number | undefined;
                    words?: {
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    }[] | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                channelTag?: string | undefined;
            } | undefined;
        } & {
            finalIndex?: number | undefined;
            normalizedText?: ({
                alternatives?: {
                    text?: string | undefined;
                    confidence?: number | undefined;
                    words?: {
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    }[] | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] | undefined;
                channelTag?: string | undefined;
            } & {
                alternatives?: ({
                    text?: string | undefined;
                    confidence?: number | undefined;
                    words?: {
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    }[] | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[] & ({
                    text?: string | undefined;
                    confidence?: number | undefined;
                    words?: {
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    }[] | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & {
                    text?: string | undefined;
                    confidence?: number | undefined;
                    words?: ({
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    }[] & ({
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    } & {
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    } & Record<Exclude<keyof I["finalRefinement"]["normalizedText"]["alternatives"][number]["words"][number], "$type" | "text" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["finalRefinement"]["normalizedText"]["alternatives"][number]["words"], "$type" | keyof {
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    }[]>, never>) | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                } & Record<Exclude<keyof I["finalRefinement"]["normalizedText"]["alternatives"][number], "$type" | "text" | "confidence" | "words" | "startTimeMs" | "endTimeMs">, never>)[] & Record<Exclude<keyof I["finalRefinement"]["normalizedText"]["alternatives"], "$type" | keyof {
                    text?: string | undefined;
                    confidence?: number | undefined;
                    words?: {
                        text?: string | undefined;
                        startTimeMs?: number | undefined;
                        endTimeMs?: number | undefined;
                    }[] | undefined;
                    startTimeMs?: number | undefined;
                    endTimeMs?: number | undefined;
                }[]>, never>) | undefined;
                channelTag?: string | undefined;
            } & Record<Exclude<keyof I["finalRefinement"]["normalizedText"], "$type" | "alternatives" | "channelTag">, never>) | undefined;
        } & Record<Exclude<keyof I["finalRefinement"], "$type" | "finalIndex" | "normalizedText">, never>) | undefined;
        statusCode?: ({
            message?: string | undefined;
            codeType?: CodeType | undefined;
        } & {
            message?: string | undefined;
            codeType?: CodeType | undefined;
        } & Record<Exclude<keyof I["statusCode"], "$type" | "message" | "codeType">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "final" | "responseWallTimeMs" | "sessionUuid" | "audioCursors" | "partial" | "eouUpdate" | "finalRefinement" | "statusCode">, never>>(object: I): StreamingResponse;
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
