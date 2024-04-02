"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandshakeResponse = void 0;
;
class HandshakeResponse {
    constructor(parameters) {
        this.message_type = "HandshakeResponse";
        this.message_id = parameters.message_id;
        this.selected_protocol_version = parameters.selected_protocol_version;
    }
}
exports.HandshakeResponse = HandshakeResponse;
