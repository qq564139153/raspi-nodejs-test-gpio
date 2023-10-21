// led传感器

import { Gpio } from 'onoff';

const ledPin = 26;

const led = new Gpio(ledPin, 'out');

function turnOnLed() {
    console.log('Turning on the LED');
    led.writeSync(1);
}

function turnOffLed() {
    console.log('Turning off the LED');
    led.writeSync(0);
}

function blinkLed() {
    setInterval(() => {
        turnOnLed();
        setTimeout(turnOffLed, 500); // 500 毫秒后熄灭LED
    }, 1000); // 每隔一秒执行一次
}

blinkLed(); // 启动LED闪烁