import { FRBC_LeakageBehaviour } from "../../messages/generated";
import { FRBC_LeakageBehaviourElement, ID } from "../../schemas/generated";
export declare class FrbcLeakageBehaviour implements FRBC_LeakageBehaviour {
    message_type: "FRBC.LeakageBehaviour";
    message_id: ID;
    valid_from: string;
    elements: [FRBC_LeakageBehaviourElement, ...FRBC_LeakageBehaviourElement[]];
    constructor(message_id: ID, valid_from: string, elements: [FRBC_LeakageBehaviourElement, ...FRBC_LeakageBehaviourElement[]]);
}
