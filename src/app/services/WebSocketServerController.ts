import { WebSocketServer, WebSocket } from 'ws';
import { messageToJson } from './MessageParser';

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

    public broadcastMessage(message: string | any): void {
        if (typeof message !== 'string') {
            message = messageToJson(message);
        }
        this.wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                console.log(`Broadcasting message => ${message}`);
                client.send(message);
            }
        });
    }
}
