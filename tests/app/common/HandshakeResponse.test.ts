import { HandshakeResponse } from '../../../src/app/common/HandshakeResponse';

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
});