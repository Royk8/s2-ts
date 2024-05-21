import { PpbcStartInterruptionInstruction } from "../../../src/app/PPBC";
import { parseMessage } from "../../../src/app/services";

describe('PpbcStartInterruptionInstruction', () => {

    it('should create an instance of PpbcStartInterruptionInstruction', () => {

        const timestamp = new Date().toISOString();

        const ppbcStartInterruptionInstruction = new PpbcStartInterruptionInstruction({
            id: "123",
            power_profile_id: "123",
            sequence_container_id: "123",
            power_sequence_id: "123",
            execution_time: timestamp,
            abnormal_condition: true
        });

        expect(ppbcStartInterruptionInstruction).toBeInstanceOf(PpbcStartInterruptionInstruction);
        expect(ppbcStartInterruptionInstruction.message_type).toBe("PPBC.StartInterruptionInstruction");
        expect(ppbcStartInterruptionInstruction.message_id).toBeDefined();
        expect(ppbcStartInterruptionInstruction.id).toBe("123");
        expect(ppbcStartInterruptionInstruction.power_profile_id).toBe("123");
        expect(ppbcStartInterruptionInstruction.sequence_container_id).toBe("123");
        expect(ppbcStartInterruptionInstruction.power_sequence_id).toBe("123");
        expect(ppbcStartInterruptionInstruction.execution_time).toBe(timestamp);
        expect(ppbcStartInterruptionInstruction.abnormal_condition).toBe(true);
    });

    it('should create an instance of PpbcStartInterruptionInstruction from a json', () => {
        const timestamp = new Date().toISOString();

        const ppbcStartInterruptionInstruction = new PpbcStartInterruptionInstruction({
            id: "123",
            power_profile_id: "123",
            sequence_container_id: "123",
            power_sequence_id: "123",
            execution_time: timestamp,
            abnormal_condition: true
        });

        const json = JSON.stringify(ppbcStartInterruptionInstruction);
        const parsed = parseMessage(json);

        expect(parsed).toBeInstanceOf(PpbcStartInterruptionInstruction);
        expect(parsed.message_type).toBe("PPBC.StartInterruptionInstruction");
        expect(parsed.message_id).toBeDefined();
        expect(parsed.id).toBe("123");
        expect(parsed.power_profile_id).toBe("123");
        expect(parsed.sequence_container_id).toBe("123");
        expect(parsed.power_sequence_id).toBe("123");
        expect(parsed.execution_time).toBe(timestamp);
        expect(parsed.abnormal_condition).toBe(true);
    });

});