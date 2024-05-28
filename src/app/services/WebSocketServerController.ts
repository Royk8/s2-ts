// import { WebSocketServer } from 'ws';


// export type MessageReceiveCallback = (message: string) => void;

// export class WebSocketServerController {
//     wss: WebSocketServer;
//     onMessage: MessageReceiveCallback;
//     constructor(port: number = 8000, onMessage?: MessageReceiveCallback) {
//         this.wss = new WebSocketServer({ port: port });
//         this.onMessage = onMessage;

//         this.wss.on('error', console.error);


//         this.wss.on('message', message => {
//             this.onMessage(message);
//             this.BroadcastMessage("Gracias por tu mensaje");
//         });

//         console.log('SERVER: WebSocketServerController initialized');
//         this.BroadcastMessage('SERVER: Welcome to WebSocketServerController');
//     }

//     public AddMessageOnConection(message: string) : void {
//         this.wss.on('connection', ws => {
//             console.log(message);
//             this.BroadcastMessage(message);
//         });
//     }
    
//     public BroadcastMessage(message: string) : void {
//         let i = 0;
//         this.wss.clients.forEach(client => {
//             if (client.readyState === 1) {
//                 client.send(message);
//                 i++;
//                 console.log(`SERVER: Sent message to ${i} clients`);
//             }
//         });
//     };
// }


import { WebSocketServer, WebSocket } from 'ws';

export type ClientMessageCallback = (client: WebSocket, message: string) => void;
export type ClientCallback = (client: WebSocket) => void;

export class WebSocketServerController {
    wss: WebSocketServer;
    onClientMessage: ClientMessageCallback;
    onClientConnected: ClientCallback;
    onClientDisconnected: ClientCallback;

    constructor(port: number, onClientMessage?: ClientMessageCallback, onClientConnected?: ClientCallback, onClientDisconnected?: ClientCallback) {
        this.onClientMessage = onClientMessage || ((client, message) => {
            client.send(message +"RECIBIDO");
        });
        this.onClientConnected = onClientConnected || ((client) => {});
        this.onClientDisconnected = onClientDisconnected || ((client) => {});
        
        this.wss = new WebSocketServer({ port });

        this.wss.on('connection', (ws: WebSocket) => {
            console.log('SERVER: Client connected');
            this.onClientConnected(ws);

            ws.on('message', (message: string) => {
                this.onClientMessage(ws, message);
            });

            ws.on('close', () => {
                console.log('SERVER: Client disconnected');
                this.onClientDisconnected(ws);
            });

            ws.on('error', console.error);
        });

        this.wss.on('listening', () => {
            console.log(`WebSocket server is listening on port ${port}`);
        });

        this.wss.on('error', console.error);
    }

    public broadcastMessage(message: string): void {
        this.wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                console.log(`Broadcasting message => ${message}`);
                client.send(message);
            }
        });
    }
}
