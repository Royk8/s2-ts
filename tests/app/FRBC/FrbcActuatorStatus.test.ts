import { FrbcActuatorStatus } from "../../../src/app/FRBC";
import { parseMessage } from "../../../src/app/services";

describe('FrbcActuatorStatus', () => {
    it('should create a FrbcActuatorStatus object', () => {

        const frbcActuatorStatus = new FrbcActuatorStatus({
            message_id: "32141234",
            actuator_id: "2",
            active_operation_mode_id: "3",
            operation_mode_factor: 0.1,
            previous_operation_mode_id: "6",
            transition_timestamp: "7"
        });

        expect(frbcActuatorStatus.message_id).toBe("32141234");
        expect(frbcActuatorStatus.actuator_id).toBe("2");
        expect(frbcActuatorStatus.active_operation_mode_id).toBe("3");
        expect(frbcActuatorStatus.operation_mode_factor).toBe(0.1);
        expect(frbcActuatorStatus.previous_operation_mode_id).toBe("6");
        expect(frbcActuatorStatus.transition_timestamp).toBe("7");

    });

    it('should create a FrbcActuatorStatus object after parsing it from a json', () => {
        const frbcActuatorStatus = new FrbcActuatorStatus({
            message_id: "32141234",
            actuator_id: "2",
            active_operation_mode_id: "3",
            operation_mode_factor: 0.1,
            previous_operation_mode_id: "6",
            transition_timestamp: "7"
        });

        const jsonFrbcActuatorStatus = JSON.stringify(frbcActuatorStatus, null, 2);
        const parsedFrbcActuatorStatus = parseMessage(jsonFrbcActuatorStatus);

        expect(parsedFrbcActuatorStatus.message_id).toBe("32141234");
        expect(parsedFrbcActuatorStatus.actuator_id).toBe("2");
        expect(parsedFrbcActuatorStatus.active_operation_mode_id).toBe("3");
        expect(parsedFrbcActuatorStatus.operation_mode_factor).toBe(0.1);
        expect(parsedFrbcActuatorStatus.previous_operation_mode_id).toBe("6");
        expect(parsedFrbcActuatorStatus.transition_timestamp).toBe("7");
    });
});