import { Handshake } from '../../../src/app/common';
import { parseMessage } from '../../../src/app/services';

describe('Handshake', () => {
    it('should create a Handshake object', () => {
        const handshake = new Handshake({
            message_id: '1234',
            role: 'CEM',
            supported_protocol_versions: ['1.0', '2.0']
        });

        expect(handshake.message_type).toBe('Handshake');
        expect(handshake.message_id).toBe('1234');
        expect(handshake.role).toBe('CEM');
        expect(handshake.supported_protocol_versions).toStrictEqual(['1.0', '2.0']);
    });

    it('should create a HandshakeObject after parsing it from a json', () => {
        const handshake = new Handshake({
            message_id: "1234",
            role: 'CEM',
            supported_protocol_versions: ['1.0', '2.0']
        })

        const jsonHandshake = JSON.stringify(handshake, null, 2);

        const parsedHanshake = parseMessage(jsonHandshake);

        console.log(jsonHandshake);

        expect(parsedHanshake.message_type).toBe('Handshake');
        expect(parsedHanshake.message_id).toBe('1234');
        expect(parsedHanshake.role).toBe('CEM');
        expect(parsedHanshake.supported_protocol_versions).toStrictEqual(['1.0', '2.0']);
    })
});

