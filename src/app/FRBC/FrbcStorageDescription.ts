import { FRBC_StorageDescription } from "@schemas";
import { NumberRange } from "../common";

/**
 * Parameters for constructing a new instance of FrbcStorageDescription.
 */
interface ConstructorParameters {
    /**
     * Human readable name/description of the storage (e.g. hot water buffer or battery). This element is only intended for diagnostic purposes and not for HMI applications.
     */
    diagnostic_label: string;
    /**
     * Human readable description of the (physical) units associated with the fill_level (e.g. degrees Celsius or percentage state of charge). This element is only intended for diagnostic purposes and not for HMI applications.
     */
    fill_level_label: string;
    /**
     * Indicates whether the Storage could provide details of power leakage behavior through the FRBC.LeakageBehaviour.
     */
    provides_leakage_behaviour: boolean;
    /**
     * Indicates whether the Storage could provide a target profile for the fill level through the FRBC.FillLevelTargetProfile.
     */
    provides_fill_level_target_profile: boolean;
    /**
     * Indicates whether the Storage could provide a UsageForecast through the FRBC.UsageForecast.
     */
    provides_usage_forecast: boolean;
    /**
     * The range in which the fill_level should remain. It is expected of the CEM to keep the fill_level within this range. When the fill_level is not within this range, the Resource Manager can ignore instructions from the CEM (except during abnormal conditions).
     */
    fill_level_range: NumberRange;
}

export class FrbcStorageDescription implements FRBC_StorageDescription {
    diagnostic_label?: string;
    fill_level_label?: string;
    provides_leakage_behaviour: boolean;
    provides_fill_level_target_profile: boolean;
    provides_usage_forecast: boolean;
    fill_level_range: NumberRange;

    /**
     * Constructs a new instance of FrbcStorageDescription.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {string} constructorParameters.diagnostic_label - Human readable name/description of the storage.
     * @param {string} constructorParameters.fill_level_label - Human readable description of the (physical) units associated with the fill_level.
     * @param {boolean} constructorParameters.provides_leakage_behaviour - Indicates whether the Storage could provide details of power leakage behavior.
     * @param {boolean} constructorParameters.provides_fill_level_target_profile - Indicates whether the Storage could provide a target profile for the fill level.
     * @param {boolean} constructorParameters.provides_usage_forecast - Indicates whether the Storage could provide a UsageForecast.
     * @param {NumberRange} constructorParameters.fill_level_range - The range in which the fill_level should remain.
     */
    constructor({ diagnostic_label, fill_level_label, provides_leakage_behaviour, provides_fill_level_target_profile, provides_usage_forecast, fill_level_range }: ConstructorParameters){

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
