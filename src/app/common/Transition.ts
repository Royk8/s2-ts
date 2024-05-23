import { Transition as GenTransition, ID } from "@schemas";
import { Duration, validateDuration } from "./Duration";
import { Uuid } from "../services/Uuid";

/**
 * Parameters for constructing a new instance of Transition.
 */
interface ConstructorParameters {
    /**
     * ID of the Transition. Must be unique in the scope of the OMBC.SystemDescription, FRBC.ActuatorDescription, or DDBC.ActuatorDescription in which it is used.
     */
    id?: ID;
    /**
     * ID of the OperationMode (exact type differs per ControlType) that should be switched from.
     */
    from: ID;
    /**
     * ID of the OperationMode (exact type differs per ControlType) that will be switched to.
     */
    to: ID;
    /**
     * List of IDs of Timers that will be (re)started when this transition is initiated.
     */
    start_timers: ID[];
    /**
     * List of IDs of Timers that block this Transition from initiating while at least one of these Timers is not yet finished.
     */
    blocking_timers: ID[];
    /**
     * Absolute costs for going through this Transition in the currency as described in the ResourceManagerDetails.
     */
    transition_costs?: number;
    /**
     * Indicates the time between the initiation of this Transition and the time at which the device behaves according to the Operation Mode which is defined in the ‘to’ data element. When no value is provided, it is assumed the transition duration is negligible.
     */
    transition_duration?: Duration;
    /**
     * Indicates if this Transition may only be used during an abnormal condition.
     */
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

    /**
     * Constructs a new instance of Transition.
     * 
     * @param {ConstructorParameters} params - The parameters for the constructor.
     * @param {ID} [params.id] - The ID of the Transition. Must be unique in its scope. If not provided, a new UUID will be generated.
     * @param {ID} params.from - The ID of the OperationMode that should be switched from.
     * @param {ID} params.to - The ID of the OperationMode that will be switched to.
     * @param {ID[]} params.start_timers - List of IDs of Timers that will be (re)started when this transition is initiated.
     * @param {ID[]} params.blocking_timers - List of IDs of Timers that block this Transition from initiating while at least one of these Timers is not yet finished.
     * @param {number} [params.transition_costs] - Absolute costs for going through this Transition in the currency as described in the ResourceManagerDetails.
     * @param {Duration} [params.transition_duration] - The time between the initiation of this Transition and the time at which the device behaves according to the Operation Mode which is defined in the ‘to’ data element.
     * @param {boolean} params.abnormal_condition_only - Indicates if this Transition may only be used during an abnormal condition.
     */
    constructor({ id, from, to, start_timers, blocking_timers, transition_costs, transition_duration, abnormal_condition_only }: ConstructorParameters) {
        validateDuration(transition_duration);

        if (start_timers.length > 100) {
            throw new Error("Transition: start_timers must be between 0 and 100 elements");
        }

        if (blocking_timers.length > 100) {
            throw new Error("Transition: blocking_timers must be between 0 and 100 elements");
        }

        this.id = Uuid.generate(id);
        this.from = from;
        this.to = to;
        this.start_timers = start_timers;
        this.blocking_timers = blocking_timers;
        this.transition_costs = transition_costs;
        this.transition_duration = transition_duration;
        this.abnormal_condition_only = abnormal_condition_only;
    }
}
