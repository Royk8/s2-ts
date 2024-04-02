"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrbcTimerStatus = void 0;
class FrbcTimerStatus {
    constructor(message_id, timer_id, actuator_id, finished_at) {
        this.message_type = "FRBC.TimerStatus";
        this.message_id = message_id;
        this.timer_id = timer_id;
        this.actuator_id = actuator_id;
        this.finished_at = finished_at;
    }
}
exports.FrbcTimerStatus = FrbcTimerStatus;
