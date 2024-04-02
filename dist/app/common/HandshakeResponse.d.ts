import { HandshakeResponse as GenHandshakeResponse } from "../../messages/generated";
interface constructorParameters {
    message_id: string;
    selected_protocol_version: string;
}
export declare class HandshakeResponse implements GenHandshakeResponse {
    message_type: "HandshakeResponse";
    message_id: string;
    selected_protocol_version: string;
    constructor(parameters: constructorParameters);
}
export {};
