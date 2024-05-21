import { PebcPowerEnvelope, PebcPowerEnvelopeElement } from "../../../src/app/PEBC";

describe('PebcPowerEnvelope', () => {

    it('should create an instance of PebcPowerEnvelope', () => {
        const element = new PebcPowerEnvelopeElement({
            duration: 20,
            upper_limit: 10,
            lower_limit: 1
        });

        const pebcPowerEnvelope = new PebcPowerEnvelope({
            commodity_quantity: "ELECTRIC.POWER.L3",
            power_envelope_elements: [element]
        });

        expect(pebcPowerEnvelope).toBeInstanceOf(PebcPowerEnvelope);
        expect(pebcPowerEnvelope.id).toBeDefined();
        expect(pebcPowerEnvelope.commodity_quantity).toBe("ELECTRIC.POWER.L3");
        expect(pebcPowerEnvelope.power_envelope_elements).toEqual([element]);
    });

});