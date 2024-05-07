import { FrbcInstruction } from '../../../src/app/FRBC';
import { parseMessage } from '../../../src/app/services';

describe('FrbcInstruction', () => {
    it('should create a FrbcInstruction object', () => {

        const frbcInstruction = new FrbcInstruction({
            message_id: "1",
            id: "2",
            actuator_id: "3",
            operation_mode: "4",
            operation_mode_factor: 0.1,
            execution_time: "6",
            abnormal_condition: true
        });

        expect(frbcInstruction.message_type).toBe("FRBC.Instruction");
        expect(frbcInstruction.message_id).toBe("1");
        expect(frbcInstruction.id).toBe("2");
        expect(frbcInstruction.actuator_id).toBe("3");
        expect(frbcInstruction.operation_mode).toBe("4");
        expect(frbcInstruction.operation_mode_factor).toBe(0.1);
        expect(frbcInstruction.execution_time).toBe("6");
        expect(frbcInstruction.abnormal_condition).toBe(true);

    });

    it('should create a FrbcInstruction object after parsing it from a json', () => {
        const frbcInstruction = new FrbcInstruction({
            message_id: "1",
            id: "2",
            actuator_id: "3",
            operation_mode: "4",
            operation_mode_factor: 0.1,
            execution_time: "6",
            abnormal_condition: true
        });

        const jsonFrbcInstruction = JSON.stringify(frbcInstruction, null, 2);
        const parsedFrbcInstruction = parseMessage(jsonFrbcInstruction);

        expect(parsedFrbcInstruction.message_type).toBe("FRBC.Instruction");
        expect(parsedFrbcInstruction.message_id).toBe("1");
        expect(parsedFrbcInstruction.id).toBe("2");
        expect(parsedFrbcInstruction.actuator_id).toBe("3");
        expect(parsedFrbcInstruction.operation_mode).toBe("4");
        expect(parsedFrbcInstruction.operation_mode_factor).toBe(0.1);
        expect(parsedFrbcInstruction.execution_time).toBe("6");
        expect(parsedFrbcInstruction.abnormal_condition).toBe(true);
    });
});