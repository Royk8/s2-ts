import { FrbcOperationMode, FrbcSystemDescription, FrbcStorageDescription } from '../../../src/app/FRBC';
import { FrbcActuatorDescription } from '../../../src/app/FRBC';
import { Timer, Transition } from '../../../src/app/common';

describe('FrbcSystemDescription', () => {
    it('should create a FrbcSystemDescription object', () => {

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

        const storageDescription = new FrbcStorageDescription({
            diagnostic_label: "1",
            fill_level_label: "2",
            provides_fill_level_target_profile: true,
            provides_leakage_behaviour: true,
            provides_usage_forecast: true,
            fill_level_range: { start_of_range: 3, end_of_range: 4 }
        });

        const frbcSystemDescription = new FrbcSystemDescription({
            message_id: "1",
            valid_from: '2021-01-01T00:00:00Z',
            actuators: [frbcActuatorDescription],
            storage: storageDescription
        });

        expect(frbcSystemDescription.message_id).toBe("1");
        expect(frbcSystemDescription.valid_from).toBe('2021-01-01T00:00:00Z');
        expect(frbcSystemDescription.actuators).toStrictEqual([frbcActuatorDescription]);
        expect(frbcSystemDescription.storage).toStrictEqual(storageDescription);        
    });
});
