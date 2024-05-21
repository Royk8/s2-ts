import { PebcPowerEnvelopeElement } from '../../../src/app/PEBC/PebcPowerEnvelopeElement';

describe('PebcPowerEnvelopeElement', () => {
    it('should create an instance of PebcPowerEnvelopeElement', () => {

        const pebcPowerEnvelopeElement = new PebcPowerEnvelopeElement({
            duration: 20,
            upper_limit: 10,
            lower_limit: 1
        });

        expect(pebcPowerEnvelopeElement).toBeInstanceOf(PebcPowerEnvelopeElement);
        expect(pebcPowerEnvelopeElement.duration).toBe(20);
        expect(pebcPowerEnvelopeElement.upper_limit).toBe(10);
        expect(pebcPowerEnvelopeElement.lower_limit).toBe(1);
    });

    it('should throw an error if upper_limit is less than lower_limit', () => {
        expect(() => {
            new PebcPowerEnvelopeElement({
                duration: 20,
                upper_limit: 1,
                lower_limit: 10
            });
        }).toThrow('PowerEnvelopeElement: Upper limit must be greater than or equal to lower limit');
    });

});