import { DDBC_SystemDescription } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { NumberRange, Timestamp, validateTimestamp } from "../common";
import { ActuatorArray } from "./ExtraTypes";
import { DdbcActuatorDescription } from "./DdbcActuatorDescription";

interface ConstructorParameters {
    message_id: ID;
    valid_from: Timestamp;
    actuators: ActuatorArray;
    present_demand_rate: NumberRange;
    provides_average_demand_rate_forecast: boolean;
}

export class DdbcSystemDescription implements DDBC_SystemDescription {
    message_type: "DDBC.SystemDescription";
    message_id: ID;
    valid_from: Timestamp;
    actuators: ActuatorArray;
    present_demand_rate: NumberRange;
    provides_average_demand_rate_forecast: boolean;

    constructor({ message_id, valid_from, actuators, present_demand_rate, provides_average_demand_rate_forecast }: ConstructorParameters) {
        validateTimestamp(valid_from);
        const validatedDescriptions = actuators.map((actuator) => new DdbcActuatorDescription(actuator));

        this.present_demand_rate = new NumberRange(present_demand_rate);
        this.message_type = "DDBC.SystemDescription";
        this.message_id = Uuid.generate(message_id);
        this.valid_from = valid_from;
        this.actuators = validatedDescriptions as ActuatorArray;
        this.provides_average_demand_rate_forecast = provides_average_demand_rate_forecast;
    }
}