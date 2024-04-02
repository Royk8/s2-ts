import { PowerValue } from "../../schemas/generated";
import { PowerMeasurement as GenPowerMeasurement } from "../../messages/generated";
export declare class PowerMeasurement implements GenPowerMeasurement {
    message_type: "PowerMeasurement";
    message_id: string;
    measurement_timestamp: string;
    values: [PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue] | [PowerValue];
    constructor(message_id: string, measurement_timestamp: string, values: [PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue, PowerValue] | [PowerValue]);
}
