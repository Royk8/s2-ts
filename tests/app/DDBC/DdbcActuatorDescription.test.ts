import { DdbcActuatorDescription } from '../../../src/app/DDBC/DdbcActuatorDescription';
import { DdbcOperationMode } from '../../../src/app/DDBC/DdbcOperationMode';
import { Transition, Timer, PowerRange, NumberRange } from '../../../src/app/common';

describe('DdbcActuatorDescription', () => {
    it('should create a DdbcActuatorDescription object', () => {

        const powerRange = new PowerRange({
            start_of_range: 10,
            end_of_range: 20,
            commodity_quantity: "ELECTRIC.POWER.L3"
        });
        const numberRange1 = new NumberRange({start_of_range: 1, end_of_range: 10});
        const numberRange2 = new NumberRange({start_of_range: 2, end_of_range: 10});

        const operationMode = new DdbcOperationMode({
            diagnostic_label: "diagnostic_label",
            power_ranges: [powerRange],
            supply_range: numberRange1,
            running_costs: numberRange2,
            abnormal_condition_only: true
        });

        const operation_modes = [operationMode] as [DdbcOperationMode, ...DdbcOperationMode[]];
        const transitions = [new Transition({
            id: "1",
            from: "2",
            to: "3",
            start_timers: ["4"],
            blocking_timers: ["5"],
            transition_costs: 6,
            transition_duration: 7,
            abnormal_condition_only: true
        })];

        const timers = [new Timer({
            id: "1",
            diagnostic_label: "2",
            duration: 3,
        })];

        const actuatorDescription = new DdbcActuatorDescription({
            id: "123",
            diagnostic_label: "diagnostic_label",
            supported_commodites: ["HEAT"],
            operation_modes: operation_modes,
            transitions: transitions,
            timers: timers
        });

        expect(actuatorDescription).toBeInstanceOf(DdbcActuatorDescription);
        expect(actuatorDescription.id).toBe("123");
        expect(actuatorDescription.diagnostic_label).toBe("diagnostic_label");
        expect(actuatorDescription.supported_commodites).toStrictEqual(["HEAT"]);
        expect(actuatorDescription.operation_modes).toStrictEqual(operation_modes);
        expect(actuatorDescription.transitions).toStrictEqual(transitions);
        expect(actuatorDescription.timers).toStrictEqual(timers);
    });
});