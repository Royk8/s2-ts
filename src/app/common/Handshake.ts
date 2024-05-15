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

    constructor(parameters: ConstructorParameters){
        this.message_type = 'Handshake';
        this.message_id = Uuid.generate(parameters.message_id);
        this.role = parameters.role;
        this.supported_protocol_versions = parameters.supported_protocol_versions;
    }
}