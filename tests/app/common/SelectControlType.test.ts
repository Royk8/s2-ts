import { SelectControlType } from '../../../src/app/common';

describe('SelectControlType', () => {
    it('should create a SelectControlType object', () => {
        const selectControlType = new SelectControlType({
            message_id: "1",
            control_type: "FILL_RATE_BASED_CONTROL"
        });

        expect(selectControlType.message_type).toBe("SelectControlType");
        expect(selectControlType.message_id).toBe("1");
        expect(selectControlType.control_type).toBe("FILL_RATE_BASED_CONTROL");
    });
});