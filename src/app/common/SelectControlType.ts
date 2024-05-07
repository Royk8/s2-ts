import { SelectControlType as GenSelectControlType, ControlType } from "@messages";
import { ID } from "@schemas";

interface ConstructorParameters{
    message_id: ID;
    control_type: ControlType;
}

export class SelectControlType implements GenSelectControlType {
    message_type: "SelectControlType";
    message_id: ID;
    control_type: ControlType;

    constructor(constructorParameters: ConstructorParameters){
        const { message_id, control_type } = constructorParameters;

        this.message_type = "SelectControlType";
        this.message_id = message_id;
        this.control_type = control_type;
    }
}