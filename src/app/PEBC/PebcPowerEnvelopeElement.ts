import { PEBC_PowerEnvelopeElement } from "@schemas";
import { Duration, validateDuration } from "../common";

interface ConstructorParameters {
    duration: Duration;
    upper_limit: number;
    lower_limit: number;
}

export class PebcPowerEnvelopeElement implements PEBC_PowerEnvelopeElement{
    duration: Duration;
    upper_limit: number;
    lower_limit: number;

    constructor({duration, upper_limit, lower_limit}: ConstructorParameters){
        this.Validate({duration, upper_limit, lower_limit});
        this.duration = duration;
        this.upper_limit = upper_limit;
        this.lower_limit = lower_limit;
    }

    public Validate({duration, upper_limit, lower_limit}: ConstructorParameters) : void {
        if(upper_limit < lower_limit){
            throw new Error("PowerEnvelopeElement: Upper limit must be greater than or equal to lower limit");
        }
        validateDuration(duration);
    }
}