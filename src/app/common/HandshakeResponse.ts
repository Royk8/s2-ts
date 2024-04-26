import { HandshakeResponse as GenHandshakeResponse } from "@messages";
import { ID } from "@schemas";

interface constructorParameters {
    message_id: ID;
    selected_protocol_version: string;
};

export class HandshakeResponse implements GenHandshakeResponse {
    message_type: "HandshakeResponse";
    message_id: ID;
    selected_protocol_version: string;

    constructor(parameters: constructorParameters){
        this.message_type = "HandshakeResponse";
        this.message_id = parameters.message_id;
        this.selected_protocol_version = parameters.selected_protocol_version;
    }
}