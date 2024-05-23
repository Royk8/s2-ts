import { PEBC_EnergyConstraint } from "@messages";
import { ID, CommodityQuantity } from "@schemas";
import { Uuid } from "../services/Uuid";
import { Timestamp, validateTimestamp } from "../common";

interface ConstructorParameters {
    /**
     * ID of this message
     */
    message_id?: ID;
    /**
     * Identifier of this PEBC.EnergyConstraints. Must be unique in the scope of the Resource Manager, for at least the duration of the session between Resource Manager and CEM.
     */
    id: ID;
    /**
     * Moment this PEBC.EnergyConstraints information starts to be valid
     */
    valid_from: Timestamp;
    /**
     * Moment until this PEBC.EnergyConstraints information is valid.
     */
    valid_until: Timestamp;
    /**
     * Upper average power within the time period given by valid_from and valid_until. If the duration is multiplied with this power value, then the associated upper energy content can be derived. This is the highest amount of energy the resource will consume during that period of time. The Power Envelope created by the CEM must allow at least this much energy consumption (in case the number is positive). Must be greater than or equal to lower_average_power, and can be negative in case of energy production.
     */
    upper_average_power: number;
    /**
     * Lower average power within the time period given by valid_from and valid_until. If the duration is multiplied with this power value, then the associated lower energy content can be derived. This is the lowest amount of energy the resource will consume during that period of time. The Power Envelope created by the CEM must allow at least this much energy production (in case the number is negative). Must be greater than or equal to lower_average_power, and can be negative in case of energy production.
     */
    lower_average_power: number;
    /**
     * Type of power quantity which applies to upper_average_power and lower_average_power
     */
    commodity_quantity: CommodityQuantity;
}

export class PebcEnergyConstraint implements PEBC_EnergyConstraint {
    message_type: "PEBC.EnergyConstraint";
    message_id: ID;
    id: ID;
    valid_from: Timestamp;
    valid_until: Timestamp;
    upper_average_power: number;
    lower_average_power: number;
    commodity_quantity: CommodityQuantity;

    /**
     * Constructs a new instance of the PebcEnergyConstraint class.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} constructorParameters.message_id - ID of this message.
     * @param {ID} constructorParameters.id - Identifier of this PEBC.EnergyConstraints.
     * @param {Timestamp} constructorParameters.valid_from - Moment this PEBC.EnergyConstraints information starts to be valid.
     * @param {Timestamp} constructorParameters.valid_until - Moment until this PEBC.EnergyConstraints information is valid.
     * @param {number} constructorParameters.upper_average_power - Upper average power within the time period given by valid_from and valid_until.
     * @param {number} constructorParameters.lower_average_power - Lower average power within the time period given by valid_from and valid_until.
     * @param {CommodityQuantity} constructorParameters.commodity_quantity - Type of power quantity which applies to upper_average_power and lower_average_power.
     */
    constructor({ message_id, id, valid_from, valid_until, upper_average_power, lower_average_power, commodity_quantity }: ConstructorParameters) {
        validateTimestamp(valid_from);
        validateTimestamp(valid_until);

        if (upper_average_power < lower_average_power) {
            throw new Error("upper_average_power must be greater than or equal to lower_average_power");
        }

        if (!commodity_quantity.includes("ELECTRIC")) {
            if (upper_average_power < 0 || lower_average_power < 0) {
                throw new Error("upper_average_power and lower_average_power must be greater than or equal to 0 for non-electric commodity_quantity");
            }
        }

        this.message_type = "PEBC.EnergyConstraint";
        this.message_id = Uuid.generate(message_id);
        this.id = id;
        this.valid_from = valid_from;
        this.valid_until = valid_until;
        this.upper_average_power = upper_average_power;
        this.lower_average_power = lower_average_power;
        this.commodity_quantity = commodity_quantity;
    }
}
