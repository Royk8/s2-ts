import type { CommodityQuantity, PowerForecastValue as PowerForecastValueGen } from "../../schemas/generated";
export declare class PowerForecastValue implements PowerForecastValueGen {
    value_upper_limit?: number;
    value_upper_95PPR?: number;
    value_upper_68PPR?: number;
    value_expected: number;
    value_lower_68PPR?: number;
    value_lower_95PPR?: number;
    value_lower_limit?: number;
    commodity_quantity: CommodityQuantity;
    constructor(value_expected: number, commodity_quantity: CommodityQuantity, value_upper_limit?: number, value_upper_95PPR?: number, value_upper_68PPR?: number, value_lower_68PPR?: number, value_lower_95PPR?: number, value_lower_limit?: number);
}
