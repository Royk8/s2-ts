import { PowerForecast as GenPowerForecast } from "../../messages/generated";
import { PowerForecastElement } from "../../messages/generated";
export declare class PowerForecast implements GenPowerForecast {
    message_type: "PowerForecast";
    message_id: string;
    start_time: string;
    elements: [PowerForecastElement, ...PowerForecastElement[]];
    constructor(message_id: string, start_time: string, elements: [PowerForecastElement, ...PowerForecastElement[]]);
}
