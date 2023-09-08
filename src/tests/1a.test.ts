import { filterBySensorId } from "../1a";
import { Reading } from "../types";

describe('filterBySensorId', () => {

    const sampleReadings: Reading[] = [
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

    it('should return readings for a specific sensorId', () => {
        const result = filterBySensorId(2, sampleReadings);
        expect(result).toEqual([sampleReadings[1]]);
    });

    it('should return an empty array if sensorId does not match', () => {
        const result = filterBySensorId(3, sampleReadings);
        expect(result).toEqual([]);
    });

});

