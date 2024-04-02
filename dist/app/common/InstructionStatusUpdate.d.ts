import { InstructionStatusUpdate as GenInstructionStatusUpdate, InstructionStatus } from "../../messages/generated";
export declare class InstructionStatusUpdate implements GenInstructionStatusUpdate {
    message_type: "InstructionStatusUpdate";
    message_id: string;
    instruction_id: string;
    status_type: InstructionStatus;
    timestamp: string;
    constructor(message_id: string, instruction_id: string, status_type: InstructionStatus, timestamp: string);
}
