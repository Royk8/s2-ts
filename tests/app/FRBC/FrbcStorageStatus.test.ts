import { FrbcStorageStatus } from '../../../src/app/FRBC';

describe('FrbcStorageStatus', () => {
    it('should create a FrbcStorageStatus object', () => {

        const frbcStorageStatus = new FrbcStorageStatus({
            message_id: "1",
            present_fill_level: 2
        });

        expect(frbcStorageStatus.message_type).toBe("FRBC.StorageStatus");
        expect(frbcStorageStatus.message_id).toBe("1");
        expect(frbcStorageStatus.present_fill_level).toBe(2);
        
    });
});