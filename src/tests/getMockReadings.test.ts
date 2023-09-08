import { getMockReadings } from "../getMockReadings";
import { Reading } from "../types";

describe('getMockReadings', () => {
    it('should return an array of mock readings', async () => {
        const expectedReadings: Reading[] = [
            {
                sensorId: 1,
                sensorType: 'air',
                sensorValue: 14,
                timestamp: '2023-08-20T12:52:48.775Z'
            },
            {
                sensorId: 2,
                sensorType: 'humidity',
                sensorValue: 0.8,
                timestamp: '2023-08-22T12:52:48.775Z'
            },
            {
                sensorId: 3,
                sensorType: 'temperature',
                sensorValue: 21,
                timestamp: '2023-08-23T12:52:48.775Z'
            }
        ];

        const result = await getMockReadings();
        expect(result).toEqual(expectedReadings);
    });
});
