import { NumberRange as GenNumerRange } from "../../schemas/generated";
export declare class NumberRange implements GenNumerRange {
    start_of_range: number;
    end_of_range: number;
    constructor(start_of_range: number, end_of_range: number);
}
