import { SelectControlType } from '../../../src/app/common';
import { parseMessage } from '../../../src/app/services';

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

    it('should create a SelectControlType object after parsing it from a json', () => {
        const selectControlType = new SelectControlType({
            message_id: "1",
            control_type: "FILL_RATE_BASED_CONTROL"
        });

        const jsonSelectControlType = JSON.stringify(selectControlType, null, 2);
        const parsedSelectControlType = parseMessage(jsonSelectControlType);

        console.log(selectControlType);
        console.log(jsonSelectControlType);
        console.log(parsedSelectControlType);

        expect(parsedSelectControlType.message_type).toBe("SelectControlType");
        expect(parsedSelectControlType.message_id).toBe("1");
        expect(parsedSelectControlType.control_type).toBe("FILL_RATE_BASED_CONTROL");
    });
});