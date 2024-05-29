import { DdbcTimerStatus } from '../../../src/app/DDBC/DdbcTimerStatus';

describe('DdbcTimerStatus', () => {
    it('shoould create a DdbcTimerStatus object', () => {
        const timestamp: string = new Date().toISOString();

        const ddbcTimerStatus = new DdbcTimerStatus({
            timer_id: '32141234',
            actuator_id: '3',
            finished_at: timestamp
        });

        expect(ddbcTimerStatus).toBeInstanceOf(DdbcTimerStatus);
        expect(ddbcTimerStatus.message_type).toBe('DDBC.TimerStatus');
        expect(ddbcTimerStatus.message_id).toBeDefined();
        expect(ddbcTimerStatus.timer_id).toBe('32141234');
        expect(ddbcTimerStatus.actuator_id).toBe('3');
        expect(ddbcTimerStatus.finished_at).toBe(timestamp);
    });
});