export type FrbcOperationModeFactor = number;

export const validateOperationModeFactor = (operationModeFactor: FrbcOperationModeFactor): void => {
    if(operationModeFactor < 0 || operationModeFactor > 1){
        throw new Error("The Operation Mode Factor must be between 0 and 1");
    }
}