"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerForecastValue = void 0;
class PowerForecastValue {
    constructor(value_expected, commodity_quantity, value_upper_limit, value_upper_95PPR, value_upper_68PPR, value_lower_68PPR, value_lower_95PPR, value_lower_limit) {
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
exports.PowerForecastValue = PowerForecastValue;
