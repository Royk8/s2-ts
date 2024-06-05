import { Role, ControlType, Currency, CommodityQuantity, ID } from "@schemas";
import { Duration, Message, validateDuration } from ".";
import { ResourceManagerDetails as GenResourceManagerDetails } from "@messages";
import { Uuid } from "../services/Uuid";

/**
 * Parameters for constructing a new instance of ResourceManagerDetails.
 */
interface ConstructorParameters {
    /**
     * ID of this message.
     */
    message_id?: ID;
    /**
     * Identifier of the Resource Manager. Must be unique within the scope of the CEM.
     */
    resource_id: ID;
    /**
     * Human readable name given by user.
     */
    name?: string;
    /**
     * Each Resource Manager provides one or more energy Roles.
     * 
     * @minItems 1
     * @maxItems 3
     */
    roles: [Role] | [Role, Role] | [Role, Role, Role];
    /**
     * Name of Manufacturer.
     */
    manufacturer?: string;
    /**
     * Name of the model of the device (provided by the manufacturer).
     */
    model?: string;
    /**
     * Serial number of the device (provided by the manufacturer).
     */
    serial_number?: string;
    /**
     * Version identifier of the firmware used in the device (provided by the manufacturer).
     */
    firmware_version?: string;
    /**
     * Instruction processing delay.
     */
    instruction_processing_delay: Duration;
    /**
     * The control types supported by this Resource Manager.
     * 
     * @minItems 1
     * @maxItems 5
     */
    available_control_types: [ControlType] | [ControlType, ControlType] | [ControlType, ControlType, ControlType] | [ControlType, ControlType, ControlType, ControlType] | [ControlType, ControlType, ControlType, ControlType, ControlType];
    /**
     * Currency to be used for all information regarding costs. Mandatory if cost information is published.
     */
    currency?: Currency;
    /**
     * Indicates whether the ResourceManager is able to provide PowerForecasts.
     */
    provides_forecast: boolean;
    /**
     * Array of all CommodityQuantities that this Resource Manager can provide measurements for.
     * 
     * @minItems 1
     * @maxItems 10
     */
    provides_power_measurement_types: [CommodityQuantity] | [CommodityQuantity, CommodityQuantity] | [CommodityQuantity, CommodityQuantity, CommodityQuantity];
}

export class ResourceManagerDetails implements GenResourceManagerDetails, Message {
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

    /**
     * Constructs a new instance of ResourceManagerDetails.
     * 
     * @param {ConstructorParameters} params - The parameters for the constructor.
     * @param {ID} params.message_id - The ID of this message. If not provided, a new UUID will be generated.
     * @param {ID} params.resource_id - The identifier of the Resource Manager.
     * @param {string} [params.name] - The human-readable name given by the user.
     * @param {[Role]} params.roles - The energy roles provided by the Resource Manager.
     * @param {string} [params.manufacturer] - The name of the manufacturer.
     * @param {string} [params.model] - The model name of the device.
     * @param {string} [params.serial_number] - The serial number of the device.
     * @param {string} [params.firmware_version] - The firmware version of the device.
     * @param {Duration} params.instruction_processing_delay - The instruction processing delay.
     * @param {[ControlType]} params.available_control_types - The control types supported by the Resource Manager.
     * @param {Currency} [params.currency] - The currency used for cost information.
     * @param {boolean} params.provides_forecast - Indicates whether the ResourceManager provides PowerForecasts.
     * @param {[CommodityQuantity]} params.provides_power_measurement_types - The commodity quantities for which measurements are provided.
     */
    constructor({ message_id, resource_id, name, roles, manufacturer, model, serial_number, firmware_version, instruction_processing_delay, available_control_types, currency, provides_forecast, provides_power_measurement_types }: ConstructorParameters) {
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
