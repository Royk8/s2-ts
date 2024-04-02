import { FRBC_StorageStatus } from "@messages";
import { ID } from "@schemas";

export class FrbcStorageStatus implements FRBC_StorageStatus {
    message_type: "FRBC.StorageStatus";
    message_id: ID;
    present_fill_level: number;

    constructor(message_id: ID, present_fill_level: number){
        this.message_id = message_id;
        this.present_fill_level = present_fill_level;
    }
}