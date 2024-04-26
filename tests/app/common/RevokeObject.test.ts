import { RevokeObject } from "../../../src/app/common";

describe('RevokeObject', () => {
    it('should create a RevokeObject object', () => {
        const revokeObject = new RevokeObject({
            message_id: "1",
            object_id: "2",
            object_type: "FRBC.SystemDescription",
        });

        expect(revokeObject.message_type).toBe("RevokeObject");
        expect(revokeObject.message_id).toBe("1");
        expect(revokeObject.object_id).toBe("2");
        expect(revokeObject.object_type).toBe("FRBC.SystemDescription");
    });
});