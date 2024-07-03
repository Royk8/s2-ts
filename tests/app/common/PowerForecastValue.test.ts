import { PowerForecastValue } from '../../../src/app/common/PowerForecastValue';
import { CommodityQuantity } from '../../../src/app/common';

describe('PowerForecastValue', () => {
    it('should create a PowerForecastValue object', () => {
        const powerForecastValue = new PowerForecastValue({
            commodity_quantity: "ELECTRIC.POWER.L1",
            value_expected: 100,
        });

        expect(powerForecastValue.commodity_quantity).toBe("ELECTRIC.POWER.L1");
        expect(powerForecastValue.value_expected).toBe(100);
    });

    it('should create a PowerForecastValue object with all properties', () => {
        const powerForecastValue = new PowerForecastValue({
            commodity_quantity: "ELECTRIC.POWER.L1",
            value_upper_limit: 200,
            value_upper_95PPR: 190,
            value_upper_68PPR: 180,
            value_lower_68PPR: 170,
            value_lower_95PPR: 160,
            value_lower_limit: 150,
            value_expected: 100,
        });

        expect(powerForecastValue.commodity_quantity).toBe("ELECTRIC.POWER.L1");
        expect(powerForecastValue.value_upper_limit).toBe(200);
        expect(powerForecastValue.value_upper_95PPR).toBe(190);
        expect(powerForecastValue.value_upper_68PPR).toBe(180);
        expect(powerForecastValue.value_lower_68PPR).toBe(170);
        expect(powerForecastValue.value_lower_95PPR).toBe(160);
        expect(powerForecastValue.value_lower_limit).toBe(150);
        expect(powerForecastValue.value_expected).toBe(100);
    });

    it('should create a PowerForecastValue object', () => {
        const powerForecastValue = new PowerForecastValue({
            commodity_quantity: CommodityQuantity.ELECTRIC_POWER_L1,
            value_expected: 100,
        });

        expect(powerForecastValue.commodity_quantity).toBe("ELECTRIC.POWER.L1");
        expect(powerForecastValue.value_expected).toBe(100);
    });
});