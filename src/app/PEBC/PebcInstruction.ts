import { PEBC_Instruction } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { Timestamp, validateTimestamp } from "../common";
import { PowerEnvelopeArray } from "./ExtraTypes";
import { PebcPowerEnvelope } from "./PebcPowerEnvelope";

interface ConstructorParameters {
    message_id?: ID;
    id: ID;
    execution_time: Timestamp;
    abnormal_condition: boolean;
    power_constraints_id: ID;
    power_envelopes: PowerEnvelopeArray;
}

export class PebcInstruction implements PEBC_Instruction {
    message_type: "PEBC.Instruction";
    message_id: ID;
    id: ID;
    execution_time: Timestamp;
    abnormal_condition: boolean;
    power_constraints_id: ID;
    power_envelopes: PowerEnvelopeArray;

    constructor({ message_id, id, execution_time, abnormal_condition, power_constraints_id, power_envelopes }: ConstructorParameters) {
        validateTimestamp(execution_time);

        for(let i = 0; i < power_envelopes.length; i++){
            power_envelopes[i] = new PebcPowerEnvelope(power_envelopes[i]);
        }
        
        this.message_type = "PEBC.Instruction";
        this.message_id = Uuid.generate(message_id);
        this.id = id;
        this.execution_time = execution_time;
        this.abnormal_condition = abnormal_condition;
        this.power_constraints_id = power_constraints_id;
        this.power_envelopes = power_envelopes;
    }
}
