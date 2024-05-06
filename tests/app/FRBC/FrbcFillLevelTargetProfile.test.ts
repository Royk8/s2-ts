import { FrbcFillLevelTargetProfile, FrbcFillLevelTargetProfileElement } from '../../../src/app/FRBC';
import { parseMessage } from '../../../src/app/services';

describe('FrbcFillLevelTargetProfile', () => {
    it('should create a FrbcFillLevelTargetProfile object', () => {

        const frbcFillLevelTargetProfile = new FrbcFillLevelTargetProfile({
            message_id: "1",
            start_time: "2",
            elements: [{
                duration: 3,
                fill_level_range: { start_of_range: 4, end_of_range: 5 }
            }]
        });

        expect(frbcFillLevelTargetProfile.message_type).toBe("FRBC.FillLevelTargetProfile");
        expect(frbcFillLevelTargetProfile.message_id).toBe("1");
        expect(frbcFillLevelTargetProfile.start_time).toBe("2");
        expect(frbcFillLevelTargetProfile.elements).toStrictEqual([{
            duration: 3,
            fill_level_range: { start_of_range: 4, end_of_range: 5 }
        }]);

    });

    it('should throw an error if the size of the elements is greater than 288', () => {

        expect(() => {
            
            const element = new FrbcFillLevelTargetProfileElement({
                duration: 3,
                fill_level_range: { start_of_range: 4, end_of_range: 5 }
            });

            new FrbcFillLevelTargetProfile({
            message_id: "1",
            start_time: "2",
            elements: [element, ... new Array(288).fill(element)]
            
        })}).toThrow("The size of the FRBC_FillLevelTargetProfileElements array must be between 1 and 288");
    });

    it('should create a FrbcFillLevelTargetProfile object after parsing it from a json', () => {
        const frbcFillLevelTargetProfile = new FrbcFillLevelTargetProfile({
            message_id: "1",
            start_time: "2",
            elements: [{
                duration: 3,
                fill_level_range: { start_of_range: 4, end_of_range: 5 }
            }]
        });

        const jsonFrbcFillLevelTargetProfile = JSON.stringify(frbcFillLevelTargetProfile, null, 2);
        const parsedFrbcFillLevelTargetProfile = parseMessage(jsonFrbcFillLevelTargetProfile);

        expect(parsedFrbcFillLevelTargetProfile.message_type).toBe("FRBC.FillLevelTargetProfile");
        expect(parsedFrbcFillLevelTargetProfile.message_id).toBe("1");
        expect(parsedFrbcFillLevelTargetProfile.start_time).toBe("2");
        expect(parsedFrbcFillLevelTargetProfile.elements).toStrictEqual([{
            duration: 3,
            fill_level_range: { start_of_range: 4, end_of_range: 5 }
        }]);
    });

});