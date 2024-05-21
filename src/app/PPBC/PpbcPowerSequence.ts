import { ID, PPBC_PowerSequence } from "@schemas";
import { PpbcPowerSequenceElement } from ".";
import { Duration, validateDuration } from "../common";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters {
    id?: ID;
    elements: [PpbcPowerSequenceElement, ...PpbcPowerSequenceElement[]];
    is_interruptible: boolean;
    max_pause_before?: Duration;
    abnormal_condition_only: boolean;
}

export class PpbcPowerSequence implements PPBC_PowerSequence {
    id: ID;
    elements: [PpbcPowerSequenceElement, ...PpbcPowerSequenceElement[]];
    is_interruptible: boolean;
    max_pause_before?: Duration;
    abnormal_condition_only: boolean;

    constructor({ id, elements, is_interruptible, max_pause_before, abnormal_condition_only }: ConstructorParameters) {
        this.Validate({ id, elements, is_interruptible, max_pause_before, abnormal_condition_only });

        this.id = Uuid.generate(id);
        this.elements = elements;
        this.is_interruptible = is_interruptible;
        this.max_pause_before = max_pause_before;
        this.abnormal_condition_only = abnormal_condition_only;
    }

    Validate({ id, elements, is_interruptible, max_pause_before, abnormal_condition_only }: ConstructorParameters): void {
        if (elements.length < 1 || elements.length > 288) {
            throw new Error("elements must have between 1 and 288 elements");
        }
        validateDuration(max_pause_before);
        for(let i = 0; i < elements.length; i++) {
            elements[i] = new PpbcPowerSequenceElement(elements[i]);
        }
    }
}