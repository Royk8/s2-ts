import { PEBC_PowerConstraints } from "@messages";
import { ID } from "@schemas";
import { PebcAllowedLimitRange } from ".";
import { Uuid } from "../services/Uuid";
import { PEBC_PowerEnvelopeConsequenceType } from "src/messages/generated/PEBC.PowerConstraints";
import { S2Message, Timestamp, validateTimestamp } from "../common";

interface ConstructorParameters {
    /**
     * ID of this message
     */
    message_id?: ID;
    /**
     * Identifier of this PEBC.PowerConstraints. Must be unique in the scope of the Resource Manager, for at least the duration of the session between Resource Manager and CEM.
     */
    id: ID;
    /**
     * Moment this PEBC.PowerConstraints start to be valid
     */
    valid_from: Timestamp;
    /**
     * Moment until this PEBC.PowerConstraints is valid. If valid_until is not present, there is no determined end time of this PEBC.PowerConstraints.
     */
    valid_until?: Timestamp;
    /**
     * Type of consequence of limiting power. It can be "VANISH" or "DEFER".
     */
    consequence_type: PEBC_PowerEnvelopeConsequenceType;
    /**
     * The actual constraints. There shall be at least one PEBC.AllowedLimitRange for the UPPER_LIMIT and at least one AllowedLimitRange for the LOWER_LIMIT. It is allowed to have multiple PEBC.AllowedLimitRange objects with identical CommodityQuantities and LimitTypes.
     *
     * @minItems 2
     * @maxItems 100
     */
    allowed_limit_ranges: [PebcAllowedLimitRange, PebcAllowedLimitRange, ...PebcAllowedLimitRange[]];
}

export class PebcPowerConstraints implements PEBC_PowerConstraints, S2Message {
    message_type: "PEBC.PowerConstraints";
    message_id: ID;
    id: ID;
    valid_from: Timestamp;
    valid_until?: Timestamp;
    consequence_type: PEBC_PowerEnvelopeConsequenceType;
    allowed_limit_ranges: [PebcAllowedLimitRange, PebcAllowedLimitRange, ...PebcAllowedLimitRange[]];

    /**
     * Constructs a new instance of the PebcPowerConstraints class.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} constructorParameters.message_id - ID of this message.
     * @param {ID} constructorParameters.id - Identifier of this PEBC.PowerConstraints.
     * @param {Timestamp} constructorParameters.valid_from - Moment this PEBC.PowerConstraints start to be valid.
     * @param {Timestamp} constructorParameters.valid_until - Moment until this PEBC.PowerConstraints is valid.
     * @param {PEBC_PowerEnvelopeConsequenceType} constructorParameters.consequence_type - Type of consequence of limiting power.
     * @param {[PebcAllowedLimitRange, PebcAllowedLimitRange, ...PebcAllowedLimitRange[]]} constructorParameters.allowed_limit_ranges - The actual constraints.
     */
    constructor({ message_id, id, valid_from, valid_until, consequence_type, allowed_limit_ranges }: ConstructorParameters) {
        validateTimestamp(valid_from);
        if (valid_until) {
            validateTimestamp(valid_until);
        }

        let upper = false;
        let lower = false;
        for (const range of allowed_limit_ranges) {
            if (range.limit_type === "UPPER_LIMIT") {
                upper = true;
            } else if (range.limit_type === "LOWER_LIMIT") {
                lower = true;
            }
        }

        if (!upper || !lower) {
            throw new Error("There shall be at least one PEBC.AllowedLimitRange for the UPPER_LIMIT and at least one AllowedLimitRange for the LOWER_LIMIT.");
        }

        this.message_type = "PEBC.PowerConstraints";
        this.message_id = Uuid.generate(message_id);
        this.id = id;
        this.valid_from = valid_from;
        this.valid_until = valid_until;
        this.consequence_type = consequence_type;
        this.allowed_limit_ranges = allowed_limit_ranges;
    }
}
