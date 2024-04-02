import { FRBC_ActuatorStatus } from "@messages";
import { ID } from "@schemas";

export class FrbcActuatorStatus implements FRBC_ActuatorStatus {
    message_type: "FRBC.ActuatorStatus";
    message_id: ID;
    actuator_id: ID;
    active_operation_mode_id: ID;
    operation_mode_factor: number;
    previous_operation_mode_id?: ID;
    transition_timestamp?: string;

    constructor(message_id: ID, actuator_id: ID, active_operation_mode_id: ID, operation_mode_factor: number, previous_operation_mode_id?: ID, transition_timestamp?: string){
        this.message_id = message_id;
        this.actuator_id = actuator_id;
        this.active_operation_mode_id = active_operation_mode_id;
        this.operation_mode_factor = operation_mode_factor;
        this.previous_operation_mode_id = previous_operation_mode_id;
        this.transition_timestamp = transition_timestamp;
    }
}