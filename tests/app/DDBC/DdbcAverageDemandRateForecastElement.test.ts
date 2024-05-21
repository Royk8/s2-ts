import { DdbcAverageDemandRateForecastElement } from "../../../src/app/DDBC/DdbcAverageDemandRateForecastElement";

describe('DdbcAverageDemandRateForecastElement', () => {
    it('should create a DdbcAverageDemandRateForecastElement object', () => {
        const duration = 10;
        
        const averageDemandRateForecastElement = new DdbcAverageDemandRateForecastElement({
            duration: duration,
            demand_rate_upper_limit: 20,
            demand_rate_upper_95PPR: 30,
            demand_rate_upper_68PPR: 40,
            demand_rate_expected: 50,
            demand_rate_lower_68PPR: 60,
            demand_rate_lower_95PPR: 70,
            demand_rate_lower_limit: 80
        });

        expect(averageDemandRateForecastElement).toBeInstanceOf(DdbcAverageDemandRateForecastElement);
        expect(averageDemandRateForecastElement.duration).toBe(duration);
        expect(averageDemandRateForecastElement.demand_rate_upper_limit).toBe(20);
        expect(averageDemandRateForecastElement.demand_rate_upper_95PPR).toBe(30);
        expect(averageDemandRateForecastElement.demand_rate_upper_68PPR).toBe(40);
        expect(averageDemandRateForecastElement.demand_rate_expected).toBe(50);
        expect(averageDemandRateForecastElement.demand_rate_lower_68PPR).toBe(60);
        expect(averageDemandRateForecastElement.demand_rate_lower_95PPR).toBe(70);
        expect(averageDemandRateForecastElement.demand_rate_lower_limit).toBe(80);
    });
});