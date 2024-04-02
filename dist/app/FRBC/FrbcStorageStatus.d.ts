import { FRBC_StorageStatus } from "../../messages/generated";
import { ID } from "../../schemas/generated";
export declare class FrbcStorageStatus implements FRBC_StorageStatus {
    message_type: "FRBC.StorageStatus";
    message_id: ID;
    present_fill_level: number;
    constructor(message_id: ID, present_fill_level: number);
}
