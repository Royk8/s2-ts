import { DDBC_OperationMode, ID } from "@schemas";
import { NumberRange } from "../common/NumberRange";
import { PowerRangesArray } from "../common/ExtraTypes";
import { Uuid } from "../services/Uuid";
import { PowerRange } from "../common";

interface ConstructorParameters{
    id?: ID;
    diagnostic_label?: string;
    power_ranges: PowerRangesArray;
    supply_range: NumberRange;
    running_costs?: NumberRange;
    abnormal_condition_only: boolean;
}

export class DdbcOperationMode implements DDBC_OperationMode {
    Id: ID;
    diagnostic_label?: string;
    power_ranges: PowerRangesArray;
    supply_range: NumberRange;
    running_costs?: NumberRange;
    abnormal_condition_only: boolean;

    constructor(constructorParameters: ConstructorParameters){
        const { id, diagnostic_label, power_ranges, supply_range, running_costs, abnormal_condition_only } = constructorParameters;
        
        const validatedPowerRanges = power_ranges.map((powerRange) => new PowerRange(powerRange));

        this.supply_range = new NumberRange(supply_range);
        this.running_costs = new NumberRange(running_costs);
        this.power_ranges = validatedPowerRanges as PowerRangesArray;
        this.Id = Uuid.generate(id);
        this.diagnostic_label = diagnostic_label;
        this.abnormal_condition_only = abnormal_condition_only;
    }
}