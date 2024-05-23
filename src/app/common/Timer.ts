import { Timer as GenTimer, ID } from '@schemas';
import { Duration, validateDuration } from './Duration';
import { Uuid } from '../services/Uuid';

/**
 * Parameters for constructing a new instance of Timer.
 */
interface ConstructorParameters {
    /**
     * ID of the Timer. Must be unique in the scope of the OMBC.SystemDescription, FRBC.ActuatorDescription, or DDBC.ActuatorDescription in which it is used.
     */
    id?: ID;
    /**
     * The time it takes for the Timer to finish after it has been started.
     */
    duration: Duration;
    /**
     * Human-readable name/description of the Timer. This element is only intended for diagnostic purposes and not for HMI applications.
     */
    diagnostic_label?: string;
}

export class Timer implements GenTimer {
    id: ID;
    diagnostic_label?: string;
    duration: Duration;

    /**
     * Constructs a new instance of Timer.
     * 
     * @param {ConstructorParameters} params - The parameters for the constructor.
     * @param {ID} [params.id] - The ID of the Timer. Must be unique in its scope. If not provided, a new UUID will be generated.
     * @param {Duration} params.duration - The duration of the Timer.
     * @param {string} [params.diagnostic_label] - A human-readable description for diagnostic purposes (optional).
     */
    constructor({ id, duration, diagnostic_label }: ConstructorParameters) {
        validateDuration(duration);
        
        this.id = Uuid.generate(id);
        this.duration = duration;
        this.diagnostic_label = diagnostic_label;
    }
}
