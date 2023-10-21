// 温湿度

import { read } from 'node-dht-sensor';

// 传感器类型和引脚编号 (根据你的连接配置)
const sensorType = 11; // DHT22传感器
const sensorPin = 17;   // 连接到的GPIO引脚

// 读取传感器数据
const readSensorData = () => {
    read(sensorType, sensorPin, (err, temperature, humidity) => {
        if (!err) {
            console.log(`温度: ${temperature.toFixed(1)}°C, 湿度: ${humidity.toFixed(1)}%`);
        } else {
            console.error("无法读取传感器数据:", err);
        }
    });
};


export default class hw507 {
    constructor() {
        // 间隔一定时间读取数据
        const interval = 10; // 2秒读取一次

        // 启动数据读取
        setInterval(readSensorData, interval);
    }
}
