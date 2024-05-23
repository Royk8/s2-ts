import { OmbcTimerStatus } from '../../../src/app/OMBC/OmbcTimerStatus';
import { parseMessage } from '../../../src/app/services';

describe('OmbcTimerStatus', () => {
    it('should create an instance of OmbcTimerStatus', () => {

        const timestamp = new Date().toISOString();

        const ombcTimerStatus = new OmbcTimerStatus({
            timer_id: 'timer_id',
            finished_at: timestamp
        });

        expect(ombcTimerStatus).toBeInstanceOf(OmbcTimerStatus);
        expect(ombcTimerStatus.message_type).toBe('OMBC.TimerStatus');
        expect(ombcTimerStatus.message_id).toBeDefined();
        expect(ombcTimerStatus.timer_id).toBe('timer_id');
        expect(ombcTimerStatus.finished_at).toBe(timestamp);
    });

    it('should create an instance of OmbcTimerStatus from a json', () => {
        const timestamp = new Date().toISOString();
        const ombcTimerStatus = new OmbcTimerStatus({
            timer_id: 'timer_id',
            finished_at: timestamp
        });

        const json = JSON.stringify(ombcTimerStatus);
        const parsedOmbcTimerStatus = parseMessage(json);

        expect(parsedOmbcTimerStatus).toBeInstanceOf(OmbcTimerStatus);
        expect(parsedOmbcTimerStatus.message_type).toBe('OMBC.TimerStatus');
        expect(ombcTimerStatus.message_id).toBeDefined();
        expect(parsedOmbcTimerStatus.timer_id).toBe('timer_id');
        expect(parsedOmbcTimerStatus.finished_at).toBe(timestamp);

    });
});