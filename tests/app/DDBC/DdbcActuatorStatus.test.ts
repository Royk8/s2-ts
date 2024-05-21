import { DdbcActuatorStatus } from '../../../src/app/DDBC/DdbcActuatorStatus';
import { parseMessage } from '../../../src/app/services';
import { Uuid } from '../../../src/app/services/Uuid';

describe('DdbcActuatorStatus', () => {
    it('should create a DdbcActuatorStatus object', () => {

        const timestamp : string = new Date().toISOString();

        const actuatorStatus = new DdbcActuatorStatus({
            actuator_id: "123",
            active_operation_mode_id: "456",
            operation_mode_factor: 0.5,
            previous_operation_mode_id: "789",
            transition_timestamp: timestamp
        });

        expect(actuatorStatus).toBeInstanceOf(DdbcActuatorStatus);
        expect(actuatorStatus.message_type).toBe('DDBC.ActuatorStatus');
        expect(actuatorStatus.message_id).toBeDefined();
        expect(Uuid.isValid(actuatorStatus.message_id)).toBe(true);
        expect(actuatorStatus.actuator_id).toBe("123");
        expect(actuatorStatus.active_operation_mode_id).toBe("456");
        expect(actuatorStatus.operation_mode_factor).toBe(0.5);
        expect(actuatorStatus.previous_operation_mode_id).toBe("789");
        expect(actuatorStatus.transition_timestamp).toBe(timestamp);
    });

    it('should throw an error if operation_mode_factor is not between 0 and 1', () => {
        expect(() => {
            new DdbcActuatorStatus({
                actuator_id: "123",
                active_operation_mode_id: "456",
                operation_mode_factor: 1.5
            });
        }).toThrow('DDBC_ActuatorStatus: operation_mode_factor must be between 0 and 1');
    });

    it('should create a DdbcActuatorStatus parameters after parsing it from a json', () => {
        const actuatorStatus = new DdbcActuatorStatus({
            actuator_id: "123",
            active_operation_mode_id: "456",
            operation_mode_factor: 0.5,
        });

        const jsonActuatorStatus = JSON.stringify(actuatorStatus, null, 2);
        const parsedActuatorStatus = parseMessage(jsonActuatorStatus);

        expect(parsedActuatorStatus).toBeInstanceOf(DdbcActuatorStatus);
        expect(parsedActuatorStatus.message_type).toBe('DDBC.ActuatorStatus');
        expect(parsedActuatorStatus.message_id).toBeDefined();
        expect(Uuid.isValid(parsedActuatorStatus.message_id)).toBe(true);
        expect(parsedActuatorStatus.actuator_id).toBe("123");
        expect(parsedActuatorStatus.active_operation_mode_id).toBe("456");
        expect(parsedActuatorStatus.operation_mode_factor).toBe(0.5);
    });

    it('should create a DdbcActuatorStatus without optional parameters after parsing it from a json', () => {
        const timestamp : string = new Date().toISOString();

        const actuatorStatus = new DdbcActuatorStatus({
            actuator_id: "123",
            active_operation_mode_id: "456",
            operation_mode_factor: 0.5,
            previous_operation_mode_id: "789",
            transition_timestamp: timestamp
        });

        const jsonActuatorStatus = JSON.stringify(actuatorStatus, null, 2);
        const parsedActuatorStatus = parseMessage(jsonActuatorStatus);

        expect(parsedActuatorStatus).toBeInstanceOf(DdbcActuatorStatus);
        expect(parsedActuatorStatus.message_type).toBe('DDBC.ActuatorStatus');
        expect(parsedActuatorStatus.message_id).toBeDefined();
        expect(Uuid.isValid(parsedActuatorStatus.message_id)).toBe(true);
        expect(parsedActuatorStatus.actuator_id).toBe("123");
        expect(parsedActuatorStatus.active_operation_mode_id).toBe("456");
        expect(parsedActuatorStatus.operation_mode_factor).toBe(0.5);
        expect(parsedActuatorStatus.previous_operation_mode_id).toBe("789");
        expect(parsedActuatorStatus.transition_timestamp).toBe(timestamp);
    });
});