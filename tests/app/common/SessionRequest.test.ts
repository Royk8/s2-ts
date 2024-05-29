import { SessionRequest } from '../../../src/app/common';
import { parseMessage } from '../../../src/app/services';

describe('SessionRequest', () => {
    it('should create a SessionRequest object', () => {
        const sessionRequest = new SessionRequest({
            message_id: "32141234", 
            request: "TERMINATE", 
            diagnostic_label: "Test"  
        });

        expect(sessionRequest.message_type).toBe("SessionRequest");
        expect(sessionRequest.message_id).toBe("32141234");
        expect(sessionRequest.request).toBe("TERMINATE");
        expect(sessionRequest.diagnostic_label).toBe("Test");
    });

    it('should create a SessionRequest object after parsing it from a json', () => {
        const sessionRequest = new SessionRequest({
            message_id: "32141234", 
            request: "TERMINATE", 
            diagnostic_label: "Test"  
        });

        const jsonSessionRequest = JSON.stringify(sessionRequest, null, 2);
        const parsedSessionRequest = parseMessage(jsonSessionRequest);

        expect(parsedSessionRequest.message_type).toBe("SessionRequest");
        expect(parsedSessionRequest.message_id).toBe("32141234");
        expect(parsedSessionRequest.request).toBe("TERMINATE");
        expect(parsedSessionRequest.diagnostic_label).toBe("Test");
    });
});