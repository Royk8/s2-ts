import { OmbcOperationMode, OmbcSystemDescription } from '../../../src/app/OMBC';
import { NumberRange, PowerRange, Timer, Transition } from '../../../src/app/common';
import { parseMessage } from '../../../src/app/services';

describe('OmbcSystemDescription', () => {
    it('should create an instance of OmbcSystemDescription', () => {

        const numberRange = new NumberRange({
            start_of_range: 1,
            end_of_range: 10
        });

        const powerRange = new PowerRange({
            start_of_range: 10,
            end_of_range: 20,
            commodity_quantity: "ELECTRIC.POWER.L3"
        });

        const ombcOperationMode = new OmbcOperationMode({
            diagnostic_label: "diagnostic_label",
            power_ranges: [powerRange],
            running_costs: numberRange,
            abnormal_condition_only: true
        });

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

        const timestamp = new Date().toISOString();

        const ombcSystemDescription = new OmbcSystemDescription({
            valid_from: timestamp,
            operation_modes: [ombcOperationMode],
            transitions: transitions,
            timers: timers
        });

        expect(ombcSystemDescription).toBeInstanceOf(OmbcSystemDescription);
        expect(ombcSystemDescription.message_type).toBe('OMBC.SystemDescription');
        expect(ombcSystemDescription.message_id).toBeDefined();
        expect(ombcSystemDescription.valid_from).toBe(timestamp);
        expect(ombcSystemDescription.operation_modes).toEqual([ombcOperationMode]);
        expect(ombcSystemDescription.transitions).toEqual(transitions);
        expect(ombcSystemDescription.timers).toEqual(timers);

    });

    it('should create an instance of OmbcSystemDescription from a json', () => {
        const numberRange = new NumberRange({
            start_of_range: 1,
            end_of_range: 10
        });

        const powerRange = new PowerRange({
            start_of_range: 10,
            end_of_range: 20,
            commodity_quantity: "ELECTRIC.POWER.L3"
        });

        const ombcOperationMode = new OmbcOperationMode({
            diagnostic_label: "diagnostic_label",
            power_ranges: [powerRange],
            running_costs: numberRange,
            abnormal_condition_only: true
        });

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

        const timestamp = new Date().toISOString();

        const ombcSystemDescription = new OmbcSystemDescription({
            valid_from: timestamp,
            operation_modes: [ombcOperationMode],
            transitions: transitions,
            timers: timers
        });

        const json = JSON.stringify(ombcSystemDescription);
        const parsedOmbcSystemDescription = parseMessage(json);

        expect(parsedOmbcSystemDescription).toBeInstanceOf(OmbcSystemDescription);
        expect(parsedOmbcSystemDescription.message_type).toBe('OMBC.SystemDescription');
        expect(parsedOmbcSystemDescription.message_id).toBeDefined();
        expect(parsedOmbcSystemDescription.valid_from).toBe(timestamp);
        expect(parsedOmbcSystemDescription.operation_modes).toEqual([ombcOperationMode]);
        expect(parsedOmbcSystemDescription.transitions).toEqual(transitions);
        expect(parsedOmbcSystemDescription.timers).toEqual(timers);
    });

    it('should throw an error if operation_modes has more than 100 elements', () => {
        const numberRange = new NumberRange({
            start_of_range: 1,
            end_of_range: 10
        });

        const powerRange = new PowerRange({
            start_of_range: 10,
            end_of_range: 20,
            commodity_quantity: "ELECTRIC.POWER.L3"
        });

        const ombcOperationMode = new OmbcOperationMode({
            diagnostic_label: "diagnostic_label",
            power_ranges: [powerRange],
            running_costs: numberRange,
            abnormal_condition_only: true
        });

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

        const timestamp = new Date().toISOString();

        const operationModes = Array(101).fill(ombcOperationMode) as [OmbcOperationMode, ...OmbcOperationMode[]];

        expect(() => new OmbcSystemDescription({
            valid_from: timestamp,
            operation_modes: operationModes,
            transitions: transitions,
            timers: timers
        })).toThrow('OMBC_SystemDescription: operation_modes must have between 1 and 100 elements');
    });

    it('should throw an error if transitions has more than 1000 elements', () => {
        const numberRange = new NumberRange({
            start_of_range: 1,
            end_of_range: 10
        });

        const powerRange = new PowerRange({
            start_of_range: 10,
            end_of_range: 20,
            commodity_quantity: "ELECTRIC.POWER.L3"
        });

        const ombcOperationMode = new OmbcOperationMode({
            diagnostic_label: "diagnostic_label",
            power_ranges: [powerRange],
            running_costs: numberRange,
            abnormal_condition_only: true
        });

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

        const timestamp = new Date().toISOString();

        const transitionsArray = Array(1001).fill(transitions[0]) as Transition[];

        expect(() => new OmbcSystemDescription({
            valid_from: timestamp,
            operation_modes: [ombcOperationMode],
            transitions: transitionsArray,
            timers: timers
        })).toThrow('OMBC_SystemDescription: transitions must have between 0 and 1000 elements');
    });

    it('should throw an error if timers has more than 1000 elements', () => {
        const numberRange = new NumberRange({
            start_of_range: 1,
            end_of_range: 10
        });

        const powerRange = new PowerRange({
            start_of_range: 10,
            end_of_range: 20,
            commodity_quantity: "ELECTRIC.POWER.L3"
        });

        const ombcOperationMode = new OmbcOperationMode({
            diagnostic_label: "diagnostic_label",
            power_ranges: [powerRange],
            running_costs: numberRange,
            abnormal_condition_only: true
        });

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

        const timestamp = new Date().toISOString();

        const timersArray = Array(1001).fill(timers[0]) as Timer[];

        expect(() => new OmbcSystemDescription({
            valid_from: timestamp,
            operation_modes: [ombcOperationMode],
            transitions: transitions,
            timers: timersArray
        })).toThrow('OMBC_SystemDescription: timers must have between 0 and 1000 elements');
    });
});