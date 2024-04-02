import { WebSocketServer } from 'ws';
export type MessageReceiveCallback = (message: string) => void;
export declare class WebSocketServerController {
    wss: WebSocketServer;
    onMessage: MessageReceiveCallback;
    constructor(port?: number, onMessage?: MessageReceiveCallback);
    AddMessageOnConection(message: string): void;
    BroadcastMessage(message: string): void;
}
