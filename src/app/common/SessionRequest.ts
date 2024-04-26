import { SessionRequest as GenSessionRequest, SessionRequestType } from "@messages";

interface constructorParameters{
    message_id: string;
    request: SessionRequestType;
    diagnostic_label?: string;
}

export class SessionRequest implements GenSessionRequest {
    message_type: "SessionRequest";
    message_id: string;
    request: SessionRequestType;
    diagnostic_label?: string;

    constructor(contractParameters: constructorParameters){
        const { message_id, request, diagnostic_label } = contractParameters;

        this.message_type = "SessionRequest";
        this.message_id = message_id;
        this.request = request;
        this.diagnostic_label = diagnostic_label;
    }
}