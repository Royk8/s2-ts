import { DdbcInstruction } from "../../../src/app/DDBC/DdbcInstruction";
import { parseMessage } from "../../../src/app/services";

describe('DdbcInstruction', () => {
    it('should create a DdbcInstruction object', () => {

        const timestamp: string = new Date().toISOString();

        const ddbcInstruction = new DdbcInstruction({
            id: '32141234',
            execution_time: timestamp,
            abnormal_condition: false,
            actuator_id: '1',
            operation_mode_id: '1',
            operation_mode_factor: 1
        });

        expect(ddbcInstruction).toBeInstanceOf(DdbcInstruction);
        expect(ddbcInstruction.message_type).toBe('DDBC.Instruction');
        expect(ddbcInstruction.message_id).toBeDefined();
        expect(ddbcInstruction.id).toBe('32141234');
        expect(ddbcInstruction.execution_time).toBe(timestamp);
        expect(ddbcInstruction.abnormal_condition).toBe(false);
        expect(ddbcInstruction.actuator_id).toBe('1');
        expect(ddbcInstruction.operation_mode_id).toBe('1');
        expect(ddbcInstruction.operation_mode_factor).toBe(1);
    });

    it('should create an instance of DdbcInstruction from a JSON object', () => {
        const timestamp: string = new Date().toISOString();

        const ddbcInstruction = new DdbcInstruction({
            id: '32141234',
            execution_time: timestamp,
            abnormal_condition: false,
            actuator_id: '1',
            operation_mode_id: '1',
            operation_mode_factor: 1
        });

        const json = JSON.stringify(ddbcInstruction);
        const parsed = parseMessage(json);

        expect(parsed).toBeInstanceOf(DdbcInstruction);
        expect(parsed.message_type).toBe('DDBC.Instruction');
        expect(parsed.message_id).toBeDefined();
        expect(parsed.id).toBe('32141234');
        expect(parsed.execution_time).toBe(timestamp);
        expect(parsed.abnormal_condition).toBe(false);
        expect(parsed.actuator_id).toBe('1');
        expect(parsed.operation_mode_id).toBe('1');
        expect(parsed.operation_mode_factor).toBe(1);
    });

});
