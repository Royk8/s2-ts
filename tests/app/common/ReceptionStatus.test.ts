import { ReceptionStatus } from "../../../src/app/common";
import { parseMessage } from "../../../src/app/services";

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

    it('should create a ReceptionStatus object after parsing it from a json', () => {
        const receptionStatus = new ReceptionStatus({
            subject_message_id: "1",
            status: "OK",
            diagnostic_label: "Test"
        });

        const jsonReceptionStatus = JSON.stringify(receptionStatus, null, 2);
        const parsedReceptionStatus = parseMessage(jsonReceptionStatus);

        expect(parsedReceptionStatus.message_type).toBe("ReceptionStatus");
        expect(parsedReceptionStatus.subject_message_id).toBe("1");
        expect(parsedReceptionStatus.status).toBe("OK");
        expect(parsedReceptionStatus.diagnostic_label).toBe("Test");
    });
});