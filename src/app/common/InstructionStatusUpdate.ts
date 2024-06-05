import { InstructionStatusUpdate as GenInstructionStatusUpdate, InstructionStatus} from "@messages";
import { ID } from "@schemas";
import { S2Message, Timestamp, validateTimestamp } from "./";
import { Uuid } from "../services/Uuid";

/**
 * Parameters for constructing a new instance of InstructionStatusUpdate.
 */
interface ConstructorParameters {
    /**
     * ID of this message.
     */
    message_id?: ID;
    /**
     * ID of this instruction (as provided by the CEM).
     */
    instruction_id?: ID;
    /**
     * Present status of this instruction.
     */
    status_type: InstructionStatus;
    /**
     * Timestamp when status_type has changed the last time.
     */
    timestamp: Timestamp;
}

export class InstructionStatusUpdate implements GenInstructionStatusUpdate, S2Message {
    message_type: "InstructionStatusUpdate";
    message_id: ID;
    instruction_id: ID;
    status_type: InstructionStatus;
    timestamp: Timestamp;

    /**
     * Constructs a new instance of the InstructionStatusUpdate.
     * 
     * @param {ConstructorParameters} params - The parameters for the constructor.
     * @param {ID} [params.message_id] - The unique identifier for the message. If not provided, a new UUID will be generated.
     * @param {ID} [params.instruction_id] - The unique identifier for the instruction (as provided by the CEM).
     * @param {InstructionStatus} params.status_type - The present status of the instruction.
     * @param {Timestamp} params.timestamp - The timestamp when the status_type last changed.
     */
    constructor({ message_id, instruction_id, status_type, timestamp }: ConstructorParameters) {
        validateTimestamp(timestamp);

        this.message_type = "InstructionStatusUpdate";
        this.message_id = Uuid.generate(message_id);
        this.instruction_id = instruction_id;
        this.status_type = status_type;
        this.timestamp = timestamp;
    }
}
