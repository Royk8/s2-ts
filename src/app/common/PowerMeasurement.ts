import { PowerValue } from "@schemas";
import { PowerMeasurement as GenPowerMeasurement } from "@messages";

export class PowerMeasurement implements GenPowerMeasurement {
    message_type : "PowerMeasurement";
    message_id : string;
    measurement_timestamp: string;
    values : [PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue] | [PowerValue];

    constructor(message_id: string, measurement_timestamp: string, values: [PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue] | [PowerValue]){
        this.message_id = message_id;
        this.measurement_timestamp = measurement_timestamp;
        this.values = values;
    }
}