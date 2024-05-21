import { NumberRange as GenNumberRange } from "@schemas";

interface ConstructorParameters {
    start_of_range: number;
    end_of_range: number;
};

export class NumberRange implements GenNumberRange {
    start_of_range: number;
    end_of_range: number;

    constructor({ start_of_range, end_of_range }: ConstructorParameters){

        this.Validate({ start_of_range, end_of_range });
        
        this.start_of_range = start_of_range;
        this.end_of_range = end_of_range;
    }

    public Validate({ start_of_range, end_of_range }: ConstructorParameters): void {
        if(start_of_range > end_of_range){
            throw new Error("start_of_range must be less than or equal to end_of_range");
        }
    }
}