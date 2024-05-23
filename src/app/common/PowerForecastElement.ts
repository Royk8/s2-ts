import type { PowerForecastElement as GenPowerForecastElement } from "@schemas";
import { validateDuration, type Duration } from "./Duration";
import { PowerForecastValuesArray } from "./ExtraTypes";

/**
 * Parameters for constructing a new instance of PowerForecastElement.
 */
interface ConstructorParameters {
    /**
     * Duration of the PowerForecastElement.
     */
    duration: Duration;
    /**
     * The power quantity the value refers to.
     */
    power_values: PowerForecastValuesArray;
}

export class PowerForecastElement implements GenPowerForecastElement {
    duration: Duration;
    power_values: PowerForecastValuesArray;

    /**
     * Constructs a new instance of PowerForecastElement.
     * 
     * @param {ConstructorParameters} params - The parameters for the constructor.
     * @param {Duration} params.duration - The duration of the PowerForecastElement.
     * @param {PowerForecastValuesArray} params.power_values - The power quantity the value refers to.
     */
    constructor({ duration, power_values }: ConstructorParameters) {
        validateDuration(duration);
        this.duration = duration;
        this.power_values = power_values;
    }
}
