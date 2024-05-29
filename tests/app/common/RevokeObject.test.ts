import { RevokeObject } from "../../../src/app/common";
import { parseMessage } from "../../../src/app/services";

describe('RevokeObject', () => {
    it('should create a RevokeObject object', () => {
        const revokeObject = new RevokeObject({
            message_id: "32141234",
            object_id: "2",
            object_type: "FRBC.SystemDescription",
        });

        expect(revokeObject.message_type).toBe("RevokeObject");
        expect(revokeObject.message_id).toBe("32141234");
        expect(revokeObject.object_id).toBe("2");
        expect(revokeObject.object_type).toBe("FRBC.SystemDescription");
    });

    it('should create a RevokeObject object after parsing it from a json', () => {
        const revokeObject = new RevokeObject({
            message_id: "32141234",
            object_id: "2",
            object_type: "FRBC.SystemDescription",
        });

        const jsonRevokeObject = JSON.stringify(revokeObject, null, 2);
        const parsedRevokeObject = parseMessage(jsonRevokeObject);

        expect(parsedRevokeObject.message_type).toBe("RevokeObject");
        expect(parsedRevokeObject.message_id).toBe("32141234");
        expect(parsedRevokeObject.object_id).toBe("2");
        expect(parsedRevokeObject.object_type).toBe("FRBC.SystemDescription");
    });
});