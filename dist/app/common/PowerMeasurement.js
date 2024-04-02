"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerMeasurement = void 0;
class PowerMeasurement {
    constructor(message_id, measurement_timestamp, values) {
        this.message_id = message_id;
        this.measurement_timestamp = measurement_timestamp;
        this.values = values;
    }
}
exports.PowerMeasurement = PowerMeasurement;
