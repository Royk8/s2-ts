import { DDBC_Instruction } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { S2Message, Timestamp, validateTimestamp } from "../common";

/**
 * Parameters for constructing a new instance of DdbcInstruction.
 */
interface ConstructorParameters {
    /**
     * ID of this message.
     */
    message_id?: ID;
    /**
     * Identifier of this DDBC.Instruction. Must be unique in the scope of the Resource Manager, for at least the duration of the session between Resource Manager and CEM.
     */
    id: ID;
    /**
     * Indicates the moment the execution of the instruction shall start. When the specified execution time is in the past, execution must start as soon as possible.
     */
    execution_time: Timestamp;
    /**
     * Indicates if this is an instruction during an abnormal condition.
     */
    abnormal_condition: boolean;
    /**
     * ID of the actuator this Instruction belongs to.
     */
    actuator_id: ID;
    /**
     * ID of the DDBC.OperationMode.
     */
    operation_mode_id: ID;
    /**
     * The number indicates the factor with which the OMBC.OperationMode should be configured. The factor should be greater than or equal to 0 and less or equal to 1.
     */
    operation_mode_factor: number;
}

export class DdbcInstruction implements DDBC_Instruction, S2Message {
    message_type: "DDBC.Instruction";
    message_id: ID;
    id: ID;
    execution_time: Timestamp;
    abnormal_condition: boolean;
    actuator_id: ID;
    operation_mode_id: ID;
    operation_mode_factor: number;

    /**
     * Constructs a new instance of DdbcInstruction.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} [constructorParameters.message_id] - ID of this message.
     * @param {ID} constructorParameters.id - Identifier of this DDBC.Instruction.
     * @param {Timestamp} constructorParameters.execution_time - Indicates the moment the execution of the instruction shall start.
     * @param {boolean} constructorParameters.abnormal_condition - Indicates if this is an instruction during an abnormal condition.
     * @param {ID} constructorParameters.actuator_id - ID of the actuator this Instruction belongs to.
     * @param {ID} constructorParameters.operation_mode_id - ID of the DDBC.OperationMode.
     * @param {number} constructorParameters.operation_mode_factor - The factor with which the OMBC.OperationMode should be configured.
     */
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
