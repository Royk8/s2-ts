import { PpbcPowerProfileDefinition, PpbcPowerSequence, PpbcPowerSequenceContainer, PpbcPowerSequenceElement } from '../../../src/app/PPBC';
import { PowerForecastValue } from '../../../src/app/common';
import { parseMessage } from '../../../src/app/services';

describe('PpbcPowerProfileDefinition', () => {

    it('should create an instance of PpbcPowerProfileDefinition', () => {
        const timestampStart = new Date().toISOString();
        const timestampEnd = new Date().toISOString();

        const powerForecastValue = new PowerForecastValue({
            value_expected: 10,
            commodity_quantity: "ELECTRIC.POWER.L3"
        });

        const ppbcPowerSequenceElement = new PpbcPowerSequenceElement({
            duration: 1,
            power_values: [powerForecastValue]
        });

        const ppbcPowerSequence = new PpbcPowerSequence({
            elements: [ppbcPowerSequenceElement],
            is_interruptible: true,
            max_pause_before: 10,
            abnormal_condition_only: false
        });

        const sequences = [ppbcPowerSequence] as [PpbcPowerSequence, ...PpbcPowerSequence[]];

        const ppbcPowerSequenceContainer = new PpbcPowerSequenceContainer({
            power_sequences: sequences
        });

        const ppbcPowerProfileDefinition = new PpbcPowerProfileDefinition({
            id: "123",
            start_time: timestampStart,
            end_time: timestampEnd,
            power_sequences_containers: [ppbcPowerSequenceContainer]
        });

        expect(ppbcPowerProfileDefinition).toBeInstanceOf(PpbcPowerProfileDefinition);
        expect(ppbcPowerProfileDefinition.message_type).toBe("PPBC.PowerProfileDefinition");
        expect(ppbcPowerProfileDefinition.message_id).toBeDefined();
        expect(ppbcPowerProfileDefinition.id).toBe("123");
        expect(ppbcPowerProfileDefinition.start_time).toBe(timestampStart);
        expect(ppbcPowerProfileDefinition.end_time).toBe(timestampEnd);
        expect(ppbcPowerProfileDefinition.power_sequences_containers).toEqual([ppbcPowerSequenceContainer]);

    });

    it('should create an instance of PpbcPowerProfileDefinition from a json', () => {

        const timestampStart = new Date().toISOString();
        const timestampEnd = new Date().toISOString();

        const powerForecastValue = new PowerForecastValue({
            value_expected: 10,
            commodity_quantity: "ELECTRIC.POWER.L3"
        });

        const ppbcPowerSequenceElement = new PpbcPowerSequenceElement({
            duration: 1,
            power_values: [powerForecastValue]
        });

        const ppbcPowerSequence = new PpbcPowerSequence({
            elements: [ppbcPowerSequenceElement],
            is_interruptible: true,
            max_pause_before: 10,
            abnormal_condition_only: false
        });

        const sequences = [ppbcPowerSequence] as [PpbcPowerSequence, ...PpbcPowerSequence[]];

        const ppbcPowerSequenceContainer = new PpbcPowerSequenceContainer({
            power_sequences: sequences
        });

        const ppbcPowerProfileDefinition = new PpbcPowerProfileDefinition({
            id: "123",
            start_time: timestampStart,
            end_time: timestampEnd,
            power_sequences_containers: [ppbcPowerSequenceContainer]
        });

        const json = JSON.stringify(ppbcPowerProfileDefinition);
        const parsed = parseMessage(json);

        expect(parsed).toBeInstanceOf(PpbcPowerProfileDefinition);
        expect(parsed.message_type).toBe("PPBC.PowerProfileDefinition");
        expect(parsed.message_id).toBeDefined();
        expect(parsed.message_id).toBe(ppbcPowerProfileDefinition.message_id);
        expect(parsed.id).toBe("123");
        expect(parsed.start_time).toBe(timestampStart);
        expect(parsed.end_time).toBe(timestampEnd);
        expect(parsed.power_sequences_containers).toEqual([ppbcPowerSequenceContainer]);
        expect(parsed.power_sequences_containers[0].id).toEqual(ppbcPowerProfileDefinition.power_sequences_containers[0].id);

    });

});