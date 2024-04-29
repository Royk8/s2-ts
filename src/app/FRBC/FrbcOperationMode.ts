import { FRBC_OperationMode, FRBC_OperationModeElement } from "@schemas";
import { ID } from "@schemas";

interface constructorParameters{
    id: ID;
    elements: [FRBC_OperationModeElement, ...FRBC_OperationModeElement[]];
    abnormal_condition_only: boolean;
}

export class FrbcOperationMode implements FRBC_OperationMode {
    id: ID;
    diagnostic_label?: string;
    elements: [FRBC_OperationModeElement, ...FRBC_OperationModeElement[]];
    abnormal_condition_only: boolean;

    constructor(constructorParameters: constructorParameters){
        const { id, elements, abnormal_condition_only } = constructorParameters;
        
        this.id = id;
        this.elements = elements;
        this.abnormal_condition_only = abnormal_condition_only;
    }
}