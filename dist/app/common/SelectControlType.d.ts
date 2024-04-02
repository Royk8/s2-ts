import { SelectControlType as GenSelectControlType, ControlType } from "../../messages/generated";
export declare class SelectControlType implements GenSelectControlType {
    message_type: "SelectControlType";
    message_id: string;
    control_type: ControlType;
    constructor(message_id: string, control_type: ControlType);
}
