import { PowerForecast as GenPowerForecast } from "@messages";
import { PowerForecastElement } from "@messages";

export class PowerForecast implements GenPowerForecast {
    message_type: "PowerForecast";
    message_id: string;
    start_time: string;
    elements: [PowerForecastElement, ...PowerForecastElement[]];

    constructor(message_id: string, start_time: string, elements: [PowerForecastElement, ...PowerForecastElement[]]){
        this.message_id = message_id;
        this.start_time = start_time;
        this.elements = elements;
    }
}