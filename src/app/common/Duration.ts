export type Duration = number;

export const validateDuration = (value: Duration) : void => {
    //Check if duration is a positive integer
    if(!(Number.isInteger(value) && value >= 0))
        throw new Error("duration must be a positive integer");
}