import { ReceptionStatus as GenReceptionStatus } from "@messages";
import { ReceptionStatusValues } from "@messages";
import { ID } from "@schemas";

interface constructorParameters{
    subject_message_id: ID;
    status: ReceptionStatusValues;
    diagnostic_label?: string;
}

export class ReceptionStatus implements GenReceptionStatus {
    message_type: "ReceptionStatus";
    subject_message_id: ID;
    status: ReceptionStatusValues;
    diagnostic_label?: string;
    
    constructor(contractorParameters: constructorParameters){
        const { subject_message_id, status, diagnostic_label } = contractorParameters;

        this.message_type = "ReceptionStatus";
        this.subject_message_id = subject_message_id;
        this.status = status;
        this.diagnostic_label = diagnostic_label;
    }
}