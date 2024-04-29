import { FRBC_ActuatorStatus } from "@messages";
import { ID } from "@schemas";
import { validateOperationModeFactor } from "./FrbcOperationModeFactor";
import type { FrbcOperationModeFactor } from "./FrbcOperationModeFactor";
import { Timestamp, validateTimestamp } from "../common";

interface constructorParameters{
    message_id: ID;
    actuator_id: ID;
    active_operation_mode_id: ID;
    operation_mode_factor: FrbcOperationModeFactor;
    previous_operation_mode_id?: ID;
    transition_timestamp?: Timestamp;
}

export class FrbcActuatorStatus implements FRBC_ActuatorStatus {
    message_type: "FRBC.ActuatorStatus";
    message_id: ID;
    actuator_id: ID;
    active_operation_mode_id: ID;
    operation_mode_factor: FrbcOperationModeFactor;
    previous_operation_mode_id?: ID;
    transition_timestamp?: Timestamp;

    constructor(constructorParameters: constructorParameters){
        const { message_id, actuator_id, active_operation_mode_id, operation_mode_factor, previous_operation_mode_id, transition_timestamp } = constructorParameters;

        validateOperationModeFactor(operation_mode_factor);
        validateTimestamp(transition_timestamp);

        this.message_type = "FRBC.ActuatorStatus";
        this.message_id = message_id;
        this.actuator_id = actuator_id;
        this.active_operation_mode_id = active_operation_mode_id;
        this.operation_mode_factor = operation_mode_factor;
        this.previous_operation_mode_id = previous_operation_mode_id;
        this.transition_timestamp = transition_timestamp;
    }
}