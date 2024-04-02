export interface WebSocketService {
    // Interface that exposes the main functionality of a websocket implementation, opening a connection or handling messages events.
    // Method to open a connection with the websocket server.
    OpenConnection(url: string): void;
    // Method to send a message to the websocket server.
    SendMessage(message: string): void;
    // Method to close the connection with the websocket server.
    CloseConnection(): void;
    // Method to add a message to the connection.
    AddMessageOnConnection(message: string): void;
    // Method to broadcast a message to all clients connected.
    BroadcastMessage(message: string): void;
    // Method to handle the message event.
    OnMessage(message: string): void;
    // Method to handle the error event.
    OnError(error: any): void;
}