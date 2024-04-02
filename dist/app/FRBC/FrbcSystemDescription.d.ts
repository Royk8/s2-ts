import { FRBC_SystemDescription } from "../../messages/generated";
import { ID, FRBC_ActuatorDescription } from "../../schemas/generated";
import { FRBC_StorageDescription } from "../../schemas/generated";
export declare class FrbcSystemDescription implements FRBC_SystemDescription {
    message_type: "FRBC.SystemDescription";
    message_id: ID;
    valid_from: string;
    actuators: [FRBC_ActuatorDescription];
    storage: FRBC_StorageDescription;
    constructor(message_id: ID, valid_from: string, actuators: [FRBC_ActuatorDescription], storage: FRBC_StorageDescription);
}
