import { FrbcStorageStatus } from '../../../src/app/FRBC';
import { parseMessage } from '../../../src/app/services';

describe('FrbcStorageStatus', () => {
    it('should create a FrbcStorageStatus object', () => {

        const frbcStorageStatus = new FrbcStorageStatus({
            message_id: "32141234",
            present_fill_level: 2
        });

        expect(frbcStorageStatus.message_type).toBe("FRBC.StorageStatus");
        expect(frbcStorageStatus.message_id).toBe("32141234");
        expect(frbcStorageStatus.present_fill_level).toBe(2);
        
    });

    it('should create a FrbcStorageStatus object after parsing it from a json', () => {
        const frbcStorageStatus = new FrbcStorageStatus({
            message_id: "32141234",
            present_fill_level: 2
        });

        const jsonFrbcStorageStatus = JSON.stringify(frbcStorageStatus, null, 2);
        const parsedFrbcStorageStatus = parseMessage(jsonFrbcStorageStatus);

        expect(parsedFrbcStorageStatus.message_type).toBe("FRBC.StorageStatus");
        expect(parsedFrbcStorageStatus.message_id).toBe("32141234");
        expect(parsedFrbcStorageStatus.present_fill_level).toBe(2);
    });
});