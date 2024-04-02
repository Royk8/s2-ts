import { WebSocket } from 'ws';

export type MessageReceiveCallback = (message: string) => void;

export class WebSocketClientController {
    ws: WebSocket;
    onMessage: MessageReceiveCallback;
    constructor(url: string, onMessage?: MessageReceiveCallback) {
        this.ws = new WebSocket(url);
        this.onMessage = onMessage;

        this.ws.on('error', console.error);
        this.ws.on('open', () => {
            console.log('Connected');
        });

        this.ws.on('message', message => {
            this.onMessage(message);
        });

        this.ws.on('close', () => {
            console.log('Disconnected');
        });
    }

    public SendMessage(message: string) : void {
        console.log(`Sending message => ${message}`);
        this.ws.send(message);
    }
}