import { Transition } from '../../../src/app/common';

describe('Transition', () => {
    it('should create a Transition object', () => {
        const transition = new Transition({
            id: "32141234",
            from: "2",
            to: "3",
            start_timers: ["4"],
            blocking_timers: ["5"],
            transition_costs: 6,
            transition_duration: 7,
            abnormal_condition_only: true
        });

        expect(transition.id).toBe("32141234");
        expect(transition.from).toBe("2");
        expect(transition.to).toBe("3");
        expect(transition.start_timers).toStrictEqual(["4"]);
        expect(transition.blocking_timers).toStrictEqual(["5"]);
        expect(transition.transition_costs).toBe(6);
        expect(transition.transition_duration).toBe(7);
        expect(transition.abnormal_condition_only).toBe(true);

    });

    it('should throw an error if the size of the start_timers is greater than 1000', () => {
        expect(() => {
            new Transition({
                id: "32141234",
                from: "2",
                to: "3",
                start_timers: new Array(1001).fill("4"),
                blocking_timers: ["5"],
                transition_costs: 6,
                transition_duration: 7,
                abnormal_condition_only: true
            });
        }).toThrow('Transition: start_timers must be between 0 and 100 elements');
    });

    it('should throw an error if the size of the blocking_timers is greater than 1000', () => {
        expect(() => {
            new Transition({
                id: "32141234",
                from: "2",
                to: "3",
                start_timers: ["4"],
                blocking_timers: new Array(1001).fill("5"),
                transition_costs: 6,
                transition_duration: 7,
                abnormal_condition_only: true
            });
        }).toThrow('Transition: blocking_timers must be between 0 and 100 elements');
    });

});