import { Commodity } from "@schemas";

export type CommoditiesArray =
    | [Commodity]
    | [Commodity, Commodity]
    | [Commodity, Commodity, Commodity]
    | [Commodity, Commodity, Commodity, Commodity];