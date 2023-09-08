import {getMockReadings} from "./getMockReadings";

export async function checkUpperThresholds() {
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
/* istanbul ignore next */
(async () => {
    try {
        await checkUpperThresholds();
        console.log("Threshold check complete.");
    } catch (e) {
        console.error(e);
    }
})();
