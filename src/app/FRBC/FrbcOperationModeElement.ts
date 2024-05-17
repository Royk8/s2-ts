import { FRBC_OperationModeElement } from "@schemas";
import { NumberRange } from "../common";
import { PowerRangesArray } from "../common/ExtraTypes";

interface ConstructorParameters{
    fill_level_range: NumberRange;
    fill_rate: NumberRange;
    power_ranges: PowerRangesArray;
    running_costs?: NumberRange;
}

export class FrbcOperationModeElement implements FRBC_OperationModeElement {
    fill_level_range: NumberRange;
    fill_rate: NumberRange;
    power_ranges: PowerRangesArray;
    running_costs?: NumberRange;

    constructor({ fill_level_range, fill_rate, power_ranges, running_costs }: ConstructorParameters){

        this.fill_level_range = fill_level_range;
        this.fill_rate = fill_rate;
        this.power_ranges = power_ranges;
        this.running_costs = running_costs;
    }

}