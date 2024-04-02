import { FRBC_UsageForecast } from "../../messages/generated";
import { ID, FRBC_UsageForecastElement } from "../../schemas/generated";
export declare class FrbcUsageForecast implements FRBC_UsageForecast {
    message_type: "FRBC.UsageForecast";
    message_id: ID;
    start_time: string;
    elements: [FRBC_UsageForecastElement, ...FRBC_UsageForecastElement[]];
    constructor(message_id: ID, start_time: string, elements: [FRBC_UsageForecastElement, ...FRBC_UsageForecastElement[]]);
}
