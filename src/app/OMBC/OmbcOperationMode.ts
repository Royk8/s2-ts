import { ID, OMBC_OperationMode } from "@schemas";
import { PowerRangesArray } from "../common/ExtraTypes";
import { NumberRange, PowerRange } from "../common";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters {
    id: ID;
    diagnostic_label?: string;
    power_ranges: PowerRangesArray;
    running_costs?: NumberRange;
    abnormal_condition_only: boolean;
}

export class OmbcOperationMode implements OMBC_OperationMode{
    id: ID;
    diagnostic_label?: string;
    power_ranges: PowerRangesArray;
    running_costs?: NumberRange;
    abnormal_condition_only: boolean;

    constructor({ id, diagnostic_label, power_ranges, running_costs, abnormal_condition_only }: ConstructorParameters) {
        
        const validatedPowerRanges = power_ranges.map((powerRange) => new PowerRange(powerRange));
        this.power_ranges = validatedPowerRanges as PowerRangesArray;
        if(running_costs !== undefined)
            this.running_costs = new NumberRange(running_costs);

        this.id = Uuid.generate(id);
        this.diagnostic_label = diagnostic_label;
        this.abnormal_condition_only = abnormal_condition_only;
    }
}