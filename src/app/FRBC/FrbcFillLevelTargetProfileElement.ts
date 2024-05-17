import { FRBC_FillLevelTargetProfileElement } from "@schemas";
import { Duration, validateDuration, NumberRange } from "../common";

interface ConstructorParameters{
    duration: Duration,
    fill_level_range: NumberRange,
}

export class FrbcFillLevelTargetProfileElement implements FRBC_FillLevelTargetProfileElement {
    duration: Duration;
    fill_level_range: NumberRange;

    constructor({ duration, fill_level_range }: ConstructorParameters){
        
        validateDuration(duration);
        const range = new NumberRange({
            start_of_range: fill_level_range.start_of_range, 
            end_of_range: fill_level_range.end_of_range});

        this.duration = duration;
        this.fill_level_range = range;
    }
}