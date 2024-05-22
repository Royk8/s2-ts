import { FRBC_StorageStatus } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";

/**
 * Parameters for constructing a new instance of FrbcStorageStatus.
 */
interface ConstructorParameters {
    /**
     * ID of this message.
     */
    message_id?: ID;
    /**
     * Present fill level of the Storage.
     */
    present_fill_level: number;
}

export class FrbcStorageStatus implements FRBC_StorageStatus {
    message_type: "FRBC.StorageStatus";
    message_id: ID;
    present_fill_level: number;

    /**
     * Constructs a new instance of FrbcStorageStatus.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {ID} constructorParameters.message_id - ID of this message.
     * @param {number} constructorParameters.present_fill_level - Present fill level of the Storage.
     */
    constructor({ message_id, present_fill_level }: ConstructorParameters){

        this.message_type = "FRBC.StorageStatus";
        this.message_id = Uuid.generate(message_id);
        this.present_fill_level = present_fill_level;
    }
}
