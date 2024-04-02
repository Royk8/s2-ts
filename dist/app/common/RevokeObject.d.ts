import { RevokeObject as GenRevokeObject } from "../../messages/generated";
import { RevokableObjects } from "../../messages/generated";
export declare class RevokeObject implements GenRevokeObject {
    message_type: "RevokeObject";
    message_id: string;
    object_type: RevokableObjects;
    object_id: string;
    constructor(message_id: string, object_type: RevokableObjects, object_id: string);
}
