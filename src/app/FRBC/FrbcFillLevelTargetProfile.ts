import { FRBC_FillLevelTargetProfile } from "@messages";
import { FRBC_FillLevelTargetProfileElement } from "@schemas";

export class FrbcFillLevelTargetProfile implements FRBC_FillLevelTargetProfile {
    message_type: "FRBC.FillLevelTargetProfile";
    message_id: string;
    start_time: string;
    elements: [FRBC_FillLevelTargetProfileElement, ...FRBC_FillLevelTargetProfileElement[]];

    constructor(message_id: string, start_time: string, elements: [FRBC_FillLevelTargetProfileElement, ...FRBC_FillLevelTargetProfileElement[]]){
        this.message_id = message_id;
        this.start_time = start_time;
        this.elements = elements;
    }
}