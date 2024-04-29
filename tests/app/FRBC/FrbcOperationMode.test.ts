import { FrbcOperationMode } from '../../../src/app/FRBC/FrbcOperationMode';

describe('FrbcOperationMode', () => {
    it('should create a FrbcOperationMode object', () => {
        const frbcOperationMode = new FrbcOperationMode({
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

        expect(frbcOperationMode.id).toBe("1");
        expect(frbcOperationMode.elements).toStrictEqual([{
            fill_level_range: { start_of_range: 1, end_of_range: 2 },
            fill_rate: { start_of_range: 3, end_of_range: 4 },
            power_ranges: [{ 
                start_of_range: 5, 
                end_of_range: 6 , 
                commodity_quantity: "ELECTRIC.POWER.L3" 
            }],
            running_costs: { start_of_range: 7, end_of_range: 8 }
        }]);
        expect(frbcOperationMode.abnormal_condition_only).toBe(true);
    });
});