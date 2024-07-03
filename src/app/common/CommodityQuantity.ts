/**
 * CommodityQuantity represents various types of quantities for different commodities.
 */
export enum CommodityQuantity {
    /**
     * Electric power described in Watt on phase 1.
     * If a device utilizes only one phase it should always use L1.
     */
    ELECTRIC_POWER_L1 = "ELECTRIC.POWER.L1",

    /**
     * Electric power described in Watt on phase 2.
     * Only applicable for 3 phase devices.
     */
    ELECTRIC_POWER_L2 = "ELECTRIC.POWER.L2",

    /**
     * Electric power described in Watt on phase 3.
     * Only applicable for 3 phase devices.
     */
    ELECTRIC_POWER_L3 = "ELECTRIC.POWER.L3",

    /**
     * Electric power described in Watt when power is equally shared among the three phases.
     * Only applicable for 3 phase devices.
     */
    ELECTRIC_POWER_3_PHASE_SYMMETRIC = "ELECTRIC.POWER.3_PHASE_SYMMETRIC",

    /**
     * Gas flow rate described in liters per second.
     */
    NATURAL_GAS_FLOW_RATE = "NATURAL_GAS.FLOW_RATE",

    /**
     * Gas flow rate described in grams per second.
     */
    HYDROGEN_FLOW_RATE = "HYDROGEN.FLOW_RATE",

    /**
     * Heat described in degrees Celsius.
     */
    HEAT_TEMPERATURE = "HEAT.TEMPERATURE",

    /**
     * Flow rate of heat carrying gas or liquid in liters per second.
     */
    HEAT_FLOW_RATE = "HEAT.FLOW_RATE",

    /**
     * Thermal power in Watt.
     */
    HEAT_THERMAL_POWER = "HEAT.THERMAL_POWER",

    /**
     * Oil flow rate described in liters per hour.
     */
    OIL_FLOW_RATE = "OIL.FLOW_RATE"
}
