import { HandshakeResponse as GenHandshakeResponse } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters {
    message_id?: ID;
    selected_protocol_version: string;
};

export class HandshakeResponse implements GenHandshakeResponse {
    message_type: "HandshakeResponse";
    message_id: ID;
    selected_protocol_version: string;

    constructor( { message_id, selected_protocol_version } : ConstructorParameters){
        this.message_type = "HandshakeResponse";
        this.message_id = Uuid.generate(message_id);
        this.selected_protocol_version = selected_protocol_version;
    }
}