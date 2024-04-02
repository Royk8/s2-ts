/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * ID of this message
 */
export type ID = string;
export interface HandshakeResponse {
    message_type: "HandshakeResponse";
    message_id: ID;
    /**
     * The protocol version the CEM selected for this session
     */
    selected_protocol_version: string;
}
