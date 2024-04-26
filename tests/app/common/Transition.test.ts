import { Transition } from '../../../src/app/common';

describe('Transition', () => {
    it('should create a Transition object', () => {
        const transition = new Transition({
            id: "1",
            from: "2",
            to: "3",
            start_timers: ["4"],
            blocking_timers: ["5"],
            transition_costs: 6,
            transition_duration: 7,
            abnormal_condition_only: true
        });

        expect(transition.id).toBe("1");
        expect(transition.from).toBe("2");
        expect(transition.to).toBe("3");
        expect(transition.start_timers).toStrictEqual(["4"]);
        expect(transition.blocking_timers).toStrictEqual(["5"]);
        expect(transition.transition_costs).toBe(6);
        expect(transition.transition_duration).toBe(7);
        expect(transition.abnormal_condition_only).toBe(true);

    });
});