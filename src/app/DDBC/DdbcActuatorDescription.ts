import { DDBC_ActuatorDescription, ID } from "@schemas";
import { CommoditiesArray } from "../common/ExtraTypes";
import { DdbcOperationMode } from "./DdbcOperationMode";
import { Transition, Timer } from "../common";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters{
    id?: ID;
    diagnostic_label?: string;
    supported_commodites: CommoditiesArray;
    operation_modes: [DdbcOperationMode, ...DdbcOperationMode[]];
    transitions: Transition[];
    timers: Timer[];
}

export class DdbcActuatorDescription implements DDBC_ActuatorDescription {
    id: string;
    diagnostic_label?: string;
    supported_commodites: CommoditiesArray;
    operation_modes: [DdbcOperationMode, ...DdbcOperationMode[]];
    transitions: Transition[];
    timers: Timer[];

    constructor(constructorParameters: ConstructorParameters){
        const { id, diagnostic_label, supported_commodites, operation_modes, transitions, timers } = constructorParameters;

        if(operation_modes.length > 100){
            throw new Error("DDBC_ActuatorDescription: operation_modes must be between 1 and 100 elements");
        }

        if(transitions.length > 1000){
            throw new Error("DDBC_ActuatorDescription: transitions must be less than 1000 elements");
        }

        if(timers.length > 1000){
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
