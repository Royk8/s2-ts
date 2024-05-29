import { SelectControlType } from '../../../src/app/common';
import { parseMessage } from '../../../src/app/services';

describe('SelectControlType', () => {
    it('should create a SelectControlType object', () => {
        const selectControlType = new SelectControlType({
            message_id: "32141234",
            control_type: "FILL_RATE_BASED_CONTROL"
        });

        expect(selectControlType.message_type).toBe("SelectControlType");
        expect(selectControlType.message_id).toBe("32141234");
        expect(selectControlType.control_type).toBe("FILL_RATE_BASED_CONTROL");
    });

    it('should create a SelectControlType object after parsing it from a json', () => {
        const selectControlType = new SelectControlType({
            message_id: "32141234",
            control_type: "FILL_RATE_BASED_CONTROL"
        });

        const jsonSelectControlType = JSON.stringify(selectControlType, null, 2);
        const parsedSelectControlType = parseMessage(jsonSelectControlType);

        expect(parsedSelectControlType.message_type).toBe("SelectControlType");
        expect(parsedSelectControlType.message_id).toBe("32141234");
        expect(parsedSelectControlType.control_type).toBe("FILL_RATE_BASED_CONTROL");
    });
});