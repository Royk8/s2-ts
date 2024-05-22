import { FRBC_OperationMode, FRBC_OperationModeElement, ID } from "@schemas";
import { Uuid } from "../services/Uuid";

/**
 * Parameters for constructing a new instance of FrbcOperationMode.
 */
interface ConstructorParameters {
    /**
     * ID of the FRBC.OperationMode. Must be unique in the scope of the FRBC.ActuatorDescription in which it is used.
     */
    id?: ID;
    /**
     * Human readable name/description of the FRBC.OperationMode. This element is only intended for diagnostic purposes and not for HMI applications.
     */
    diagnostic_label?: string;
    /**
     * List of FRBC.OperationModeElements, which describe the properties of this FRBC.OperationMode depending on the fill_level. The fill_level_ranges of the items in the Array must be contiguous.
     */
    elements: [FRBC_OperationModeElement, ...FRBC_OperationModeElement[]];
    /**
     * Indicates if this FRBC.OperationMode may only be used during an abnormal condition.
     */
    abnormal_condition_only: boolean;
}

export class FrbcOperationMode implements FRBC_OperationMode {
    id: ID;
    diagnostic_label?: string;
    elements: [FRBC_OperationModeElement, ...FRBC_OperationModeElement[]];
    abnormal_condition_only: boolean;

    /**
     * Constructs a new instance of FrbcOperationMode.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} [constructorParameters.id] - ID of the FRBC.OperationMode.
     * @param {string} [constructorParameters.diagnostic_label] - Human readable name/description of the FRBC.OperationMode.
     * @param {[FRBC_OperationModeElement, ...FRBC_OperationModeElement[]]} constructorParameters.elements - List of FRBC.OperationModeElements.
     * @param {boolean} constructorParameters.abnormal_condition_only - Indicates if this FRBC.OperationMode may only be used during an abnormal condition.
     */
    constructor({ id, diagnostic_label, elements, abnormal_condition_only }: ConstructorParameters){
        
        this.id = Uuid.generate(id);
        this.diagnostic_label = diagnostic_label;
        this.elements = elements;
        this.abnormal_condition_only = abnormal_condition_only;
    }
}
