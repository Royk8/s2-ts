"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrbcInstruction = void 0;
class FrbcInstruction {
    constructor(message_id, id, actuator_id, operation_mode, operation_mode_factor, execution_time, abnormal_condition) {
        this.message_id = message_id;
        this.id = id;
        this.actuator_id = actuator_id;
        this.operation_mode = operation_mode;
        this.operation_mode_factor = operation_mode_factor;
        this.execution_time = execution_time;
        this.abnormal_condition = abnormal_condition;
    }
}
exports.FrbcInstruction = FrbcInstruction;
