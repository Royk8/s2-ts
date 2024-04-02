import { RevokeObject as GenRevokeObject } from "@messages";
import { RevokableObjects } from "@messages";

export class RevokeObject implements GenRevokeObject {
    message_type: "RevokeObject";
    message_id: string;
    object_type: RevokableObjects;
    object_id: string;
    
    constructor(message_id: string, object_type: RevokableObjects, object_id: string){
        this.message_id = message_id;
        this.object_type = object_type;
        this.object_id = object_id;
    }
}