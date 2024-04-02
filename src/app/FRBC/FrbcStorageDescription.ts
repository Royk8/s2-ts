import { FRBC_StorageDescription, NumberRange } from "@schemas";

export class FrbcStorageDescription implements FRBC_StorageDescription {
    diagnostic_label?: string;
    fill_level_label?: string;
    provides_leakage_behaviour: boolean;
    provides_fill_level_target_profile: boolean;
    provides_usage_forecast: boolean;
    fill_level_range: NumberRange;

    constructor(diagnostic_label: string, fill_level_label: string, provides_leakage_behaviour: boolean, provides_fill_level_target_profile: boolean, provides_usage_forecast: boolean, fill_level_range: NumberRange){
        this.diagnostic_label = diagnostic_label;
        this.fill_level_label = fill_level_label;
        this.provides_leakage_behaviour = provides_leakage_behaviour;
        this.provides_fill_level_target_profile = provides_fill_level_target_profile;
        this.provides_usage_forecast = provides_usage_forecast;
        this.fill_level_range = fill_level_range;
    }
}