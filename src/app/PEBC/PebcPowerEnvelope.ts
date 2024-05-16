import { PEBC_PowerEnvelope, CommodityQuantity, ID } from "@schemas";
import { PebcPowerEnvelopeElement } from ".";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters {
    id: ID;
    commodity_quantity: CommodityQuantity;
    power_envelope_elements: [PebcPowerEnvelopeElement, ...PebcPowerEnvelopeElement[]];
}

export class PebcPowerEnvelope implements PEBC_PowerEnvelope{
    id: ID;
    commodity_quantity: CommodityQuantity;
    power_envelope_elements: [PebcPowerEnvelopeElement, ...PebcPowerEnvelopeElement[]];

    constructor({id, commodity_quantity, power_envelope_elements}: ConstructorParameters){
        this.Validate({id, commodity_quantity, power_envelope_elements});
        this.id = Uuid.generate(id);
        this.commodity_quantity = commodity_quantity;
        this.power_envelope_elements = power_envelope_elements;
    }

    public Validate({id, commodity_quantity, power_envelope_elements}: ConstructorParameters) : void {
        if(power_envelope_elements.length < 1 || power_envelope_elements.length > 288){
            throw new Error("Power envelope must contain between 1 and 288 elements");
        }
        power_envelope_elements.map((element) => element.Validate(element));
    }
}
