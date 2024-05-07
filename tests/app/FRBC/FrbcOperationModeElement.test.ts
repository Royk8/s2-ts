import { FrbcOperationModeElement } from '../../../src/app/FRBC/FrbcOperationModeElement';

describe('FrbcOperationModeElement', () => {
    it('should create a FrbcOperationModeElement object', () => {
        const frbcOperationModeElement = new FrbcOperationModeElement({
            fill_level_range: { start_of_range: 1, end_of_range: 2 },
            fill_rate: { start_of_range: 3, end_of_range: 4 },
            power_ranges: [{ 
                start_of_range: 5, 
                end_of_range: 6 , 
                commodity_quantity: "ELECTRIC.POWER.L3" 
            }],
            running_costs: { start_of_range: 7, end_of_range: 8 }
        });

        expect(frbcOperationModeElement.fill_level_range).toStrictEqual({ start_of_range: 1, end_of_range: 2 });
        expect(frbcOperationModeElement.fill_rate).toStrictEqual({ start_of_range: 3, end_of_range: 4 });
        expect(frbcOperationModeElement.power_ranges).toStrictEqual([{ 
            start_of_range: 5, 
            end_of_range: 6 , 
            commodity_quantity: "ELECTRIC.POWER.L3" 
        }]);
        expect(frbcOperationModeElement.running_costs).toStrictEqual({ start_of_range: 7, end_of_range: 8 });
    });
});