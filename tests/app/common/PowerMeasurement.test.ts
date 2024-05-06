import {PowerMeasurement} from '../../../src/app/common/PowerMeasurement';
import { PowerValue } from '../../../src/app/common/PowerValue';
import { parseMessage } from '../../../src/app/services';

describe('PowerMeasurement', () => {
    it('should create a PowerMeasurement object', () => {

        const power_value = new PowerValue({
            commodity_quantity: 'ELECTRIC.POWER.L1',
            value: 1
        });

        const powerMeasurement = new PowerMeasurement({
            message_id: '1234',
            measurement_timestamp: '2021-01-01T00:00:00Z',
            values: [power_value]
        });

        expect(powerMeasurement.message_type).toBe('PowerMeasurement');
        expect(powerMeasurement.message_id).toBe('1234');
        expect(powerMeasurement.measurement_timestamp).toBe('2021-01-01T00:00:00Z');
        expect(powerMeasurement.values).toEqual([power_value]);
    });

    it('should create a PowerMeasurement object after parsing it from a json', () => {

        const power_value = new PowerValue({
            commodity_quantity: 'ELECTRIC.POWER.L1',
            value: 1
        });

        const powerMeasurement = new PowerMeasurement({
            message_id: '1234',
            measurement_timestamp: '2021-01-01T00:00:00Z',
            values: [power_value]
        });

        const jsonPowerMeasurement = JSON.stringify(powerMeasurement, null, 2);
        const parsedPowerMeasurement = parseMessage(jsonPowerMeasurement);

        expect(parsedPowerMeasurement.message_type).toBe('PowerMeasurement');
        expect(parsedPowerMeasurement.message_id).toBe('1234');
        expect(parsedPowerMeasurement.measurement_timestamp).toBe('2021-01-01T00:00:00Z');
        expect(parsedPowerMeasurement.values).toEqual([power_value]);
    });
});