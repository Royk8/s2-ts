"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrbcStorageDescription = void 0;
class FrbcStorageDescription {
    constructor(diagnostic_label, fill_level_label, provides_leakage_behaviour, provides_fill_level_target_profile, provides_usage_forecast, fill_level_range) {
        this.diagnostic_label = diagnostic_label;
        this.fill_level_label = fill_level_label;
        this.provides_leakage_behaviour = provides_leakage_behaviour;
        this.provides_fill_level_target_profile = provides_fill_level_target_profile;
        this.provides_usage_forecast = provides_usage_forecast;
        this.fill_level_range = fill_level_range;
    }
}
exports.FrbcStorageDescription = FrbcStorageDescription;
