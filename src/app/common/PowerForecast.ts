import { PowerForecast as GenPowerForecast } from "@messages";
import { PowerForecastElement } from "./PowerForecastElement";
import { ID } from "@schemas";
import { Timestamp, validateTimestamp } from "./";
import { Uuid } from "../services/Uuid";

/**
 * Parameters for constructing a new instance of PowerForecast.
 */
interface ConstructorParameters {
    /**
     * ID of this message.
     */
    message_id?: ID;
    /**
     * Start time of the time period that is covered by the profile.
     */
    start_time: Timestamp;
    /**
     * Elements of which this forecast consists. Contains at least one element. Elements must be placed in chronological order.
     * 
     * @minItems 1
     * @maxItems 288
     */
    elements: [PowerForecastElement, ...PowerForecastElement[]];
}

export class PowerForecast implements GenPowerForecast {
    message_type: "PowerForecast";
    message_id: ID;
    start_time: Timestamp;
    elements: [PowerForecastElement, ...PowerForecastElement[]];

    /**
     * Constructs a new instance of PowerForecast.
     * 
     * @param {ConstructorParameters} params - The parameters for the constructor.
     * @param {ID} [params.message_id] - The unique identifier for the message. If not provided, a new UUID will be generated.
     * @param {Timestamp} params.start_time - The start time of the time period covered by the profile.
     * @param {PowerForecastElement[]} params.elements - The elements of which this forecast consists. Must contain at least one element and be placed in chronological order.
     */
    constructor({ message_id, start_time, elements }: ConstructorParameters) {
        validateTimestamp(start_time);

        this.message_type = "PowerForecast";
        this.message_id = Uuid.generate(message_id);
        this.start_time = start_time;
        this.elements = elements;
    }
}
