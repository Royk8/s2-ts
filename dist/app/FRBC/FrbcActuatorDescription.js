"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrbcActuatorDescription = void 0;
class FrbcActuatorDescription {
    constructor(id, supported_commodities, operation_modes, transitions, timers, diagnostic_label) {
        this.id = id;
        this.supported_commodities = supported_commodities;
        this.operation_modes = operation_modes;
        this.transitions = transitions;
        this.timers = timers;
        this.diagnostic_label = diagnostic_label;
    }
}
exports.FrbcActuatorDescription = FrbcActuatorDescription;
