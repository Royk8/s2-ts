import { FrbcStorageDescription } from "../../../src/app/FRBC";

describe('FrbcStorageDescription', () => {
    it('should create a FrbcStorageDescription object', () => {

        const frbcStorageDescription = new FrbcStorageDescription({
            diagnostic_label: "1",
            fill_level_label: "2",
            provides_fill_level_target_profile: true,
            provides_leakage_behaviour: true,
            provides_usage_forecast: true,
            fill_level_range: { start_of_range: 3, end_of_range: 4 }
        });

        expect(frbcStorageDescription.diagnostic_label).toBe("1");
        expect(frbcStorageDescription.fill_level_label).toBe("2");
        expect(frbcStorageDescription.provides_fill_level_target_profile).toBe(true);
        expect(frbcStorageDescription.provides_leakage_behaviour).toBe(true);
        expect(frbcStorageDescription.provides_usage_forecast).toBe(true);
        expect(frbcStorageDescription.fill_level_range.start_of_range).toBe(3);
        expect(frbcStorageDescription.fill_level_range.end_of_range).toBe(4);
        
    });
});