import { PowerValue } from '../../../src/app/common/PowerValue';

describe('PowerValue', () => {
    it('should create a PowerValue object', () => {

        expect(new PowerValue({
            commodity_quantity: 'ELECTRIC.POWER.L1',
            value: 1
        })).toBeTruthy();
    });
});