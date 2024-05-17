import { DDBC_AverageDemandRateForecastElement } from "@schemas";
import { Duration, validateDuration } from "../common";

interface ConstructorParameters {
    duration: Duration;
    demand_rate_upper_limit?: number;
    demand_rate_upper_95PPR?: number;
    demand_rate_upper_68PPR?: number;
    demand_rate_expected: number;
    demand_rate_lower_68PPR?: number;
    demand_rate_lower_95PPR?: number;
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