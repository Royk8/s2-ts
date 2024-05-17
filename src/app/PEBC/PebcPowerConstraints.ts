import { PEBC_PowerConstraints } from "@messages";
import { ID } from "@schemas";
import { PebcAllowedLimitRange } from ".";
import { Uuid } from "../services/Uuid";
import { PEBC_PowerEnvelopeConsequenceType, PEBC_AllowedLimitRange } from "src/messages/generated/PEBC.PowerConstraints";
import { Timestamp, validateTimestamp } from "../common";

interface ConstructorParameters {
    id: ID;
    valid_from: Timestamp;
    valid_until?: Timestamp;
    consequence_type: PEBC_PowerEnvelopeConsequenceType;
    allowed_limit_ranges: [PebcAllowedLimitRange, PebcAllowedLimitRange, ...PebcAllowedLimitRange[]];
}

export class PebcPowerConstraints implements PEBC_PowerConstraints{
    message_type: "PEBC.PowerConstraints";
    message_id: ID;
    id: ID;
    valid_from: Timestamp;
    valid_until?: Timestamp;
    consequence_type: PEBC_PowerEnvelopeConsequenceType;
    allowed_limit_ranges: [PebcAllowedLimitRange, PebcAllowedLimitRange, ...PebcAllowedLimitRange[]];


    constructor({id, valid_from, valid_until, consequence_type, allowed_limit_ranges}: ConstructorParameters){
        validateTimestamp(valid_from);
        if(valid_until){
            validateTimestamp(valid_until);
        }

        let upper = false;
        let lower = false;
        for(const range of allowed_limit_ranges){
            if(range.limit_type === "UPPER_LIMIT"){
                upper = true;
            } else if(range.limit_type === "LOWER_LIMIT"){
                lower = true;
            }
        }

        if(!upper || !lower){
            throw new Error("There shall be at least one PEBC.AllowedLimitRange for the UPPER_LIMIT and at least one AllowedLimitRange for the LOWER_LIMIT.");
        }
        
        this.message_type = "PEBC.PowerConstraints";
        this.message_id = Uuid.generate();
        this.id = id;
        this.valid_from = valid_from;
        this.valid_until = valid_until;
        this.consequence_type = consequence_type;
        this.allowed_limit_ranges = allowed_limit_ranges;
    }
}