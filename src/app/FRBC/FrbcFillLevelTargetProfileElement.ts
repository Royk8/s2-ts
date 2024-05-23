import { FRBC_FillLevelTargetProfileElement } from "@schemas";
import { Duration, validateDuration, NumberRange } from "../common";

/**
 * Parameters for constructing a new instance of FrbcFillLevelTargetProfileElement.
 */
interface ConstructorParameters {
    /**
     * The duration of the element.
     */
    duration: Duration,
    /**
     * The target range in which the fill_level must be for the time period during which the element is active. The start of the range must be smaller or equal to the end of the range. The CEM must take best-effort actions to proactively achieve this target.
     */
    fill_level_range: NumberRange,
}

export class FrbcFillLevelTargetProfileElement implements FRBC_FillLevelTargetProfileElement {
    duration: Duration;
    fill_level_range: NumberRange;

    /**
     * Constructs a new instance of FrbcFillLevelTargetProfileElement.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {Duration} constructorParameters.duration - The duration of the element.
     * @param {NumberRange} constructorParameters.fill_level_range - The target range in which the fill_level must be for the time period during which the element is active.
     */
    constructor({ duration, fill_level_range }: ConstructorParameters){
        
        validateDuration(duration);
        const range = new NumberRange({
            start_of_range: fill_level_range.start_of_range, 
            end_of_range: fill_level_range.end_of_range});

        this.duration = duration;
        this.fill_level_range = range;
    }
}
