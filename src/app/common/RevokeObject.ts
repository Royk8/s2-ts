import { RevokeObject as GenRevokeObject } from "@messages";
import { RevokableObjects } from "@messages";
import { ID } from "@schemas";

interface constructorParameters{
    message_id: ID;
    object_type: RevokableObjects;
    object_id: ID;
}

export class RevokeObject implements GenRevokeObject {
    message_type: "RevokeObject";
    message_id: ID;
    object_type: RevokableObjects;
    object_id: ID;
    
    constructor(constructorParameters: constructorParameters){
        const { message_id, object_type, object_id } = constructorParameters;

        this.message_type = "RevokeObject";
        this.message_id = message_id;
        this.object_type = object_type;
        this.object_id = object_id;
    }
}