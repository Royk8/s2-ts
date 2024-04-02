import { FRBC_ActuatorDescription } from "@schemas";
import { Commodity, FRBC_OperationMode, Transition, Timer, ID } from "@schemas";

export class FrbcActuatorDescription implements FRBC_ActuatorDescription {
    id: ID;
    diagnostic_label?: string;
    supported_commodities: [Commodity] | [Commodity, Commodity] | [Commodity, Commodity, Commodity] | [Commodity, Commodity, Commodity, Commodity];
    operation_modes: [FRBC_OperationMode, ...FRBC_OperationMode[]];
    transitions: Transition[];
    timers: Timer[];

    constructor(id: ID, supported_commodities: [Commodity] | [Commodity, Commodity] | [Commodity, Commodity, Commodity] | [Commodity, Commodity, Commodity, Commodity], operation_modes: [FRBC_OperationMode, ...FRBC_OperationMode[]], transitions: Transition[], timers: Timer[], diagnostic_label?: string){
        this.id = id;
        this.supported_commodities = supported_commodities;
        this.operation_modes = operation_modes;
        this.transitions = transitions;
        this.timers = timers;
        this.diagnostic_label = diagnostic_label;
    }
}