import { WebSocket } from 'ws';
export type MessageReceiveCallback = (message: string) => void;
export declare class WebSocketClientController {
    ws: WebSocket;
    onMessage: MessageReceiveCallback;
    constructor(url: string, onMessage?: MessageReceiveCallback);
    SendMessage(message: string): void;
}
