import { FRBC_FillLevelTargetProfileElement } from "@schemas";
import { Duration, NumberRange } from "../common";

interface constructorParameters{
    duration: Duration,
    fill_level_range: NumberRange,
}

export class FrbcFillLevelTargetProfileElement implements FRBC_FillLevelTargetProfileElement {
    duration: Duration;
    fill_level_range: NumberRange;

    constructor(constructorParameters: constructorParameters){
        const { duration, fill_level_range } = constructorParameters;
        
        this.duration = duration;
        this.fill_level_range = fill_level_range;
    }
}