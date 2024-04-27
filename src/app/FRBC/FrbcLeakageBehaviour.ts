import { FRBC_LeakageBehaviour } from "@messages";
import { ID } from "@schemas";
import { FrbcLeakageBehaviourElement } from "./";

interface constructorParameters{
    message_id: ID;
    valid_from: string;
    elements: [FrbcLeakageBehaviourElement, ...FrbcLeakageBehaviourElement[]];
}

export class FrbcLeakageBehaviour implements FRBC_LeakageBehaviour {
    message_type: "FRBC.LeakageBehaviour";
    message_id: ID;
    valid_from: string;
    elements: [FrbcLeakageBehaviourElement, ...FrbcLeakageBehaviourElement[]];
    
    constructor(constructorParameters: constructorParameters){
        const { message_id, valid_from, elements } = constructorParameters;

        if(elements.length > 288){
            throw new Error("The size of the FRBC_LeakageBehaviourElements array must be between 1 and 288");
        }

        this.message_type = "FRBC.LeakageBehaviour";
        this.message_id = message_id;
        this.valid_from = valid_from;
        this.elements = elements;
    }
}