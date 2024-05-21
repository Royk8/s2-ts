import { PpbcPowerSequence, PpbcPowerSequenceElement } from "../../../src/app/PPBC";
import { PowerForecastValue } from "../../../src/app/common";

describe('PpbcPowerSequence', () => {

    it('should create an instance of PpbcPowerSequence', () => {

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

        expect(ppbcPowerSequence).toBeInstanceOf(PpbcPowerSequence);
        expect(ppbcPowerSequence.id).toBeDefined();
        expect(ppbcPowerSequence.elements).toEqual([ppbcPowerSequenceElement]);
        expect(ppbcPowerSequence.is_interruptible).toBe(true);
        expect(ppbcPowerSequence.max_pause_before).toBe(10);
        expect(ppbcPowerSequence.abnormal_condition_only).toBe(false);
    });

    it('should throw an error there is more than 288 elements', () => {
            
            const powerForecastValue = new PowerForecastValue({
                value_expected: 10,
                commodity_quantity: "ELECTRIC.POWER.L3"
            });
    
            const elements = Array.from({length: 289}, () => {
                return new PpbcPowerSequenceElement({
                    duration: 1,
                    power_values: [powerForecastValue]
                });
            }) as [PpbcPowerSequenceElement, ...PpbcPowerSequenceElement[]];
    
            expect(() => {
                new PpbcPowerSequence({
                    elements: elements,
                    is_interruptible: true,
                    max_pause_before: 10,
                    abnormal_condition_only: false
                });
            }).toThrow("elements must have between 1 and 288 elements");
        });

    });