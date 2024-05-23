import { WebSocketServer } from 'ws';


export type MessageReceiveCallback = (message: string) => void;

export class WebSocketServerController {
    wss: WebSocketServer;
    onMessage: MessageReceiveCallback;
    constructor(port: number = 8000, onMessage?: MessageReceiveCallback) {
        this.wss = new WebSocketServer({ port: port });
        this.onMessage = onMessage;

        this.wss.on('error', console.error);

        this.wss.on('connection', ws => {
            ws.on('message', message => {
                this.onMessage(message);
            });
        });

        this.wss.on('message', message => {
            this.onMessage(message);
        });
    }

    public AddMessageOnConection(message: string) : void {
        this.wss.on('connection', ws => {
            console.log(message);
            this.BroadcastMessage(message);
        });
    }
    
    public BroadcastMessage(message: string) : void {
        let i = 0;
        this.wss.clients.forEach(client => {
            if (client.readyState === 1) {
                client.send(message);
                i++;
                console.log(`Sent message to ${i} clients`);
            }
        });
    };
}