import { Duration, PPBC_PowerSequenceElement } from "@schemas";
import { PowerForecastValuesArray } from "../common/ExtraTypes";
import { validateDuration } from "../common";

interface ConstructorParameters {
    duration: Duration;
    power_values: PowerForecastValuesArray;
}

export class PpbcPowerSequenceElement implements PPBC_PowerSequenceElement {
    duration: Duration;
    power_values: PowerForecastValuesArray;

    constructor({ duration, power_values }: ConstructorParameters) {
        this.Validate({ duration, power_values });
        this.duration = duration;
        this.power_values = power_values;
    }

    public Validate({ duration, power_values }): void {
        validateDuration(duration);

        if (power_values.length < 0 || power_values.length > 10) {
            throw new Error("power_values must have between 0 and 10 elements");
        }
    }

}