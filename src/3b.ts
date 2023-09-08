import { Reading } from "./types";

const getMockReadings = async (): Promise<Reading[]> => {
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
        }
    ];
};

async function checkUpperThresholds() {
    let allSensorReadings = await getMockReadings();

    for (let reading of allSensorReadings) {
        switch (reading.sensorType) {
            case 'air':
                if (reading.sensorValue > 12) {
                    console.error("Air value has exceeded threshold");
                }
                break;
            case 'humidity':
                if (reading.sensorValue > 1) {
                    console.error("Humidity value has exceeded threshold");
                }
                break;
            case 'temperature':
                if (reading.sensorValue > 25) {
                    console.error("Temperature value has exceeded threshold");
                }
                break;
        }
    }
}

(async () => {
    try {
        await checkUpperThresholds();
        console.log("Threshold check complete.");
    } catch (e) {
        console.error(e);
    }
})();
