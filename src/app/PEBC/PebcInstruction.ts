import { PEBC_Instruction } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { Message, Timestamp, validateTimestamp } from "../common";
import { PowerEnvelopeArray } from "./ExtraTypes";
import { PebcPowerEnvelope } from "./PebcPowerEnvelope";

interface ConstructorParameters {
    /**
     * ID of this message
     */
    message_id?: ID;
    /**
     * Identifier of this PEBC.Instruction. Must be unique in the scope of the Resource Manager, for at least the duration of the session between Resource Manager and CEM.
     */
    id: ID;
    /**
     * Indicates the moment the execution of the instruction shall start. When the specified execution time is in the past, execution must start as soon as possible.
     */
    execution_time: Timestamp;
    /**
     * Indicates if this is an instruction during an abnormal condition.
     */
    abnormal_condition: boolean;
    /**
     * Identifier of the PEBC.PowerConstraints this PEBC.Instruction was based on.
     */
    power_constraints_id: ID;
    /**
     * The PEBC.PowerEnvelope(s) that should be followed by the Resource Manager. There shall be at least one PEBC.PowerEnvelope, but at most one PEBC.PowerEnvelope for each CommodityQuantity.
     *
     * @minItems 1
     * @maxItems 10
     */
    power_envelopes: PowerEnvelopeArray;
}

export class PebcInstruction implements PEBC_Instruction, Message {
    message_type: "PEBC.Instruction";
    message_id: ID;
    id: ID;
    execution_time: Timestamp;
    abnormal_condition: boolean;
    power_constraints_id: ID;
    power_envelopes: PowerEnvelopeArray;

    /**
     * Constructs a new instance of the PebcInstruction class.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} constructorParameters.message_id - ID of this message.
     * @param {ID} constructorParameters.id - Identifier of this PEBC.Instruction.
     * @param {Timestamp} constructorParameters.execution_time - Indicates the moment the execution of the instruction shall start.
     * @param {boolean} constructorParameters.abnormal_condition - Indicates if this is an instruction during an abnormal condition.
     * @param {ID} constructorParameters.power_constraints_id - Identifier of the PEBC.PowerConstraints this PEBC.Instruction was based on.
     * @param {PowerEnvelopeArray} constructorParameters.power_envelopes - The PEBC.PowerEnvelope(s) that should be followed by the Resource Manager.
     */
    constructor({ message_id, id, execution_time, abnormal_condition, power_constraints_id, power_envelopes }: ConstructorParameters) {
        validateTimestamp(execution_time);

        for (let i = 0; i < power_envelopes.length; i++) {
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
