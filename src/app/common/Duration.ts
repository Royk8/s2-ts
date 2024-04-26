export type Duration = number;

export const isDuration = (value: Duration): value is Duration => {
    //Check if duration is a positive integer
    return Number.isInteger(value) && value >= 0;
}