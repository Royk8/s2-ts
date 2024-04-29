import { FrbcUsageForecastElement } from '../../../src/app/FRBC';

describe('FrbcUsageForecastElement', () => {
    it('should create a FrbcUsageForecastElement object', () => {

        const frbcUsageForecastElement = new FrbcUsageForecastElement({
            duration: 10,
            usage_rate_upper_limit: 1,
            usage_rate_upper_95PPR: 2,
            usage_rate_upper_68PPR: 3,
            usage_rate_expected: 4,
            usage_rate_lower_68PPR: 5,
            usage_rate_lower_95PPR: 6,
            usage_rate_lower_limit: 7
        });

        expect(frbcUsageForecastElement.duration).toBe(10);
        expect(frbcUsageForecastElement.usage_rate_upper_limit).toBe(1);
        expect(frbcUsageForecastElement.usage_rate_upper_95PPR).toBe(2);
        expect(frbcUsageForecastElement.usage_rate_upper_68PPR).toBe(3);
        expect(frbcUsageForecastElement.usage_rate_expected).toBe(4);
        expect(frbcUsageForecastElement.usage_rate_lower_68PPR).toBe(5);
        expect(frbcUsageForecastElement.usage_rate_lower_95PPR).toBe(6);
        expect(frbcUsageForecastElement.usage_rate_lower_limit).toBe(7);
        
    });
});