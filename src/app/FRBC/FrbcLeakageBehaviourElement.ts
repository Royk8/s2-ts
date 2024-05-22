import { FRBC_LeakageBehaviourElement } from "@schemas";
import { NumberRange } from "../common";

/**
 * Parameters for constructing a new instance of FrbcLeakageBehaviourElement.
 */
interface ConstructorParameters {
    /**
     * The fill level range for which this FRBC.LeakageBehaviourElement applies.
     */
    fill_level_range: NumberRange;
    /**
     * Indicates how fast the momentary fill level will decrease per second due to leakage within the given range of the fill level.
     */
    leakage_rate: number;
}

export class FrbcLeakageBehaviourElement implements FRBC_LeakageBehaviourElement {
    fill_level_range: NumberRange;
    leakage_rate: number;
    
    /**
     * Constructs a new instance of FrbcLeakageBehaviourElement.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {NumberRange} constructorParameters.fill_level_range - The fill level range for which this FRBC.LeakageBehaviourElement applies.
     * @param {number} constructorParameters.leakage_rate - Indicates how fast the momentary fill level will decrease per second due to leakage.
     */
    constructor({ fill_level_range, leakage_rate }: ConstructorParameters){

        const range = new NumberRange({
            start_of_range: fill_level_range.start_of_range, 
            end_of_range: fill_level_range.end_of_range});

        this.fill_level_range = range;
        this.leakage_rate = leakage_rate;
    }

}
