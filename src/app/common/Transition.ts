import { Transition as GenTransition, ID, Duration } from "@schemas";


export class Transition implements GenTransition {
    id: ID;
    from: ID;
    to: ID;
    start_timers: ID[];
    blocking_timers: ID[];
    transition_costs?: number;
    transition_duration?: Duration;
    abnormal_condition_only: boolean;

    constructor(id: string, from: string, to: string, start_timers: string[], blocking_timers: string[], abnormal_condition_only: boolean){
        this.id = id;
        this.from = from;
        this.to = to;
        this.start_timers = start_timers;
        this.blocking_timers = blocking_timers;
        this.abnormal_condition_only = abnormal_condition_only;
    }
}