import { FRBC_ActuatorDescription, FRBC_OperationMode, Transition, Timer, ID } from "@schemas";
import { CommoditiesArray } from "../common/ExtraTypes";
import { Uuid } from "../services/Uuid";

/**
 * Parameters for constructing a new instance of FrbcActuatorDescription.
 */
interface ConstructorParameters {
    /**
     * ID of the Actuator. Must be unique in the scope of the Resource Manager, for at least the duration of the session between Resource Manager and CEM.
     */
    id?: ID;
    /**
     * Human readable name/description for the actuator. This element is only intended for diagnostic purposes and not for HMI applications.
     */
    diagnostic_label?: string;
    /**
     * List of all supported Commodities.
     */
    supported_commodities: CommoditiesArray;
    /**
     * Provided FRBC.OperationModes associated with this actuator.
     */
    operation_modes: [FRBC_OperationMode, ...FRBC_OperationMode[]];
    /**
     * Possible transitions between FRBC.OperationModes associated with this actuator.
     */
    transitions: Transition[];
    /**
     * List of Timers associated with this actuator.
     */
    timers: Timer[];
}

export class FrbcActuatorDescription implements FRBC_ActuatorDescription {
    id: ID;
    diagnostic_label?: string;
    supported_commodities: CommoditiesArray;
    operation_modes: [FRBC_OperationMode, ...FRBC_OperationMode[]];
    transitions: Transition[];
    timers: Timer[];

    /**
     * Constructs a new instance of FrbcActuatorDescription.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} [constructorParameters.id] - ID of the Actuator. If not provided, a new UUID will be generated.
     * @param {string} [constructorParameters.diagnostic_label] - Human readable name/description for the actuator.
     * @param {CommoditiesArray} constructorParameters.supported_commodities - List of all supported Commodities.
     * @param {[FRBC_OperationMode, ...FRBC_OperationMode[]]} constructorParameters.operation_modes - Provided FRBC.OperationModes associated with this actuator.
     * @param {Transition[]} constructorParameters.transitions - Possible transitions between FRBC.OperationModes associated with this actuator.
     * @param {Timer[]} constructorParameters.timers - List of Timers associated with this actuator.
     */
    constructor({ id, diagnostic_label, supported_commodities, operation_modes, transitions, timers }: ConstructorParameters) {

        if(operation_modes.length > 100){
            throw new Error("FRBC_ActuatorDescription: operation_modes must be between 1 and 100 elements");
        }

        if(transitions.length > 1000){
            throw new Error("FRBC_ActuatorDescription: transitions must be less than 1000 elements");
        }

        if(timers.length > 100){
            throw new Error("FRBC_ActuatorDescription: timers must be less than 100 elements");
        }

        this.id = Uuid.generate(id);
        this.diagnostic_label = diagnostic_label;
        this.supported_commodities = supported_commodities;
        this.operation_modes = operation_modes;
        this.transitions = transitions;
        this.timers = timers;
    }
}
