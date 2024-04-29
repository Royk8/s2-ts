import { Transition as GenTransition, ID } from "@schemas";
import { Duration, validateDuration } from "./Duration";

interface constructorParameters{
    id: ID;
    from: ID;
    to: ID;
    start_timers: ID[];
    blocking_timers: ID[];
    transition_costs?: number;
    transition_duration?: Duration;
    abnormal_condition_only: boolean;
}

export class Transition implements GenTransition {
    id: ID;
    from: ID;
    to: ID;
    start_timers: ID[];
    blocking_timers: ID[];
    transition_costs?: number;
    transition_duration?: Duration;
    abnormal_condition_only: boolean;

    constructor(constructorParameters: constructorParameters){
        const { id, from, to, start_timers, blocking_timers, transition_costs, transition_duration, abnormal_condition_only } = constructorParameters;

        validateDuration(transition_duration);

        if(start_timers.length > 100){
            throw new Error("Transition: start_timers must be between 0 and 100 elements");
        }

        if(blocking_timers.length > 100){
            throw new Error("Transition: blocking_timers must be between 0 and 100 elements");
        }

        this.id = id;
        this.from = from;
        this.to = to;
        this.start_timers = start_timers;
        this.blocking_timers = blocking_timers;
        this.transition_costs = transition_costs;
        this.transition_duration = transition_duration;
        this.abnormal_condition_only = abnormal_condition_only;
    }
}