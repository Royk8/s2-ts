import { Timestamp, validateTimestamp } from '../../../src/app/common';

describe('Timestamp', () => {
    it('should validate a valid timestamp', () => {
        const timestamp: Timestamp = '2021-01-01T00:00:00Z';
        expect(() => validateTimestamp(timestamp)).not.toThrow();
    });

    it('should throw an error for an invalid timestamp', () => {
        const timestamp: Timestamp = 'invalid';
        expect(() => validateTimestamp(timestamp)).toThrow();
    });
});