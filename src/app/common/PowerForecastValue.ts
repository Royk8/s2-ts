import type { CommodityQuantity, PowerForecastValue as PowerForecastValueGen } from "@schemas";

/**
 * Parameters for constructing a new instance of PowerForecastValue.
 */
interface ConstructorParameters {
  /**
   * The upper boundary of the range with 100% certainty the power value is in it.
   */
  value_upper_limit?: number;
  /**
   * The upper boundary of the range with 95% certainty the power value is in it.
   */
  value_upper_95PPR?: number;
  /**
   * The upper boundary of the range with 68% certainty the power value is in it.
   */
  value_upper_68PPR?: number;
  /**
   * The expected power value.
   */
  value_expected: number;
  /**
   * The lower boundary of the range with 68% certainty the power value is in it.
   */
  value_lower_68PPR?: number;
  /**
   * The lower boundary of the range with 95% certainty the power value is in it.
   */
  value_lower_95PPR?: number;
  /**
   * The lower boundary of the range with 100% certainty the power value is in it.
   */
  value_lower_limit?: number;
  /**
   * The power quantity the value refers to.
   */
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

    /**
     * Constructs a new instance of PowerForecastValue.
     * 
     * @param {ConstructorParameters} params - The parameters for the constructor.
     * @param {number} [params.value_upper_limit] - The upper boundary of the range with 100% certainty the power value is in it.
     * @param {number} [params.value_upper_95PPR] - The upper boundary of the range with 95% certainty the power value is in it.
     * @param {number} [params.value_upper_68PPR] - The upper boundary of the range with 68% certainty the power value is in it.
     * @param {number} params.value_expected - The expected power value.
     * @param {number} [params.value_lower_68PPR] - The lower boundary of the range with 68% certainty the power value is in it.
     * @param {number} [params.value_lower_95PPR] - The lower boundary of the range with 95% certainty the power value is in it.
     * @param {number} [params.value_lower_limit] - The lower boundary of the range with 100% certainty the power value is in it.
     * @param {CommodityQuantity} params.commodity_quantity - The power quantity the value refers to.
     */
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
