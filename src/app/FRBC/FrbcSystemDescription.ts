import { FRBC_SystemDescription } from "@messages";
import { ID } from "@schemas";
import { FrbcStorageDescription } from "./";
import { Timestamp, validateTimestamp } from "../common";
import { ActuatorArray } from "./ExtraTypes/ActuatorArray";

interface constructorParameters{
    message_id: ID;
    valid_from: Timestamp;
    actuators: ActuatorArray;
    storage: FrbcStorageDescription;
}

export class FrbcSystemDescription implements FRBC_SystemDescription {
    message_type: "FRBC.SystemDescription";
    message_id: ID;
    valid_from: Timestamp;
    actuators: ActuatorArray;
    storage: FrbcStorageDescription;

    constructor(constructorParameters: constructorParameters){
        const { message_id, valid_from, actuators, storage } = constructorParameters;

        validateTimestamp(valid_from);
        
        this.message_type = "FRBC.SystemDescription";
        this.message_id = message_id;
        this.valid_from = valid_from;
        this.actuators = actuators;
        this.storage = storage;
    }
}