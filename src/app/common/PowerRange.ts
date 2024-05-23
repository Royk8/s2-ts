import type { CommodityQuantity, PowerRange as GenPowerRange } from "@schemas";

/**
 * Parameters for constructing a new instance of PowerRange.
 */
interface ConstructorParameters {
    /**
     * Power value that defines the start of the range.
     */
    start_of_range: number;
    /**
     * Power value that defines the end of the range.
     */
    end_of_range: number;
    /**
     * The power quantity the values refer to.
     */
    commodity_quantity: CommodityQuantity;
}

export class PowerRange implements GenPowerRange {
    start_of_range: number;
    end_of_range: number;
    commodity_quantity: CommodityQuantity;

    /**
     * Constructs a new instance of PowerRange.
     * 
     * @param {ConstructorParameters} params - The parameters for the constructor.
     * @param {number} params.start_of_range - The power value that defines the start of the range.
     * @param {number} params.end_of_range - The power value that defines the end of the range.
     * @param {CommodityQuantity} params.commodity_quantity - The power quantity the values refer to.
     * @throws {Error} If start_of_range is greater than end_of_range.
     */
    constructor({ start_of_range, end_of_range, commodity_quantity }: ConstructorParameters) {
        if (start_of_range > end_of_range) {
            throw new Error("start_of_range must be less than or equal to end_of_range");
        }

        this.start_of_range = start_of_range;
        this.end_of_range = end_of_range;
        this.commodity_quantity = commodity_quantity;
    }
}
