import { checkUpperThresholds } from "../3b";
import {getMockReadings} from "../getMockReadings";


jest.mock('../getMockReadings');

describe("Threshold Checker", () => {

    const mockError = jest.spyOn(console, 'error').mockImplementation(() => {});

    afterEach(() => {
        mockError.mockClear();
        (getMockReadings as jest.Mock).mockClear();
    });

    afterAll(() => {
        mockError.mockRestore();
    });

    it("should check air readings and log error if above threshold", async () => {
        (getMockReadings as jest.Mock).mockResolvedValue([
            {
                sensorId: 1,
                sensorType: 'air',
                sensorValue: 14,
                timestamp: '2023-08-20T12:52:48.775Z'
            }
        ]);
        await checkUpperThresholds();
        expect(mockError).toHaveBeenCalledWith("Air value has exceeded threshold");
    });

    it("should check humidity readings and not log error if within threshold", async () => {
        await checkUpperThresholds();
        expect(mockError).not.toHaveBeenCalledWith("Humidity value has exceeded threshold");
    });

    it("should check humidity readings and log error if above threshold", async () => {
        (getMockReadings as jest.Mock).mockResolvedValueOnce([{
            sensorId: 2,
            sensorType: 'humidity',
            sensorValue: 1.1,
            timestamp: '2023-08-22T12:52:48.775Z'
        }]);

        await checkUpperThresholds();
        expect(mockError).toHaveBeenCalledWith("Humidity value has exceeded threshold");
    });

    it("should check temperature readings and not log error if within threshold", async () => {
        await checkUpperThresholds();
        expect(mockError).not.toHaveBeenCalledWith("Temperature value has exceeded threshold");
    });


    it("should check temperature readings and log error if above threshold", async () => {
        (getMockReadings as jest.Mock).mockResolvedValueOnce([{
            sensorId: 3,
            sensorType: 'temperature',
            sensorValue: 26,
            timestamp: '2023-08-23T12:52:48.775Z'
        }]);

        await checkUpperThresholds();
        expect(mockError).toHaveBeenCalledWith("Temperature value has exceeded threshold");
    });

});
