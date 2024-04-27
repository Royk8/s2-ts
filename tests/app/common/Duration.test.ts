import { Duration, validateDuration } from "../../../src/app/common/Duration";

describe('Duration', () => {
    it('should create a Duration object', () => {
        const duration : Duration = 10;

        expect(() => validateDuration(duration)).not.toThrow("duration must be a positive integer");
        //expect(() => validateDuration(duration)).not.toThrow();
    });

    it('should return false for negative duration', () => {
        const duration : Duration = -10;

        expect(() => validateDuration(duration)).toThrow("duration must be a positive integer");
    });
});