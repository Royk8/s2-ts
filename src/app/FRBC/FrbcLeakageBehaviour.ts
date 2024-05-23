import { FRBC_LeakageBehaviour } from "@messages";
import { ID } from "@schemas";
import { FrbcLeakageBehaviourElement } from "./";
import { Timestamp, validateTimestamp } from "../common";
import { Uuid } from "../services/Uuid";

/**
 * Parameters for constructing a new instance of FrbcLeakageBehaviour.
 */
interface ConstructorParameters {
    /**
     * ID of this message.
     */
    message_id?: ID;
    /**
     * Moment this FRBC.LeakageBehaviour starts to be valid. If the FRBC.LeakageBehaviour is immediately valid, the DateTimeStamp should be now or in the past.
     */
    valid_from: Timestamp;
    /**
     * List of elements that model the leakage behaviour of the buffer. The fill_level_ranges of the elements must be contiguous.
     */
    elements: [FrbcLeakageBehaviourElement, ...FrbcLeakageBehaviourElement[]];
}

export class FrbcLeakageBehaviour implements FRBC_LeakageBehaviour {
    message_type: "FRBC.LeakageBehaviour";
    message_id: ID;
    valid_from: Timestamp;
    elements: [FrbcLeakageBehaviourElement, ...FrbcLeakageBehaviourElement[]];
    
    /**
     * Constructs a new instance of FrbcLeakageBehaviour.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} [constructorParameters.message_id] - ID of this message.
     * @param {Timestamp} constructorParameters.valid_from - Moment this FRBC.LeakageBehaviour starts to be valid.
     * @param {[FrbcLeakageBehaviourElement, ...FrbcLeakageBehaviourElement[]]} constructorParameters.elements - List of elements that model the leakage behaviour of the buffer.
     */
    constructor({ message_id, valid_from, elements }: ConstructorParameters){

        if(elements.length > 288){
            throw new Error("The size of the FRBC_LeakageBehaviourElements array must be between 1 and 288");
        }
        validateTimestamp(valid_from);

        this.message_type = "FRBC.LeakageBehaviour";
        this.message_id = Uuid.generate(message_id);
        this.valid_from = valid_from;

        const elementsArray = elements.map(element => new FrbcLeakageBehaviourElement(element));

        this.elements = elementsArray as [FrbcLeakageBehaviourElement, ...FrbcLeakageBehaviourElement[]];
    }
}
