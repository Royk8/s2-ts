import { PPBC_PowerProfileDefinition } from "@messages";
import { ID } from "@schemas";
import { Timestamp, validateTimestamp } from "../common";
import { Uuid } from "../services/Uuid";
import { PpbcPowerSequenceContainer } from ".";

interface ConstructorParameters {
    /**
     * ID of this message
     */
    message_id?: ID;
    /**
     * ID of the PPBC.PowerProfileDefinition. Must be unique in the scope of the Resource Manager, for at least the duration of the session between Resource Manager and CEM.
     */
    id: ID;
    /**
     * Indicates the first possible time the first PPBC.PowerSequence could start
     */
    start_time: Timestamp;
    /**
     * Indicates when the last PPBC.PowerSequence shall be finished at the latest
     */
    end_time: Timestamp;
    /**
     * The PPBC.PowerSequenceContainers that make up this PPBC.PowerProfileDefinition. There shall be at least one PPBC.PowerSequenceContainer that includes at least one PPBC.PowerSequence. PPBC.PowerSequenceContainers must be placed in chronological order.
     *
     * @minItems 1
     * @maxItems 1000
     */
    power_sequences_containers: [PpbcPowerSequenceContainer, ...PpbcPowerSequenceContainer[]];
}

export class PpbcPowerProfileDefinition implements PPBC_PowerProfileDefinition {
    message_type: "PPBC.PowerProfileDefinition";
    message_id: ID;
    id: ID;
    start_time: Timestamp;
    end_time: Timestamp;
    power_sequences_containers: [PpbcPowerSequenceContainer, ...PpbcPowerSequenceContainer[]];

    /**
     * Constructs a new instance of the PpbcPowerProfileDefinition class.
     * 
     * @param {ConstructorParameters} parameters - The parameters for the constructor.
     * @param {ID} parameters.message_id - ID of this message.
     * @param {ID} parameters.id - ID of the PPBC.PowerProfileDefinition.
     * @param {Timestamp} parameters.start_time - Indicates the first possible time the first PPBC.PowerSequence could start.
     * @param {Timestamp} parameters.end_time - Indicates when the last PPBC.PowerSequence shall be finished at the latest.
     * @param {[PpbcPowerSequenceContainer, ...PpbcPowerSequenceContainer[]]} parameters.power_sequences_containers - The PPBC.PowerSequenceContainers that make up this PPBC.PowerProfileDefinition.
     */
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
        
        for (let i = 0; i < power_sequences_containers.length; i++) {
            power_sequences_containers[i] = new PpbcPowerSequenceContainer(power_sequences_containers[i]);
        }
    }
}
