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
     * Supports both positional and named parameters.
     * 
     * @param {ConstructorParameters} params - The parameters for the constructor.
     * @param {number} params.start_of_range - The number that defines the start of the range.
     * @param {number} params.end_of_range - The number that defines the end of the range.
     */


    constructor(start_of_range: number, end_of_range: number);
    constructor(params: ConstructorParameters);
    constructor(paramsOrStart: ConstructorParameters | number, endOfRange ?: number) {
        let start_of_range: number;
        let end_of_range: number;   

        if (typeof paramsOrStart === "number" && typeof endOfRange === "number") {
            start_of_range = paramsOrStart;
            end_of_range = endOfRange;
        } else if (typeof paramsOrStart === "object" && typeof endOfRange === "undefined") {
            start_of_range = paramsOrStart.start_of_range;
            end_of_range = paramsOrStart.end_of_range;
        } else {
            throw new Error("Invalid constructor arguments");
        }

        if (start_of_range > end_of_range) {
            throw new Error("start_of_range must be less than or equal to end_of_range");
        }

        this.start_of_range = start_of_range;
        this.end_of_range = end_of_range;
    }
}
