"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transition = void 0;
class Transition {
    constructor(id, from, to, start_timers, blocking_timers, abnormal_condition_only) {
        this.id = id;
        this.from = from;
        this.to = to;
        this.start_timers = start_timers;
        this.blocking_timers = blocking_timers;
        this.abnormal_condition_only = abnormal_condition_only;
    }
}
exports.Transition = Transition;
