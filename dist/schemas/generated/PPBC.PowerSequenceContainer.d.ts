/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * ID of the PPBC.PowerSequenceContainer. Must be unique in the scope of the PPBC.PowerProfileDefinition in which it is used.
 */
export type ID = string;
/**
 * ID of the PPBC.PowerSequence. Must be unique in the scope of the PPBC.PowerSequnceContainer in which it is used.
 */
export type ID1 = string;
/**
 * Duration of the PPBC.PowerSequenceElement.
 */
export type Duration = number;
/**
 * The power quantity the value refers to
 */
export type CommodityQuantity = "ELECTRIC.POWER.L1" | "ELECTRIC.POWER.L2" | "ELECTRIC.POWER.L3" | "ELECTRIC.POWER.3_PHASE_SYMMETRIC" | "NATURAL_GAS.FLOW_RATE" | "HYDROGEN.FLOW_RATE" | "HEAT.TEMPERATURE" | "HEAT.FLOW_RATE" | "HEAT.THERMAL_POWER" | "OIL.FLOW_RATE";
/**
 * The maximum duration for which a device can be paused between the end of the previous running sequence and the start of this one
 */
export type Duration1 = number;
export interface PPBC_PowerSequenceContainer {
    id: ID;
    /**
     * List of alternative Sequences where one could be chosen by the CEM
     *
     * @minItems 1
     * @maxItems 288
     */
    power_sequences: [PPBC_PowerSequence, ...PPBC_PowerSequence[]];
}
export interface PPBC_PowerSequence {
    id: ID1;
    /**
     * List of PPBC.PowerSequenceElements. Shall contain at least one element. Elements must be placed in chronological order.
     *
     * @minItems 1
     * @maxItems 288
     */
    elements: [PPBC_PowerSequenceElement, ...PPBC_PowerSequenceElement[]];
    /**
     * Indicates whether the option of pausing a sequence is available.
     */
    is_interruptible: boolean;
    max_pause_before?: Duration1;
    /**
     * Indicates if this PPBC.PowerSequence may only be used during an abnormal condition
     */
    abnormal_condition_only: boolean;
}
export interface PPBC_PowerSequenceElement {
    duration: Duration;
    /**
     * The value of power and deviations for the given duration. The array should contain at least one PowerForecastValue and at most one PowerForecastValue per CommodityQuantity.
     *
     * @minItems 1
     * @maxItems 10
     */
    power_values: [PowerForecastValue] | [PowerForecastValue, PowerForecastValue] | [PowerForecastValue, PowerForecastValue, PowerForecastValue] | [PowerForecastValue, PowerForecastValue, PowerForecastValue, PowerForecastValue] | [PowerForecastValue, PowerForecastValue, PowerForecastValue, PowerForecastValue, PowerForecastValue] | [
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue
    ] | [
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue
    ] | [
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue
    ] | [
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue
    ] | [
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue,
        PowerForecastValue
    ];
}
export interface PowerForecastValue {
    /**
     * The upper boundary of the range with 100 % certainty the power value is in it
     */
    value_upper_limit?: number;
    /**
     * The upper boundary of the range with 95 % certainty the power value is in it
     */
    value_upper_95PPR?: number;
    /**
     * The upper boundary of the range with 68 % certainty the power value is in it
     */
    value_upper_68PPR?: number;
    /**
     * The expected power value.
     */
    value_expected: number;
    /**
     * The lower boundary of the range with 68 % certainty the power value is in it
     */
    value_lower_68PPR?: number;
    /**
     * The lower boundary of the range with 95 % certainty the power value is in it
     */
    value_lower_95PPR?: number;
    /**
     * The lower boundary of the range with 100 % certainty the power value is in it
     */
    value_lower_limit?: number;
    commodity_quantity: CommodityQuantity;
}
