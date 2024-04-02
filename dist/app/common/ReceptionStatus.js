"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceptionStatus = void 0;
class ReceptionStatus {
    constructor(subject_message_id, status, diagnostic_label) {
        this.subject_message_id = subject_message_id;
        this.status = status;
        this.diagnostic_label = diagnostic_label;
    }
}
exports.ReceptionStatus = ReceptionStatus;
