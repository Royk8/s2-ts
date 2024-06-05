import { FRBC_ActuatorStatus } from "@messages";
import { ID } from "@schemas";
import { validateOperationModeFactor, FrbcOperationModeFactor } from "./FrbcOperationModeFactor";
import { S2Message, Timestamp, validateTimestamp } from "../common";
import { Uuid } from "../services/Uuid";

/**
 * Parameters for constructing a new instance of FrbcActuatorStatus.
 */
interface ConstructorParameters {
    /**
     * ID of this message.
     */
    message_id?: ID;
    /**
     * ID of the actuator this messages refers to.
     */
    actuator_id: ID;
    /**
     * ID of the FRBC.OperationMode that is presently active.
     */
    active_operation_mode_id: ID;
    /**
     * The number indicates the factor with which the FRBC.OperationMode is configured. The factor should be greater than or equal than 0 and less or equal to 1.
     */
    operation_mode_factor: FrbcOperationModeFactor;
    /**
     * ID of the FRBC.OperationMode that was active before the present one. This value shall always be provided, unless the active FRBC.OperationMode is the first FRBC.OperationMode the Resource Manager is aware of.
     */
    previous_operation_mode_id?: ID;
    /**
     * Time at which the transition from the previous FRBC.OperationMode to the active FRBC.OperationMode was initiated. This value shall always be provided, unless the active FRBC.OperationMode is the first FRBC.OperationMode the Resource Manager is aware of.
     */
    transition_timestamp?: Timestamp;
}

export class FrbcActuatorStatus implements FRBC_ActuatorStatus, S2Message {
    message_type: "FRBC.ActuatorStatus";
    message_id: ID;
    actuator_id: ID;
    active_operation_mode_id: ID;
    operation_mode_factor: FrbcOperationModeFactor;
    previous_operation_mode_id?: ID;
    transition_timestamp?: Timestamp;

    /**
     * Constructs a new instance of FrbcActuatorStatus.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} [constructorParameters.message_id] - ID of this message.
     * @param {ID} constructorParameters.actuator_id - ID of the actuator this messages refers to.
     * @param {ID} constructorParameters.active_operation_mode_id - ID of the FRBC.OperationMode that is presently active.
     * @param {FrbcOperationModeFactor} constructorParameters.operation_mode_factor - The factor with which the FRBC.OperationMode is configured.
     * @param {ID} [constructorParameters.previous_operation_mode_id] - ID of the FRBC.OperationMode that was active before the present one.
     * @param {Timestamp} [constructorParameters.transition_timestamp] - Time at which the transition from the previous FRBC.OperationMode to the active FRBC.OperationMode was initiated.
     */
    constructor({ message_id, actuator_id, active_operation_mode_id, operation_mode_factor, previous_operation_mode_id, transition_timestamp }: ConstructorParameters) {

        validateOperationModeFactor(operation_mode_factor);
        if(transition_timestamp){
            validateTimestamp(transition_timestamp);
        }        

        this.message_type = "FRBC.ActuatorStatus";
        this.message_id = Uuid.generate(message_id);
        this.actuator_id = actuator_id;
        this.active_operation_mode_id = active_operation_mode_id;
        this.operation_mode_factor = operation_mode_factor;
        this.previous_operation_mode_id = previous_operation_mode_id;
        this.transition_timestamp = transition_timestamp;
    }
}
