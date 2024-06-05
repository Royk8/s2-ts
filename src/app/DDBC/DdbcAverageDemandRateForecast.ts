import { DDBC_AverageDemandRateForecast } from "@messages";
import { DdbcAverageDemandRateForecastElement } from ".";
import { S2Message, Timestamp, validateTimestamp } from "../common";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";

/**
 * Parameters for constructing a new instance of DdbcAverageDemandRateForecast.
 */
interface ConstructorParameters {
    /**
     * The ID of this message. If not provided, a new UUID will be generated.
     */
    id?: ID;
    /**
     * The start time of the profile.
     */
    start_time: Timestamp;
    /**
     * The elements of the profile. Elements must be placed in chronological order.
     *
     * @minItems 1
     * @maxItems 288
     */
    elements: [DdbcAverageDemandRateForecastElement, ...DdbcAverageDemandRateForecastElement[]];
}

export class DdbcAverageDemandRateForecast implements DDBC_AverageDemandRateForecast, S2Message {
    message_type: "DDBC.AverageDemandRateForecast";
    message_id: ID;
    start_time: Timestamp;
    elements: [DdbcAverageDemandRateForecastElement, ...DdbcAverageDemandRateForecastElement[]];
    
    /**
     * Constructs a new instance of DdbcAverageDemandRateForecast.
     * 
     * @param {ConstructorParameters} params - The parameters for the constructor.
     * @param {ID} [params.id] - The ID of the message. If not provided, a new UUID will be generated.
     * @param {Timestamp} params.start_time - The start time of the profile.
     * @param {[DdbcAverageDemandRateForecastElement, ...DdbcAverageDemandRateForecastElement[]]} params.elements - The elements of the profile. Elements must be placed in chronological order.
     */
    constructor({ id, start_time, elements }: ConstructorParameters) {
        validateTimestamp(start_time);
        if(elements.length < 1 || elements.length > 288){
            throw new Error("DDBC_AverageDemandRateForecast: elements must be between 1 and 288");
        }

        this.message_type = "DDBC.AverageDemandRateForecast";
        this.message_id = Uuid.generate(id);
        this.start_time = start_time;
        this.elements = elements;
    }
}
