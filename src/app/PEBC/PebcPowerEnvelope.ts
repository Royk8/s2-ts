import { PEBC_PowerEnvelope, CommodityQuantity, ID } from "@schemas";
import { PebcPowerEnvelopeElement } from ".";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters {
    /**
     * Identifier of this PEBC.PowerEnvelope. Must be unique in the scope of the Resource Manager, for at least the duration of the session between Resource Manager and CEM.
     */
    id?: ID;
    /**
     * Type of power quantity this PEBC.PowerEnvelope applies to
     */
    commodity_quantity: CommodityQuantity;
    /**
     * The elements of this PEBC.PowerEnvelope. Shall contain at least one element. Elements must be placed in chronological order.
     *
     * @minItems 1
     * @maxItems 288
     */
    power_envelope_elements: [PebcPowerEnvelopeElement, ...PebcPowerEnvelopeElement[]];
}

export class PebcPowerEnvelope implements PEBC_PowerEnvelope {
    id: ID;
    commodity_quantity: CommodityQuantity;
    power_envelope_elements: [PebcPowerEnvelopeElement, ...PebcPowerEnvelopeElement[]];

    /**
     * Constructs a new instance of the PebcPowerEnvelope class.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} constructorParameters.id - Identifier of this PEBC.PowerEnvelope.
     * @param {CommodityQuantity} constructorParameters.commodity_quantity - Type of power quantity this PEBC.PowerEnvelope applies to.
     * @param {[PebcPowerEnvelopeElement, ...PebcPowerEnvelopeElement[]]} constructorParameters.power_envelope_elements - The elements of this PEBC.PowerEnvelope.
     */
    constructor({ id, commodity_quantity, power_envelope_elements }: ConstructorParameters) {
        this.Validate({ id, commodity_quantity, power_envelope_elements });
        this.id = Uuid.generate(id);
        this.commodity_quantity = commodity_quantity;
        this.power_envelope_elements = power_envelope_elements;
    }

    /**
     * Validates the constructor parameters.
     * 
     * @param {ConstructorParameters} parameters - The constructor parameters to validate.
     */
    public Validate({ id, commodity_quantity, power_envelope_elements }: ConstructorParameters): void {
        if (power_envelope_elements.length < 1 || power_envelope_elements.length > 288) {
            throw new Error("Power envelope must contain between 1 and 288 elements");
        }
        for (let i = 0; i < power_envelope_elements.length; i++) {
            power_envelope_elements[i] = new PebcPowerEnvelopeElement(power_envelope_elements[i]);
        }
    }
}
