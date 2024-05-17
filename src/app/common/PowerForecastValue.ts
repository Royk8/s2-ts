import type { CommodityQuantity, PowerForecastValue as PowerForecastValueGen } from "@schemas";

interface ConstructorParameters {
    value_upper_limit?: number;
    value_upper_95PPR?: number;
    value_upper_68PPR?: number;
    value_lower_68PPR?: number;
    value_lower_95PPR?: number;
    value_lower_limit?: number;
    value_expected: number;
    commodity_quantity: CommodityQuantity;
}

export class PowerForecastValue implements PowerForecastValueGen {
    value_upper_limit?: number;
    value_upper_95PPR?: number;
    value_upper_68PPR?: number;
    value_expected: number;
    value_lower_68PPR?: number;
    value_lower_95PPR?: number;
    value_lower_limit?: number;
    commodity_quantity: CommodityQuantity;

    constructor({ value_upper_limit, value_upper_95PPR, value_upper_68PPR, value_lower_68PPR, value_lower_95PPR, value_lower_limit, value_expected, commodity_quantity }: ConstructorParameters) {

        this.value_upper_limit = value_upper_limit;
        this.value_upper_95PPR = value_upper_95PPR;
        this.value_upper_68PPR = value_upper_68PPR;
        this.value_expected = value_expected;
        this.value_lower_68PPR = value_lower_68PPR;
        this.value_lower_95PPR = value_lower_95PPR;
        this.value_lower_limit = value_lower_limit;
        this.commodity_quantity = commodity_quantity;
    }
}
