import { WebSocket } from 'ws';

export type MessageReceiveCallback = (message: string) => void;

export class WebSocketClientController {
    ws: WebSocket;
    onMessage: MessageReceiveCallback;
    private messageQueue: string[] = [];
    private isConnected: boolean = false;

    constructor(url: string, onMessage?: MessageReceiveCallback) {
        this.onMessage = onMessage || ((message: string) => {});
        this.connect(url);
    }

    private connect(url: string) {
        this.ws = new WebSocket(url);

        this.ws.on('error', console.error);

        this.ws.on('open', () => {
            console.log('CLIENT: Connected');
            this.isConnected = true;
            // Send all queued messages
            this.messageQueue.forEach(message => this.ws.send(message));
            this.messageQueue = [];
        });

        this.ws.on('message', message => {
            this.onMessage(message.toString());
        });

        this.ws.on('close', () => {
            console.log('CLIENT: Disconnected');
            this.isConnected = false;
            // Attempt to reconnect after a delay
            setTimeout(() => this.connect(url), 1000);
        });
    }

    public SendMessage(message: string): void {
        console.log(`CLIENT: Sending message => ${message}`);
        if (this.isConnected) {
            this.ws.send(message);
        } else {
            // Queue the message if not connected
            this.messageQueue.push(message);
        }
    }

    // constructor(url: string, onMessage?: MessageReceiveCallback) {
    //     this.ws = new WebSocket(url);
    //     this.onMessage = onMessage;

    //     this.ws.on('error', console.error);
    //     this.ws.on('open', () => {
    //         console.log('Connected');
    //     });

    //     this.ws.on('message', message => {
    //         this.onMessage(message);
    //     });

    //     this.ws.on('close', () => {
    //         console.log('Disconnected');
    //     });
    // }

    // public SendMessage(message: string) : void {
    //     console.log(`Sending message => ${message}`);
    //     this.ws.send(message);
    // }
}