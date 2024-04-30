import { HandshakeResponse } from '../../../src/app/common/HandshakeResponse';
import { parseMessage } from '../../../src/app/services';

describe('HandshakeResponse', () => {
    it('should create a HandshakeResponse object', () => {
        const handshakeResponse = new HandshakeResponse({
            message_id: '1234',
            selected_protocol_version: '1.0'
        });

        expect(handshakeResponse.message_type).toBe('HandshakeResponse');
        expect(handshakeResponse.message_id).toBe('1234');
        expect(handshakeResponse.selected_protocol_version).toBe('1.0');
    });

    it('should create a HandshakeResponse object after parsing it from a json', () => {
        const handshakeResponse = new HandshakeResponse({
            message_id: '1234',
            selected_protocol_version: '1.0'
        });

        const jsonHandshakeResponse = JSON.stringify(handshakeResponse, null, 2);

        const parsedHanshakeResponse = parseMessage(jsonHandshakeResponse);


        expect(parsedHanshakeResponse.message_type).toBe('HandshakeResponse');
        expect(parsedHanshakeResponse.message_id).toBe('1234');
        expect(parsedHanshakeResponse.selected_protocol_version).toBe('1.0');
    });
});