import { FrbcActuatorDescription, FrbcOperationMode } from "../../../src/app/FRBC";
import { Timer, Transition } from "../../../src/app/common";

describe('FrbcActuatorDescription', () => {
    it('should create a FrbcActuatorDescription object', () => {

        const operationMode = new FrbcOperationMode({
            id: "1",
            elements: [{
                fill_level_range: { start_of_range: 1, end_of_range: 2 },
                fill_rate: { start_of_range: 3, end_of_range: 4 },
                power_ranges: [{ 
                    start_of_range: 5, 
                    end_of_range: 6 , 
                    commodity_quantity: "ELECTRIC.POWER.L3" 
                }],
                running_costs: { start_of_range: 7, end_of_range: 8 }
            }],
            abnormal_condition_only: true
        });

        const transition = new Transition({
            id: "1",
            from: "2",
            to: "3",
            start_timers: ["4"],
            blocking_timers: ["5"],
            transition_costs: 6,
            transition_duration: 7,
            abnormal_condition_only: true
        });

        const timer = new Timer({
            id: "1",
            diagnostic_label: "2",
            duration: 3,
        });

        const frbcActuatorDescription = new FrbcActuatorDescription({
            id: "1",
            diagnostic_label: "2",
            supported_commodities: ["HEAT"],
            operation_modes: [operationMode],
            transitions: [transition],
            timers: [timer]
        });

        expect(frbcActuatorDescription.id).toBe("1");
        expect(frbcActuatorDescription.diagnostic_label).toBe("2");
        expect(frbcActuatorDescription.supported_commodities).toStrictEqual(["HEAT"]);
        expect(frbcActuatorDescription.operation_modes).toStrictEqual([operationMode]);
        expect(frbcActuatorDescription.transitions).toStrictEqual([transition]);
        expect(frbcActuatorDescription.timers).toStrictEqual([timer]);

    });

    it('should throw an error if the size of the operation_modes is greater than 100', () => {

        const operationMode = new FrbcOperationMode({
            id: "1",
            elements: [{
                fill_level_range: { start_of_range: 1, end_of_range: 2 },
                fill_rate: { start_of_range: 3, end_of_range: 4 },
                power_ranges: [{ 
                    start_of_range: 5, 
                    end_of_range: 6 , 
                    commodity_quantity: "ELECTRIC.POWER.L3" 
                }],
                running_costs: { start_of_range: 7, end_of_range: 8 }
            }],
            abnormal_condition_only: true
        });

        const transition = new Transition({
            id: "1",
            from: "2",
            to: "3",
            start_timers: ["4"],
            blocking_timers: ["5"],
            transition_costs: 6,
            transition_duration: 7,
            abnormal_condition_only: true
        });

        const timer = new Timer({
            id: "1",
            diagnostic_label: "2",
            duration: 3,
        });

        expect(() => {
            new FrbcActuatorDescription({
                id: "1",
                supported_commodities: ["HEAT"],
                operation_modes: [operationMode, ...new Array(100).fill(operationMode)],
                transitions: [transition],
                timers: [timer]
            });
        }).toThrow('FRBC_ActuatorDescription: operation_modes must be between 1 and 100 elements');
    });

    it('should throw an error if the size of the transitions is greater than 1000', () => {

        const operationMode = new FrbcOperationMode({
            id: "1",
            elements: [{
                fill_level_range: { start_of_range: 1, end_of_range: 2 },
                fill_rate: { start_of_range: 3, end_of_range: 4 },
                power_ranges: [{ 
                    start_of_range: 5, 
                    end_of_range: 6 , 
                    commodity_quantity: "ELECTRIC.POWER.L3" 
                }],
                running_costs: { start_of_range: 7, end_of_range: 8 }
            }],
            abnormal_condition_only: true
        });

        const transition = new Transition({
            id: "1",
            from: "2",
            to: "3",
            start_timers: ["4"],
            blocking_timers: ["5"],
            transition_costs: 6,
            transition_duration: 7,
            abnormal_condition_only: true
        });

        const timer = new Timer({
            id: "1",
            diagnostic_label: "2",
            duration: 3,
        });

        expect(() => {
            new FrbcActuatorDescription({
                id: "1",
                supported_commodities: ["HEAT"],
                operation_modes: [operationMode],
                transitions: [transition, ...new Array(1000).fill(transition)],
                timers: [timer]
            });
        }).toThrow('FRBC_ActuatorDescription: transitions must be less than 1000 elements');
    });

    it('should throw an error if the size of the timers is greater than 100', () => {

        const operationMode = new FrbcOperationMode({
            id: "1",
            elements: [{
                fill_level_range: { start_of_range: 1, end_of_range: 2 },
                fill_rate: { start_of_range: 3, end_of_range: 4 },
                power_ranges: [{ 
                    start_of_range: 5, 
                    end_of_range: 6 , 
                    commodity_quantity: "ELECTRIC.POWER.L3" 
                }],
                running_costs: { start_of_range: 7, end_of_range: 8 }
            }],
            abnormal_condition_only: true
        });

        const transition = new Transition({
            id: "1",
            from: "2",
            to: "3",
            start_timers: ["4"],
            blocking_timers: ["5"],
            transition_costs: 6,
            transition_duration: 7,
            abnormal_condition_only: true
        });

        const timer = new Timer({
            id: "1",
            diagnostic_label: "2",
            duration: 3,
        });

        expect(() => {
            new FrbcActuatorDescription({
                id: "1",
                supported_commodities: ["HEAT"],
                operation_modes: [operationMode],
                transitions: [transition],
                timers: [timer, ...new Array(100).fill(timer)]
            });
        }).toThrow('FRBC_ActuatorDescription: timers must be less than 100 elements');
    });

});