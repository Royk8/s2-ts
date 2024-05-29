import { PPBC_PowerSequenceContainerStatus, PPBC_PowerSequenceStatus, ID } from "@schemas";
import { Duration, validateDuration } from "../common";

interface ConstructorParameters {
    /**
     * ID of the PPBC.PowerProfileDefinition of which the data element ‘sequence_container_id’ refers to.
     */
    power_profile_id: ID;
    /**
     * ID of the PPBC.PowerSequenceContainer this PPBC.PowerSequenceContainerStatus provides information about.
     */
    sequence_container_id: ID;
    /**
     * ID of selected PPBC.PowerSequence. When no ID is given, no sequence was selected yet.
     */
    selected_sequence_id?: ID;
    /**
     * Time that has passed since the selected sequence has started. A value must be provided, unless no sequence has been selected or the selected sequence hasn’t started yet.
     */
    progress?: Duration;
    /**
     * Status of the selected PPBC.PowerSequence
     */
    status: PPBC_PowerSequenceStatus;
}

export class PpbcPowerSequenceContainerStatus implements PPBC_PowerSequenceContainerStatus {
    power_profile_id: ID;
    sequence_container_id: ID;
    selected_sequence_id?: ID;
    progress?: Duration;
    status: PPBC_PowerSequenceStatus;

    /**
     * Constructs a new instance of the PpbcPowerSequenceContainerStatus class.
     * 
     * @param {ConstructorParameters} parameters - The parameters for the constructor.
     * @param {ID} parameters.power_profile_id - ID of the PPBC.PowerProfileDefinition of which the data element ‘sequence_container_id’ refers to.
     * @param {ID} parameters.sequence_container_id - ID of the PPBC.PowerSequenceContainer this PPBC.PowerSequenceContainerStatus provides information about.
     * @param {ID} [parameters.selected_sequence_id] - ID of selected PPBC.PowerSequence. When no ID is given, no sequence was selected yet.
     * @param {Duration} [parameters.progress] - Time that has passed since the selected sequence has started. A value must be provided, unless no sequence has been selected or the selected sequence hasn’t started yet.
     * @param {PPBC_PowerSequenceStatus} parameters.status - Status of the selected PPBC.PowerSequence
     */
    constructor({ power_profile_id, sequence_container_id, selected_sequence_id, progress, status }: ConstructorParameters) {
        validateDuration(progress);

        this.power_profile_id = power_profile_id;
        this.sequence_container_id = sequence_container_id;
        this.selected_sequence_id = selected_sequence_id;
        this.progress = progress;
        this.status = status;
    }
}
