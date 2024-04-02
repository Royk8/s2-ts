import { WebSocketService } from "src/websocket/WebsocketService";
export declare class WebsocketController {
    private websocketService;
    constructor(websocketService: WebSocketService);
    OpenConnection(url: string): void;
    SendMessage(message: string): void;
    CloseConnection(): void;
    AddMessageOnConnection(message: string): void;
    BroadcastMessage(message: string): void;
    OnMessage(message: string): void;
    OnError(error: any): void;
}
