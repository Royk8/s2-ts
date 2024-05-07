import { FRBC_StorageStatus } from "@messages";
import { ID } from "@schemas";

interface ConstructorParameters{
    message_id: ID;
    present_fill_level: number;
}

export class FrbcStorageStatus implements FRBC_StorageStatus {
    message_type: "FRBC.StorageStatus";
    message_id: ID;
    present_fill_level: number;

    constructor(constructorParameters: ConstructorParameters){
        const { message_id, present_fill_level } = constructorParameters;

        this.message_type = "FRBC.StorageStatus";
        this.message_id = message_id;
        this.present_fill_level = present_fill_level;
    }
}