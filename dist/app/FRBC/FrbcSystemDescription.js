"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrbcSystemDescription = void 0;
class FrbcSystemDescription {
    constructor(message_id, valid_from, actuators, storage) {
        this.message_type = "FRBC.SystemDescription";
        this.message_id = message_id;
        this.valid_from = valid_from;
        this.actuators = actuators;
        this.storage = storage;
    }
}
exports.FrbcSystemDescription = FrbcSystemDescription;
