export type Timestamp = string;

export const validateTimestamp = (timestamp: Timestamp) => {
    const date = Date.parse(timestamp);
    if (isNaN(date)) {
        throw new Error(`Invalid TimeStamp: ${timestamp}`);
    }
}