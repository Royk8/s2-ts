import { FrbcLeakageBehaviour, FrbcLeakageBehaviourElement } from '../../../src/app/FRBC';
import { NumberRange } from '../../../src/app/common';
import { parseMessage } from '../../../src/app/services';

describe('FrbcLeakageBehaviour', () => {
    it('should create a FrbcLeakageBehaviour object', () => {

        const frbcLeakageBehaviour = new FrbcLeakageBehaviour({
            message_id: "1",
            valid_from: "2",
            elements: [
                new FrbcLeakageBehaviourElement({
                fill_level_range: new NumberRange({ start_of_range: 3, end_of_range: 4 }),
                leakage_rate: 5
            })]
        });

        expect(frbcLeakageBehaviour.message_type).toBe("FRBC.LeakageBehaviour");
        expect(frbcLeakageBehaviour.message_id).toBe("1");
        expect(frbcLeakageBehaviour.valid_from).toBe("2");
        expect(frbcLeakageBehaviour.elements).toStrictEqual([
            new FrbcLeakageBehaviourElement({
            fill_level_range: new NumberRange({ start_of_range: 3, end_of_range: 4 }),
            leakage_rate: 5
        })]);

    });

    it('should throw an error if the size of the elements is greater than 288', () => {

        expect(() => {
            
            const element = new FrbcLeakageBehaviourElement({
                fill_level_range: new NumberRange({ start_of_range: 3, end_of_range: 4 }),
                leakage_rate: 5
            });

            new FrbcLeakageBehaviour({
            message_id: "1",
            valid_from: "2",
            elements: [element, ... new Array(288).fill(element)]
            
        })}).toThrow("The size of the FRBC_LeakageBehaviourElements array must be between 1 and 288");
    });

    it('should create a FrbcLeakageBehaviour object after parsing it from a json', () => {
        const frbcLeakageBehaviour = new FrbcLeakageBehaviour({
            message_id: "1",
            valid_from: "2",
            elements: [
                new FrbcLeakageBehaviourElement({
                fill_level_range: new NumberRange({ start_of_range: 3, end_of_range: 4 }),
                leakage_rate: 5
            })]
        });

        const jsonFrbcLeakageBehaviour = JSON.stringify(frbcLeakageBehaviour, null, 2);
        const parsedFrbcLeakageBehaviour = parseMessage(jsonFrbcLeakageBehaviour);

        expect(parsedFrbcLeakageBehaviour.message_type).toBe("FRBC.LeakageBehaviour");
        expect(parsedFrbcLeakageBehaviour.message_id).toBe("1");
        expect(parsedFrbcLeakageBehaviour.valid_from).toBe("2");
        expect(parsedFrbcLeakageBehaviour.elements).toStrictEqual([
            new FrbcLeakageBehaviourElement({
            fill_level_range: new NumberRange({ start_of_range: 3, end_of_range: 4 }),
            leakage_rate: 5
        })]);
    });

});