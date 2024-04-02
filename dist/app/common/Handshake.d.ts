import { Handshake as GenHandshake, EnergyManagementRole } from "../../messages/generated";
import { ID } from "../../schemas/generated";
interface constructorParameters {
    message_id: ID;
    role: EnergyManagementRole;
    supported_protocol_versions?: [string, ...string[]];
}
export declare class Handshake implements GenHandshake {
    message_type: 'Handshake';
    message_id: ID;
    role: EnergyManagementRole;
    supported_protocol_versions?: [string, ...string[]];
    constructor(parameters: constructorParameters);
}
export {};
