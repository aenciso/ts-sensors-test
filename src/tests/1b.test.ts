import { filterBySensorId } from "../1b";
import { Reading } from "../types";

describe('filterBySensorId', () => {

    it('should return readings for a specific sensorId', async () => {
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

        const readingsPromise = Promise.resolve(sampleReadings);

        const result = await filterBySensorId(2, readingsPromise);

        expect(result).toEqual([sampleReadings[1]]);
    });

    it('should return an empty array if sensorId does not match', async () => {
        const sampleReadings: Reading[] = [
            {
                sensorId: 1,
                timestamp: '2023-08-20T12:52:48.775Z',
                sensorType: 'air',
                sensorValue: 5
            },
            {
                sensorId: 1,
                timestamp: '2023-08-20T12:52:48.775Z',
                sensorType: 'temperature',
                sensorValue: 5
            }
        ];

        const readingsPromise = Promise.resolve(sampleReadings);

        const result = await filterBySensorId(2, readingsPromise);

        expect(result).toEqual([]);
    });

    it('should catch errors and return an empty array', async () => {
        const failedReadings: Promise<Reading[]> = Promise.reject(new Error('Failed fetching readings'));

        const mockError = jest.spyOn(console, 'error').mockImplementation(() => {});

        const result = await filterBySensorId(1, failedReadings);
        expect(result).toEqual([]);

        expect(mockError).toHaveBeenCalledWith("Error fetching readings:", new Error('Failed fetching readings'));

        mockError.mockRestore();
    });


});

