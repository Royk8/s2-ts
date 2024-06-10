import { ReceptionStatus as GenReceptionStatus, ReceptionStatusValues } from "@messages";
import { ID } from "@schemas";
import { S2Message } from "./S2Message";

/**
 * Parameters for constructing a new instance of ReceptionStatus.
 */
interface ConstructorParameters {
    /**
     * The ID of the subject message.
     */
    subject_message_id: ID;
    /**
     * Enumeration of status values.
     * Possible values:
     * - "INVALID_DATA"
     * - "INVALID_MESSAGE"
     * - "INVALID_CONTENT"
     * - "TEMPORARY_ERROR"
     * - "PERMANENT_ERROR"
     * - "OK"
     */
    status: ReceptionStatusValues;
    /**
     * Diagnostic label that can be used to provide additional information for debugging. Not for HMI purposes.
     */
    diagnostic_label?: string;
}

export class ReceptionStatus implements GenReceptionStatus, S2Message {
    message_type: "ReceptionStatus";
    subject_message_id: ID;
    status: ReceptionStatusValues;
    diagnostic_label?: string;

    /**
     * Constructs a new instance of ReceptionStatus.
     * 
     * @param {ConstructorParameters} params - The parameters for the constructor.
     * @param {ID} params.subject_message_id - The ID of the subject message.
     * @param {ReceptionStatusValues} params.status - The status of the reception.
     * @param {string} [params.diagnostic_label] - A diagnostic label for additional debugging information (optional).
     */
    constructor({ subject_message_id, status, diagnostic_label }: ConstructorParameters) {
        this.message_type = "ReceptionStatus";
        this.subject_message_id = subject_message_id;
        this.status = status;
        this.diagnostic_label = diagnostic_label;
    }
}
