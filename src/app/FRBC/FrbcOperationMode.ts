import { FRBC_OperationMode, FRBC_OperationModeElement } from "@schemas";
import { ID } from "@schemas";

export class FrbcOperationMode implements FRBC_OperationMode {
    id: ID;
    diagnostic_label?: string;
    elements: [FRBC_OperationModeElement, ...FRBC_OperationModeElement[]];
    abnormal_condition_only: boolean;

    constructor(id: ID, elements: [FRBC_OperationModeElement, ...FRBC_OperationModeElement[]], abnormal_condition_only: boolean){
        this.id = id;
        this.elements = elements;
        this.abnormal_condition_only = abnormal_condition_only;
    }
}