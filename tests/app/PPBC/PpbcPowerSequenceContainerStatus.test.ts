import { PpbcPowerSequenceContainerStatus } from "../../../src/app/PPBC";

describe('PpbcPowerSequenceContainerStatus', () => {

    it('should create an instance of PpbcPowerSequenceContainerStatus', () => {

        const ppbcPowerSequenceContainerStatus = new PpbcPowerSequenceContainerStatus({
            power_profile_id: "123",
            sequence_container_id: "123",
            selected_sequence_id: "123",
            progress: 1,
            status: "SCHEDULED"
        });

        expect(ppbcPowerSequenceContainerStatus).toBeInstanceOf(PpbcPowerSequenceContainerStatus);
        expect(ppbcPowerSequenceContainerStatus.power_profile_id).toBe("123");
        expect(ppbcPowerSequenceContainerStatus.sequence_container_id).toBe("123");
        expect(ppbcPowerSequenceContainerStatus.selected_sequence_id).toBe("123");
        expect(ppbcPowerSequenceContainerStatus.progress).toBe(1);
        expect(ppbcPowerSequenceContainerStatus.status).toBe("SCHEDULED");
                
    });
});