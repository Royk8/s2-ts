import { PpbcPowerSequenceElement } from '../../../src/app/PPBC';
import { PowerForecastValue } from '../../../src/app/common';

describe('PpbcPowerSequenceElement', () => {

    it('should create an instance of PpbcPowerSequenceElement', () => {

        const powerForecastValue = new PowerForecastValue({
            value_expected: 10,
            commodity_quantity: "ELECTRIC.POWER.L3"
        });
            
        const ppbcPowerSequenceElement = new PpbcPowerSequenceElement({
            duration: 1,
            power_values: [powerForecastValue]
        });

        expect(ppbcPowerSequenceElement).toBeInstanceOf(PpbcPowerSequenceElement);
        expect(ppbcPowerSequenceElement.duration).toBe(1);
        expect(ppbcPowerSequenceElement.power_values).toEqual([powerForecastValue]);
    });

});