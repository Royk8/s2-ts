import { FRBC_UsageForecast } from "@messages";
import { ID } from "@schemas";
import { Message, Timestamp, validateTimestamp } from "../common";
import { FrbcUsageForecastElement } from "./FrbcUsageForecastElement";
import { Uuid } from "../services/Uuid";

/**
 * Parameters for constructing a new instance of FrbcUsageForecast.
 */
interface ConstructorParameters {
    /**
     * ID of this message.
     */
    message_id?: ID;
    /**
     * Time at which the FRBC.UsageForecast starts.
     */
    start_time: Timestamp;
    /**
     * Further elements that model the profile. There shall be at least one element. Elements must be placed in chronological order.
     *
     * @minItems 1
     * @maxItems 288
     */
    elements: [FrbcUsageForecastElement, ...FrbcUsageForecastElement[]];
}

export class FrbcUsageForecast implements FRBC_UsageForecast, Message {
    message_type: "FRBC.UsageForecast";
    message_id: ID;
    start_time: Timestamp;
    elements: [FrbcUsageForecastElement, ...FrbcUsageForecastElement[]];

    /**
     * Constructs a new instance of FrbcUsageForecast.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} constructorParameters.message_id - ID of this message. If not provided, a new UUID will be generated.
     * @param {Timestamp} constructorParameters.start_time - Time at which the FRBC.UsageForecast starts.
     * @param {[FrbcUsageForecastElement, ...FrbcUsageForecastElement[]]} constructorParameters.elements - Further elements that model the profile.
     */
    constructor({ message_id, start_time, elements }: ConstructorParameters){

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
