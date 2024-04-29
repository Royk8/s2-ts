import { PowerMeasurement as GenPowerMeasurement } from "@messages";
import { PowerValuesArray } from "./ExtraTypes";
import { ID } from "@schemas";
import { Timestamp, validateTimestamp } from "./";

interface constructorParameters {
    message_id: ID;
    measurement_timestamp: Timestamp;
    values: PowerValuesArray;
}

export class PowerMeasurement implements GenPowerMeasurement {
    message_type : "PowerMeasurement";
    message_id : ID;
    measurement_timestamp: Timestamp;
    values : PowerValuesArray

    constructor(constructorParameters: constructorParameters){
        const { message_id, measurement_timestamp, values } = constructorParameters;

        validateTimestamp(measurement_timestamp);

        this.message_type = "PowerMeasurement";
        this.message_id = message_id;
        this.measurement_timestamp = measurement_timestamp;
        this.values = values;
    }
}