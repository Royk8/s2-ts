import type { PowerForecastElement as GenPowerForecastElement } from "@schemas";
import { validateDuration, type Duration } from "./Duration";
import { PowerForecastValuesArray } from "./ExtraTypes";

interface ConstructorParameters {
    duration: Duration;
    power_values: PowerForecastValuesArray;
}

export class PowerForecastElement implements GenPowerForecastElement {
    duration: Duration;
    power_values: PowerForecastValuesArray;

    constructor({ duration, power_values } : ConstructorParameters) {

        validateDuration(duration);
        this.duration = duration;
        this.power_values = power_values;
    }
}