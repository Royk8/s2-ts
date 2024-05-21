import { PpbcPowerSequence, PpbcPowerSequenceContainer, PpbcPowerSequenceElement } from "../../../src/app/PPBC";
import { PowerForecastValue } from "../../../src/app/common";

describe('PpbcPowerSequenceContainer', () => {

    it('should create an instance of PpbcPowerSequenceContainer', () => {

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

        expect(ppbcPowerSequenceContainer).toBeInstanceOf(PpbcPowerSequenceContainer);
        expect(ppbcPowerSequenceContainer.id).toBeDefined();
        expect(ppbcPowerSequenceContainer.power_sequences).toEqual(sequences);
    });
});