import type { FrbcOperationModeFactor } from "../../../src/app/FRBC/FrbcOperationModeFactor";
import { validateOperationModeFactor } from "../../../src/app/FRBC/FrbcOperationModeFactor";


describe('FrbcOperationModeFactor', () => {
    it('should create a FrbcOperationModeFactor object', () => {
        const factor : FrbcOperationModeFactor = 0.3;

        expect(() => validateOperationModeFactor(factor)).not.toThrow("The Operation Mode Factor must be between 0 and 1");
    });

    it('should throw an exception for invalid FrbcOperationModeFactor', () => {
        const factor : FrbcOperationModeFactor = 2;

        expect(() => validateOperationModeFactor(factor)).toThrow("The Operation Mode Factor must be between 0 and 1");
    });
});