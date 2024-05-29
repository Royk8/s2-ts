import { ID, PPBC_PowerSequence } from "@schemas";
import { PpbcPowerSequenceElement } from ".";
import { Duration, validateDuration } from "../common";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters {
    /**
     * ID of the PPBC.PowerSequence. Must be unique in the scope of the PPBC.PowerSequnceContainer in which it is used.
     */
    id?: ID;
    /**
     * List of PPBC.PowerSequenceElements. Shall contain at least one element. Elements must be placed in chronological order.
     *
     * @minItems 1
     * @maxItems 288
     */
    elements: [PpbcPowerSequenceElement, ...PpbcPowerSequenceElement[]];
    /**
     * Indicates whether the option of pausing a sequence is available.
     */
    is_interruptible: boolean;
    /**
     * The maximum duration for which a device can be paused between the end of the previous running sequence and the start of this one
     */
    max_pause_before?: Duration;
    /**
     * Indicates if this PPBC.PowerSequence may only be used during an abnormal condition
     */
    abnormal_condition_only: boolean;
}

export class PpbcPowerSequence implements PPBC_PowerSequence {
    id: ID;
    elements: [PpbcPowerSequenceElement, ...PpbcPowerSequenceElement[]];
    is_interruptible: boolean;
    max_pause_before?: Duration;
    abnormal_condition_only: boolean;

    /**
     * Constructs a new instance of the PpbcPowerSequence class.
     * 
     * @param {ConstructorParameters} parameters - The parameters for the constructor.
     * @param {ID} parameters.id - ID of the PPBC.PowerSequence. Must be unique in the scope of the PPBC.PowerSequnceContainer in which it is used.
     * @param {[PpbcPowerSequenceElement, ...PpbcPowerSequenceElement[]]} parameters.elements - List of PPBC.PowerSequenceElements. Shall contain at least one element.
     * @param {boolean} parameters.is_interruptible - Indicates whether the option of pausing a sequence is available.
     * @param {Duration} [parameters.max_pause_before] - The maximum duration for which a device can be paused between the end of the previous running sequence and the start of this one.
     * @param {boolean} parameters.abnormal_condition_only - Indicates if this PPBC.PowerSequence may only be used during an abnormal condition.
     */
    constructor({ id, elements, is_interruptible, max_pause_before, abnormal_condition_only }: ConstructorParameters) {
        if (elements.length < 1 || elements.length > 288) {
            throw new Error("elements must have between 1 and 288 elements");
        }
        validateDuration(max_pause_before);
        for (let i = 0; i < elements.length; i++) {
            elements[i] = new PpbcPowerSequenceElement(elements[i]);
        }

        this.id = Uuid.generate(id);
        this.elements = elements;
        this.is_interruptible = is_interruptible;
        this.max_pause_before = max_pause_before;
        this.abnormal_condition_only = abnormal_condition_only;
    }
}
