import { PowerMeasurement as GenPowerMeasurement } from "@messages";
import { PowerValuesArray } from "./ExtraTypes";

interface constructorParameters {
    message_id: string;
    measurement_timestamp: string;
    values: PowerValuesArray;
}

export class PowerMeasurement implements GenPowerMeasurement {
    message_type : "PowerMeasurement";
    message_id : string;
    measurement_timestamp: string;
    values : PowerValuesArray

    constructor(constructorParameters: constructorParameters){
        const { message_id, measurement_timestamp, values } = constructorParameters;

        this.message_type = "PowerMeasurement";
        this.message_id = message_id;
        this.measurement_timestamp = measurement_timestamp;
        this.values = values;
    }
}