import { ID, PPBC_PowerSequenceContainer } from "@schemas";
import { PpbcPowerSequence } from "./PpbcPowerSequence";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters {
    /**
     * ID of the PPBC.PowerSequenceContainer. Must be unique in the scope of the PPBC.PowerProfileDefinition in which it is used.
     */
    id?: ID;
    /**
     * List of alternative Sequences where one could be chosen by the CEM
     *
     * @minItems 1
     * @maxItems 288
     */
    power_sequences: [PpbcPowerSequence, ...PpbcPowerSequence[]];
}

export class PpbcPowerSequenceContainer implements PPBC_PowerSequenceContainer {
    id: ID;
    power_sequences: [PpbcPowerSequence, ...PpbcPowerSequence[]];
    
    /**
     * Constructs a new instance of the PpbcPowerSequenceContainer class.
     * 
     * @param {ConstructorParameters} parameters - The parameters for the constructor.
     * @param {ID} parameters.id - ID of the PPBC.PowerSequenceContainer. Must be unique in the scope of the PPBC.PowerProfileDefinition in which it is used.
     * @param {[PpbcPowerSequence, ...PpbcPowerSequence[]]} parameters.power_sequences - List of alternative Sequences where one could be chosen by the CEM.
     */
    constructor({ id, power_sequences }: ConstructorParameters) {
        for(let i = 0; i < power_sequences.length; i++) {
            power_sequences[i] = new PpbcPowerSequence(power_sequences[i]);
        }
        
        this.id = Uuid.generate(id);
        this.power_sequences = power_sequences;
    }
}
