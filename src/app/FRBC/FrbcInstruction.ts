import { FRBC_Instruction } from "@messages";
import { ID } from "@schemas";

export class FrbcInstruction implements FRBC_Instruction {
    message_type: "FRBC.Instruction";
    message_id: ID;
    id: ID;
    actuator_id: ID;
    operation_mode: ID;
    operation_mode_factor: number;
    execution_time: string;
    abnormal_condition: boolean;

    constructor(message_id: ID, id: ID, actuator_id: ID, operation_mode: ID, operation_mode_factor: number, execution_time: string, abnormal_condition: boolean){
        this.message_id = message_id;
        this.id = id;
        this.actuator_id = actuator_id;
        this.operation_mode = operation_mode;
        this.operation_mode_factor = operation_mode_factor;
        this.execution_time = execution_time;
        this.abnormal_condition = abnormal_condition;
    }
}