import { PowerValue as GenPowerValue, CommodityQuantity } from "@schemas";

interface ConstructorParameters {
    commodity_quantity: CommodityQuantity;
    value: number;
}

export class PowerValue implements GenPowerValue {
    commodity_quantity: CommodityQuantity;
    value: number;

    constructor({ commodity_quantity, value }: ConstructorParameters){
        this.commodity_quantity = commodity_quantity;
        this.value = value;
    }
}
