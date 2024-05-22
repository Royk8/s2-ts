import { DDBC_ActuatorDescription, ID } from "@schemas";
import { CommoditiesArray } from "../common/ExtraTypes";
import { DdbcOperationMode } from "./DdbcOperationMode";
import { Transition, Timer } from "../common";
import { Uuid } from "../services/Uuid";

/**
 * Parameters for constructing a new instance of DdbcActuatorDescription.
 */
interface ConstructorParameters {
    /**
     * ID of this DDBC.ActuatorDescription. Must be unique in the scope of the Resource Manager, for at least the duration of the session between Resource Manager and CEM.
     */
    id?: ID;
    /**
     * Human readable name/description of the actuator. This element is only intended for diagnostic purposes and not for HMI applications.
     */
    diagnostic_label?: string;
    /**
     * Commodities supported by the operation modes of this actuator. There shall be at least one commodity.
     */
    supported_commodites: CommoditiesArray;
    /**
     * List of all Operation Modes that are available for this actuator. There shall be at least one DDBC.OperationMode.
     */
    operation_modes: [DdbcOperationMode, ...DdbcOperationMode[]];
    /**
     * List of Transitions between Operation Modes. Shall contain at least one Transition.
     */
    transitions: Transition[];
    /**
     * List of Timers associated with Transitions for this Actuator. Can be empty.
     */
    timers: Timer[];
}

export class DdbcActuatorDescription implements DDBC_ActuatorDescription {
    id: string;
    diagnostic_label?: string;
    supported_commodites: CommoditiesArray;
    operation_modes: [DdbcOperationMode, ...DdbcOperationMode[]];
    transitions: Transition[];
    timers: Timer[];

    /**
     * Constructs a new instance of DdbcActuatorDescription.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} [constructorParameters.id] - The ID of this DDBC.ActuatorDescription. If not provided, a new UUID will be generated.
     * @param {string} [constructorParameters.diagnostic_label] - Human readable name/description of the actuator.
     * @param {CommoditiesArray} constructorParameters.supported_commodites - Commodities supported by the operation modes of this actuator.
     * @param {[DdbcOperationMode, ...DdbcOperationMode[]]} constructorParameters.operation_modes - List of all Operation Modes that are available for this actuator.
     * @param {Transition[]} constructorParameters.transitions - List of Transitions between Operation Modes.
     * @param {Timer[]} constructorParameters.timers - List of Timers associated with Transitions for this Actuator.
     */
    constructor(constructorParameters: ConstructorParameters) {
        const { id, diagnostic_label, supported_commodites, operation_modes, transitions, timers } = constructorParameters;

        if (operation_modes.length > 100) {
            throw new Error("DDBC_ActuatorDescription: operation_modes must be between 1 and 100 elements");
        }

        if (transitions.length > 1000) {
            throw new Error("DDBC_ActuatorDescription: transitions must be less than 1000 elements");
        }

        if (timers.length > 1000) {
            throw new Error("DDBC_ActuatorDescription: timers must be less than and 1000 elements");
        }

        this.id = Uuid.generate(id);
        this.diagnostic_label = diagnostic_label;
        this.supported_commodites = supported_commodites;
        this.operation_modes = operation_modes;
        this.transitions = transitions;
        this.timers = timers;
    }
}
