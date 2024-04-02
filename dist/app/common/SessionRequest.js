"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionRequest = void 0;
class SessionRequest {
    constructor(message_id, request, diagnostic_label) {
        this.message_id = message_id;
        this.request = request;
        this.diagnostic_label = diagnostic_label;
    }
}
exports.SessionRequest = SessionRequest;
