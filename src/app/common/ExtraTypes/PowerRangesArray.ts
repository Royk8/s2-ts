import { PowerRange } from '../../common';

export type PowerRangesArray =
    | [PowerRange]
    | [PowerRange, PowerRange]
    | [PowerRange, PowerRange, PowerRange]
    | [PowerRange, PowerRange, PowerRange, PowerRange]
    | [PowerRange, PowerRange, PowerRange, PowerRange, PowerRange]
    | [PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange]
    | [PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange]
    | [PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange]
    | [PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange]
    | [
        PowerRange,
        PowerRange,
        PowerRange,
        PowerRange,
        PowerRange,
        PowerRange,
        PowerRange,
        PowerRange,
        PowerRange,
        PowerRange
    ];