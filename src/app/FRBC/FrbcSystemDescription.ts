import { FRBC_SystemDescription } from "@messages";
import { ID } from "@schemas";
import { FrbcStorageDescription } from "./FrbcStorageDescription";
import { S2Message, Timestamp, validateTimestamp } from "../common";
import { ActuatorArray } from "./ExtraTypes/ActuatorArray";
import { Uuid } from "../services/Uuid";

/**
 * Parameters for constructing a new instance of FrbcSystemDescription.
 */
interface ConstructorParameters {
    /**
     * ID of this message.
     */
    message_id?: ID;
    /**
     * Moment this FRBC.SystemDescription starts to be valid. If the system description is immediately valid, the DateTimeStamp should be now or in the past.
     */
    valid_from: Timestamp;
    /**
     * Details of all Actuators.
     *
     * @minItems 1
     * @maxItems 10
     */
    actuators: ActuatorArray;
    /**
     * Details of the storage.
     */
    storage: FrbcStorageDescription;
}

export class FrbcSystemDescription implements FRBC_SystemDescription, S2Message {
    message_type: "FRBC.SystemDescription";
    message_id: ID;
    valid_from: Timestamp;
    actuators: ActuatorArray;
    storage: FrbcStorageDescription;

    /**
     * Constructs a new instance of FrbcSystemDescription.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} constructorParameters.message_id - ID of this message. If not provided, a new UUID will be generated.
     * @param {Timestamp} constructorParameters.valid_from - Moment this FRBC.SystemDescription starts to be valid.
     * @param {ActuatorArray} constructorParameters.actuators - Details of all Actuators.
     * @param {FrbcStorageDescription} constructorParameters.storage - Details of the storage.
     */
    constructor({ message_id, valid_from, actuators, storage }: ConstructorParameters){

        validateTimestamp(valid_from);
        
        this.message_type = "FRBC.SystemDescription";
        this.message_id = Uuid.generate(message_id);
        this.valid_from = valid_from;
        this.actuators = actuators;
        this.storage = storage;
    }
}
