import { Role, ControlType, Currency, CommodityQuantity } from "@schemas";
import { Duration, isDuration } from "./Duration";
import { ResourceManagerDetails as GenResourceManagerDetails } from "@messages";

interface constructorParameters{
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
}

export class ResourceManagerDetails implements GenResourceManagerDetails {
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

    constructor(constructorParameters : constructorParameters){
        const { message_id, resource_id, name, roles, manufacturer, model, serial_number, firmware_version, instruction_processing_delay, available_control_types, currency, provides_forecast, provides_power_measurement_types } = constructorParameters;

        if(!isDuration(instruction_processing_delay)){
            throw new Error("ResourceManagerDetails: instruction_processing_delay must be of type Duration");
        }

        this.message_type = "ResourceManagerDetails";
        this.message_id = message_id;
        this.resource_id = resource_id;
        this.name = name;
        this.roles = roles;
        this.manufacturer = manufacturer;
        this.model = model;
        this.serial_number = serial_number;
        this.firmware_version = firmware_version;
        this.instruction_processing_delay = instruction_processing_delay;
        this.available_control_types = available_control_types;
        this.currency = currency;
        this.provides_forecast = provides_forecast;
        this.provides_power_measurement_types = provides_power_measurement_types;
    }
}
    