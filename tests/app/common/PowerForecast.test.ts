import { PowerForecast } from '../../../src/app/common/PowerForecast';
import { PowerForecastElement } from '../../../src/app/common/PowerForecastElement';
import { PowerForecastValue } from '../../../src/app/common/PowerForecastValue';
import { parseMessage } from '../../../src/app/services'

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

    it('should create a PowerForecast object after parsing it from a json', () => {
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

        const jsonPowerForecast = JSON.stringify(powerForecast, null, 2);
        const parsedPowerForecast = parseMessage(jsonPowerForecast);

        expect(parsedPowerForecast.message_type).toBe('PowerForecast');
        expect(parsedPowerForecast.message_id).toBe('1234');
        expect(parsedPowerForecast.start_time).toBe('2021-01-01T00:00:00Z');
        expect(parsedPowerForecast.elements).toEqual([powerForecastElement]);
    });
});