import { ID, PPBC_PowerSequenceContainer } from "@schemas";
import { PpbcPowerSequence } from "./PpbcPowerSequence";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters {
    id: ID;
    power_sequences: [PpbcPowerSequence, ...PpbcPowerSequence[]];
}

export class PpbcPowerSequenceContainer implements PPBC_PowerSequenceContainer {
    id: ID;
    power_sequences: [PpbcPowerSequence, ...PpbcPowerSequence[]];
    
    constructor({ id, power_sequences }: { id: ID, power_sequences: [PpbcPowerSequence, ...PpbcPowerSequence[]] }) {
        this.Validate({ id, power_sequences });
        
        this.id = Uuid.generate(id);
        this.power_sequences = power_sequences;
    }

    Validate({ id, power_sequences }: ConstructorParameters): void {
        power_sequences.map((power_sequence) => power_sequence.Validate(power_sequence));
    }
}