import { Handshake as GenHandshake, EnergyManagementRole } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";

/**
 * Parameters for constructing a new instance of the Handshake.
 */
interface ConstructorParameters {
    /**
     * The unique identifier for the message.
     * If not provided, a new UUID will be generated.
     */
    message_id?: ID;
  
    /**
     * The role of the sender of this message.
     * It can be 'CEM' or 'RM'.
     * This is required to establish the context of the handshake.
     */
    role: EnergyManagementRole;
  
    /**
     * Protocol versions supported by the sender of this message. 
     * This field is mandatory for the RM, but optional for the CEM.
     */
    supported_protocol_versions?: [string, ...string[]];
  }

export class Handshake implements GenHandshake {
    message_type: 'Handshake';
    message_id: ID;
    role: EnergyManagementRole;
    supported_protocol_versions?: [string, ...string[]];

    /**
     * Constructs a new instance of the Handshake.
     * 
     * @param {ConstructorParameters} params - Object with the parameters for the constructor.
     * @param {ID} params.message_id - The unique identifier for the message. If not provided, a new UUID will be generated.
     * @param {EnergyManagementRole} params.role - The role of the sender of this message.
     * @param {string[]} params.supported_protocol_versions - The protocol versions supported by the client. This field is mandatory for the RM, but optional for the CEM.
     */
    constructor({ message_id, role, supported_protocol_versions }: ConstructorParameters) {
        if(role === 'RM' && !supported_protocol_versions){
            throw new Error('RM must provide supported protocol versions');
        }
        this.message_type = 'Handshake';
        this.message_id = Uuid.generate(message_id);
        this.role = role;
        this.supported_protocol_versions = supported_protocol_versions;
    }
}