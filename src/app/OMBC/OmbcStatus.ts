import { OMBC_Status } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { S2Message, Timestamp, validateTimestamp } from "../common";

/**
 * Constructor parameters for the OmbcStatus class.
 */
interface ConstructorParameters {
    /**
     * ID of this message.
     */
    message_id?: ID;
    /**
     * ID of the active OMBC.OperationMode.
     */
    active_operation_mode_id: ID;
    /**
     * The number indicates the factor with which the OMBC.OperationMode should be configured.
     * The factor should be greater than or equal to 0 and less or equal to 1.
     */
    operation_mode_factor: number;
    /**
     * ID of the OMBC.OperationMode that was previously active.
     * This value shall always be provided, unless the active OMBC.OperationMode is the first OMBC.OperationMode the Resource Manager is aware of.
     */
    previous_operation_mode_id?: ID;
    /**
     * Time at which the transition from the previous OMBC.OperationMode to the active OMBC.OperationMode was initiated.
     * This value shall always be provided, unless the active OMBC.OperationMode is the first OMBC.OperationMode the Resource Manager is aware of.
     */
    transition_timestamp?: Timestamp;
}

/**
 * Class representing an OMBC Status.
 */
export class OmbcStatus implements OMBC_Status, S2Message {
    message_type: "OMBC.Status";
    message_id: ID;
    active_operation_mode_id: ID;
    operation_mode_factor: number;
    previous_operation_mode_id?: ID;
    transition_timestamp?: Timestamp;

    /**
     * Constructs a new instance of the OmbcStatus class.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} [constructorParameters.message_id] - ID of this message.
     * @param {ID} constructorParameters.active_operation_mode_id - ID of the active OMBC.OperationMode.
     * @param {number} constructorParameters.operation_mode_factor - The factor with which the OMBC.OperationMode should be configured.
     * @param {ID} [constructorParameters.previous_operation_mode_id] - ID of the previously active OMBC.OperationMode.
     * @param {Timestamp} [constructorParameters.transition_timestamp] - Time of transition from the previous to the active OMBC.OperationMode.
     */
    constructor({
        message_id,
        active_operation_mode_id,
        operation_mode_factor,
        previous_operation_mode_id,
        transition_timestamp,
    }: ConstructorParameters) {

        // Validate transition timestamp if previous operation mode ID is provided
        if (previous_operation_mode_id) {
            validateTimestamp(transition_timestamp);
        }

        // Validate the operation mode factor
        if (operation_mode_factor < 0 || operation_mode_factor > 1) {
            throw new Error("operation_mode_factor must be in the range [0, 1]");
        }

        this.message_type = "OMBC.Status";
        this.message_id = Uuid.generate(message_id);
        this.active_operation_mode_id = active_operation_mode_id;
        this.operation_mode_factor = operation_mode_factor;
        this.previous_operation_mode_id = previous_operation_mode_id;
        this.transition_timestamp = transition_timestamp;
    }
}
