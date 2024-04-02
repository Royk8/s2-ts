import { WebSocketService } from "src/websocket/WebsocketService";

export class WebsocketController {
    private websocketService: WebSocketService;

    constructor(websocketService: WebSocketService) {
        this.websocketService = websocketService;
    }

    OpenConnection(url: string): void {
        this.websocketService.OpenConnection(url);
    }

    SendMessage(message: string): void {
        this.websocketService.SendMessage(message);
    }

    CloseConnection(): void {
        this.websocketService.CloseConnection();
    }

    AddMessageOnConnection(message: string): void {
        this.websocketService.AddMessageOnConnection(message);
    }

    BroadcastMessage(message: string): void {
        this.websocketService.BroadcastMessage(message);
    }

    OnMessage(message: string): void {
        this.websocketService.OnMessage(message);
    }

    OnError(error: any): void {
        this.websocketService.OnError(error);
    }
} 
//  The code snippet above shows the WebsocketController class that uses the WebSocketService interface to expose the main functionality of a websocket implementation. The WebsocketController class is responsible for handling the connection, sending messages, closing the connection, adding messages to the connection, broadcasting messages to all clients connected, and handling the message and error events. 
//  The WebsocketController class has a constructor that receives an instance of the WebSocketService interface and assigns it to the websocketService property. The OpenConnection, SendMessage, CloseConnection, AddMessageOnConnection, BroadcastMessage, OnMessage, and OnError methods delegate the calls to the corresponding methods of the websocketService property. 
//  The WebsocketController class acts as a bridge between the WebSocketService interface and the WebSocketService implementation, allowing the application to use the WebSocketService interface without being aware of the actual implementation. This separation of concerns makes it easier to switch between different websocket implementations without changing the application code. 
//  Conclusion 
//  In this article, we discussed the concept of the bridge design pattern and its use cases. We also provided an example of how to implement the bridge design pattern in TypeScript using an interface and a class. The bridge