import { DDBC_Instruction } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { Timestamp, validateTimestamp } from "../common";

interface ConstructorParameters {
    message_id: ID;
    id: ID;
    execution_time: Timestamp;
    abnormal_condition: boolean;
    actuator_id: ID;
    operation_mode_id: ID;
    operation_mode_factor: number;
}

export class DdbcInstruction implements DDBC_Instruction {
    message_type: "DDBC.Instruction";
    message_id: ID;
    id: ID;
    execution_time: Timestamp;
    abnormal_condition: boolean;
    actuator_id: ID;
    operation_mode_id: ID;
    operation_mode_factor: number;

    constructor({ message_id, id, execution_time, abnormal_condition, actuator_id, operation_mode_id, operation_mode_factor }: ConstructorParameters) {
        validateTimestamp(execution_time);

        this.message_type = "DDBC.Instruction";
        this.message_id = Uuid.generate(message_id);
        this.id = id;
        this.execution_time = execution_time;
        this.abnormal_condition = abnormal_condition;
        this.actuator_id = actuator_id;
        this.operation_mode_id = operation_mode_id;
        this.operation_mode_factor = operation_mode_factor;
    }
    

}