import { DDBC_TimerStatus } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { Message, Timestamp, validateTimestamp } from "../common";

/**
 * Parameters for constructing a new instance of DdbcTimerStatus.
 */
interface ConstructorParameters {
    /**
     * ID of this message.
     */
    message_id?: ID;
    /**
     * The ID of the timer this message refers to.
     */
    timer_id: ID;
    /**
     * The ID of the actuator the timer belongs to.
     */
    actuator_id: ID;
    /**
     * Indicates when the Timer will be finished. If the DateTimeStamp is in the future, the timer is not yet finished. If the DateTimeStamp is in the past, the timer is finished. If the timer was never started, the value can be an arbitrary DateTimeStamp in the past.
     */
    finished_at: Timestamp;
}

export class DdbcTimerStatus implements DDBC_TimerStatus, Message {
    message_type: "DDBC.TimerStatus";
    message_id: ID;
    timer_id: ID;
    actuator_id: ID;
    finished_at: Timestamp;

    /**
     * Constructs a new instance of DdbcTimerStatus.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} [constructorParameters.message_id] - ID of this message.
     * @param {ID} constructorParameters.timer_id - The ID of the timer this message refers to.
     * @param {ID} constructorParameters.actuator_id - The ID of the actuator the timer belongs to.
     * @param {Timestamp} constructorParameters.finished_at - Indicates when the Timer will be finished.
     */
    constructor({ message_id, timer_id, actuator_id, finished_at }: ConstructorParameters) {
        validateTimestamp(finished_at);
        
        this.message_type = "DDBC.TimerStatus";
        this.message_id = Uuid.generate(message_id);
        this.timer_id = timer_id;
        this.actuator_id = actuator_id;
        this.finished_at = finished_at;
    }
}
