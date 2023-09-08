import {Reading} from "./types";

export function getLatestReadings(readings: Reading[]): { [key: number]: Reading } {
    let latestReadings: { [key: number]: Reading } = {};

    readings.forEach(reading => {
        // If there's no existing reading for this sensor or the current reading's timestamp is newer
        if (!latestReadings[reading.sensorId] || reading.timestamp > latestReadings[reading.sensorId].timestamp) {
            latestReadings[reading.sensorId] = reading;
        }
    });

    return latestReadings;
}


let readings: Reading[] = [
    {
        sensorId: 1,
        timestamp: '2023-08-20T12:52:40.775Z',
        sensorType: 'air',
        sensorValue: 3
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
        sensorType: 'air',
        sensorValue: 5
    },
    {
        sensorId: 2,
        timestamp: '2023-08-20T12:52:45.000Z',
        sensorType: 'humidity',
        sensorValue: 1
    }
];

let result = getLatestReadings(readings);
console.log(result);
