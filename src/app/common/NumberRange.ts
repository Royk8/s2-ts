import { NumberRange as GenNumberRange } from "@schemas";

/**
 * Parameters for constructing a new instance of NumberRange.
 */
interface ConstructorParameters {
    /**
     * Number that defines the start of the range.
     */
    start_of_range: number;
    /**
     * Number that defines the end of the range.
     */
    end_of_range: number;
}

export class NumberRange implements GenNumberRange {
    start_of_range: number;
    end_of_range: number;

    /**
     * Constructs a new instance of NumberRange.
     * 
     * @param {ConstructorParameters} params - The parameters for the constructor.
     * @param {number} params.start_of_range - The number that defines the start of the range.
     * @param {number} params.end_of_range - The number that defines the end of the range.
     */
    constructor({ start_of_range, end_of_range }: ConstructorParameters) {
        this.Validate({ start_of_range, end_of_range });

        this.start_of_range = start_of_range;
        this.end_of_range = end_of_range;
    }

    /**
     * Validates the range parameters.
     * 
     * @param {ConstructorParameters} params - The parameters to validate.
     * @param {number} params.start_of_range - The number that defines the start of the range.
     * @param {number} params.end_of_range - The number that defines the end of the range.
     * @throws {Error} If start_of_range is greater than end_of_range.
     */
    public Validate({ start_of_range, end_of_range }: ConstructorParameters): void {
        if (start_of_range > end_of_range) {
            throw new Error("start_of_range must be less than or equal to end_of_range");
        }
    }
}
