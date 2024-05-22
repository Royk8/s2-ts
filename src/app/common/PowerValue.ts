import { PowerValue as GenPowerValue, CommodityQuantity } from "@schemas";

/**
 * Parameters for constructing a new instance of PowerValue.
 */
interface ConstructorParameters {
    /**
     * The power quantity the value refers to.
     */
    commodity_quantity: CommodityQuantity;
    /**
     * Power value expressed in the unit associated with the CommodityQuantity.
     */
    value: number;
}

export class PowerValue implements GenPowerValue {
    commodity_quantity: CommodityQuantity;
    value: number;

    /**
     * Constructs a new instance of PowerValue.
     * 
     * @param {ConstructorParameters} params - The parameters for the constructor.
     * @param {CommodityQuantity} params.commodity_quantity - The power quantity the value refers to.
     * @param {number} params.value - The power value expressed in the unit associated with the CommodityQuantity.
     */
    constructor({ commodity_quantity, value }: ConstructorParameters) {
        this.commodity_quantity = commodity_quantity;
        this.value = value;
    }
}
