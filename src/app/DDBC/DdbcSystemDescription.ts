import { DDBC_SystemDescription } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { Message, NumberRange, Timestamp, validateTimestamp } from "../common";
import { ActuatorArray } from "./ExtraTypes";
import { DdbcActuatorDescription } from "./DdbcActuatorDescription";

/**
 * Parameters for constructing a new instance of DdbcSystemDescription.
 */
interface ConstructorParameters {
    /**
     * ID of this message.
     */
    message_id?: ID;
    /**
     * Moment this DDBC.SystemDescription starts to be valid. If the system description is immediately valid, the DateTimeStamp should be now or in the past.
     */
    valid_from: Timestamp;
    /**
     * List of all available actuators in the system. Must contain at least one DDBC.ActuatorAggregated.
     */
    actuators: ActuatorArray;
    /**
     * Present demand rate that needs to be satisfied by the system.
     */
    present_demand_rate: NumberRange;
    /**
     * Indicates whether the Resource Manager could provide a demand rate forecast through the DDBC.AverageDemandRateForecast.
     */
    provides_average_demand_rate_forecast: boolean;
}

export class DdbcSystemDescription implements DDBC_SystemDescription, Message {
    message_type: "DDBC.SystemDescription";
    message_id: ID;
    valid_from: Timestamp;
    actuators: ActuatorArray;
    present_demand_rate: NumberRange;
    provides_average_demand_rate_forecast: boolean;

    /**
     * Constructs a new instance of DdbcSystemDescription.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} [constructorParameters.message_id] - ID of this message.
     * @param {Timestamp} constructorParameters.valid_from - Moment this DDBC.SystemDescription starts to be valid.
     * @param {ActuatorArray} constructorParameters.actuators - List of all available actuators in the system.
     * @param {NumberRange} constructorParameters.present_demand_rate - Present demand rate that needs to be satisfied by the system.
     * @param {boolean} constructorParameters.provides_average_demand_rate_forecast - Indicates whether the Resource Manager could provide a demand rate forecast.
     */
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
