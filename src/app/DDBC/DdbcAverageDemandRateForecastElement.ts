import { DDBC_AverageDemandRateForecastElement } from "@schemas";
import { Duration, validateDuration } from "../common";

/**
 * Parameters for constructing a new instance of DdbcAverageDemandRateForecastElement.
 */
interface ConstructorParameters {
    /**
     * Duration of the element.
     */
    duration: Duration;
    /**
     * The upper limit of the range with a 100% probability that the demand rate is within that range.
     */
    demand_rate_upper_limit?: number;
    /**
     * The upper limit of the range with a 95% probability that the demand rate is within that range.
     */
    demand_rate_upper_95PPR?: number;
    /**
     * The upper limit of the range with a 68% probability that the demand rate is within that range.
     */
    demand_rate_upper_68PPR?: number;
    /**
     * The most likely value for the demand rate; the expected increase or decrease of the fill level per second.
     */
    demand_rate_expected: number;
    /**
     * The lower limit of the range with a 68% probability that the demand rate is within that range.
     */
    demand_rate_lower_68PPR?: number;
    /**
     * The lower limit of the range with a 95% probability that the demand rate is within that range.
     */
    demand_rate_lower_95PPR?: number;
    /**
     * The lower limit of the range with a 100% probability that the demand rate is within that range.
     */
    demand_rate_lower_limit?: number;
}

export class DdbcAverageDemandRateForecastElement implements DDBC_AverageDemandRateForecastElement {
    
    duration: Duration;
    demand_rate_upper_limit?: number;
    demand_rate_upper_95PPR?: number;
    demand_rate_upper_68PPR?: number;
    demand_rate_expected: number;
    demand_rate_lower_68PPR?: number;
    demand_rate_lower_95PPR?: number;
    demand_rate_lower_limit?: number;

    /**
     * Constructs a new instance of DdbcAverageDemandRateForecastElement.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {Duration} constructorParameters.duration - Duration of the element.
     * @param {number} [constructorParameters.demand_rate_upper_limit] - The upper limit of the range with a 100% probability that the demand rate is within that range.
     * @param {number} [constructorParameters.demand_rate_upper_95PPR] - The upper limit of the range with a 95% probability that the demand rate is within that range.
     * @param {number} [constructorParameters.demand_rate_upper_68PPR] - The upper limit of the range with a 68% probability that the demand rate is within that range.
     * @param {number} constructorParameters.demand_rate_expected - The most likely value for the demand rate.
     * @param {number} [constructorParameters.demand_rate_lower_68PPR] - The lower limit of the range with a 68% probability that the demand rate is within that range.
     * @param {number} [constructorParameters.demand_rate_lower_95PPR] - The lower limit of the range with a 95% probability that the demand rate is within that range.
     * @param {number} [constructorParameters.demand_rate_lower_limit] - The lower limit of the range with a 100% probability that the demand rate is within that range.
     */
    constructor({ duration, demand_rate_upper_limit, demand_rate_upper_95PPR, demand_rate_upper_68PPR, demand_rate_expected, demand_rate_lower_68PPR, demand_rate_lower_95PPR, demand_rate_lower_limit }: ConstructorParameters) {
        
        validateDuration(duration);

        this.duration = duration;
        this.demand_rate_upper_limit = demand_rate_upper_limit;
        this.demand_rate_upper_95PPR = demand_rate_upper_95PPR;
        this.demand_rate_upper_68PPR = demand_rate_upper_68PPR;
        this.demand_rate_expected = demand_rate_expected;
        this.demand_rate_lower_68PPR = demand_rate_lower_68PPR;
        this.demand_rate_lower_95PPR = demand_rate_lower_95PPR;
        this.demand_rate_lower_limit = demand_rate_lower_limit;
    }
}
