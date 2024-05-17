import { PowerForecast as GenPowerForecast } from "@messages";
import { PowerForecastElement } from "./PowerForecastElement";
import { ID } from "@schemas";
import { Timestamp, validateTimestamp } from "./";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters{
    message_id?: ID;
    start_time: Timestamp;
    elements: [PowerForecastElement, ...PowerForecastElement[]];
}

export class PowerForecast implements GenPowerForecast {
    message_type: "PowerForecast";
    message_id: ID;
    start_time: Timestamp;
    elements: [PowerForecastElement, ...PowerForecastElement[]];

    constructor({ message_id, start_time, elements }: ConstructorParameters){
        
        validateTimestamp(start_time);

        this.message_type = "PowerForecast";
        this.message_id = Uuid.generate(message_id);
        this.start_time = start_time;
        this.elements = elements;
    }
}