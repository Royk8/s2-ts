import { CommodityQuantity, PEBC_AllowedLimitRange, PEBC_PowerEnvelopeLimitType } from "@schemas";
import { NumberRange } from "../common";

interface ConstructorParameters {
    /**
     * Type of power quantity this PEBC.AllowedLimitRange applies to
     */
    commodity_quantity: CommodityQuantity;
    /**
     * Indicates if this ranges applies to the upper limit or the lower limit. "UPPER_LIMIT", "LOWER_LIMIT"
     */
    limit_type: PEBC_PowerEnvelopeLimitType;
    /**
     * Boundaries of the power range of this PEBC.AllowedLimitRange. The CEM is allowed to choose values within this range for the power envelope for the limit as described in limit_type. The start of the range shall be smaller or equal than the end of the range.
     */
    range_boundary: NumberRange;
    /**
     * Indicates if this PEBC.AllowedLimitRange may only be used during an abnormal condition
     */
    abnormal_condition_only: boolean;
}

export class PebcAllowedLimitRange implements PEBC_AllowedLimitRange {
    commodity_quantity: CommodityQuantity;
    limit_type: PEBC_PowerEnvelopeLimitType;
    range_boundary: NumberRange;
    abnormal_condition_only: boolean;

    /**
     * Constructs a new instance of the PebcAllowedLimitRange class.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {CommodityQuantity} constructorParameters.commodity_quantity - Type of power quantity this PEBC.AllowedLimitRange applies to.
     * @param {PEBC_PowerEnvelopeLimitType} constructorParameters.limit_type - Indicates if this ranges applies to the upper limit or the lower limit.
     * @param {NumberRange} constructorParameters.range_boundary - Boundaries of the power range of this PEBC.AllowedLimitRange.
     * @param {boolean} constructorParameters.abnormal_condition_only - Indicates if this PEBC.AllowedLimitRange may only be used during an abnormal condition.
     */
    constructor({ commodity_quantity, limit_type, range_boundary, abnormal_condition_only }: ConstructorParameters) {
        this.commodity_quantity = commodity_quantity;
        this.limit_type = limit_type;
        this.range_boundary = new NumberRange(range_boundary);
        this.abnormal_condition_only = abnormal_condition_only;
    }
}
