import { Transition as GenTransition, ID, Duration } from "../../schemas/generated";
export declare class Transition implements GenTransition {
    id: ID;
    from: ID;
    to: ID;
    start_timers: ID[];
    blocking_timers: ID[];
    transition_costs?: number;
    transition_duration?: Duration;
    abnormal_condition_only: boolean;
    constructor(id: string, from: string, to: string, start_timers: string[], blocking_timers: string[], abnormal_condition_only: boolean);
}
