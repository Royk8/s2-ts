import { DdbcActuatorDescription, DdbcOperationMode, DdbcSystemDescription } from '../../../src/app/DDBC';
import { NumberRange, PowerRange, Timer, Transition } from '../../../src/app/common';
import { parseMessage } from '../../../src/app/services';

describe('DdbcSystemDescription', () => {

    it('should create a DdbcSystemDescription object', () => {
        //Creating an Actuator description
        const powerRange = new PowerRange({
            start_of_range: 10,
            end_of_range: 20,
            commodity_quantity: "ELECTRIC.POWER.L3"
        });
        const numberRange1 = new NumberRange({ start_of_range: 1, end_of_range: 10 });
        const numberRange2 = new NumberRange({ start_of_range: 2, end_of_range: 10 });

        const operationMode = new DdbcOperationMode({
            diagnostic_label: "diagnostic_label",
            power_ranges: [powerRange],
            supply_range: numberRange1,
            running_costs: numberRange2,
            abnormal_condition_only: true
        });

        const operation_modes = [operationMode] as [DdbcOperationMode, ...DdbcOperationMode[]];
        const transitions = [new Transition({
            id: "32141234",
            from: "2",
            to: "3",
            start_timers: ["4"],
            blocking_timers: ["5"],
            transition_costs: 6,
            transition_duration: 7,
            abnormal_condition_only: true
        })];

        const timers = [new Timer({
            id: "32141234",
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

        //Creating a DdbcSystemDescription object
        const timestamp: string = new Date().toISOString();

        const ddbcSystemDescription = new DdbcSystemDescription({
            valid_from: timestamp,
            actuators: [actuatorDescription],
            present_demand_rate: numberRange1,
            provides_average_demand_rate_forecast: true
        });

        expect(ddbcSystemDescription).toBeInstanceOf(DdbcSystemDescription);
        expect(ddbcSystemDescription.message_type).toBe('DDBC.SystemDescription');
        expect(ddbcSystemDescription.message_id).toBeDefined();
        expect(ddbcSystemDescription.valid_from).toBe(timestamp);
        expect(ddbcSystemDescription.actuators).toEqual([actuatorDescription]);
        expect(ddbcSystemDescription.present_demand_rate).toEqual(numberRange1);
        expect(ddbcSystemDescription.provides_average_demand_rate_forecast).toBe(true);

    });

    it('should create an instance of DdbcSystemDescription from a JSON object', () => {
        //Creating an Actuator description
        const powerRange = new PowerRange({
            start_of_range: 10,
            end_of_range: 20,
            commodity_quantity: "ELECTRIC.POWER.L3"
        });
        const numberRange1 = new NumberRange({ start_of_range: 1, end_of_range: 10 });
        const numberRange2 = new NumberRange({ start_of_range: 2, end_of_range: 10 });

        const operationMode = new DdbcOperationMode({
            diagnostic_label: "diagnostic_label",
            power_ranges: [powerRange],
            supply_range: numberRange1,
            running_costs: numberRange2,
            abnormal_condition_only: true
        });

        const operation_modes = [operationMode] as [DdbcOperationMode, ...DdbcOperationMode[]];
        const transitions = [new Transition({
            id: "32141234",
            from: "2",
            to: "3",
            start_timers: ["4"],
            blocking_timers: ["5"],
            transition_costs: 6,
            transition_duration: 7,
            abnormal_condition_only: true
        })];

        const timers = [new Timer({
            id: "32141234",
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

        //Creating a DdbcSystemDescription object
        const timestamp: string = new Date().toISOString();

        const ddbcSystemDescription = new DdbcSystemDescription({
            valid_from: timestamp,
            actuators: [actuatorDescription],
            present_demand_rate: numberRange1,
            provides_average_demand_rate_forecast: true
        });

        const json = JSON.stringify(ddbcSystemDescription);
        const parsed = parseMessage(json);

        expect(parsed).toBeInstanceOf(DdbcSystemDescription);
        expect(parsed.message_type).toBe('DDBC.SystemDescription');
        expect(parsed.message_id).toBeDefined();
        expect(parsed.valid_from).toBe(timestamp);
        expect(parsed.actuators).toEqual([actuatorDescription]);
        expect(parsed.present_demand_rate).toEqual(numberRange1);
        expect(parsed.provides_average_demand_rate_forecast).toBe(true);
    });

});