import { OMBC_SystemDescription } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { Timestamp, validateTimestamp, Transition, Timer, S2Message } from "../common";
import { OmbcOperationMode } from ".";

interface ConstructorParameters {
    /**
     * ID of this message
     */
    message_id?: ID;
    /**
     * Moment this OMBC.SystemDescription starts to be valid.
     * If the system description is immediately valid, the DateTimeStamp should be now or in the past.
     */
    valid_from: Timestamp;
    /**
     * OMBC.OperationModes available for the CEM in order to coordinate the device behaviour.
     *
     * @minItems 1
     * @maxItems 100
     */
    operation_modes: [OmbcOperationMode, ...OmbcOperationMode[]];
    /**
     * Possible transitions to switch from one OMBC.OperationMode to another.
     *
     * @minItems 0
     * @maxItems 1000
     */
    transitions: Transition[];
    /**
     * Timers that control when certain transitions can be made.
     *
     * @minItems 0
     * @maxItems 1000
     */
    timers: Timer[];
}

/**
 * Class representing an OMBC System Description.
 */
export class OmbcSystemDescription implements OMBC_SystemDescription, S2Message {
    message_type: "OMBC.SystemDescription";
    message_id: ID;
    valid_from: Timestamp;
    operation_modes: [OmbcOperationMode, ...OmbcOperationMode[]];
    transitions: Transition[];
    timers: Timer[];

    /**
     * Constructs a new instance of the OmbcSystemDescription class.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} [constructorParameters.message_id] - ID of this message.
     * @param {Timestamp} constructorParameters.valid_from - Moment this OMBC.SystemDescription starts to be valid.
     * @param {OmbcOperationMode[]} constructorParameters.operation_modes - OMBC.OperationModes available for the CEM in order to coordinate the device behaviour.
     * @param {Transition[]} constructorParameters.transitions - Possible transitions to switch from one OMBC.OperationMode to another.
     * @param {Timer[]} constructorParameters.timers - Timers that control when certain transitions can be made.
     */
    constructor({ message_id, valid_from, operation_modes, transitions, timers }: ConstructorParameters) {
        // Validate lengths of operation_modes, transitions, and timers arrays
        if (operation_modes.length === 0 || operation_modes.length > 100) {
            throw new Error("OMBC_SystemDescription: operation_modes must have between 1 and 100 elements");
        }
        if (transitions.length > 1000) {
            throw new Error("OMBC_SystemDescription: transitions must have between 0 and 1000 elements");
        }
        if (timers.length > 1000) {
            throw new Error("OMBC_SystemDescription: timers must have between 0 and 1000 elements");
        }

        // Validate the valid_from timestamp
        validateTimestamp(valid_from);

        // Validate and initialize operation_modes
        this.operation_modes = operation_modes.map((operation_mode) => new OmbcOperationMode(operation_mode)) as [OmbcOperationMode, ...OmbcOperationMode[]];

        // Validate and initialize transitions
        this.transitions = transitions.map((transition) => new Transition(transition));

        // Validate and initialize timers
        this.timers = timers.map((timer) => new Timer(timer));

        // Initialize other properties
        this.message_type = "OMBC.SystemDescription";
        this.message_id = Uuid.generate(message_id);
        this.valid_from = valid_from;
    }
}
