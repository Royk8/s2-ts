import type { CommodityQuantity, PowerRange as GenPowerRange } from "../../schemas/generated";
export declare class PowerRange implements GenPowerRange {
    start_of_range: number;
    end_of_range: number;
    commodity_quantity: CommodityQuantity;
    constructor(start_of_range: number, end_of_range: number, commodity_quantity: CommodityQuantity);
}
