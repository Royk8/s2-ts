import { Handshake } from '../../../src/app/common/Handshake';

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
});

