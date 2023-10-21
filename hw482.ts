// 继电器

import { Gpio } from "onoff";


// 使用GPIO引脚编号，根据实际连接调整
const relay = new Gpio(17, 'out');

export function hw482() {
    function open() {
        // 控制继电器开启
        relay.writeSync(1);
    }

    function close() {
        // 关闭继电器
        relay.writeSync(0);
    }

    let index: number = 0;

    // 保持继电器状态一段时间
    setInterval(() => {
        index++;
        if (index === 100) {
            close();
            // 释放GPIO资源
            relay.unexport();
        }
        if (index % 2 == 0) {
            open();
        } else {
            close();
        }
    }, 300); // 5秒钟
}
