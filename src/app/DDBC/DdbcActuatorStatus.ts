import { DDBC_ActuatorStatus } from '@messages';
import { ID } from '@schemas';
import { Uuid } from '../services/Uuid';
import { Message, Timestamp, validateTimestamp } from '../common';

/**
 * Parameters for constructing a new instance of DdbcActuatorStatus.
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
     * The operation mode that is presently active for this actuator.
     */
    active_operation_mode_id: ID;
    /**
     * The factor with which the DDBC.OperationMode is configured.
     * It should be greater than or equal to 0 and less than or equal to 1.
     */
    operation_mode_factor: number;
    /**
     * ID of the DDBC.OperationMode that was active before the present one.
     * This value shall always be provided unless the active DDBC.OperationMode is the first one the Resource Manager is aware of.
     */
    previous_operation_mode_id?: ID;
    /**
     * Time at which the transition from the previous DDBC.OperationMode to the active DDBC.OperationMode was initiated.
     * This value shall always be provided unless the active DDBC.OperationMode is the first one the Resource Manager is aware of.
     */
    transition_timestamp?: Timestamp;
}

export class DdbcActuatorStatus implements DDBC_ActuatorStatus, Message {
    message_type: 'DDBC.ActuatorStatus';
    message_id: ID;
    actuator_id: ID;
    active_operation_mode_id: ID;
    operation_mode_factor: number;
    previous_operation_mode_id?: ID;
    transition_timestamp?: Timestamp;

    /**
     * Constructs a new instance of DdbcActuatorStatus.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} [constructorParameters.message_id] - The ID of this message. If not provided, a new UUID will be generated.
     * @param {ID} constructorParameters.actuator_id - The ID of the actuator this message refers to.
     * @param {ID} constructorParameters.active_operation_mode_id - The ID of the active operation mode.
     * @param {number} constructorParameters.operation_mode_factor - The factor with which the operation mode is configured.
     * @param {ID} [constructorParameters.previous_operation_mode_id] - The ID of the previous operation mode.
     * @param {Timestamp} [constructorParameters.transition_timestamp] - The timestamp of the transition.
     */
    constructor({ message_id, actuator_id, active_operation_mode_id, operation_mode_factor, previous_operation_mode_id, transition_timestamp }: ConstructorParameters) {
        if (transition_timestamp !== undefined)
            validateTimestamp(transition_timestamp);
        if (operation_mode_factor < 0 || operation_mode_factor > 1) {
            throw new Error('DDBC_ActuatorStatus: operation_mode_factor must be between 0 and 1');
        }

        this.message_type = 'DDBC.ActuatorStatus';
        this.message_id = Uuid.generate(message_id);
        this.actuator_id = actuator_id;
        this.active_operation_mode_id = active_operation_mode_id;
        this.operation_mode_factor = operation_mode_factor;
        this.previous_operation_mode_id = previous_operation_mode_id;
        this.transition_timestamp = transition_timestamp;
    }
}
