import * as messages from '../common';
import * as frbc from '../FRBC';

// This parser takes a Json object with a key message_type and returns the corresponding object
// The message_type is used to determine which class to instantiate
// Lets start with a mapping of message_type to class
const messageTypeToClass = {
    'Handshake': messages.Handshake,
    'HandshakeResponse': messages.HandshakeResponse,
    'InstructionStatusUpdate': messages.InstructionStatusUpdate,
    'PowerForecast': messages.PowerForecast,
    'PowerMeasurement': messages.PowerMeasurement,
    'ReceptionStatus': messages.ReceptionStatus,
    'ResourceManagerDetails': messages.ResourceManagerDetails,
    'RevokeObject': messages.RevokeObject,
    'SelectControlType': messages.SelectControlType,
    'SessionRequest': messages.SessionRequest,
    'Timer': messages.Timer,
    'Transition': messages.Transition,
    'FRBC.StorageStatus': frbc.FrbcStorageStatus,
    'FRBC.ActuatorStatus': frbc.FrbcActuatorStatus,
    'FRBC.FillLevelTargetProfile': frbc.FrbcFillLevelTargetProfile,
    'FRBC.Instruction': frbc.FrbcInstruction,
    'FRBC.LeakageBehaviour': frbc.FrbcLeakageBehaviour,
    'FRBC.OperationMode': frbc.FrbcOperationMode,
    'FRBC.StorageDescription': frbc.FrbcStorageDescription,
    'FRBC.TimerStatus': frbc.FrbcTimerStatus,
    'FRBC.UsageForecast': frbc.FrbcUsageForecast
}

// Now we can use the message_type to create the object
export function parseMessage(json: any): any {
    const jsonObject = JSON.parse(json);
    const messageType = jsonObject.message_type;
    const messageClass = messageTypeToClass[messageType];
    if (messageClass) {
        return new messageClass(jsonObject);
    }
    console.log("Unknown message type")
    return null;
}