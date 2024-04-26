import { Duration, isDuration } from "../../../src/app/common/Duration";

describe('Duration', () => {
    it('should create a Duration object', () => {
        const duration : Duration = 10;

        expect(isDuration(duration)).toBe(true);
    });

    it('should return false for negative duration', () => {
        const duration : Duration = -10;

        expect(isDuration(duration)).toBe(false);
    });
});