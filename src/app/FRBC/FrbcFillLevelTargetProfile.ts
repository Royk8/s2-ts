import { FRBC_FillLevelTargetProfile } from "@messages";
import { FrbcFillLevelTargetProfileElement } from "./";
import { Timestamp, validateTimestamp } from "../common";
import { Uuid } from "../services/Uuid";

/**
 * Parameters for constructing a new instance of FrbcFillLevelTargetProfile.
 */
interface ConstructorParameters {
    /**
     * ID of this message.
     */
    message_id?: string;
    /**
     * Time at which the FRBC.FillLevelTargetProfile starts.
     */
    start_time: Timestamp;
    /**
     * List of different fill levels that have to be targeted within a given duration. There shall be at least one element. Elements must be placed in chronological order.
     */
    elements: [FrbcFillLevelTargetProfileElement, ...FrbcFillLevelTargetProfileElement[]];
}

export class FrbcFillLevelTargetProfile implements FRBC_FillLevelTargetProfile {
    message_type: "FRBC.FillLevelTargetProfile";
    message_id: string;
    start_time: Timestamp;
    elements: [FrbcFillLevelTargetProfileElement, ...FrbcFillLevelTargetProfileElement[]];

    /**
     * Constructs a new instance of FrbcFillLevelTargetProfile.
     * 
     * @param {ConstructorParameters} constructorParameters - The parameters for the constructor.
     * @param {string} [constructorParameters.message_id] - ID of this message. If not provided, a new UUID will be generated.
     * @param {Timestamp} constructorParameters.start_time - Time at which the FRBC.FillLevelTargetProfile starts.
     * @param {[FrbcFillLevelTargetProfileElement, ...FrbcFillLevelTargetProfileElement[]]} constructorParameters.elements - List of different fill levels that have to be targeted within a given duration.
     */
    constructor({ message_id, start_time, elements }: ConstructorParameters){

        if(elements.length > 288){
            throw new Error("The size of the FRBC_FillLevelTargetProfileElements array must be between 1 and 288");
        }

        validateTimestamp(start_time);

        this.message_type = "FRBC.FillLevelTargetProfile";
        this.message_id = Uuid.generate(message_id);
        this.start_time = start_time;

        const elementsArray = elements.map(element => new FrbcFillLevelTargetProfileElement(element));

        this.elements = elementsArray as [FrbcFillLevelTargetProfileElement, ...FrbcFillLevelTargetProfileElement[]];
    }
}
