import type { CommodityQuantity, PowerRange as GenPowerRange } from "@schemas";

export class PowerRange implements GenPowerRange{
    start_of_range: number;
    end_of_range: number;
    commodity_quantity: CommodityQuantity;

    constructor(start_of_range: number, end_of_range: number, commodity_quantity: CommodityQuantity){
        this.start_of_range = start_of_range;
        this.end_of_range = end_of_range;
        this.commodity_quantity = commodity_quantity;
    }
}