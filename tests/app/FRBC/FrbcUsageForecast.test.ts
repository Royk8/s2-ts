import { FrbcUsageForecast } from '../../../src/app/FRBC/FrbcUsageForecast';
import { FrbcUsageForecastElement } from '../../../src/app/FRBC/FrbcUsageForecastElement';
import { parseMessage } from '../../../src/app/services';

describe('FrbcUsageForecast', () => {
    it('should create a FrbcUsageForecast object', () => {

        const element: FrbcUsageForecastElement = {
            duration: 10,
            usage_rate_upper_limit: 1,
            usage_rate_upper_95PPR: 2,
            usage_rate_upper_68PPR: 3,
            usage_rate_expected: 4,
            usage_rate_lower_68PPR: 5,
            usage_rate_lower_95PPR: 6,
            usage_rate_lower_limit: 7
        };

        const frbcUsageForecast = new FrbcUsageForecast({
            message_id: "1",
            start_time: "2021-01-01T00:00:00Z",
            elements: [element]
        });

        expect(frbcUsageForecast.message_type).toBe("FRBC.UsageForecast");
        expect(frbcUsageForecast.message_id).toBe("1");
        expect(frbcUsageForecast.start_time).toBe("2021-01-01T00:00:00Z");
        expect(frbcUsageForecast.elements[0].duration).toBe(10);
        expect(frbcUsageForecast.elements[0].usage_rate_upper_limit).toBe(1);
        expect(frbcUsageForecast.elements[0].usage_rate_upper_95PPR).toBe(2);
        expect(frbcUsageForecast.elements[0].usage_rate_upper_68PPR).toBe(3);
        expect(frbcUsageForecast.elements[0].usage_rate_expected).toBe(4);
        expect(frbcUsageForecast.elements[0].usage_rate_lower_68PPR).toBe(5);
        expect(frbcUsageForecast.elements[0].usage_rate_lower_95PPR).toBe(6);
        expect(frbcUsageForecast.elements[0].usage_rate_lower_limit).toBe(7);

    });

    it('should throw an error if the size of the elements is greater than 288', () => {

        expect(() => {

            const element: FrbcUsageForecastElement = {
                duration: 10,
                usage_rate_upper_limit: 1,
                usage_rate_upper_95PPR: 2,
                usage_rate_upper_68PPR: 3,
                usage_rate_expected: 4,
                usage_rate_lower_68PPR: 5,
                usage_rate_lower_95PPR: 6,
                usage_rate_lower_limit: 7
            };

            new FrbcUsageForecast({
                message_id: "1",
                start_time: "2021-01-01T00:00:00Z",
                elements: [element, ... new Array(288).fill(element)]

            })
        }).toThrow("The size of the FRBC_UsageForecastElements array must be between 1 and 288");
    });

    it('should create a FrbcUsageForecast object after parsing it from a json', () => {
        const element: FrbcUsageForecastElement = {
            duration: 10,
            usage_rate_upper_limit: 1,
            usage_rate_upper_95PPR: 2,
            usage_rate_upper_68PPR: 3,
            usage_rate_expected: 4,
            usage_rate_lower_68PPR: 5,
            usage_rate_lower_95PPR: 6,
            usage_rate_lower_limit: 7
        };

        const frbcUsageForecast = new FrbcUsageForecast({
            message_id: "1",
            start_time: "2021-01-01T00:00:00Z",
            elements: [element]
        });

        const jsonFrbcUsageForecast = JSON.stringify(frbcUsageForecast, null, 2);
        const parsedFrbcUsageForecast = parseMessage(jsonFrbcUsageForecast);

        expect(parsedFrbcUsageForecast.message_type).toBe("FRBC.UsageForecast");
        expect(parsedFrbcUsageForecast.message_id).toBe("1");
        expect(parsedFrbcUsageForecast.start_time).toBe("2021-01-01T00:00:00Z");
        expect(parsedFrbcUsageForecast.elements[0].duration).toBe(10);
        expect(parsedFrbcUsageForecast.elements[0].usage_rate_upper_limit).toBe(1);
        expect(parsedFrbcUsageForecast.elements[0].usage_rate_upper_95PPR).toBe(2);
        expect(parsedFrbcUsageForecast.elements[0].usage_rate_upper_68PPR).toBe(3);
        expect(parsedFrbcUsageForecast.elements[0].usage_rate_expected).toBe(4);
        expect(parsedFrbcUsageForecast.elements[0].usage_rate_lower_68PPR).toBe(5);
        expect(parsedFrbcUsageForecast.elements[0].usage_rate_lower_95PPR).toBe(6);
        expect(parsedFrbcUsageForecast.elements[0].usage_rate_lower_limit).toBe(7);
    });
});