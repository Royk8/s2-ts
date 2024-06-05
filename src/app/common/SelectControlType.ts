import { SelectControlType as GenSelectControlType, ControlType } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";
import { Message } from "./Message";

/**
 * Parameters for constructing a new instance of SelectControlType.
 */
interface ConstructorParameters {
    /**
     * ID of this message.
     */
    message_id?: ID;
    /**
     * The ControlType to activate. Must be one of the available ControlTypes as defined in the ResourceManagerDetails.
     */
    control_type: ControlType;
}

export class SelectControlType implements GenSelectControlType, Message {
    message_type: "SelectControlType";
    message_id: ID;
    control_type: ControlType;

    /**
     * Constructs a new instance of SelectControlType.
     * 
     * @param {ConstructorParameters} params - The parameters for the constructor.
     * @param {ID} [params.message_id] - The ID of this message. If not provided, a new UUID will be generated.
     * @param {ControlType} params.control_type - The ControlType to activate.
     */
    constructor({ message_id, control_type }: ConstructorParameters) {
        this.message_type = "SelectControlType";
        this.message_id = Uuid.generate(message_id);
        this.control_type = control_type;
    }
}
