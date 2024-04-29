import { ResourceManagerDetails } from '../../../src/app/common';

describe('ResourceManagerDetails', () => {
    it('should create a ResourceManagerDetails object', () => {
        const resourceManagerDetails = new ResourceManagerDetails({
            message_id: "1",
            resource_id: "2",
            roles: [{
                role: "ENERGY_PRODUCER",
                commodity: "GAS"
            },
            {
                role: "ENERGY_CONSUMER",
                commodity: "HEAT"
            }],
            instruction_processing_delay: 10,
            available_control_types: ["FILL_RATE_BASED_CONTROL", "POWER_PROFILE_BASED_CONTROL"],
            provides_forecast: true,
            provides_power_measurement_types: ["ELECTRIC.POWER.L1", "ELECTRIC.POWER.3_PHASE_SYMMETRIC"]
        });

        expect(resourceManagerDetails.message_type).toBe("ResourceManagerDetails");
        expect(resourceManagerDetails.message_id).toBe("1");
        expect(resourceManagerDetails.resource_id).toBe("2");
        expect(resourceManagerDetails.roles).toStrictEqual([{
            role: "ENERGY_PRODUCER",
            commodity: "GAS"
        },
        {
            role: "ENERGY_CONSUMER",
            commodity: "HEAT"
        }]);
        expect(resourceManagerDetails.instruction_processing_delay).toBe(10);
        expect(resourceManagerDetails.available_control_types).toStrictEqual(["FILL_RATE_BASED_CONTROL", "POWER_PROFILE_BASED_CONTROL"]);
        expect(resourceManagerDetails.provides_forecast).toBe(true);
        expect(resourceManagerDetails.provides_power_measurement_types).toStrictEqual(["ELECTRIC.POWER.L1", "ELECTRIC.POWER.3_PHASE_SYMMETRIC"]);
    });
});