import { PPBC_EndInterruptionInstruction } from "@messages";
import { ID } from "@schemas";
import { Timestamp, validateTimestamp } from "../common";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters {
    /**
     * ID of this message
     */
    message_id?: ID;
    /**
     * ID of the Instruction. Must be unique in the scope of the Resource Manager, for at least the duration of the session between Resource Manager and CEM.
     */
    id: ID;
    /**
     * ID of the PPBC.PowerProfileDefinition of which the PPBC.PowerSequence interruption is being ended by the CEM.
     */
    power_profile_id: ID;
    /**
     * ID of the PPBC.PowerSequnceContainer of which the PPBC.PowerSequence interruption is being ended by the CEM.
     */
    sequence_container_id: ID;
    /**
     * ID of the PPBC.PowerSequence for which the CEM wants to end the interruption.
     */
    power_sequence_id: ID;
    /**
     * Indicates the moment PPBC.PowerSequence interruption shall end. When the specified execution time is in the past, execution must start as soon as possible.
     */
    execution_time: Timestamp;
    /**
     * Indicates if this is an instruction during an abnormal condition
     */
    abnormal_condition: boolean;
}

export class PpbcEndInterruptionInstruction implements PPBC_EndInterruptionInstruction {
    message_type: "PPBC.EndInterruptionInstruction";
    message_id: ID;
    id: ID;
    power_profile_id: ID;
    sequence_container_id: ID;
    power_sequence_id: ID;
    execution_time: Timestamp;
    abnormal_condition: boolean;

    /**
     * Constructs a new instance of the PpbcEndInterruptionInstruction class.
     * 
     * @param {ConstructorParameters} parameters - The parameters for the constructor.
     * @param {ID} parameters.message_id - ID of this message.
     * @param {ID} parameters.id - ID of the Instruction.
     * @param {ID} parameters.power_profile_id - ID of the PPBC.PowerProfileDefinition.
     * @param {ID} parameters.sequence_container_id - ID of the PPBC.PowerSequenceContainer.
     * @param {ID} parameters.power_sequence_id - ID of the PPBC.PowerSequence.
     * @param {Timestamp} parameters.execution_time - Moment PPBC.PowerSequence interruption shall end.
     * @param {boolean} parameters.abnormal_condition - Indicates if this is an instruction during an abnormal condition.
     */
    constructor({ message_id, id, power_profile_id, sequence_container_id, power_sequence_id, execution_time, abnormal_condition }: ConstructorParameters) {
        validateTimestamp(execution_time);

        this.message_type = "PPBC.EndInterruptionInstruction";
        this.message_id = Uuid.generate(message_id);
        this.id = id;
        this.power_profile_id = power_profile_id;
        this.sequence_container_id = sequence_container_id;
        this.power_sequence_id = power_sequence_id;
        this.execution_time = execution_time;
        this.abnormal_condition = abnormal_condition;
    }
}
