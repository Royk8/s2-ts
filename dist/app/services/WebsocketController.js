"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsocketController = void 0;
class WebsocketController {
    constructor(websocketService) {
        this.websocketService = websocketService;
    }
    OpenConnection(url) {
        this.websocketService.OpenConnection(url);
    }
    SendMessage(message) {
        this.websocketService.SendMessage(message);
    }
    CloseConnection() {
        this.websocketService.CloseConnection();
    }
    AddMessageOnConnection(message) {
        this.websocketService.AddMessageOnConnection(message);
    }
    BroadcastMessage(message) {
        this.websocketService.BroadcastMessage(message);
    }
    OnMessage(message) {
        this.websocketService.OnMessage(message);
    }
    OnError(error) {
        this.websocketService.OnError(error);
    }
}
exports.WebsocketController = WebsocketController;
//  The code snippet above shows the WebsocketController class that uses the WebSocketService interface to expose the main functionality of a websocket implementation. The WebsocketController class is responsible for handling the connection, sending messages, closing the connection, adding messages to the connection, broadcasting messages to all clients connected, and handling the message and error events. 
//  The WebsocketController class has a constructor that receives an instance of the WebSocketService interface and assigns it to the websocketService property. The OpenConnection, SendMessage, CloseConnection, AddMessageOnConnection, BroadcastMessage, OnMessage, and OnError methods delegate the calls to the corresponding methods of the websocketService property. 
//  The WebsocketController class acts as a bridge between the WebSocketService interface and the WebSocketService implementation, allowing the application to use the WebSocketService interface without being aware of the actual implementation. This separation of concerns makes it easier to switch between different websocket implementations without changing the application code. 
//  Conclusion 
//  In this article, we discussed the concept of the bridge design pattern and its use cases. We also provided an example of how to implement the bridge design pattern in TypeScript using an interface and a class. The bridge
