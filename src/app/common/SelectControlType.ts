import { SelectControlType as GenSelectControlType, ControlType } from "@messages";


interface constructorParameters{
    message_id: string;
    control_type: ControlType;
}

export class SelectControlType implements GenSelectControlType {
    message_type: "SelectControlType";
    message_id: string;
    control_type: ControlType;

    constructor(constructorParameters: constructorParameters){
        const { message_id, control_type } = constructorParameters;

        this.message_type = "SelectControlType";
        this.message_id = message_id;
        this.control_type = control_type;
    }
}