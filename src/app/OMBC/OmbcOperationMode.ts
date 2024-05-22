import { ID, OMBC_OperationMode } from "@schemas";
import { PowerRangesArray } from "../common/ExtraTypes";
import { NumberRange, PowerRange } from "../common";
import { Uuid } from "../services/Uuid";

/**
 * Constructor parameters for the OmbcOperationMode class.
 */
interface ConstructorParameters {
    /**
     * ID of the OMBC.OperationMode. Must be unique in the scope of the Resource Manager, for at least the duration of the session between Resource Manager and CEM.
     */
    id?: ID;
    /**
     * Human readable name/description of the OMBC.OperationMode. This element is only intended for diagnostic purposes and not for HMI applications.
     */
    diagnostic_label?: string;
    /**
     * The power produced or consumed by this operation mode. The start of each PowerRange is associated with an operation_mode_factor of 0, the end is associated with an operation_mode_factor of 1. In the array there must be at least one PowerRange, and at most one PowerRange per CommodityQuantity.
     *
     * @minItems 1
     * @maxItems 10
     */
    power_ranges: PowerRangesArray;
    /**
     * Additional costs per second (e.g. wear, services) associated with this operation mode in the currency defined by the ResourceManagerDetails, excluding the commodity cost. The range is expressing uncertainty and is not linked to the operation_mode_factor.
     */
    running_costs?: NumberRange;
    /**
     * Indicates if this OMBC.OperationMode may only be used during an abnormal condition.
     */
    abnormal_condition_only: boolean;
}

/**
 * Class representing an OMBC Operation Mode.
 */
export class OmbcOperationMode implements OMBC_OperationMode {
    id: ID;
    diagnostic_label?: string;
    power_ranges: PowerRangesArray;
    running_costs?: NumberRange;
    abnormal_condition_only: boolean;

    /**
     * Constructs a new instance of the OmbcOperationMode class.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} [constructorParameters.id] - ID of the OMBC.OperationMode. If not provided, a new UUID will be generated.
     * @param {string} [constructorParameters.diagnostic_label] - Human readable name/description of the OMBC.OperationMode.
     * @param {PowerRangesArray} constructorParameters.power_ranges - The power produced or consumed by this operation mode.
     * @param {NumberRange} [constructorParameters.running_costs] - Additional costs per second associated with this operation mode.
     * @param {boolean} constructorParameters.abnormal_condition_only - Indicates if this OMBC.OperationMode may only be used during an abnormal condition.
     */
    constructor({ id, diagnostic_label, power_ranges, running_costs, abnormal_condition_only }: ConstructorParameters) {
        
        // Validate and initialize power ranges
        const validatedPowerRanges = power_ranges.map((powerRange) => new PowerRange(powerRange));
        this.power_ranges = validatedPowerRanges as PowerRangesArray;

        // Initialize running costs if provided
        if (running_costs !== undefined) {
            this.running_costs = new NumberRange(running_costs);
        }

        // Generate unique ID if not provided
        this.id = Uuid.generate(id);
        this.diagnostic_label = diagnostic_label;
        this.abnormal_condition_only = abnormal_condition_only;
    }
}
