import { InstructionStatusUpdate } from "../../../src/app/common";
import { parseMessage } from "../../../src/app/services";

describe('InstructionStatusUpdate', () => {
    it('should create a InstructionStatusUpdate object', () => {
        const instructionStatusUpdate = new InstructionStatusUpdate({
            message_id: "1",
            instruction_id: "2",
            status_type: "ACCEPTED",
            timestamp: "2021-01-01T00:00:00Z"
        });

        expect(instructionStatusUpdate.message_type).toBe("InstructionStatusUpdate");
        expect(instructionStatusUpdate.message_id).toBe("1");
        expect(instructionStatusUpdate.instruction_id).toBe("2");
        expect(instructionStatusUpdate.status_type).toBe("ACCEPTED");
        expect(instructionStatusUpdate.timestamp).toBe("2021-01-01T00:00:00Z");
    });

    it('should create a InstructionStatusUpdate object after parsing it from a json', () => {
        const instructionStatusUpdate = new InstructionStatusUpdate({
            message_id: "1",
            instruction_id: "2",
            status_type: "ACCEPTED",
            timestamp: "2021-01-01T00:00:00Z"
        });

        const jsonInstructionStatusUpdate = JSON.stringify(instructionStatusUpdate, null, 2);
        const parsedInstructionStatusUpdate = parseMessage(jsonInstructionStatusUpdate);

        expect(parsedInstructionStatusUpdate.message_type).toBe("InstructionStatusUpdate");
        expect(parsedInstructionStatusUpdate.message_id).toBe("1");
        expect(parsedInstructionStatusUpdate.instruction_id).toBe("2");
        expect(parsedInstructionStatusUpdate.status_type).toBe("ACCEPTED");
        expect(parsedInstructionStatusUpdate.timestamp).toBe("2021-01-01T00:00:00Z");
    });
});