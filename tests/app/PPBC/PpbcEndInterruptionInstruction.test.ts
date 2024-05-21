import { PpbcEndInterruptionInstruction } from '../../../src/app/PPBC';
import { parseMessage } from '../../../src/app/services';

describe('PpbcEndInterruptionInstruction', () => {
    it('should create an instance of PpbcEndInterruptionInstruction', () => {
        const timestamp = new Date().toISOString();

        const ppbcEndInterruptionInstruction = new PpbcEndInterruptionInstruction({
            id: "123",
            power_profile_id: "123",
            sequence_container_id: "123",
            power_sequence_id: "123",
            execution_time: timestamp,
            abnormal_condition: false
        });

        expect(ppbcEndInterruptionInstruction).toBeInstanceOf(PpbcEndInterruptionInstruction);
        expect(ppbcEndInterruptionInstruction.message_type).toBe("PPBC.EndInterruptionInstruction");
        expect(ppbcEndInterruptionInstruction.message_id).toBeDefined();
        expect(ppbcEndInterruptionInstruction.id).toBe("123");
        expect(ppbcEndInterruptionInstruction.power_profile_id).toBe("123");
        expect(ppbcEndInterruptionInstruction.sequence_container_id).toBe("123");
        expect(ppbcEndInterruptionInstruction.power_sequence_id).toBe("123");
        expect(ppbcEndInterruptionInstruction.execution_time).toBe(timestamp);
        expect(ppbcEndInterruptionInstruction.abnormal_condition).toBe(false);
    });

    it('should create an intance of PpbcEndInterruptionInstruction from a json', () => {
        const timestamp = new Date().toISOString();

        const ppbcEndInterruptionInstruction = new PpbcEndInterruptionInstruction({
            id: "123",
            power_profile_id: "123",
            sequence_container_id: "123",
            power_sequence_id: "123",
            execution_time: timestamp,
            abnormal_condition: false
        });

        const json = JSON.stringify(ppbcEndInterruptionInstruction);
        const parsed = parseMessage(json);

        expect(parsed).toBeInstanceOf(PpbcEndInterruptionInstruction);
        expect(parsed.message_type).toBe("PPBC.EndInterruptionInstruction");
        expect(parsed.message_id).toBeDefined();
        expect(parsed.id).toBe("123");
        expect(parsed.power_profile_id).toBe("123");
        expect(parsed.sequence_container_id).toBe("123");
        expect(parsed.power_sequence_id).toBe("123");
        expect(parsed.execution_time).toBe(timestamp);
        expect(parsed.abnormal_condition).toBe(false);
    });
});

