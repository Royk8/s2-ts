import { FRBC_FillLevelTargetProfileElement } from "@schemas";
import { Duration, validateDuration, NumberRange } from "../common";

interface constructorParameters{
    duration: Duration,
    fill_level_range: NumberRange,
}

export class FrbcFillLevelTargetProfileElement implements FRBC_FillLevelTargetProfileElement {
    duration: Duration;
    fill_level_range: NumberRange;

    constructor(constructorParameters: constructorParameters){
        const { duration, fill_level_range } = constructorParameters;
        
        validateDuration(duration);
        const range = new NumberRange({
            start_of_range: fill_level_range.start_of_range, 
            end_of_range: fill_level_range.end_of_range});

        this.duration = duration;
        this.fill_level_range = range;
    }
}