import { checkUpperThresholds, getMockReadings } from "../3b";


jest.mock('../3b', () => ({
    ...jest.requireActual('../3b'),
    getMockReadings: jest.fn()
}));

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
        await checkUpperThresholds();
        expect(mockError).toHaveBeenCalledWith("Air value has exceeded threshold");
    });

    it("should check humidity readings and not log error if within threshold", async () => {
        await checkUpperThresholds();
        expect(mockError).not.toHaveBeenCalledWith("Humidity value has exceeded threshold");
    });

    it("should check temperature readings and not log error if within threshold", async () => {
        await checkUpperThresholds();
        expect(mockError).not.toHaveBeenCalledWith("Temperature value has exceeded threshold");
    });

});
