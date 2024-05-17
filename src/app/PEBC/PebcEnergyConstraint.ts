import { PEBC_EnergyConstraint } from "@messages";
import { ID, CommodityQuantity } from "@schemas";
import { Uuid } from "../services/Uuid";
import { Timestamp, validateTimestamp } from "../common";

interface ConstructorParameters {
    message_id: ID;
    id: ID;
    valid_from: Timestamp;
    valid_until: Timestamp;
    upper_average_power: number;
    lower_average_power: number;
    commodity_quantity: CommodityQuantity;
}

export class PebcEnergyConstraint implements PEBC_EnergyConstraint{
    message_type: "PEBC.EnergyConstraint";
    message_id: ID;
    id: ID;
    valid_from: Timestamp;
    valid_until: Timestamp;
    upper_average_power: number;
    lower_average_power: number;
    commodity_quantity: CommodityQuantity;

    constructor( {message_id, id, valid_from, valid_until, upper_average_power, lower_average_power, commodity_quantity}: ConstructorParameters){
        validateTimestamp(valid_from);
        validateTimestamp(valid_until);

        if(upper_average_power < lower_average_power){
            throw new Error("upper_average_power must be greater than or equal to lower_average_power");
        }

        if(!commodity_quantity.includes("ELECTRIC")){
            if(upper_average_power < 0 || lower_average_power < 0){
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