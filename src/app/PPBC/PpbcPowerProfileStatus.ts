import { PPBC_PowerProfileStatus } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { PpbcPowerSequenceContainerStatus } from ".";

interface ConstructorParameters {
    message_id?: ID;
    sequence_container_status: [PpbcPowerSequenceContainerStatus, ...PpbcPowerSequenceContainerStatus[]];
}

export class PpbcPowerProfileStatus implements PPBC_PowerProfileStatus {
    message_type: "PPBC.PowerProfileStatus";
    message_id: ID;
    sequence_container_status: [PpbcPowerSequenceContainerStatus, ...PpbcPowerSequenceContainerStatus[]];

    constructor({ message_id, sequence_container_status }: ConstructorParameters) {
        this.Validate({ message_id, sequence_container_status });

        this.message_type = "PPBC.PowerProfileStatus";
        this.message_id = Uuid.generate(message_id);
        this.sequence_container_status = sequence_container_status;
    }

    public Validate({ message_id, sequence_container_status }: ConstructorParameters): void {
        for(let i = 0; i < sequence_container_status.length; i++) {
            sequence_container_status[i] = new PpbcPowerSequenceContainerStatus(sequence_container_status[i]);
        }
    }
    

}