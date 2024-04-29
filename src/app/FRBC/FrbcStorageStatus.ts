import { FRBC_StorageStatus } from "@messages";
import { ID } from "@schemas";

interface constructorParameters{
    message_id: ID;
    present_fill_level: number;
}

export class FrbcStorageStatus implements FRBC_StorageStatus {
    message_type: "FRBC.StorageStatus";
    message_id: ID;
    present_fill_level: number;

    constructor(constructorParameters: constructorParameters){
        const { message_id, present_fill_level } = constructorParameters;

        this.message_type = "FRBC.StorageStatus";
        this.message_id = message_id;
        this.present_fill_level = present_fill_level;
    }
}