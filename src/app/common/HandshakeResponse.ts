import { HandshakeResponse as GenHandshakeResponse } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters {
    /**
     * ID of this message
     */
    message_id?: ID;
    /**
     * The protocol version the CEM selected for this session
     */
    selected_protocol_version: string;
};

export class HandshakeResponse implements GenHandshakeResponse {
    message_type: "HandshakeResponse";
    message_id: ID;
    selected_protocol_version: string;

    /**
     * Constructs a new instance of the HandshakeResponse.
     * 
     * @param {ConstructorParameters} params - The parameters for the constructor.
     * @param {ID} [params.message_id] - The unique identifier for the message. If not provided, a new UUID will be generated.
     * @param {string} params.selected_protocol_version - The protocol version selected by the CEM for this session.
     */
    constructor({ message_id, selected_protocol_version }: ConstructorParameters) {
        this.message_type = "HandshakeResponse";
        this.message_id = Uuid.generate(message_id);
        this.selected_protocol_version = selected_protocol_version;
    }
}