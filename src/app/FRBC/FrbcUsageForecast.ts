import { FRBC_UsageForecast } from "@messages";
import { ID, FRBC_UsageForecastElement } from "@schemas";

export class FrbcUsageForecast implements FRBC_UsageForecast {
    message_type: "FRBC.UsageForecast";
    message_id: ID;
    start_time: string;
    elements: [FRBC_UsageForecastElement, ...FRBC_UsageForecastElement[]];

    constructor(message_id: ID, start_time: string, elements: [FRBC_UsageForecastElement, ...FRBC_UsageForecastElement[]]){
        this.message_id = message_id;
        this.start_time = start_time;
        this.elements = elements;
    }
}