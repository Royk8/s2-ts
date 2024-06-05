import { OMBC_Instruction } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { S2Message, Timestamp, validateTimestamp } from "../common";

/**
 * Constructor parameters for the OmbcInstruction class.
 */
interface ConstructorParameters {
    /**
     * ID of this message.
     */
    message_id?: ID;
    /**
     * ID of the instruction. Must be unique in the scope of the Resource Manager, for at least the duration of the session between Resource Manager and CEM.
     */
    id: ID;
    /**
     * Indicates the moment the execution of the instruction shall start. When the specified execution time is in the past, execution must start as soon as possible.
     */
    execution_time: Timestamp;
    /**
     * ID of the OMBC.OperationMode that should be activated.
     */
    operation_mode_id: ID;
    /**
     * The number indicates the factor with which the OMBC.OperationMode should be configured. The factor should be greater than or equal to 0 and less than or equal to 1.
     */
    operation_mode_factor: number;
    /**
     * Indicates if this is an instruction during an abnormal condition.
     */
    abnormal_condition: boolean;
}

/**
 * Class representing an OMBC Instruction.
 */
export class OmbcInstruction implements OMBC_Instruction, S2Message {
    message_type: "OMBC.Instruction";
    message_id: ID;
    id: ID;
    execution_time: Timestamp;
    operation_mode_id: ID;
    operation_mode_factor: number;
    abnormal_condition: boolean;

    /**
     * Constructs a new instance of the OmbcInstruction class.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} [constructorParameters.message_id] - ID of this message.
     * @param {ID} constructorParameters.id - ID of the instruction.
     * @param {Timestamp} constructorParameters.execution_time - Indicates the moment the execution of the instruction shall start.
     * @param {ID} constructorParameters.operation_mode_id - ID of the OMBC.OperationMode that should be activated.
     * @param {number} constructorParameters.operation_mode_factor - The factor with which the OMBC.OperationMode should be configured.
     * @param {boolean} constructorParameters.abnormal_condition - Indicates if this is an instruction during an abnormal condition.
     */
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
