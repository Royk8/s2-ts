export interface WebSocketService {
    OpenConnection(url: string): void;
    SendMessage(message: string): void;
    CloseConnection(): void;
    AddMessageOnConnection(message: string): void;
    BroadcastMessage(message: string): void;
    OnMessage(message: string): void;
    OnError(error: any): void;
}
