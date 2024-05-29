import { WebSocketServerController } from '../../../src/app/services/WebSocketServerController';
import { WebSocketServer } from 'ws';

jest.mock('ws', () => {
    const mWebSocket = {
        on: jest.fn(),
        send: jest.fn(),
        clients: new Set(),
    };
    const mWebSocketServer = jest.fn(() => mWebSocket);
    return {
        WebSocketServer: mWebSocketServer
    };
});

describe('WebSocketServerController', () => {
    let wss: WebSocketServer;
    let wssController: WebSocketServerController;
    let originalConsoleLog: typeof console.log;

    beforeAll(() => {
        originalConsoleLog = console.log;
    });

    beforeEach(() => {
        wss = new WebSocketServer();
        wssController = new WebSocketServerController(8000, jest.fn(
            (message: string) => {
                console.log(message);
            })
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
        console.log = originalConsoleLog;
    });

    it('should initialize WebSocketServer with the provided port', () => {
        expect(WebSocketServer).toHaveBeenCalledWith({ port: 8000 });
    });

    // it('should call onMessage callback when a message is received', () => {
    //     const message = 'test message';
    //     const mockWs = {
    //         on: jest.fn((event, cb) => {
    //             if (event === 'message') {
    //                 cb(message);
    //             }
    //         }),
    //     };            

    //     wssController.wss.on.mock.calls.forEach(([event, cb]) => {
    //         if (event === 'connection') {
    //             cb(mockWs);
    //         }
    //     });

    //     expect(wssController.onMessage).toHaveBeenCalledWith(message);

    // });

    // it('should log a message and broadcast it to all clients on connection', () => {
    //     console.log = jest.fn();
    //     const message = 'welcome message';
    //     wssController.AddMessageOnConection(message);
    //     const mockWs = { on: jest.fn() };

    //     wssController.wss.on.mock.calls.forEach(([event, cb]) => {
    //         if (event === 'connection') {
    //             cb(mockWs);
    //         }
    //     });

    //     expect(console.log).toHaveBeenCalledWith(message);
    // });

    // it('should broadcast message to all connected clients', () => {
    //     console.log = jest.fn();
    //     const message = 'broadcast message';
    //     const mockClient = { readyState: 1, send: jest.fn() };
    //     wssController.wss.clients.add(mockClient);
      
    //     wssController.BroadcastMessage(message);
    //     console.log('WEWEWEE');
      
    //     expect(mockClient.send).toHaveBeenCalledWith(message);
    //     expect(console.log).toHaveBeenCalledWith('Sent message to 1 clients');
    // });
});