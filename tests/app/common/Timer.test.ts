import { Timer } from "../../../src/app/common";

describe('Timer', () => {
    it('should create a Timer object', () => {
        const timer = new Timer({
            id: "1",
            diagnostic_label: "2",
            duration: 3,
        });

        expect(timer.id).toBe("1");
        expect(timer.diagnostic_label).toBe("2");
        expect(timer.duration).toBe(3);
    });
});