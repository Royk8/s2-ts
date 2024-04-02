import { FRBC_StorageDescription, NumberRange } from "../../schemas/generated";
export declare class FrbcStorageDescription implements FRBC_StorageDescription {
    diagnostic_label?: string;
    fill_level_label?: string;
    provides_leakage_behaviour: boolean;
    provides_fill_level_target_profile: boolean;
    provides_usage_forecast: boolean;
    fill_level_range: NumberRange;
    constructor(diagnostic_label: string, fill_level_label: string, provides_leakage_behaviour: boolean, provides_fill_level_target_profile: boolean, provides_usage_forecast: boolean, fill_level_range: NumberRange);
}
