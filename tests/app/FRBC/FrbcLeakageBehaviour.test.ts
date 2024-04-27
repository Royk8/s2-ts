import { FrbcLeakageBehaviour, FrbcLeakageBehaviourElement } from '../../../src/app/FRBC';

describe('FrbcLeakageBehaviour', () => {
    it('should create a FrbcLeakageBehaviour object', () => {

        const frbcLeakageBehaviour = new FrbcLeakageBehaviour({
            message_id: "1",
            valid_from: "2",
            elements: [{
                fill_level_range: { start_of_range: 3, end_of_range: 4 },
                leakage_rate: 5
            }]
        });

        expect(frbcLeakageBehaviour.message_type).toBe("FRBC.LeakageBehaviour");
        expect(frbcLeakageBehaviour.message_id).toBe("1");
        expect(frbcLeakageBehaviour.valid_from).toBe("2");
        expect(frbcLeakageBehaviour.elements).toStrictEqual([{
            fill_level_range: { start_of_range: 3, end_of_range: 4 },
            leakage_rate: 5
        }]);

    });

    it('should throw an error if the size of the elements is greater than 288', () => {

        expect(() => {
            
            const element = new FrbcLeakageBehaviourElement({
                fill_level_range: { start_of_range: 3, end_of_range: 4 },
                leakage_rate: 5
            });

            new FrbcLeakageBehaviour({
            message_id: "1",
            valid_from: "2",
            elements: [element, ... new Array(288).fill(element)]
            
        })}).toThrow("The size of the FRBC_LeakageBehaviourElements array must be between 1 and 288");
    });

});