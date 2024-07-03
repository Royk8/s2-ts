import { NumberRange } from '../../../src/app/common/NumberRange';

describe('NumberRange', () => {
    it('should create a NumberRange object', () => {
        const numberRange = new NumberRange({
            start_of_range: 1,
            end_of_range: 10
        });

        expect(numberRange.start_of_range).toBe(1);
        expect(numberRange.end_of_range).toBe(10);
    });

    it('should throw an error if start_of_range is greater than end_of_range', () => {
        expect(() => {
            new NumberRange({
                start_of_range: 11,
                end_of_range: 10
            });
        }).toThrow('start_of_range must be less than or equal to end_of_range');
    });
});

describe('NumberRange', () => {
    it ('should create a NumberRange object receiving only', () => {
        const numberRange = new NumberRange(1, 10)

        expect(numberRange.start_of_range).toBe(1);
        expect(numberRange.end_of_range).toBe(10);
    });
});