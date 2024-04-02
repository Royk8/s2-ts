import { FRBC_TimerStatus } from "@messages";
import { ID } from "@schemas";

export class FrbcTimerStatus implements FRBC_TimerStatus {
    message_type: "FRBC.TimerStatus";
    message_id: ID;
    timer_id: ID;
    actuator_id: ID;
    finished_at: string;

    constructor(message_id: ID, timer_id: ID, actuator_id: ID, finished_at: string){
        this.message_type = "FRBC.TimerStatus";
        this.message_id = message_id;
        this.timer_id = timer_id;
        this.actuator_id = actuator_id;
        this.finished_at = finished_at;
    }
}