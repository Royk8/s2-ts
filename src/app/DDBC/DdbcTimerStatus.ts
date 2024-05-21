import { DDBC_TimerStatus } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { Timestamp, validateTimestamp } from "../common";

interface ConstructorParameters {
    message_id?: ID;
    timer_id: ID;
    actuator_id: ID;
    finished_at: Timestamp;
}

export class DdbcTimerStatus implements DDBC_TimerStatus {
    message_type: "DDBC.TimerStatus";
    message_id: ID;
    timer_id: ID;
    actuator_id: ID;
    finished_at: Timestamp;

    constructor({ message_id, timer_id, actuator_id, finished_at }: ConstructorParameters) {
        validateTimestamp(finished_at);
        
        this.message_type = "DDBC.TimerStatus";
        this.message_id = Uuid.generate(message_id);
        this.timer_id = timer_id;
        this.actuator_id = actuator_id;
        this.finished_at = finished_at;
    }
}

