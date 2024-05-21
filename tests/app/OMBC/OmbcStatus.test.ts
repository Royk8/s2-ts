import { OmbcStatus } from "../../../src/app/OMBC/OmbcStatus";
import { parseMessage } from "../../../src/app/services";

describe('OmbcStatus', () => {
    it('should create an instance of OmbcStatus', () => {

        const timestamp = new Date().toISOString();

        const ombcStatus = new OmbcStatus({
            active_operation_mode_id: 'active_operation_mode_id',
            operation_mode_factor: 0.5,
            previous_operation_mode_id: 'previous_operation_mode_id',
            transition_timestamp: timestamp
        });

        expect(ombcStatus).toBeInstanceOf(OmbcStatus);
        expect(ombcStatus.message_type).toBe('OMBC.Status');
        expect(ombcStatus.active_operation_mode_id).toBe('active_operation_mode_id');
        expect(ombcStatus.operation_mode_factor).toBe(0.5);
        expect(ombcStatus.previous_operation_mode_id).toBe('previous_operation_mode_id');
        expect(ombcStatus.transition_timestamp).toBe(timestamp);
    });

    it('should create an instance of OmbcStatus without previous_operation_mode_id and transition_timestamp', () => {
            
            const ombcStatus = new OmbcStatus({
                active_operation_mode_id: 'active_operation_mode_id',
                operation_mode_factor: 0.5
            });
    
            expect(ombcStatus).toBeInstanceOf(OmbcStatus);
            expect(ombcStatus.message_type).toBe('OMBC.Status');
            expect(ombcStatus.active_operation_mode_id).toBe('active_operation_mode_id');
            expect(ombcStatus.operation_mode_factor).toBe(0.5);
            expect(ombcStatus.previous_operation_mode_id).toBeUndefined();
            expect(ombcStatus.transition_timestamp).toBeUndefined();
        });

    it('should create an instance of OmbcStatus from a json', () => {
        const timestamp = new Date().toISOString();
        const ombcStatus = new OmbcStatus({
            active_operation_mode_id: 'active_operation_mode_id',
            operation_mode_factor: 0.5,
            previous_operation_mode_id: 'previous_operation_mode_id',
            transition_timestamp: timestamp
        });

        const json = JSON.stringify(ombcStatus);
        const parsedOmbcStatus = parseMessage(json);

        expect(parsedOmbcStatus).toBeInstanceOf(OmbcStatus);
        expect(parsedOmbcStatus.message_type).toBe('OMBC.Status');
        expect(parsedOmbcStatus.active_operation_mode_id).toBe('active_operation_mode_id');
        expect(parsedOmbcStatus.operation_mode_factor).toBe(0.5);
        expect(parsedOmbcStatus.previous_operation_mode_id).toBe('previous_operation_mode_id');
        expect(parsedOmbcStatus.transition_timestamp).toBe(timestamp);

    });

    it('should throw an error if operation_mode_factor is not in the range [0, 1]', () => {
        expect(() => {
            new OmbcStatus({
                active_operation_mode_id: 'active_operation_mode_id',
                operation_mode_factor: 1.5
            });
        }).toThrow('operation_mode_factor must be in the range [0, 1]');
    });

});