# S2-Typescript
[![npm version](https://badge.fury.io/js/s2-typescript.svg)](https://badge.fury.io/js/s2-typescript)


This Typescript package implements the message validation for the EN50491-12-2 "S2" standard for home and building energy management. This implementation is based on the description of the protocol provided in the s2-ws-json repository.

S2-typescript is the library implemented from s2 standard.

## Installation
```bash
npm install s2-typescript
```

## How to use
#### Use S2 classes
Import the classes needed.
```ts
import {
    FrbcStorageDescription,
    NumberRange,
    parseMessage
} from 's2-typescript';
```

Create instances of classes passing the parameters in an object.
```ts
const storageDescription = new FrbcStorageDescription({
    diagnostic_label: 'Electric car battery',
    fill_level_label: 'mAh',
    provides_leakage_behaviour: true,
    provides_fill_level_target_profile: true,
    provides_usage_forecast: false,
    fill_level_range: {start_of_range: 15000, end_of_range: 20000}
});
```
#### Manage websocket connections
Open websocket conections using the class.
```ts
import { WebSocketServerController } from 's2-typescript';

//Indicate the port or url conection.
const ws = new WebSocketServerController(8000);
```

Serialize message objects using the JSON library and send through the websocket connection.
```ts
const status = new FrbcStorageStatus({
    present_fill_level: 18000
});

const serializedStatus = JSON.stringify(status);
ws.BroadcastMessage(serializedStatus);
```

#### Control responses
Deserialized json objects received throught the websocket using the parseMessage function. An instance of the corresponding class of the message will be created. 
```ts
import { parseMessage } from 's2-typescript';

const deserializeStatus = parseMessage(serializedStatus);
const currentFillLevel = deserializeStatus.present_fill_level;
```
