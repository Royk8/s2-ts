# S2-Typescript
This Typescript package implements the message validation for the EN50491-12-2 "S2" standard for home and building energy management. This implementation is based on the description of the protocol provided in the s2-ws-json repository.

S2-typescript is the library implemented from s2 standard.

S2-typescript-consumer is the app where the library will be test for development purpose.

## How to use

If it is the first time runnin any of the projects, go to the folder s2-typescript or s2-typescript-consumer and the command:
```
npm install
```

Any changes in S2-typescript have to be compiled the following command:

```
tsc
```

To try the changes in the s2-typescript-consumer, the app.ts file has to be transpile to js using 
```
tsc src/app.ts
```
Then it can be run with
```
node src/app.js
```