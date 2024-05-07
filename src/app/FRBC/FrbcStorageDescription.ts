import { FRBC_StorageDescription } from "@schemas";
import { NumberRange } from "../common";

interface ConstructorParameters{
    diagnostic_label: string;
    fill_level_label: string;
    provides_leakage_behaviour: boolean;
    provides_fill_level_target_profile: boolean;
    provides_usage_forecast: boolean;
    fill_level_range: NumberRange;
}

export class FrbcStorageDescription implements FRBC_StorageDescription {
    diagnostic_label?: string;
    fill_level_label?: string;
    provides_leakage_behaviour: boolean;
    provides_fill_level_target_profile: boolean;
    provides_usage_forecast: boolean;
    fill_level_range: NumberRange;

    constructor(constructorParameters: ConstructorParameters){
        const { diagnostic_label, fill_level_label, provides_leakage_behaviour, provides_fill_level_target_profile, provides_usage_forecast, fill_level_range } = constructorParameters;

        const range = new NumberRange({
            start_of_range: fill_level_range.start_of_range, 
            end_of_range: fill_level_range.end_of_range});

        this.diagnostic_label = diagnostic_label;
        this.fill_level_label = fill_level_label;
        this.provides_leakage_behaviour = provides_leakage_behaviour;
        this.provides_fill_level_target_profile = provides_fill_level_target_profile;
        this.provides_usage_forecast = provides_usage_forecast;
        this.fill_level_range = range;
    }
}