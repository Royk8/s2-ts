import { SessionRequest } from '../../../src/app/common';

describe('SessionRequest', () => {
    it('should create a SessionRequest object', () => {
        const sessionRequest = new SessionRequest({
            message_id: "1", 
            request: "TERMINATE", 
            diagnostic_label: "Test"  
        });

        expect(sessionRequest.message_type).toBe("SessionRequest");
        expect(sessionRequest.message_id).toBe("1");
        expect(sessionRequest.request).toBe("TERMINATE");
        expect(sessionRequest.diagnostic_label).toBe("Test");
    });
});