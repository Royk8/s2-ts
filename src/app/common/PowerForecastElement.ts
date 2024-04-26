import type { PowerForecastElement as GenPowerForecastElement } from "@schemas";
import { isDuration, type Duration } from "./Duration";
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

        if(!isDuration(duration))
            throw new Error("duration must be a positive integer");

        this.duration = duration;
        this.power_values = power_values;
    }
}