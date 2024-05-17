import { CommodityQuantity, PEBC_AllowedLimitRange, PEBC_PowerEnvelopeLimitType } from "@schemas";
import { NumberRange } from "../common";

interface ConstructorParameters {
    commodity_quantity: CommodityQuantity;
    limit_type: PEBC_PowerEnvelopeLimitType;
    range_boundary: NumberRange;
    abnormal_condition_only: boolean;
}

export class PebcAllowedLimitRange implements PEBC_AllowedLimitRange {
    commodity_quantity: CommodityQuantity;
    limit_type: PEBC_PowerEnvelopeLimitType;
    range_boundary: NumberRange;
    abnormal_condition_only: boolean;

    constructor({ commodity_quantity, limit_type, range_boundary, abnormal_condition_only }: ConstructorParameters) {
              
        this.commodity_quantity = commodity_quantity;
        this.limit_type = limit_type;
        this.range_boundary = new NumberRange(range_boundary);
        this.abnormal_condition_only = abnormal_condition_only;
    }
}