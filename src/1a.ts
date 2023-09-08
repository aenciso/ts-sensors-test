import {Reading} from "./types";

const filterBySensorId = (sensorId: number, readings: Reading[]): Reading[] => {
    return readings.filter(reading => reading.sensorId === sensorId);
};

// Example usage:
let sensorId = 2;
let readings: Reading[] = [
    {
        sensorId: 1,
        timestamp: '2023-08-20T12:52:48.775Z',
        sensorType: 'air',
        sensorValue: 5
    },
    {
        sensorId: 2,
        timestamp: '2023-08-20T12:52:46.442Z',
        sensorType: 'humidity',
        sensorValue: 2
    },
    {
        sensorId: 1,
        timestamp: '2023-08-20T12:52:48.775Z',
        sensorType: 'temperature',
        sensorValue: 5
    }
];

let filteredReadings = filterBySensorId(sensorId, readings);
console.log(filteredReadings);
