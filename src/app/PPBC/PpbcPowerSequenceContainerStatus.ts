import { PPBC_PowerSequenceContainerStatus, PPBC_PowerSequenceStatus, ID } from "@schemas";
import { Duration, validateDuration } from "../common";

interface ConstructorParameters {
    power_profile_id: ID;
    sequence_container_id: ID;
    selected_sequence_id?: ID;
    progress?: Duration;
    status: PPBC_PowerSequenceStatus;
}

export class PpbcPowerSequenceContainerStatus implements PPBC_PowerSequenceContainerStatus {
    power_profile_id: ID;
    sequence_container_id: ID;
    selected_sequence_id?: ID;
    progress?: Duration;
    status: PPBC_PowerSequenceStatus;

    constructor({ power_profile_id, sequence_container_id, selected_sequence_id, progress, status }: ConstructorParameters) {
        this.Validate({ power_profile_id, sequence_container_id, selected_sequence_id, progress, status });

        this.power_profile_id = power_profile_id;
        this.sequence_container_id = sequence_container_id;
        this.selected_sequence_id = selected_sequence_id;
        this.progress = progress;
        this.status = status;
    }

    public Validate({ power_profile_id, sequence_container_id, selected_sequence_id, progress, status }: ConstructorParameters): void {
        validateDuration(progress);
    }
}