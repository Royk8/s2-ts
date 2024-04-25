import type { PowerForecastElement as GenPowerForecastElement, Duration, PowerForecastValue } from "@schemas";
import { PowerForecastValuesArray } from "./ExtraTypes/";

interface constructorParameters {
    duration: Duration;
    power_values: PowerForecastValuesArray;
}

export class PowerForecastElement implements GenPowerForecastElement {
    duration: Duration;
    power_values: PowerForecastValuesArray;

    constructor(constructorParameters: constructorParameters) {
        const { duration, power_values } = constructorParameters;
        this.duration = duration;
        this.power_values = power_values;
    }
}