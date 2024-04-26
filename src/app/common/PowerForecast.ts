import { PowerForecast as GenPowerForecast } from "@messages";
import { PowerForecastElement } from "./PowerForecastElement";
import { ID } from "@schemas";

interface constructorParameters{
    message_id: ID;
    start_time: string;
    elements: [PowerForecastElement, ...PowerForecastElement[]];
}

export class PowerForecast implements GenPowerForecast {
    message_type: "PowerForecast";
    message_id: ID;
    start_time: string;
    elements: [PowerForecastElement, ...PowerForecastElement[]];

    constructor(constructorParameters: constructorParameters){
        const { message_id, start_time, elements } = constructorParameters;
        
        this.message_type = "PowerForecast";
        this.message_id = message_id;
        this.start_time = start_time;
        this.elements = elements;
    }
}