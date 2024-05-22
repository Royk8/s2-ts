import { FRBC_Instruction } from "@messages";
import { ID } from "@schemas";
import { FrbcOperationModeFactor, validateOperationModeFactor } from "./FrbcOperationModeFactor";
import { Timestamp, validateTimestamp } from "../common";
import { Uuid } from "../services/Uuid";

/**
 * Parameters for constructing a new instance of FrbcInstruction.
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
     * ID of the actuator this instruction belongs to.
     */
    actuator_id: ID;
    /**
     * ID of the FRBC.OperationMode that should be activated.
     */
    operation_mode: ID;
    /**
     * The number indicates the factor with which the FRBC.OperationMode should be configured. The factor should be greater than or equal to 0 and less or equal to 1.
     */
    operation_mode_factor: FrbcOperationModeFactor;
    /**
     * Indicates the moment the execution of the instruction shall start. When the specified execution time is in the past, execution must start as soon as possible.
     */
    execution_time: Timestamp;
    /**
     * Indicates if this is an instruction during an abnormal condition.
     */
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

    /**
     * Constructs a new instance of FrbcInstruction.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} [constructorParameters.message_id] - ID of this message. If not provided, a new UUID will be generated.
     * @param {ID} constructorParameters.id - ID of the instruction.
     * @param {ID} constructorParameters.actuator_id - ID of the actuator this instruction belongs to.
     * @param {ID} constructorParameters.operation_mode - ID of the FRBC.OperationMode that should be activated.
     * @param {FrbcOperationModeFactor} constructorParameters.operation_mode_factor - The number indicates the factor with which the FRBC.OperationMode should be configured.
     * @param {Timestamp} constructorParameters.execution_time - Indicates the moment the execution of the instruction shall start.
     * @param {boolean} constructorParameters.abnormal_condition - Indicates if this is an instruction during an abnormal condition.
     */
    constructor({ message_id, id, actuator_id, operation_mode, operation_mode_factor, execution_time, abnormal_condition }: ConstructorParameters){

        validateOperationModeFactor(operation_mode_factor);
        validateTimestamp(execution_time);
        
        this.message_type = "FRBC.Instruction";
        this.message_id = Uuid.generate(message_id);
        this.id = id;
        this.actuator_id = actuator_id;
        this.operation_mode = operation_mode;
        this.operation_mode_factor = operation_mode_factor;
        this.execution_time = execution_time;
        this.abnormal_condition = abnormal_condition;
    }
}
