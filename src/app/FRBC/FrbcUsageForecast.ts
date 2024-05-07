import { FRBC_UsageForecast } from "@messages";
import { ID } from "@schemas";
import { Timestamp, validateTimestamp } from "../common";
import { FrbcUsageForecastElement } from "./FrbcUsageForecastElement";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters{
    message_id?: ID;
    start_time: Timestamp;
    elements: [FrbcUsageForecastElement, ...FrbcUsageForecastElement[]];
}

export class FrbcUsageForecast implements FRBC_UsageForecast {
    message_type: "FRBC.UsageForecast";
    message_id: ID;
    start_time: Timestamp;
    elements: [FrbcUsageForecastElement, ...FrbcUsageForecastElement[]];

    constructor(constructorParameters: ConstructorParameters){
        const { message_id, start_time, elements } = constructorParameters;

        if(elements.length > 288){
            throw new Error("The size of the FRBC_UsageForecastElements array must be between 1 and 288");
        }
        validateTimestamp(start_time);
        
        this.message_type = "FRBC.UsageForecast";
        this.message_id = Uuid.generate(message_id);
        this.start_time = start_time;
        this.elements = elements;
    }
}