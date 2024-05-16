import { PPBC_ScheduleInstruction } from "@messages";
import { ID } from "@schemas";
import { Timestamp, validateTimestamp } from "../common";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters {
    message_id?: ID;
    id: ID;
    power_profile_id: ID;
    sequence_container_id: ID;
    power_sequence_id: ID;
    execution_time: Timestamp;
    abnormal_condition: boolean;
}

export class PpbcScheduleInstruction implements PPBC_ScheduleInstruction {
    message_type: "PPBC.ScheduleInstruction";
    message_id: ID;
    id: ID;
    power_profile_id: ID;
    sequence_container_id: ID;
    power_sequence_id: ID;
    execution_time: Timestamp;
    abnormal_condition: boolean;

    constructor({ message_id, id, power_profile_id, sequence_container_id, power_sequence_id, execution_time, abnormal_condition }: ConstructorParameters) {
        this.Validate({ message_id, id, power_profile_id, sequence_container_id, power_sequence_id, execution_time, abnormal_condition });

        this.message_type = "PPBC.ScheduleInstruction";
        this.message_id = Uuid.generate(message_id);
        this.id = id;
        this.power_profile_id = power_profile_id;
        this.sequence_container_id = sequence_container_id;
        this.power_sequence_id = power_sequence_id;
        this.execution_time = execution_time;
        this.abnormal_condition = abnormal_condition;
    }

    public Validate({ message_id, id, power_profile_id, sequence_container_id, power_sequence_id, execution_time, abnormal_condition }: ConstructorParameters): void {
        validateTimestamp(execution_time);
    }
}