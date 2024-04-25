import { PowerForecast } from '../../../src/app/common/PowerForecast';
import { PowerForecastElement } from '../../../src/app/common/PowerForecastElement';
import { PowerForecastValue } from '../../../src/app/common/PowerForecastValue';

describe('PowerForecast', () => {
    it('should create a PowerForecast object', () => {
        const powerForecastValue = new PowerForecastValue({
            commodity_quantity: 'ELECTRIC.POWER.L1',
            value_expected: 100,
        });

        const powerForecastElement = new PowerForecastElement({
            duration: 10,
            power_values: [powerForecastValue],
        });

        const powerForecast = new PowerForecast({
            message_id: '1234',
            start_time: '2021-01-01T00:00:00Z',
            elements: [
                powerForecastElement
            ]
        });

        expect(powerForecast.message_type).toBe('PowerForecast');
        expect(powerForecast.message_id).toBe('1234');
        expect(powerForecast.start_time).toBe('2021-01-01T00:00:00Z');
        expect(powerForecast.elements).toEqual([powerForecastElement]);
    });
});