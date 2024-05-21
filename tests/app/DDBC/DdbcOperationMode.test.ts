import { DdbcOperationMode } from "../../../src/app/DDBC/DdbcOperationMode";
import { NumberRange,PowerRange } from "../../../src/app/common";

describe('DdbcOperationMode', () => {
    it('should create a DdbcOperationMode object', () => {
        const powerRange = new PowerRange({
            start_of_range: 10,
            end_of_range: 20,
            commodity_quantity: "ELECTRIC.POWER.L3"
        });
        const numberRange1 = new NumberRange({start_of_range: 1, end_of_range: 10});
        const numberRange2 = new NumberRange({start_of_range: 2, end_of_range: 10});

        const operationMode = new DdbcOperationMode({
            diagnostic_label: "diagnostic_label",
            power_ranges: [powerRange],
            supply_range: numberRange1,
            running_costs: numberRange2,
            abnormal_condition_only: true
        });

        expect(operationMode).toBeInstanceOf(DdbcOperationMode);
        expect(operationMode.diagnostic_label).toBe("diagnostic_label");
        expect(operationMode.power_ranges).toStrictEqual([powerRange]);
        expect(operationMode.supply_range).toStrictEqual(numberRange1);
        expect(operationMode.running_costs).toStrictEqual(numberRange2);
        expect(operationMode.abnormal_condition_only).toBe(true);
    });
});
