import { PEBC_Instruction } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { Timestamp, validateTimestamp } from "../common";
import { PowerEnvelopeArray } from "./ExtraTypes";
import { PebcPowerEnvelope } from "./PebcPowerEnvelope";

interface ConstructorParameters {
    id: ID;
    execution_time: Timestamp;
    abnormal_condition: boolean;
    power_constraints_id: ID;
    power_envelopes: PowerEnvelopeArray;
}

export class PebcInstruction implements PEBC_Instruction{
    message_type: "PEBC.Instruction";
    message_id: ID;
    id: ID;
    execution_time: Timestamp;
    abnormal_condition: boolean;
    power_constraints_id: ID;
    power_envelopes: PowerEnvelopeArray;

    constructor({id, execution_time, abnormal_condition, power_constraints_id, power_envelopes}: ConstructorParameters){
        validateTimestamp(execution_time);
        power_envelopes.map((power_envelope: PebcPowerEnvelope) => power_envelope.Validate(power_envelope));
        
        this.message_type = "PEBC.Instruction";
        this.message_id = Uuid.generate(id);
        this.id = id;
        this.execution_time = execution_time;
        this.abnormal_condition = abnormal_condition;
        this.power_constraints_id = power_constraints_id;
        this.power_envelopes = power_envelopes;
    }
}
