import { PebcAllowedLimitRange, PebcPowerConstraints } from "../../../src/app/PEBC";
import { NumberRange } from "../../../src/app/common";
import { parseMessage } from "../../../src/app/services";

describe('PebcPowerConstraints', () => {

    it('should create an instance of PebcPowerConstraints', () => {

        const timestampFrom = new Date().toISOString();
        const timestampUntil = new Date().toISOString();

        const numberRange = new NumberRange({
            start_of_range: 1,
            end_of_range: 10
        });

        const pebcAllowedLimitRangeUpper = new PebcAllowedLimitRange({
            commodity_quantity: "ELECTRIC.POWER.L3",
            limit_type: "UPPER_LIMIT",
            range_boundary: numberRange,
            abnormal_condition_only: true
        });

        const pebcAllowedLimitRangeLower = new PebcAllowedLimitRange({
            commodity_quantity: "ELECTRIC.POWER.L3",
            limit_type: "LOWER_LIMIT",
            range_boundary: numberRange,
            abnormal_condition_only: true
        });

        const allowedLimits = [pebcAllowedLimitRangeUpper, pebcAllowedLimitRangeLower] as 
            [PebcAllowedLimitRange, PebcAllowedLimitRange, ...PebcAllowedLimitRange[]];

        const pebcPowerConstraints = new PebcPowerConstraints({
            id: "123",
            valid_from: timestampFrom,
            valid_until: timestampUntil,
            consequence_type: "VANISH",
            allowed_limit_ranges: allowedLimits
        });

        expect(pebcPowerConstraints).toBeInstanceOf(PebcPowerConstraints);
        expect(pebcPowerConstraints.message_type).toBe("PEBC.PowerConstraints");
        expect(pebcPowerConstraints.message_id).toBeDefined();
        expect(pebcPowerConstraints.id).toBe("123");
        expect(pebcPowerConstraints.valid_from).toBe(timestampFrom);
        expect(pebcPowerConstraints.valid_until).toBe(timestampUntil);
        expect(pebcPowerConstraints.consequence_type).toBe("VANISH");
        expect(pebcPowerConstraints.allowed_limit_ranges).toEqual(allowedLimits);
    });

    it('should create an instance of PebcPowerConstraints from a json', () => {
        const timestampFrom = new Date().toISOString();
        const timestampUntil = new Date().toISOString();

        const numberRange = new NumberRange({
            start_of_range: 1,
            end_of_range: 10
        });

        const pebcAllowedLimitRangeUpper = new PebcAllowedLimitRange({
            commodity_quantity: "ELECTRIC.POWER.L3",
            limit_type: "UPPER_LIMIT",
            range_boundary: numberRange,
            abnormal_condition_only: true
        });

        const pebcAllowedLimitRangeLower = new PebcAllowedLimitRange({
            commodity_quantity: "ELECTRIC.POWER.L3",
            limit_type: "LOWER_LIMIT",
            range_boundary: numberRange,
            abnormal_condition_only: true
        });

        const allowedLimits = [pebcAllowedLimitRangeUpper, pebcAllowedLimitRangeLower] as 
            [PebcAllowedLimitRange, PebcAllowedLimitRange, ...PebcAllowedLimitRange[]];

        const pebcPowerConstraints = new PebcPowerConstraints({
            id: "123",
            valid_from: timestampFrom,
            valid_until: timestampUntil,
            consequence_type: "VANISH",
            allowed_limit_ranges: allowedLimits
        });

        const json = JSON.stringify(pebcPowerConstraints);
        const parsed = parseMessage(json);

        expect(parsed).toBeInstanceOf(PebcPowerConstraints);
        expect(parsed.message_type).toBe("PEBC.PowerConstraints");
        expect(parsed.message_id).toBeDefined();
        expect(parsed.id).toBe("123");
        expect(parsed.valid_from).toBe(timestampFrom);
        expect(parsed.valid_until).toBe(timestampUntil);
        expect(parsed.consequence_type).toBe("VANISH");
        expect(parsed.allowed_limit_ranges).toEqual(allowedLimits);

    });

    it('should throw an error if there is no UPPER_LIMIT', () => {
        const timestampFrom = new Date().toISOString();
        const timestampUntil = new Date().toISOString();

        const numberRange = new NumberRange({
            start_of_range: 1,
            end_of_range: 10
        });

        const pebcAllowedLimitRange = new PebcAllowedLimitRange({
            commodity_quantity: "ELECTRIC.POWER.L3",
            limit_type: "LOWER_LIMIT",
            range_boundary: numberRange,
            abnormal_condition_only: true
        });

        const allowedLimits = [pebcAllowedLimitRange, pebcAllowedLimitRange] as 
            [PebcAllowedLimitRange, PebcAllowedLimitRange, ...PebcAllowedLimitRange[]];

        expect(() => {
            new PebcPowerConstraints({
                id: "123",
                valid_from: timestampFrom,
                valid_until: timestampUntil,
                consequence_type: "VANISH",
                allowed_limit_ranges: allowedLimits
            });
        }).toThrow("There shall be at least one PEBC.AllowedLimitRange for the UPPER_LIMIT and at least one AllowedLimitRange for the LOWER_LIMIT.");
    });

    it('should throw an error if there is no LOWER_LIMIT', () => {
        const timestampFrom = new Date().toISOString();
        const timestampUntil = new Date().toISOString();

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

        const allowedLimits = [pebcAllowedLimitRange, pebcAllowedLimitRange] as 
            [PebcAllowedLimitRange, PebcAllowedLimitRange, ...PebcAllowedLimitRange[]];

        expect(() => {
            new PebcPowerConstraints({
                id: "123",
                valid_from: timestampFrom,
                valid_until: timestampUntil,
                consequence_type: "VANISH",
                allowed_limit_ranges: allowedLimits
            });
        }).toThrow("There shall be at least one PEBC.AllowedLimitRange for the UPPER_LIMIT and at least one AllowedLimitRange for the LOWER_LIMIT.");
    });
});