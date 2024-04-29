import { FRBC_Instruction } from "@messages";
import { ID } from "@schemas";
import { FrbcOperationModeFactor, validateOperationModeFactor } from "./FrbcOperationModeFactor";
import { Timestamp, validateTimestamp } from "../common";

interface constructorParameters{
    message_id: ID;
    id: ID;
    actuator_id: ID;
    operation_mode: ID;
    operation_mode_factor: FrbcOperationModeFactor;
    execution_time: Timestamp;
    abnormal_condition: boolean;
}

export class FrbcInstruction implements FRBC_Instruction {
    message_type: "FRBC.Instruction";
    message_id: ID;
    id: ID;
    actuator_id: ID;
    operation_mode: ID;
    operation_mode_factor: FrbcOperationModeFactor;
    execution_time: Timestamp;
    abnormal_condition: boolean;

    constructor(constructorParameters: constructorParameters){
        const { message_id, id, actuator_id, operation_mode, operation_mode_factor, execution_time, abnormal_condition } = constructorParameters;

        validateOperationModeFactor(operation_mode_factor);
        validateTimestamp(execution_time);
        
        this.message_type = "FRBC.Instruction";
        this.message_id = message_id;
        this.id = id;
        this.actuator_id = actuator_id;
        this.operation_mode = operation_mode;
        this.operation_mode_factor = operation_mode_factor;
        this.execution_time = execution_time;
        this.abnormal_condition = abnormal_condition;
    }
}