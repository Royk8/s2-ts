import { DDBC_OperationMode, ID } from "@schemas";
import { NumberRange } from "../common/NumberRange";
import { PowerRangesArray } from "../common/ExtraTypes";
import { Uuid } from "../services/Uuid";
import { PowerRange } from "../common";

/**
 * Parameters for constructing a new instance of DdbcOperationMode.
 */
interface ConstructorParameters {
    /**
     * ID of this operation mode. Must be unique in the scope of the DDBC.ActuatorDescription in which it is used.
     */
    id?: ID;
    /**
     * Human readable name/description of the DDBC.OperationMode. This element is only intended for diagnostic purposes and not for HMI applications.
     */
    diagnostic_label?: string;
    /**
     * The power produced or consumed by this operation mode. The start of each PowerRange is associated with an operation_mode_factor of 0, the end is associated with an operation_mode_factor of 1. In the array there must be at least one PowerRange, and at most one PowerRange per CommodityQuantity.
     */
    power_ranges: PowerRangesArray;
    /**
     * The supply rate this DDBC.OperationMode can deliver for the CEM to match the demand rate. The start of the NumberRange is associated with an operation_mode_factor of 0, the end is associated with an operation_mode_factor of 1.
     */
    supply_range: NumberRange;
    /**
     * Additional costs per second (e.g. wear, services) associated with this operation mode in the currency defined by the ResourceManagerDetails, excluding the commodity cost. The range is expressing uncertainty and is not linked to the operation_mode_factor.
     */
    running_costs?: NumberRange;
    /**
     * Indicates if this DDBC.OperationMode may only be used during an abnormal condition.
     */
    abnormal_condition_only: boolean;
}

export class DdbcOperationMode implements DDBC_OperationMode {
    Id: ID;
    diagnostic_label?: string;
    power_ranges: PowerRangesArray;
    supply_range: NumberRange;
    running_costs?: NumberRange;
    abnormal_condition_only: boolean;

    /**
     * Constructs a new instance of DdbcOperationMode.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} [constructorParameters.id] - ID of this operation mode.
     * @param {string} [constructorParameters.diagnostic_label] - Human readable name/description of the DDBC.OperationMode.
     * @param {PowerRangesArray} constructorParameters.power_ranges - The power produced or consumed by this operation mode.
     * @param {NumberRange} constructorParameters.supply_range - The supply rate this DDBC.OperationMode can deliver for the CEM to match the demand rate.
     * @param {NumberRange} [constructorParameters.running_costs] - Additional costs per second associated with this operation mode.
     * @param {boolean} constructorParameters.abnormal_condition_only - Indicates if this DDBC.OperationMode may only be used during an abnormal condition.
     */
    constructor(constructorParameters: ConstructorParameters) {
        const { id, diagnostic_label, power_ranges, supply_range, running_costs, abnormal_condition_only } = constructorParameters;
        
        // Validate and instantiate PowerRanges
        const validatedPowerRanges = power_ranges.map((powerRange) => new PowerRange(powerRange));

        // Instantiate other parameters
        this.Id = Uuid.generate(id);
        this.diagnostic_label = diagnostic_label;
        this.power_ranges = validatedPowerRanges as PowerRangesArray;
        this.supply_range = new NumberRange(supply_range);
        this.running_costs = running_costs ? new NumberRange(running_costs) : undefined;
        this.abnormal_condition_only = abnormal_condition_only;
    }
}
