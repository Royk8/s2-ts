"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructionStatusUpdate = void 0;
class InstructionStatusUpdate {
    constructor(message_id, instruction_id, status_type, timestamp) {
        this.message_id = message_id;
        this.instruction_id = instruction_id;
        this.status_type = status_type;
        this.timestamp = timestamp;
    }
}
exports.InstructionStatusUpdate = InstructionStatusUpdate;
