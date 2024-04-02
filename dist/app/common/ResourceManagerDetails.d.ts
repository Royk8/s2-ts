import { Duration, Role, ControlType, Currency, CommodityQuantity } from "../../schemas/generated";
import { ResourceManagerDetails as GenResourceManagerDetails } from "../../messages/generated";
export declare class ResourceManagerDetails implements GenResourceManagerDetails {
    message_type: "ResourceManagerDetails";
    message_id: string;
    resource_id: string;
    name?: string;
    roles: [Role] | [Role, Role] | [Role, Role, Role];
    manufacturer?: string;
    model?: string;
    serial_number?: string;
    firmware_version?: string;
    instruction_processing_delay: Duration;
    available_control_types: [ControlType] | [ControlType, ControlType] | [ControlType, ControlType, ControlType] | [ControlType, ControlType, ControlType, ControlType] | [ControlType, ControlType, ControlType, ControlType, ControlType];
    currency?: Currency;
    provides_forecast: boolean;
    provides_power_measurement_types: [CommodityQuantity] | [CommodityQuantity, CommodityQuantity] | [CommodityQuantity, CommodityQuantity, CommodityQuantity];
    constructor(message_id: string, resource_id: string, roles: [Role] | [Role, Role] | [Role, Role, Role], instruction_processing_delay: Duration, available_control_types: [ControlType] | [ControlType, ControlType] | [ControlType, ControlType, ControlType] | [ControlType, ControlType, ControlType, ControlType] | [ControlType, ControlType, ControlType, ControlType, ControlType], provides_forecast: boolean, provides_power_measurement_types: [CommodityQuantity] | [CommodityQuantity, CommodityQuantity] | [CommodityQuantity, CommodityQuantity, CommodityQuantity]);
}
