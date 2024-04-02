import { SessionRequest as GenSessionRequest, SessionRequestType } from "../../messages/generated";
export declare class SessionRequest implements GenSessionRequest {
    message_type: "SessionRequest";
    message_id: string;
    request: SessionRequestType;
    diagnostic_label?: string;
    constructor(message_id: string, request: SessionRequestType, diagnostic_label?: string);
}
