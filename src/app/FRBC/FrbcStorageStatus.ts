import { FRBC_StorageStatus } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters{
    message_id?: ID;
    present_fill_level: number;
}

export class FrbcStorageStatus implements FRBC_StorageStatus {
    message_type: "FRBC.StorageStatus";
    message_id: ID;
    present_fill_level: number;

    constructor({ message_id, present_fill_level }: ConstructorParameters){

        this.message_type = "FRBC.StorageStatus";
        this.message_id = Uuid.generate(message_id);
        this.present_fill_level = present_fill_level;
    }
}