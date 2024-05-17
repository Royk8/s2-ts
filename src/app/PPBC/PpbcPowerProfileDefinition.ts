import { PPBC_PowerProfileDefinition } from "@messages";
import { ID } from "@schemas";
import { Timestamp, validateTimestamp } from "../common";
import { Uuid } from "../services/Uuid";
import { PpbcPowerSequenceContainer } from ".";

interface ConstructorParameters {
    message_id: ID;
    id: ID;
    start_time: Timestamp;
    end_time: Timestamp;
    power_sequences_containers: [PpbcPowerSequenceContainer, ...PpbcPowerSequenceContainer[]];
}

export class PpbcPowerProfileDefinition implements PPBC_PowerProfileDefinition {
    message_type: "PPBC.PowerProfileDefinition";
    message_id: ID;
    id: ID;
    start_time: Timestamp;
    end_time: Timestamp;
    power_sequences_containers: [PpbcPowerSequenceContainer, ...PpbcPowerSequenceContainer[]];

    constructor({ message_id, id, start_time, end_time, power_sequences_containers }: ConstructorParameters) {
        this.Validate({ message_id, id, start_time, end_time, power_sequences_containers });

        this.message_type = "PPBC.PowerProfileDefinition";
        this.message_id = Uuid.generate(message_id);
        this.id = id;
        this.start_time = start_time;
        this.end_time = end_time;
        this.power_sequences_containers = power_sequences_containers;
    }

    public Validate({ message_id, id, start_time, end_time, power_sequences_containers }: ConstructorParameters): void {
        validateTimestamp(start_time);
        validateTimestamp(end_time);
        power_sequences_containers.map((power_sequences_container) => power_sequences_container.Validate(power_sequences_container));
    }
    

}