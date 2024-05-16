import { OMBC_TimerStatus } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { Timestamp, validateTimestamp } from "../common";

interface ConstructorParameters {
    message_id: ID;
    timer_id: ID;
    finished_at: Timestamp;
}

export class OmbcTimerStatus implements OMBC_TimerStatus {
    message_type: "OMBC.TimerStatus";
    message_id: ID;
    timer_id: ID;
    finished_at: Timestamp;

    constructor({ message_id, timer_id, finished_at }: ConstructorParameters) {
        validateTimestamp(finished_at);

        this.message_type = "OMBC.TimerStatus";
        this.message_id = Uuid.generate(message_id);
        this.timer_id = timer_id;
        this.finished_at = finished_at;
    }
}