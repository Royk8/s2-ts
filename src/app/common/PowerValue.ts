import { PowerValue as GenPowerValue } from "@schemas";
import { CommodityQuantity } from "@schemas";

interface ConstructorParameters {
    commodity_quantity: CommodityQuantity;
    value: number;
}

export class PowerValue implements GenPowerValue {
    commodity_quantity: CommodityQuantity;
    value: number;

    constructor(constructorParameters: ConstructorParameters){
        const { commodity_quantity, value } = constructorParameters;
        this.commodity_quantity = commodity_quantity;
        this.value = value;
    }
}
