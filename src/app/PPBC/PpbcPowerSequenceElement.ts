import { Duration, PPBC_PowerSequenceElement } from "@schemas";
import { PowerForecastValuesArray } from "../common/ExtraTypes";
import { validateDuration } from "../common";

interface ConstructorParameters {
    /**
     * Duration of the PPBC.PowerSequenceElement.
     */
    duration: Duration;
    /**
     * The value of power and deviations for the given duration. The array should contain at least one PowerForecastValue and at most one PowerForecastValue per CommodityQuantity.
     *
     * @minItems 1
     * @maxItems 10
     */
    power_values: PowerForecastValuesArray;
}

export class PpbcPowerSequenceElement implements PPBC_PowerSequenceElement {
    duration: Duration;
    power_values: PowerForecastValuesArray;

    /**
     * Constructs a new instance of the PpbcPowerSequenceElement class.
     * 
     * @param {ConstructorParameters} parameters - The parameters for the constructor.
     * @param {Duration} parameters.duration - Duration of the PPBC.PowerSequenceElement.
     * @param {PowerForecastValuesArray} parameters.power_values - The value of power and deviations for the given duration.
     */
    constructor({ duration, power_values }: ConstructorParameters) {
        validateDuration(duration);

        if (power_values.length < 1 || power_values.length > 10) {
            throw new Error("power_values must have between 1 and 10 elements");
        }
        this.duration = duration;
        this.power_values = power_values;
    }
}
