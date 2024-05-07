import type { CommodityQuantity, PowerRange as GenPowerRange } from "@schemas";

interface ConstructorParameters{
    start_of_range: number;
    end_of_range: number;
    commodity_quantity: CommodityQuantity;
}

export class PowerRange implements GenPowerRange{
    start_of_range: number;
    end_of_range: number;
    commodity_quantity: CommodityQuantity;

    constructor(contractorParameters: ConstructorParameters){
        const { start_of_range, end_of_range, commodity_quantity } = contractorParameters;

        if(start_of_range > end_of_range){
            throw new Error("start_of_range must be less than or equal to end_of_range");
        }
        
        this.start_of_range = start_of_range;
        this.end_of_range = end_of_range;
        this.commodity_quantity = commodity_quantity;
    }
}