import { DdbcAverageDemandRateForecast, DdbcAverageDemandRateForecastElement } from '../../../src/app/DDBC';
import { parseMessage } from '../../../src/app/services';

describe('DdbcAverageDemandRateForecast', () => {
    it('should create a DdbcAverageDemandRateForecast object', () => {

        const timestamp: string = new Date().toISOString();

        const averageDemandRateForecastElement = new DdbcAverageDemandRateForecastElement({
            duration: 10,
            demand_rate_upper_limit: 20,
            demand_rate_upper_95PPR: 30,
            demand_rate_upper_68PPR: 40,
            demand_rate_expected: 50,
            demand_rate_lower_68PPR: 60,
            demand_rate_lower_95PPR: 70,
            demand_rate_lower_limit: 80
        });

        const averageDemandRateForecast = new DdbcAverageDemandRateForecast({
            start_time: timestamp,
            elements: [averageDemandRateForecastElement]
        });

        expect(averageDemandRateForecast).toBeInstanceOf(DdbcAverageDemandRateForecast);
        expect(averageDemandRateForecast.message_type).toBe('DDBC.AverageDemandRateForecast');
        expect(averageDemandRateForecast.message_id).toBeDefined();
        expect(averageDemandRateForecast.start_time).toBe(timestamp);
        expect(averageDemandRateForecast.elements).toEqual([averageDemandRateForecastElement]);
    });

    it('should throw an error if elements length is more than 288', () => {
        const timestamp: string = new Date().toISOString();

        const averageDemandRateForecastElement = new DdbcAverageDemandRateForecastElement({
            duration: 10,
            demand_rate_expected: 50,
        });
        const elements = Array(289).fill(averageDemandRateForecastElement) as [DdbcAverageDemandRateForecastElement, ...DdbcAverageDemandRateForecastElement[]];

        expect(() => new DdbcAverageDemandRateForecast({
            start_time: timestamp,
            elements: elements
        })).toThrow('DDBC_AverageDemandRateForecast: elements must be between 1 and 288');
    });

    it('should create an instance of DdbcAverageDemandRateForecast from a JSON object', () => {
        const timestamp: string = new Date().toISOString();

        const averageDemandRateForecastElement = new DdbcAverageDemandRateForecastElement({
            duration: 10,
            demand_rate_expected: 50,
        });

        const averageDemandRateForecast = new DdbcAverageDemandRateForecast({
            start_time: timestamp,
            elements: [averageDemandRateForecastElement]
        });

        const json = JSON.stringify(averageDemandRateForecast);
        const parsed = parseMessage(json);

        expect(parsed).toBeInstanceOf(DdbcAverageDemandRateForecast);
        expect(parsed.message_type).toBe('DDBC.AverageDemandRateForecast');
        expect(parsed.message_id).toBeDefined();
        expect(parsed.start_time).toBe(timestamp);
        expect(parsed.elements).toEqual([averageDemandRateForecastElement]);
    });
});