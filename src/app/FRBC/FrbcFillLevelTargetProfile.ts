import { FRBC_FillLevelTargetProfile } from "@messages";
import { FrbcFillLevelTargetProfileElement } from "./";
import { Timestamp, validateTimestamp } from "../common";

interface constructorParameters{
    message_id: string;
    start_time: Timestamp;
    elements: [FrbcFillLevelTargetProfileElement, ...FrbcFillLevelTargetProfileElement[]];
}

export class FrbcFillLevelTargetProfile implements FRBC_FillLevelTargetProfile {
    message_type: "FRBC.FillLevelTargetProfile";
    message_id: string;
    start_time: Timestamp;
    elements: [FrbcFillLevelTargetProfileElement, ...FrbcFillLevelTargetProfileElement[]];

    constructor(constructorParameters: constructorParameters){
        const { message_id, start_time, elements } = constructorParameters;

        if(elements.length > 288){
            throw new Error("The size of the FRBC_FillLevelTargetProfileElements array must be between 1 and 288");
        }

        validateTimestamp(start_time);

        this.message_type = "FRBC.FillLevelTargetProfile";
        this.message_id = message_id;
        this.start_time = start_time;
        this.elements = elements;
    }
}