import { RevokeObject as GenRevokeObject } from "@messages";
import { RevokableObjects } from "@messages";

interface constructorParameters{
    message_id: string;
    object_type: RevokableObjects;
    object_id: string;
}

export class RevokeObject implements GenRevokeObject {
    message_type: "RevokeObject";
    message_id: string;
    object_type: RevokableObjects;
    object_id: string;
    
    constructor(constructorParameters: constructorParameters){
        const { message_id, object_type, object_id } = constructorParameters;

        this.message_type = "RevokeObject";
        this.message_id = message_id;
        this.object_type = object_type;
        this.object_id = object_id;
    }
}