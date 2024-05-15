import { Timer as GenTimer} from '@schemas';
import { Duration, validateDuration } from './Duration';
import { ID } from "@schemas";
import { Uuid } from '../services/Uuid';

interface ConstructorParameters{
    id?: ID;
    duration: Duration;
    diagnostic_label?: string;
}

export class Timer implements GenTimer {
    id: ID;
    diagnostic_label?: string;
    duration: Duration;

    constructor(constructorParameters: ConstructorParameters){
        const { id, duration, diagnostic_label } = constructorParameters;

        validateDuration(duration);      
        
        this.id = Uuid.generate(id);
        this.duration = duration;
        this.diagnostic_label = diagnostic_label;
    }
}