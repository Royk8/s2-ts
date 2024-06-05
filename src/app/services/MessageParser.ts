import { S2Message } from '../common';
import * as common from '../common';
import * as ddbc from '../DDBC';
import * as frbc from '../FRBC';
import * as ombc from '../OMBC';
import * as pebc from '../PEBC';
import * as ppbc from '../PPBC';

// This parser takes a Json object with a key message_type and returns the corresponding object
// The message_type is used to determine which class to instantiate
// Lets start with a mapping of message_type to class
const messageTypeToClass = {
    'Handshake': common.Handshake,
    'HandshakeResponse': common.HandshakeResponse,
    'InstructionStatusUpdate': common.InstructionStatusUpdate,
    'PowerForecast': common.PowerForecast,
    'PowerMeasurement': common.PowerMeasurement,
    'ReceptionStatus': common.ReceptionStatus,
    'ResourceManagerDetails': common.ResourceManagerDetails,
    'RevokeObject': common.RevokeObject,
    'SelectControlType': common.SelectControlType,
    'SessionRequest': common.SessionRequest,
    'Timer': common.Timer,
    'Transition': common.Transition,

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

/**
 * Parses a Json string S2Message and returns the corresponding class instance.
 * 
 * @param {any} json - Json string to parse.
 * @returns {any} - The corresponding class instance of an S2Message.
 */
export function parseMessage(json: any): any {
    const jsonObject = JSON.parse(json);
    const messageType = jsonObject.message_type;

    if (!messageType)
        throw new Error("Unknown message type. The object doesn't have a message_type property, hence it's not a S2Message.");

    const messageClass = messageTypeToClass[messageType];
    if (messageClass) {
        return new messageClass(jsonObject);
    }
    console.log("Unknown message type")
    return null;
}

/**
 * Parses a S2Message object and returns the corresponding Json string.
 * 
 * @param {S2Message} message - Instance of a S2Message class.
 * @returns {string} - Json string to parse.
 */
export function messageToJson(message: S2Message): string {
    if(message.message_type && messageTypeToClass[message.message_type]) {
        return JSON.stringify(message);
    }
    throw new Error("Unknown message type");
}