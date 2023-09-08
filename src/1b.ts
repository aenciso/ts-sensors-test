import {Reading} from "./types";

export const filterBySensorId = (sensorId: number, readingsPromise: Promise<Reading[]>): Promise<Reading[]> => {
    return readingsPromise
        .then(readings => {
            return readings.filter(reading => reading.sensorId === sensorId);
        })
        .catch(error => {
            console.error("Error fetching readings:", error);
            return [];
        });
};

// Example usage:
let sensorId = 2;

let readingsPromise: Promise<Reading[]> = new Promise((resolve) => {
    resolve([
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
    ]);
});

filterBySensorId(sensorId, readingsPromise)
    .then(filteredReadings => {
        console.log(filteredReadings);
    });
