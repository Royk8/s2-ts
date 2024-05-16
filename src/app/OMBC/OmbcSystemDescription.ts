import { OMBC_SystemDescription } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { Timestamp, validateTimestamp, Transition, Timer } from "../common";
import { OmbcOperationMode } from ".";

interface ConstructorParameters {
    message_id: ID;
    valid_from: Timestamp;
    operation_modes: [OmbcOperationMode, ...OmbcOperationMode[]];
    transitions: Transition[];
    timers: Timer[];
}

export class OmbcSystemDescription implements OMBC_SystemDescription {
    message_type: "OMBC.SystemDescription";
    message_id: ID;
    valid_from: Timestamp;
    operation_modes: [OmbcOperationMode, ...OmbcOperationMode[]];
    transitions: Transition[];
    timers: Timer[];

    constructor({ message_id, valid_from, operation_modes, transitions, timers }: ConstructorParameters) {

        if(operation_modes.length === 0 || operation_modes.length > 100) {
            throw new Error("operation_modes must have between 1 and 100 elements");
        }
        if(transitions.length === 0 || transitions.length > 1000) {
            throw new Error("transitions must have between 1 and 1000 elements");
        }
        if(timers.length === 0 || timers.length > 1000) {
            throw new Error("timers must have between 1 and 1000 elements");
        }

        validateTimestamp(valid_from);
        const validatedOperationModes = operation_modes.map((operation_mode) => new OmbcOperationMode(operation_mode));
        const validatedTransitions = transitions.map((transition) => new Transition(transition));
        const validatedTimers = timers.map((timer) => new Timer(timer));

        this.message_type = "OMBC.SystemDescription";
        this.message_id = Uuid.generate(message_id);
        this.valid_from = valid_from;
        this.operation_modes = validatedOperationModes as [OmbcOperationMode, ...OmbcOperationMode[]];
        this.transitions = validatedTransitions;
        this.timers = validatedTimers;
    }
}