import { HandshakeResponse as GenHandshakeResponse } from "@messages";

interface constructorParameters {
    message_id: string;
    selected_protocol_version: string;
};

export class HandshakeResponse implements GenHandshakeResponse {
    message_type: "HandshakeResponse";
    message_id: string;
    selected_protocol_version: string;

    constructor(parameters: constructorParameters){
        this.message_type = "HandshakeResponse";
        this.message_id = parameters.message_id;
        this.selected_protocol_version = parameters.selected_protocol_version;
    }
}