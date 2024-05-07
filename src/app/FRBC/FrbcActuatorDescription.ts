import { FRBC_ActuatorDescription } from "@schemas";
import { FRBC_OperationMode, Transition, Timer, ID } from "@schemas";
import { CommoditiesArray } from "./ExtraTypes";

interface ConstructorParameters{
    id: ID;
    diagnostic_label?: string;
    supported_commodities: CommoditiesArray;
    operation_modes: [FRBC_OperationMode, ...FRBC_OperationMode[]];
    transitions: Transition[];
    timers: Timer[];
}

export class FrbcActuatorDescription implements FRBC_ActuatorDescription {
    id: ID;
    diagnostic_label?: string;
    supported_commodities: CommoditiesArray;
    operation_modes: [FRBC_OperationMode, ...FRBC_OperationMode[]];
    transitions: Transition[];
    timers: Timer[];

    constructor(constructorParameters: ConstructorParameters){
        const { id, supported_commodities, operation_modes, transitions, timers, diagnostic_label } = constructorParameters;

        if(operation_modes.length > 100){
            throw new Error("FRBC_ActuatorDescription: operation_modes must be between 1 and 100 elements");
        }

        if(transitions.length > 1000){
            throw new Error("FRBC_ActuatorDescription: transitions must be less than 1000 elements");
        }

        if(timers.length > 100){
            throw new Error("FRBC_ActuatorDescription: timers must be less than and 100 elements");
        }

        this.id = id;
        this.supported_commodities = supported_commodities;
        this.operation_modes = operation_modes;
        this.transitions = transitions;
        this.timers = timers;
        this.diagnostic_label = diagnostic_label;
    }
}