import { PpbcScheduleInstruction } from '../../../src/app/PPBC';
import { parseMessage } from '../../../src/app/services';

describe('PpbcScheduleInstruction', () => {

    it('should create an instance of PpbcScheduleInstruction', () => {

        const timestamp = new Date().toISOString();

        const ppbcScheduleInstruction = new PpbcScheduleInstruction({
            id: "123",
            power_profile_id: "123",
            sequence_container_id: "123",
            power_sequence_id: "123",
            execution_time: timestamp,
            abnormal_condition: true
        });

        expect(ppbcScheduleInstruction).toBeInstanceOf(PpbcScheduleInstruction);
        expect(ppbcScheduleInstruction.message_type).toBe("PPBC.ScheduleInstruction");
        expect(ppbcScheduleInstruction.message_id).toBeDefined();
        expect(ppbcScheduleInstruction.id).toBe("123");
        expect(ppbcScheduleInstruction.power_profile_id).toBe("123");
        expect(ppbcScheduleInstruction.sequence_container_id).toBe("123");
        expect(ppbcScheduleInstruction.power_sequence_id).toBe("123");
        expect(ppbcScheduleInstruction.execution_time).toBe(timestamp);
        expect(ppbcScheduleInstruction.abnormal_condition).toBe(true);
    });

    it('should create an instance of PpbcScheduleInstruction from a json', () => {
        const timestamp = new Date().toISOString();

        const ppbcScheduleInstruction = new PpbcScheduleInstruction({
            id: "123",
            power_profile_id: "123",
            sequence_container_id: "123",
            power_sequence_id: "123",
            execution_time: timestamp,
            abnormal_condition: true
        });

        const json = JSON.stringify(ppbcScheduleInstruction);
        const parsed = parseMessage(json);

        expect(parsed).toBeInstanceOf(PpbcScheduleInstruction);
        expect(parsed.message_type).toBe("PPBC.ScheduleInstruction");
        expect(parsed.message_id).toBeDefined();
        expect(parsed.id).toBe("123");
        expect(parsed.power_profile_id).toBe("123");
        expect(parsed.sequence_container_id).toBe("123");
        expect(parsed.power_sequence_id).toBe("123");
        expect(parsed.execution_time).toBe(timestamp);
        expect(parsed.abnormal_condition).toBe(true);
    });

});