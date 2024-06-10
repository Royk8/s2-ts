import { RevokeObject as GenRevokeObject, RevokableObjects } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { S2Message } from "./S2Message";

/**
 * Parameters for constructing a new instance of RevokeObject.
 */
interface ConstructorParameters {
    /**
     * ID of this message.
     */
    message_id?: ID;
    /**
     * The type of object that needs to be revoked.
     */
    object_type: RevokableObjects;
    /**
     * The ID of the object that needs to be revoked.
     */
    object_id: ID;
}

export class RevokeObject implements GenRevokeObject, S2Message {
    message_type: "RevokeObject";
    message_id: ID;
    object_type: RevokableObjects;
    object_id: ID;

    /**
     * Constructs a new instance of RevokeObject.
     * 
     * @param {ConstructorParameters} params - The parameters for the constructor.
     * @param {ID} [params.message_id] - The ID of this message. If not provided, a new UUID will be generated.
     * @param {RevokableObjects} params.object_type - The type of object that needs to be revoked.
     * @param {ID} params.object_id - The ID of the object that needs to be revoked.
     */
    constructor({ message_id, object_type, object_id }: ConstructorParameters) {
        this.message_type = "RevokeObject";
        this.message_id = Uuid.generate(message_id);
        this.object_type = object_type;
        this.object_id = object_id;
    }
}
