import { OmbcInstruction } from '../../../src/app/OMBC/OmbcInstruction';
import { parseMessage } from '../../../src/app/services';

describe('OmbcInstruction', () => {
    it('should create an instance of OmbcInstruction', () => {
        const timestamp = new Date().toISOString();
        const ombcInstruction = new OmbcInstruction({
            id: 'id',
            execution_time: timestamp,
            operation_mode_id: 'operation_mode_id',
            operation_mode_factor: 0.5,
            abnormal_condition: true
        });

        expect(ombcInstruction).toBeInstanceOf(OmbcInstruction);
        expect(ombcInstruction.message_type).toBe('OMBC.Instruction');
        expect(ombcInstruction.id).toBeDefined();
        expect(ombcInstruction.execution_time).toBe(timestamp);
        expect(ombcInstruction.operation_mode_id).toBe('operation_mode_id');
        expect(ombcInstruction.operation_mode_factor).toBe(0.5);
        expect(ombcInstruction.abnormal_condition).toBe(true);
    });

    it('should create an instance of OmbcInstruction from a json', () => {
        const timestamp = new Date().toISOString();
        const ombcInstruction = new OmbcInstruction({
            id: 'id',
            execution_time: timestamp,
            operation_mode_id: 'operation_mode_id',
            operation_mode_factor: 0.5,
            abnormal_condition: true
        });

        const json = JSON.stringify(ombcInstruction);
        const parsedOmbcInstruction = parseMessage(json);

        expect(parsedOmbcInstruction).toBeInstanceOf(OmbcInstruction);
        expect(parsedOmbcInstruction.message_type).toBe('OMBC.Instruction');
        expect(parsedOmbcInstruction.id).toBeDefined();
        expect(parsedOmbcInstruction.execution_time).toBe(timestamp);
        expect(parsedOmbcInstruction.operation_mode_id).toBe('operation_mode_id');
        expect(parsedOmbcInstruction.operation_mode_factor).toBe(0.5);
        expect(parsedOmbcInstruction.abnormal_condition).toBe(true);

    });
});