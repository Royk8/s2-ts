import { WebSocketService } from "./WebsocketService";
import { WebSocket, Server } from 'ws';

export class WsWebsocketService implements WebSocketService {
    private websocket: WebSocket;

    OpenConnection(url: string): void {
        this.websocket = new WebSocket(url);

        this.websocket.on('open', () => {
            console.log('Connection opened');
        });

        this.websocket.on('message', (message: string) => {
            this.OnMessage(message);
        });

        this.websocket.on('error', (error: any) => {
            this.OnError(error);
        });
    }

    SendMessage(message: string): void {
        if (this.websocket && this.websocket.readyState === WebSocket.OPEN) {
            this.websocket.send(message);
        }
    }

    CloseConnection(): void {
        if (this.websocket) {
            this.websocket.close();
        }
    }

    AddMessageOnConnection(message: string): void {
        this.websocket.on('open', () => {
            this.websocket.send(message);
        });
    }

    BroadcastMessage(message: string): void {
        if (this.websocket instanceof Server) {
            this.websocket.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });
        }
    }

    OnMessage(message: string): void {
        console.log(`Received message: ${message}`);
    }

    OnError(error: any): void {
        console.error(`WebSocket error: ${error}`);
    }
}