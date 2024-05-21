import { OmbcOperationMode } from '../../../src/app/OMBC/OmbcOperationMode';
import { NumberRange, PowerRange } from '../../../src/app/common';

describe('OmbcOperationMode', () => {
    it('should create an instance of OmbcOperationMode', () => {
  
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

        expect(ombcOperationMode).toBeInstanceOf(OmbcOperationMode);
        expect(ombcOperationMode.id).toBeDefined();
        expect(ombcOperationMode.diagnostic_label).toBe('diagnostic_label');
        expect(ombcOperationMode.power_ranges).toEqual([powerRange]);
        expect(ombcOperationMode.running_costs).toEqual(numberRange);
        expect(ombcOperationMode.abnormal_condition_only).toBe(true);        
    });
});