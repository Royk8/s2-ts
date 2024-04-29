import { FRBC_UsageForecastElement } from '@schemas';
import { Duration, validateDuration } from '../common';

interface constructorParameters {
    duration: Duration;
    usage_rate_upper_limit?: number;
    usage_rate_upper_95PPR?: number;
    usage_rate_upper_68PPR?: number;
    usage_rate_expected: number;
    usage_rate_lower_68PPR?: number;
    usage_rate_lower_95PPR?: number;
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

    constructor(constructorParameters: constructorParameters) {
        const {
            duration,
            usage_rate_upper_limit,
            usage_rate_upper_95PPR,
            usage_rate_upper_68PPR,
            usage_rate_expected,
            usage_rate_lower_68PPR,
            usage_rate_lower_95PPR,
            usage_rate_lower_limit,
        } = constructorParameters;

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