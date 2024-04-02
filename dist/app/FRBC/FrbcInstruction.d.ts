import { FRBC_Instruction } from "../../messages/generated";
import { ID } from "../../schemas/generated";
export declare class FrbcInstruction implements FRBC_Instruction {
    message_type: "FRBC.Instruction";
    message_id: ID;
    id: ID;
    actuator_id: ID;
    operation_mode: ID;
    operation_mode_factor: number;
    execution_time: string;
    abnormal_condition: boolean;
    constructor(message_id: ID, id: ID, actuator_id: ID, operation_mode: ID, operation_mode_factor: number, execution_time: string, abnormal_condition: boolean);
}
