import { ReceptionStatus as GenReceptionStatus } from "@messages";
import { ReceptionStatusValues } from "@messages";

export class ReceptionStatus implements GenReceptionStatus {
    message_type: "ReceptionStatus";
    subject_message_id: string;
    status: ReceptionStatusValues;
    diagnostic_label?: string;
    
    constructor(subject_message_id: string, status: ReceptionStatusValues, diagnostic_label?: string){
        this.subject_message_id = subject_message_id;
        this.status = status;
        this.diagnostic_label = diagnostic_label;
    }
}