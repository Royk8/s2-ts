import { PowerMeasurement as GenPowerMeasurement } from "@messages";
import { PowerValuesArray } from "./ExtraTypes";
import { ID } from "@schemas";
import { Timestamp, validateTimestamp } from "./";
import { Uuid } from "../services/Uuid";

/**
 * Parameters for constructing a new instance of PowerMeasurement.
 */
interface ConstructorParameters {
    /**
     * ID of this message.
     */
    message_id?: ID;
    /**
     * Timestamp when PowerValues were measured.
     */
    measurement_timestamp: Timestamp;
    /**
     * Array of measured PowerValues. Must contain at least one item and at most one item per ‘commodity_quantity’ (defined inside the PowerValue).
     * 
     * @minItems 1
     * @maxItems 10
     */
    values: PowerValuesArray;
}

export class PowerMeasurement implements GenPowerMeasurement {
    message_type: "PowerMeasurement";
    message_id: ID;
    measurement_timestamp: Timestamp;
    values: PowerValuesArray;

    /**
     * Constructs a new instance of PowerMeasurement.
     * 
     * @param {ConstructorParameters} params - The parameters for the constructor.
     * @param {ID} [params.message_id] - The unique identifier for the message. If not provided, a new UUID will be generated.
     * @param {Timestamp} params.measurement_timestamp - The timestamp when PowerValues were measured.
     * @param {PowerValuesArray} params.values - The array of measured PowerValues.
     */
    constructor({ message_id, measurement_timestamp, values }: ConstructorParameters) {
        validateTimestamp(measurement_timestamp);

        this.message_type = "PowerMeasurement";
        this.message_id = Uuid.generate(message_id);
        this.measurement_timestamp = measurement_timestamp;
        this.values = values;
    }
}
