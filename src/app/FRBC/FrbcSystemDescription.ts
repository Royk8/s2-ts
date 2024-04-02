import { FRBC_SystemDescription } from "@messages";
import { ID, FRBC_ActuatorDescription } from "@schemas";
import { FRBC_StorageDescription } from "@schemas";

export class FrbcSystemDescription implements FRBC_SystemDescription {
    message_type: "FRBC.SystemDescription";
    message_id: ID;
    valid_from: string;
    actuators: [FRBC_ActuatorDescription];
    storage: FRBC_StorageDescription;

    constructor(message_id: ID, valid_from: string, actuators: [FRBC_ActuatorDescription], storage: FRBC_StorageDescription){
        this.message_type = "FRBC.SystemDescription";
        this.message_id = message_id;
        this.valid_from = valid_from;
        this.actuators = actuators;
        this.storage = storage;
    }
}