import * as messages from '../common';
import * as ddbc from '../DDBC';
import * as frbc from '../FRBC';
import * as ombc from '../OMBC';
import * as pebc from '../PEBC';
import * as ppbc from '../PPBC';

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

    'DDBC.ActuatorStatus': ddbc.DdbcActuatorStatus,
    'DDBC.AverageDemandRateForecast': ddbc.DdbcAverageDemandRateForecast,
    'DDBC.Instruction': ddbc.DdbcInstruction,
    'DDBC.SystemDescription': ddbc.DdbcSystemDescription,
    'DDBC.TimerStatus': ddbc.DdbcTimerStatus,

    'FRBC.ActuatorStatus': frbc.FrbcActuatorStatus,
    'FRBC.FillLevelTargetProfile': frbc.FrbcFillLevelTargetProfile,
    'FRBC.Instruction': frbc.FrbcInstruction,
    'FRBC.LeakageBehaviour': frbc.FrbcLeakageBehaviour,
    'FRBC.StorageStatus': frbc.FrbcStorageStatus,
    'FRBC.SystemDescription': frbc.FrbcSystemDescription,
    'FRBC.OperationMode': frbc.FrbcOperationMode,
    'FRBC.TimerStatus': frbc.FrbcTimerStatus,
    'FRBC.UsageForecast': frbc.FrbcUsageForecast,

    'OMBC.Instruction': ombc.OmbcInstruction,
    'OMBC.Status': ombc.OmbcStatus,
    'OMBC.SystemDescription': ombc.OmbcSystemDescription,
    'OMBC.TimerStatus': ombc.OmbcTimerStatus,

    'PEBC.EnergyConstraint': pebc.PebcEnergyConstraint,
    'PEBC.Instruction': pebc.PebcInstruction,
    'PEBC.PowerConstraints': pebc.PebcPowerConstraints,

    'PPBC.EndInterruptionInstruction': ppbc.PpbcEndInterruptionInstruction,
    'PPBC.PowerProfileDefinition': ppbc.PpbcPowerProfileDefinition,
    'PPBC.PowerProfileStatus': ppbc.PpbcPowerProfileStatus,
    'PPBC.ScheduleInstruction': ppbc.PpbcScheduleInstruction,
    'PPBC.StartInterruptionInstruction': ppbc.PpbcStartInterruptionInstruction,
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