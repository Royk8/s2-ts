import { Timer as GenTimer} from '@schemas';
import { Duration, isDuration } from './Duration';
import { ID } from "@schemas";

interface constructorParameters{
    id: ID;
    duration: Duration;
    diagnostic_label?: string;
}

export class Timer implements GenTimer {
    id: ID;
    diagnostic_label?: string;
    duration: Duration;

    constructor(constructorParameters: constructorParameters){
        const { id, duration, diagnostic_label } = constructorParameters;


        if(!isDuration(duration)){
            throw new Error("Timer: duration is not a valid Duration");
        }
        
        this.id = id;
        this.duration = duration;
        this.diagnostic_label = diagnostic_label;
    }
}