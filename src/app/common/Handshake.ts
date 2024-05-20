import { Handshake as GenHandshake, EnergyManagementRole } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters {
    message_id?: ID;
    role: EnergyManagementRole;
    supported_protocol_versions?: [string, ...string[]];
};

export class Handshake implements GenHandshake {
    message_type: 'Handshake';
    message_id: ID;
    role: EnergyManagementRole;
    supported_protocol_versions?: [string, ...string[]];

    constructor( { message_id, role, supported_protocol_versions }: ConstructorParameters ) {
        console.log("Handshake constructor");
        this.message_type = 'Handshake';
        this.message_id = Uuid.generate(message_id);
        this.role = role;
        this.supported_protocol_versions = supported_protocol_versions;
    }
}