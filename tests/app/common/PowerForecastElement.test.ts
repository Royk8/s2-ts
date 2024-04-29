import { PowerForecastElement } from "../../../src/app/common/PowerForecastElement";
import { PowerForecastValue } from "../../../src/app/common/PowerForecastValue";

describe('PowerForecastElement', () => {
    it('should create a PowerForecastElement object', () => {
        const powerForecastValue = new PowerForecastValue({
            commodity_quantity: 'ELECTRIC.POWER.L1',
            value_expected: 100,
        });

        const powerForecastElement = new PowerForecastElement({
            duration: 10,
            power_values: [powerForecastValue],
        });

        expect(powerForecastElement.duration).toBe(10);
        expect(powerForecastElement.power_values).toEqual([powerForecastValue]);
    });
});