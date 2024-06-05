import { OMBC_TimerStatus } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { Message, Timestamp, validateTimestamp } from "../common";

interface ConstructorParameters {
    /**
     * ID of this message
     */
    message_id?: ID;
    /**
     * The ID of the timer this message refers to
     */
    timer_id: ID;
    /**
     * Indicates when the Timer will be finished. If the DateTimeStamp is in the future, the timer is not yet finished.
     * If the DateTimeStamp is in the past, the timer is finished. If the timer was never started, the value can be an arbitrary DateTimeStamp in the past.
     */
    finished_at: Timestamp;
}

export class OmbcTimerStatus implements OMBC_TimerStatus, Message {
    message_type: "OMBC.TimerStatus";
    message_id: ID;
    timer_id: ID;
    finished_at: Timestamp;

    /**
     * Constructs a new instance of the OmbcTimerStatus class.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} [constructorParameters.message_id] - ID of this message.
     * @param {ID} constructorParameters.timer_id - The ID of the timer this message refers to.
     * @param {Timestamp} constructorParameters.finished_at - Indicates when the Timer will be finished.
     */
    constructor({ message_id, timer_id, finished_at }: ConstructorParameters) {
        // Validate the finished_at timestamp
        validateTimestamp(finished_at);

        // Initialize properties
        this.message_type = "OMBC.TimerStatus";
        this.message_id = Uuid.generate(message_id);
        this.timer_id = timer_id;
        this.finished_at = finished_at;
    }
}
