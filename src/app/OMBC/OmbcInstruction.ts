import { OMBC_Instruction } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { Timestamp, validateTimestamp } from "../common";

interface ConstructorParameters {
    message_id?: ID;
    id: ID;
    execution_time: Timestamp;
    operation_mode_id: ID;
    operation_mode_factor: number;
    abnormal_condition: boolean;
}

export class OmbcInstruction implements OMBC_Instruction {
    message_type: "OMBC.Instruction";
    message_id: ID;
    id: ID;
    execution_time: Timestamp;
    operation_mode_id: ID;
    operation_mode_factor: number;
    abnormal_condition: boolean;

    constructor({ message_id, id, execution_time, operation_mode_id, operation_mode_factor, abnormal_condition }: ConstructorParameters) {
        validateTimestamp(execution_time);
        if (operation_mode_factor < 0 || operation_mode_factor > 1) {
            throw new Error("operation_mode_factor must be in the range [0, 1]");
        }

        this.message_type = "OMBC.Instruction";
        this.message_id = Uuid.generate(message_id);
        this.id = id;
        this.execution_time = execution_time;
        this.operation_mode_id = operation_mode_id;
        this.operation_mode_factor = operation_mode_factor;
        this.abnormal_condition = abnormal_condition;
    }


}