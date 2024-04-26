import { PowerRange } from '../../../src/app/common';

describe('PowerRange', () => {
    it('should create a PowerRange object', () => {
        const powerRange = new PowerRange({
            start_of_range: 10,
            end_of_range: 20,
            commodity_quantity: "ELECTRIC.POWER.L3"
        });

        expect(powerRange.start_of_range).toBe(10);
        expect(powerRange.end_of_range).toBe(20);
        expect(powerRange.commodity_quantity).toBe("ELECTRIC.POWER.L3");
    });

    it('should throw an error for invalid range', () => {
        expect(() => {
            new PowerRange({
                start_of_range: 20,
                end_of_range: 10,
                commodity_quantity: "ELECTRIC.POWER.L3"
            });
        }).toThrow("start_of_range must be less than or equal to end_of_range");
    });
});