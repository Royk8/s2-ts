import { ReceptionStatus as GenReceptionStatus } from "../../messages/generated";
import { ReceptionStatusValues } from "../../messages/generated";
export declare class ReceptionStatus implements GenReceptionStatus {
    message_type: "ReceptionStatus";
    subject_message_id: string;
    status: ReceptionStatusValues;
    diagnostic_label?: string;
    constructor(subject_message_id: string, status: ReceptionStatusValues, diagnostic_label?: string);
}
