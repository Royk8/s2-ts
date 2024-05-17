import { PowerMeasurement as GenPowerMeasurement } from "@messages";
import { PowerValuesArray } from "./ExtraTypes";
import { ID } from "@schemas";
import { Timestamp, validateTimestamp } from "./";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters {
    message_id?: ID;
    measurement_timestamp: Timestamp;
    values: PowerValuesArray;
}

export class PowerMeasurement implements GenPowerMeasurement {
    message_type : "PowerMeasurement";
    message_id : ID;
    measurement_timestamp: Timestamp;
    values : PowerValuesArray

    constructor({ message_id, measurement_timestamp, values }: ConstructorParameters){

        validateTimestamp(measurement_timestamp);

        this.message_type = "PowerMeasurement";
        this.message_id = Uuid.generate(message_id);;
        this.measurement_timestamp = measurement_timestamp;
        this.values = values;
    }
}