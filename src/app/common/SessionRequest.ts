import { SessionRequest as GenSessionRequest, SessionRequestType } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { S2Message } from "./Message";

/**
 * Parameters for constructing a new instance of SessionRequest.
 */
interface ConstructorParameters {
    /**
     * ID of this message.
     */
    message_id?: ID;
    /**
     * The type of request.
     */
    request: SessionRequestType;
    /**
     * Optional field for a human-readable description for debugging purposes.
     */
    diagnostic_label?: string;
}

export class SessionRequest implements GenSessionRequest, S2Message {
    message_type: "SessionRequest";
    message_id: ID;
    request: SessionRequestType;
    diagnostic_label?: string;

    /**
     * Constructs a new instance of SessionRequest.
     * 
     * @param {ConstructorParameters} params - The parameters for the constructor.
     * @param {ID} [params.message_id] - The ID of this message. If not provided, a new UUID will be generated.
     * @param {SessionRequestType} params.request - The type of request.
     * @param {string} [params.diagnostic_label] - A human-readable description for debugging purposes (optional).
     */
    constructor({ message_id, request, diagnostic_label }: ConstructorParameters) {
        this.message_type = "SessionRequest";
        this.message_id = Uuid.generate(message_id);
        this.request = request;
        this.diagnostic_label = diagnostic_label;
    }
}
