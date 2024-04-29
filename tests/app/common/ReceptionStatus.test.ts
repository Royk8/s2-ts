import { ReceptionStatus } from "../../../src/app/common";

describe('ReceptionStatus', () => {
    it('should create a ReceptionStatus object', () => {
        const receptionStatus = new ReceptionStatus({
            subject_message_id: "1",
            status: "OK",
            diagnostic_label: "Test"
        });

        expect(receptionStatus.message_type).toBe("ReceptionStatus");
        expect(receptionStatus.subject_message_id).toBe("1");
        expect(receptionStatus.status).toBe("OK");
        expect(receptionStatus.diagnostic_label).toBe("Test");
    });
});