import { getLatestReadings } from "../2";
import { Reading } from "../types";

describe('getLatestReadings', () => {

    const sampleReadings: Reading[] = [
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

    it('should return the latest reading for each sensor', () => {
        const result = getLatestReadings(sampleReadings);
        expect(result).toEqual({
            1: sampleReadings[2],
            2: sampleReadings[1]
        });
    });

    it('should return an empty object if no readings are provided', () => {
        const result = getLatestReadings([]);
        expect(result).toEqual({});
    });

});
