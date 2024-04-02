"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handshake = void 0;
;
class Handshake {
    constructor(parameters) {
        this.message_type = 'Handshake';
        this.message_id = parameters.message_id;
        this.role = parameters.role;
        this.supported_protocol_versions = parameters.supported_protocol_versions;
    }
}
exports.Handshake = Handshake;
