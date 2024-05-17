import { ReceptionStatus as GenReceptionStatus, ReceptionStatusValues } from "@messages";
import { ID } from "@schemas";

interface ConstructorParameters{
    subject_message_id: ID;
    status: ReceptionStatusValues;
    diagnostic_label?: string;
}

export class ReceptionStatus implements GenReceptionStatus {
    message_type: "ReceptionStatus";
    subject_message_id: ID;
    status: ReceptionStatusValues;
    diagnostic_label?: string;
    
    constructor({ subject_message_id, status, diagnostic_label }: ConstructorParameters){

        this.message_type = "ReceptionStatus";
        this.subject_message_id = subject_message_id;
        this.status = status;
        this.diagnostic_label = diagnostic_label;
    }
}