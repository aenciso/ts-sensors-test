import {Reading} from "./types";

const getMockReadings = async (): Promise<Reading[]> => {
    await new Promise(res => setTimeout(res, 500));
    return [
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
        }]
};
async function checkUpperThresholds() {
    let allSensorReadings = await getMockReadings();

    for (let i = 0; i < allSensorReadings.length; i++) {
        const reading = allSensorReadings[i];
        if (reading.sensorType == 'air' && reading.sensorValue > 12) {
            console.error("Air value has exceeded threshold");
        }
        if (reading.sensorType == 'humidity' && reading.sensorValue > 1) {
            console.error("Humidity value has exceeded threshold");
        }
        if (reading.sensorType == 'temperature' && reading.sensorValue > 25) {
            console.error("Temperature value has exceeded threshold");
        }
    }
}

(async () => {
    try {
        const result = await checkUpperThresholds();
        console.log(result);
    } catch (e) {
        console.log(e);
    }
})();

