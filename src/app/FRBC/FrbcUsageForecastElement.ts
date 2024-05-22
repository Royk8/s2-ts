import { FRBC_UsageForecastElement } from '@schemas';
import { Duration, validateDuration } from '../common';

/**
 * Parameters for constructing a new instance of FrbcUsageForecastElement.
 */
interface ConstructorParameters {
    /**
     * Indicator for how long the given usage_rate is valid.
     */
    duration: Duration;
    /**
     * The upper limit of the range with a 100 % probability that the usage rate is within that range. A positive value indicates that the fill level will decrease due to usage.
     */
    usage_rate_upper_limit?: number;
    /**
     * The upper limit of the range with a 95 % probability that the usage rate is within that range. A positive value indicates that the fill level will decrease due to usage.
     */
    usage_rate_upper_95PPR?: number;
    /**
     * The upper limit of the range with a 68 % probability that the usage rate is within that range. A positive value indicates that the fill level will decrease due to usage.
     */
    usage_rate_upper_68PPR?: number;
    /**
     * The most likely value for the usage rate; the expected increase or decrease of the fill_level per second. A positive value indicates that the fill level will decrease due to usage.
     */
    usage_rate_expected: number;
    /**
     * The lower limit of the range with a 68 % probability that the usage rate is within that range. A positive value indicates that the fill level will decrease due to usage.
     */
    usage_rate_lower_68PPR?: number;
    /**
     * The lower limit of the range with a 95 % probability that the usage rate is within that range. A positive value indicates that the fill level will decrease due to usage.
     */
    usage_rate_lower_95PPR?: number;
    /**
     * The lower limit of the range with a 100 % probability that the usage rate is within that range. A positive value indicates that the fill level will decrease due to usage.
     */
    usage_rate_lower_limit?: number;
}

export class FrbcUsageForecastElement implements FRBC_UsageForecastElement {
    duration: Duration;
    usage_rate_upper_limit?: number;
    usage_rate_upper_95PPR?: number;
    usage_rate_upper_68PPR?: number;
    usage_rate_expected: number;
    usage_rate_lower_68PPR?: number;
    usage_rate_lower_95PPR?: number;
    usage_rate_lower_limit?: number;

    /**
     * Constructs a new instance of FrbcUsageForecastElement.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {Duration} constructorParameters.duration - Indicator for how long the given usage_rate is valid.
     * @param {number} [constructorParameters.usage_rate_upper_limit] - The upper limit of the range with a 100 % probability that the usage rate is within that range.
     * @param {number} [constructorParameters.usage_rate_upper_95PPR] - The upper limit of the range with a 95 % probability that the usage rate is within that range.
     * @param {number} [constructorParameters.usage_rate_upper_68PPR] - The upper limit of the range with a 68 % probability that the usage rate is within that range.
     * @param {number} constructorParameters.usage_rate_expected - The most likely value for the usage rate.
     * @param {number} [constructorParameters.usage_rate_lower_68PPR] - The lower limit of the range with a 68 % probability that the usage rate is within that range.
     * @param {number} [constructorParameters.usage_rate_lower_95PPR] - The lower limit of the range with a 95 % probability that the usage rate is within that range.
     * @param {number} [constructorParameters.usage_rate_lower_limit] - The lower limit of the range with a 100 % probability that the usage rate is within that range.
     */
    constructor({
        duration,
        usage_rate_upper_limit,
        usage_rate_upper_95PPR,
        usage_rate_upper_68PPR,
        usage_rate_expected,
        usage_rate_lower_68PPR,
        usage_rate_lower_95PPR,
        usage_rate_lower_limit,
    }: ConstructorParameters) {

        validateDuration(duration);

        this.duration = duration;
        this.usage_rate_upper_limit = usage_rate_upper_limit;
        this.usage_rate_upper_95PPR = usage_rate_upper_95PPR;
        this.usage_rate_upper_68PPR = usage_rate_upper_68PPR;
        this.usage_rate_expected = usage_rate_expected;
        this.usage_rate_lower_68PPR = usage_rate_lower_68PPR;
        this.usage_rate_lower_95PPR = usage_rate_lower_95PPR;
        this.usage_rate_lower_limit = usage_rate_lower_limit;
    }
}
