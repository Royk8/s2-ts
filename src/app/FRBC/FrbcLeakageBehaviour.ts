import { FRBC_LeakageBehaviour } from "@messages";
import { FRBC_LeakageBehaviourElement, ID } from "@schemas";

export class FrbcLeakageBehaviour implements FRBC_LeakageBehaviour {
    message_type: "FRBC.LeakageBehaviour";
    message_id: ID;
    valid_from: string;
    elements: [FRBC_LeakageBehaviourElement, ...FRBC_LeakageBehaviourElement[]];
    
    constructor(message_id: ID, valid_from: string, elements: [FRBC_LeakageBehaviourElement, ...FRBC_LeakageBehaviourElement[]]){
        this.message_id = message_id;
        this.valid_from = valid_from;
        this.elements = elements;
    }
}