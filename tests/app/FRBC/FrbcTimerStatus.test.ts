import { FrbcTimerStatus } from "../../../src/app/FRBC";

describe('FrbcTimerStatus', () => {
    it('should create a FrbcTimerStatus object', () => {

        const frbcTimerStatus = new FrbcTimerStatus({
            message_id: "1",
            timer_id: "2",
            actuator_id: "3",
            finished_at: "4"
        });

        expect(frbcTimerStatus.message_type).toBe("FRBC.TimerStatus");
        expect(frbcTimerStatus.message_id).toBe("1");
        expect(frbcTimerStatus.timer_id).toBe("2");
        expect(frbcTimerStatus.actuator_id).toBe("3");
        expect(frbcTimerStatus.finished_at).toBe("4");
        
    });
});