"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceManagerDetails = void 0;
class ResourceManagerDetails {
    constructor(message_id, resource_id, roles, instruction_processing_delay, available_control_types, provides_forecast, provides_power_measurement_types) {
        this.message_id = message_id;
        this.resource_id = resource_id;
        this.roles = roles;
        this.instruction_processing_delay = instruction_processing_delay;
        this.available_control_types = available_control_types;
        this.provides_forecast = provides_forecast;
        this.provides_power_measurement_types = provides_power_measurement_types;
    }
}
exports.ResourceManagerDetails = ResourceManagerDetails;
