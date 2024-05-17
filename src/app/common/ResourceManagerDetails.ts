import { Role, ControlType, Currency, CommodityQuantity, ID } from "@schemas";
import { Duration, validateDuration } from ".";
import { ResourceManagerDetails as GenResourceManagerDetails } from "@messages";
import { Uuid } from "../services/Uuid";

interface ConstructorParameters{
    message_id?: ID;
    resource_id: ID;
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

    constructor({ message_id, resource_id, name, roles, manufacturer, model, serial_number, firmware_version, instruction_processing_delay, available_control_types, currency, provides_forecast, provides_power_measurement_types } : ConstructorParameters){

        validateDuration(instruction_processing_delay);

        this.message_type = "ResourceManagerDetails";
        this.message_id = Uuid.generate(message_id);
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
    