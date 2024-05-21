import { PebcEnergyConstraint } from '../../../src/app/PEBC';
import { parseMessage } from '../../../src/app/services';

describe('PebcEnergyConstraint', () => {
    it('should create an instance of PebcEnergyConstraint', () => {

        const timestampFrom = new Date().toISOString();
        const timestampUntil = new Date().toISOString();

        const pebcEnergyConstraint = new PebcEnergyConstraint({
            id: "123",
            valid_from: timestampFrom,
            valid_until: timestampUntil,
            upper_average_power: 10,
            lower_average_power: 1,
            commodity_quantity: "ELECTRIC.POWER.3_PHASE_SYMMETRIC"
        });

        expect(pebcEnergyConstraint).toBeInstanceOf(PebcEnergyConstraint);
        expect(pebcEnergyConstraint.message_id).toBeDefined();
        expect(pebcEnergyConstraint.id).toBe("123");
        expect(pebcEnergyConstraint.valid_from).toBe(timestampFrom);
        expect(pebcEnergyConstraint.valid_until).toBe(timestampUntil);
        expect(pebcEnergyConstraint.upper_average_power).toBe(10);
        expect(pebcEnergyConstraint.lower_average_power).toBe(1);
        expect(pebcEnergyConstraint.commodity_quantity).toEqual("ELECTRIC.POWER.3_PHASE_SYMMETRIC");
    });

    it('should throw an error if upper_average_power is less than lower_average_power', () => {
        expect(() => {
            new PebcEnergyConstraint({
                id: "123",
                valid_from: new Date().toISOString(),
                valid_until: new Date().toISOString(),
                upper_average_power: 1,
                lower_average_power: 10,
                commodity_quantity: "ELECTRIC.POWER.3_PHASE_SYMMETRIC"
            });
        }).toThrow('upper_average_power must be greater than or equal to lower_average_power');
    });

    it('should throw an error if upper_average_power and lower_average_power are less than 0 for non-electric commodity_quantity', () => {
        expect(() => {
            new PebcEnergyConstraint({
                id: "123",
                valid_from: new Date().toISOString(),
                valid_until: new Date().toISOString(),
                upper_average_power: -1,
                lower_average_power: -10,
                commodity_quantity: "HEAT.TEMPERATURE"
            });
        }).toThrow('upper_average_power and lower_average_power must be greater than or equal to 0 for non-electric commodity_quantity');
    });

    it('should not throw an error if upper_average_power and lower_average_power are less than 0 for electric commodity_quantity', () => {
        expect(() => {
            new PebcEnergyConstraint({
                id: "123",
                valid_from: new Date().toISOString(),
                valid_until: new Date().toISOString(),
                upper_average_power: -1,
                lower_average_power: -10,
                commodity_quantity: "ELECTRIC.POWER.3_PHASE_SYMMETRIC"
            });
        }).not.toThrow('upper_average_power and lower_average_power must be greater than or equal to 0 for non-electric commodity_quantity');
    });

    it('should not throw an error if upper_average_power and lower_average_power are greater than 0 for non-electric commodity_quantity', () => {
        expect(() => {
            new PebcEnergyConstraint({
                id: "123",
                valid_from: new Date().toISOString(),
                valid_until: new Date().toISOString(),
                upper_average_power: 1,
                lower_average_power: 10,
                commodity_quantity: "HEAT.TEMPERATURE"
            });
        }).not.toThrow('upper_average_power and lower_average_power must be greater than or equal to 0 for non-electric commodity_quantity');
    });

    it('should create an instance of PebcEnergyConstraint from a json', () => {
        const timestampFrom = new Date().toISOString();
        const timestampUntil = new Date().toISOString();

        const pebcEnergyConstraint = new PebcEnergyConstraint({
            id: "123",
            valid_from: timestampFrom,
            valid_until: timestampUntil,
            upper_average_power: 10,
            lower_average_power: 1,
            commodity_quantity: "ELECTRIC.POWER.3_PHASE_SYMMETRIC"
        });

        const json = JSON.stringify(pebcEnergyConstraint);
        const parsed = parseMessage(json);

        expect(parsed).toBeInstanceOf(PebcEnergyConstraint);
        expect(parsed.message_id).toBeDefined();
        expect(parsed.id).toBe("123");
        expect(parsed.valid_from).toBe(timestampFrom);
        expect(parsed.valid_until).toBe(timestampUntil);
        expect(parsed.upper_average_power).toBe(10);
        expect(parsed.lower_average_power).toBe(1);
        expect(parsed.commodity_quantity).toEqual("ELECTRIC.POWER.3_PHASE_SYMMETRIC");

    });

});

