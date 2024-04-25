import { NumberRange as GenNumerRange } from "@schemas";

interface constructorParameters {
    start_of_range: number;
    end_of_range: number;
};

export class NumberRange implements GenNumerRange {
    start_of_range: number;
    end_of_range: number;

    constructor(contractParameters: constructorParameters){
        const { start_of_range, end_of_range } = contractParameters;

        if(start_of_range > end_of_range){
            throw new Error("start_of_range must be less than or equal to end_of_range");
        }
        
        this.start_of_range = start_of_range;
        this.end_of_range = end_of_range;
    }
}