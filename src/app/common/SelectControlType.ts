import { SelectControlType as GenSelectControlType, ControlType } from "@messages";
import { ID } from "@schemas";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters{
    message_id?: ID;
    control_type: ControlType;
}

export class SelectControlType implements GenSelectControlType {
    message_type: "SelectControlType";
    message_id: ID;
    control_type: ControlType;

    constructor({ message_id, control_type }: ConstructorParameters){

        this.message_type = "SelectControlType";
        this.message_id = Uuid.generate(message_id);
        this.control_type = control_type;
    }
}