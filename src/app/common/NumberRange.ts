import { NumberRange as GenNumerRange } from "@schemas";

export class NumberRange implements GenNumerRange {
    start_of_range: number;
    end_of_range: number;

    constructor(start_of_range: number, end_of_range: number){
        this.start_of_range = start_of_range;
        this.end_of_range = end_of_range;
    }
}