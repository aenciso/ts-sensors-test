export type SensorType = 'air' | 'humidity' | 'temperature';

export interface Reading {
    timestamp: string;
    sensorId: number;
    sensorType: SensorType;
    sensorValue: number;
}
