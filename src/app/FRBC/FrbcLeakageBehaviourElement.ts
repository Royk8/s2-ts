import { FRBC_LeakageBehaviourElement } from "@schemas";
import { NumberRange } from "../common";

interface ConstructorParameters{
    fill_level_range: NumberRange;
    leakage_rate: number;    
}

export class FrbcLeakageBehaviourElement implements FRBC_LeakageBehaviourElement {
    fill_level_range: NumberRange;
    leakage_rate: number;
    
    constructor({ fill_level_range, leakage_rate }: ConstructorParameters){

        const range = new NumberRange({
            start_of_range: fill_level_range.start_of_range, 
            end_of_range: fill_level_range.end_of_range});

        this.fill_level_range = range;
        this.leakage_rate = leakage_rate;
    }

}