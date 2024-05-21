import { PebcInstruction, PebcPowerEnvelope, PebcPowerEnvelopeElement } from "../../../src/app/PEBC";
import { parseMessage } from "../../../src/app/services";

describe('PebcInstruction', () => {
    it('should create an instance of PebcInstruction', () => {

        const timestamp = new Date().toISOString();

        const element = new PebcPowerEnvelopeElement({
            duration: 20,
            upper_limit: 10,
            lower_limit: 1
        });

        const pebcPowerEnvelope = new PebcPowerEnvelope({
            commodity_quantity: "ELECTRIC.POWER.L3",
            power_envelope_elements: [element]
        });

        const pebcInstruction = new PebcInstruction({
            id: "123",
            execution_time: timestamp,
            abnormal_condition: false,
            power_constraints_id: "123",
            power_envelopes: [pebcPowerEnvelope]
        });

        expect(pebcInstruction).toBeInstanceOf(PebcInstruction);
        expect(pebcInstruction.message_type).toBe("PEBC.Instruction");
        expect(pebcInstruction.message_id).toBeDefined();
        expect(pebcInstruction.id).toBe("123");
        expect(pebcInstruction.execution_time).toBe(timestamp);
        expect(pebcInstruction.abnormal_condition).toBe(false);
        expect(pebcInstruction.power_constraints_id).toBe("123");
        expect(pebcInstruction.power_envelopes).toEqual([pebcPowerEnvelope]);

    });

    it('should create an instance of PebcInstruction from a json', () => {
        const timestamp = new Date().toISOString();

        const element = new PebcPowerEnvelopeElement({
            duration: 20,
            upper_limit: 10,
            lower_limit: 1
        });

        const pebcPowerEnvelope = new PebcPowerEnvelope({
            commodity_quantity: "ELECTRIC.POWER.L3",
            power_envelope_elements: [element]
        });

        const pebcPowerEnvelope2 = new PebcPowerEnvelope({
            commodity_quantity: "ELECTRIC.POWER.L2",
            power_envelope_elements: [element]
        });

        const pebcInstruction = new PebcInstruction({
            id: "123",
            execution_time: timestamp,
            abnormal_condition: false,
            power_constraints_id: "123",
            power_envelopes: [pebcPowerEnvelope, pebcPowerEnvelope2]
        });
        
        const json = JSON.stringify(pebcInstruction);
        const parsed = parseMessage(json);

        expect(parsed).toBeInstanceOf(PebcInstruction);
        expect(parsed.message_type).toBe("PEBC.Instruction");
        expect(parsed.message_id).toBeDefined();
        expect(parsed.id).toBe("123");
        expect(parsed.execution_time).toBe(timestamp);
        expect(parsed.abnormal_condition).toBe(false);
        expect(parsed.power_constraints_id).toBe("123");
        expect(parsed.power_envelopes).toEqual([pebcPowerEnvelope, pebcPowerEnvelope2]);
    });
});