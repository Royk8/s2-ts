import { Timer as GenTimer } from '../../schemas/generated';
import { Duration } from '../../schemas/generated';
export declare class Timer implements GenTimer {
    id: string;
    diagnostic_label?: string;
    duration: Duration;
    constructor(id: string, duration: Duration, diagnostic_label?: string);
}
