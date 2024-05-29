import { PEBC_PowerEnvelopeElement } from "@schemas";
import { Duration, validateDuration } from "../common";

interface ConstructorParameters {
    /**
     * The duration of the element
     */
    duration: Duration;
    /**
     * Upper power limit according to the commodity_quantity of the containing PEBC.PowerEnvelope. The lower_limit must be smaller or equal to the upper_limit. The Resource Manager is requested to keep the power values for the given commodity quantity equal to or below the upper_limit. The upper_limit shall be in accordance with the constraints provided by the Resource Manager through any PEBC.AllowedLimitRange with limit_type UPPER_LIMIT.
     */
    upper_limit: number;
    /**
     * Lower power limit according to the commodity_quantity of the containing PEBC.PowerEnvelope. The lower_limit must be smaller or equal to the upper_limit. The Resource Manager is requested to keep the power values for the given commodity quantity equal to or above the lower_limit. The lower_limit shall be in accordance with the constraints provided by the Resource Manager through any PEBC.AllowedLimitRange with limit_type LOWER_LIMIT.
     */
    lower_limit: number;
}

export class PebcPowerEnvelopeElement implements PEBC_PowerEnvelopeElement {
    duration: Duration;
    upper_limit: number;
    lower_limit: number;

    /**
     * Constructs a new instance of the PebcPowerEnvelopeElement class.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {Duration} constructorParameters.duration - The duration of the element.
     * @param {number} constructorParameters.upper_limit - Upper power limit according to the commodity_quantity of the containing PEBC.PowerEnvelope.
     * @param {number} constructorParameters.lower_limit - Lower power limit according to the commodity_quantity of the containing PEBC.PowerEnvelope.
     */
    constructor({ duration, upper_limit, lower_limit }: ConstructorParameters) {
        if (upper_limit < lower_limit) {
            throw new Error("PowerEnvelopeElement: Upper limit must be greater than or equal to lower limit");
        }
        validateDuration(duration);

        this.duration = duration;
        this.upper_limit = upper_limit;
        this.lower_limit = lower_limit;
    }
}
