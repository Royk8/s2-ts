import { FRBC_OperationModeElement } from "@schemas";
import { NumberRange } from "../common";
import { PowerRangesArray } from "../common/ExtraTypes";

/**
 * Parameters for constructing a new instance of FrbcOperationModeElement.
 */
interface ConstructorParameters {
    /**
     * The range of the fill level for which this FRBC.OperationModeElement applies. The start of the NumberRange shall be smaller than the end of the NumberRange.
     */
    fill_level_range: NumberRange;
    /**
     * Indicates the change in fill_level per second. The lower_boundary of the NumberRange is associated with an operation_mode_factor of 0, the upper_boundary is associated with an operation_mode_factor of 1.
     */
    fill_rate: NumberRange;
    /**
     * The power produced or consumed by this operation mode. The start of each PowerRange is associated with an operation_mode_factor of 0, the end is associated with an operation_mode_factor of 1. In the array there must be at least one PowerRange, and at most one PowerRange per CommodityQuantity.
     */
    power_ranges: PowerRangesArray;
    /**
     * Additional costs per second (e.g. wear, services) associated with this operation mode in the currency defined by the ResourceManagerDetails, excluding the commodity cost. The range is expressing uncertainty and is not linked to the operation_mode_factor.
     */
    running_costs?: NumberRange;
}

export class FrbcOperationModeElement implements FRBC_OperationModeElement {
    fill_level_range: NumberRange;
    fill_rate: NumberRange;
    power_ranges: PowerRangesArray;
    running_costs?: NumberRange;

    /**
     * Constructs a new instance of FrbcOperationModeElement.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {NumberRange} constructorParameters.fill_level_range - The range of the fill level for which this FRBC.OperationModeElement applies.
     * @param {NumberRange} constructorParameters.fill_rate - Indicates the change in fill_level per second.
     * @param {PowerRangesArray} constructorParameters.power_ranges - The power produced or consumed by this operation mode.
     * @param {NumberRange} [constructorParameters.running_costs] - Additional costs per second associated with this operation mode.
     */
    constructor({ fill_level_range, fill_rate, power_ranges, running_costs }: ConstructorParameters){

        this.fill_level_range = fill_level_range;
        this.fill_rate = fill_rate;
        this.power_ranges = power_ranges;
        this.running_costs = running_costs;
    }

}
