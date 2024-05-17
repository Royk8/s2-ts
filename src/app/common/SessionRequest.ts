import { SessionRequest as GenSessionRequest, SessionRequestType } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters{
    message_id?: ID;
    request: SessionRequestType;
    diagnostic_label?: string;
}

export class SessionRequest implements GenSessionRequest {
    message_type: "SessionRequest";
    message_id: ID;
    request: SessionRequestType;
    diagnostic_label?: string;

    constructor({ message_id, request, diagnostic_label }: ConstructorParameters){

        this.message_type = "SessionRequest";
        this.message_id = Uuid.generate(message_id);
        this.request = request;
        this.diagnostic_label = diagnostic_label;
    }
}