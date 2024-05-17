import { DDBC_ActuatorStatus } from '@messages';
import { ID } from '@schemas';
import { Uuid } from '../services/Uuid';
import { Timestamp, validateTimestamp } from '../common';

interface ConstructorParameters{
    message_id?: ID;
    actuator_id: ID;
    active_operation_mode_id: ID;
    operation_mode_factor: number;
    previous_operation_mode_id?: ID;
    transition_timestamp?: Timestamp;
}

export class DdbcActuatorStatus implements DDBC_ActuatorStatus {
    message_type: 'DDBC.ActuatorStatus';
    message_id: ID;
    actuator_id: ID;
    active_operation_mode_id: ID;
    operation_mode_factor: number;
    previous_operation_mode_id?: ID;
    transition_timestamp?: Timestamp;

    constructor({ message_id, actuator_id, active_operation_mode_id, operation_mode_factor, previous_operation_mode_id, transition_timestamp }: ConstructorParameters){
        
        validateTimestamp(transition_timestamp);
        if(operation_mode_factor < 0 || operation_mode_factor > 1){
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