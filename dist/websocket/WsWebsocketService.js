"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WsWebsocketService = void 0;
const ws_1 = require("ws");
class WsWebsocketService {
    OpenConnection(url) {
        this.websocket = new ws_1.WebSocket(url);
        this.websocket.on('open', () => {
            console.log('Connection opened');
        });
        this.websocket.on('message', (message) => {
            this.OnMessage(message);
        });
        this.websocket.on('error', (error) => {
            this.OnError(error);
        });
    }
    SendMessage(message) {
        if (this.websocket && this.websocket.readyState === ws_1.WebSocket.OPEN) {
            this.websocket.send(message);
        }
    }
    CloseConnection() {
        if (this.websocket) {
            this.websocket.close();
        }
    }
    AddMessageOnConnection(message) {
        this.websocket.on('open', () => {
            this.websocket.send(message);
        });
    }
    BroadcastMessage(message) {
        if (this.websocket instanceof ws_1.Server) {
            this.websocket.clients.forEach(client => {
                if (client.readyState === ws_1.WebSocket.OPEN) {
                    client.send(message);
                }
            });
        }
    }
    OnMessage(message) {
        console.log(`Received message: ${message}`);
    }
    OnError(error) {
        console.error(`WebSocket error: ${error}`);
    }
}
exports.WsWebsocketService = WsWebsocketService;
