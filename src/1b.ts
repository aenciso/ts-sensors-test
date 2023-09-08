import {Reading} from "./types";

const filterBySensorId = (sensorId: number, readingsPromise: Promise<Reading[]>): Promise<Reading[]> => {
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
    // For demonstration, resolving with an example list.
    // You might fetch this data from an API in a real-world scenario.
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
    // For testing rejection:
    // reject("Failed to fetch readings");
});

filterBySensorId(sensorId, readingsPromise)
    .then(filteredReadings => {
        console.log(filteredReadings);
    });
