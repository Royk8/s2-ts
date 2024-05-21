import { DDBC_AverageDemandRateForecast } from "@messages";
import { DdbcAverageDemandRateForecastElement } from ".";
import { Timestamp, validateTimestamp } from "../common";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters {
    message_id?: ID;
    start_time: Timestamp;
    elements: [DdbcAverageDemandRateForecastElement, ...DdbcAverageDemandRateForecastElement[]];
}

export class DdbcAverageDemandRateForecast implements DDBC_AverageDemandRateForecast {
    message_type: "DDBC.AverageDemandRateForecast";
    message_id: ID;
    start_time: Timestamp;
    elements: [DdbcAverageDemandRateForecastElement, ...DdbcAverageDemandRateForecastElement[]];
    
    constructor({ message_id, start_time, elements }: ConstructorParameters) {
        validateTimestamp(start_time);
        if(elements.length < 1 || elements.length > 288){
            throw new Error("DDBC_AverageDemandRateForecast: elements must be between 1 and 288");
        }

        this.message_type = "DDBC.AverageDemandRateForecast";
        this.message_id = Uuid.generate(message_id);
        this.start_time = start_time;
        this.elements = elements;
    }
}