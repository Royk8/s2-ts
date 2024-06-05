import { PPBC_PowerProfileStatus } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { PpbcPowerSequenceContainerStatus } from ".";
import { S2Message } from "../common";

interface ConstructorParameters {
    /**
     * ID of this message
     */
    message_id?: ID;
    /**
     * Array with status information for all PPBC.PowerSequenceContainers in the PPBC.PowerProfileDefinition.
     *
     * @minItems 1
     * @maxItems 1000
     */
    sequence_container_status: [PpbcPowerSequenceContainerStatus, ...PpbcPowerSequenceContainerStatus[]];
}

export class PpbcPowerProfileStatus implements PPBC_PowerProfileStatus, S2Message {
    message_type: "PPBC.PowerProfileStatus";
    message_id: ID;
    sequence_container_status: [PpbcPowerSequenceContainerStatus, ...PpbcPowerSequenceContainerStatus[]];

    /**
     * Constructs a new instance of the PpbcPowerProfileStatus class.
     * 
     * @param {ConstructorParameters} parameters - The parameters for the constructor.
     * @param {ID} parameters.message_id - ID of this message.
     * @param {[PpbcPowerSequenceContainerStatus, ...PpbcPowerSequenceContainerStatus[]]} parameters.sequence_container_status - Array with status information for all PPBC.PowerSequenceContainers in the PPBC.PowerProfileDefinition.
     */
    constructor({ message_id, sequence_container_status }: ConstructorParameters) {
        for (let i = 0; i < sequence_container_status.length; i++) {
            sequence_container_status[i] = new PpbcPowerSequenceContainerStatus(sequence_container_status[i]);
        }

        this.message_type = "PPBC.PowerProfileStatus";
        this.message_id = Uuid.generate(message_id);
        this.sequence_container_status = sequence_container_status;
    }
}
