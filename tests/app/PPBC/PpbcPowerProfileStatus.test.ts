import { PpbcPowerProfileStatus, PpbcPowerSequenceContainerStatus } from '../../../src/app/PPBC';
import { parseMessage } from '../../../src/app/services';

describe('PpbcPowerProfileStatus', () => {

    it('should create an instance of PpbcPowerProfileStatus', () => {

        const ppbcPowerSequenceContainerStatus = new PpbcPowerSequenceContainerStatus({
            power_profile_id: "123",
            sequence_container_id: "123",
            selected_sequence_id: "123",
            progress: 1,
            status: "SCHEDULED"
        });

        const ppbcPowerProfileStatus = new PpbcPowerProfileStatus({
            message_id: "123",
            sequence_container_status: [ppbcPowerSequenceContainerStatus]
        });

        expect(ppbcPowerProfileStatus).toBeInstanceOf(PpbcPowerProfileStatus);
        expect(ppbcPowerProfileStatus.message_type).toBe("PPBC.PowerProfileStatus");
        expect(ppbcPowerProfileStatus.message_id).toBeDefined();
        expect(ppbcPowerProfileStatus.sequence_container_status).toEqual([ppbcPowerSequenceContainerStatus]);

    });

    it('should create an instance of PpbcPowerProfileStatus from a json', () => {

        const ppbcPowerSequenceContainerStatus = new PpbcPowerSequenceContainerStatus({
            power_profile_id: "123",
            sequence_container_id: "123",
            selected_sequence_id: "123",
            progress: 1,
            status: "SCHEDULED"
        });

        const ppbcPowerProfileStatus = new PpbcPowerProfileStatus({
            message_id: "123",
            sequence_container_status: [ppbcPowerSequenceContainerStatus]
        });

        const json = JSON.stringify(ppbcPowerProfileStatus);
        const parsed = parseMessage(json);

        expect(parsed).toBeInstanceOf(PpbcPowerProfileStatus);
        expect(parsed.message_type).toBe("PPBC.PowerProfileStatus");
        expect(parsed.message_id).toBeDefined();
        expect(parsed.sequence_container_status).toEqual([ppbcPowerSequenceContainerStatus]);
    });

});