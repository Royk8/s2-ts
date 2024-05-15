import { InstructionStatusUpdate as GenInstructionStatusUpdate, InstructionStatus} from "@messages";
import { ID } from "@schemas";
import { Timestamp, validateTimestamp } from "./";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters{
    message_id?: ID;
    instruction_id?: ID;
    status_type: InstructionStatus;
    timestamp: Timestamp;
}

export class InstructionStatusUpdate implements GenInstructionStatusUpdate {
    message_type: "InstructionStatusUpdate";
    message_id: ID;
    instruction_id: ID;
    status_type: InstructionStatus;
    timestamp: Timestamp;

    constructor(constructorParameters: ConstructorParameters){
        const { message_id, instruction_id, status_type, timestamp } = constructorParameters;

        validateTimestamp(timestamp);

        this.message_type = "InstructionStatusUpdate";
        this.message_id = Uuid.generate(message_id);
        this.instruction_id = instruction_id;
        this.status_type = status_type;
        this.timestamp = timestamp;
    }
}