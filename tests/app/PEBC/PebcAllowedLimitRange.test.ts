import { PebcAllowedLimitRange } from "../../../src/app/PEBC";
import { NumberRange } from "../../../src/app/common";

describe('PebcAllowedLimitRange', () => {

    it('should create an instance of PebcAllowedLimitRange', () => {

        const numberRange = new NumberRange({
            start_of_range: 1,
            end_of_range: 10
        });

        const pebcAllowedLimitRange = new PebcAllowedLimitRange({
            commodity_quantity: "ELECTRIC.POWER.L3",
            limit_type: "UPPER_LIMIT",
            range_boundary: numberRange,
            abnormal_condition_only: true
        });

        expect(pebcAllowedLimitRange).toBeInstanceOf(PebcAllowedLimitRange);
        expect(pebcAllowedLimitRange.commodity_quantity).toBe("ELECTRIC.POWER.L3");
        expect(pebcAllowedLimitRange.limit_type).toBe("UPPER_LIMIT");
        expect(pebcAllowedLimitRange.range_boundary).toEqual(numberRange);
        expect(pebcAllowedLimitRange.abnormal_condition_only).toBe(true);
    });
});