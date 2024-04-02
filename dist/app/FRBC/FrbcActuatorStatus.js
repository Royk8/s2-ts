"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrbcActuatorStatus = void 0;
class FrbcActuatorStatus {
    constructor(message_id, actuator_id, active_operation_mode_id, operation_mode_factor, previous_operation_mode_id, transition_timestamp) {
        this.message_id = message_id;
        this.actuator_id = actuator_id;
        this.active_operation_mode_id = active_operation_mode_id;
        this.operation_mode_factor = operation_mode_factor;
        this.previous_operation_mode_id = previous_operation_mode_id;
        this.transition_timestamp = transition_timestamp;
    }
}
exports.FrbcActuatorStatus = FrbcActuatorStatus;
