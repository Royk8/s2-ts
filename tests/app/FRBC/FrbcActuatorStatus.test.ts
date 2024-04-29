import { FrbcActuatorStatus } from "../../../src/app/FRBC";

describe('FrbcActuatorStatus', () => {
    it('should create a FrbcActuatorStatus object', () => {

        const frbcActuatorStatus = new FrbcActuatorStatus({
            message_id: "1",
            actuator_id: "2",
            active_operation_mode_id: "3",
            operation_mode_factor: 0.1,
            previous_operation_mode_id: "6",
            transition_timestamp: "7"
        });

        expect(frbcActuatorStatus.message_id).toBe("1");
        expect(frbcActuatorStatus.actuator_id).toBe("2");
        expect(frbcActuatorStatus.active_operation_mode_id).toBe("3");
        expect(frbcActuatorStatus.operation_mode_factor).toBe(0.1);
        expect(frbcActuatorStatus.previous_operation_mode_id).toBe("6");
        expect(frbcActuatorStatus.transition_timestamp).toBe("7");

    });
});