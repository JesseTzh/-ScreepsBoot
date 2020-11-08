const logger = require('Log').getLogger("Timer");
const Database = require('Database');

function checkTimerStatus() {
    if (!global.timerInitialized) {
        //初始化计时器标识
        global.timerInitialized = true;
    }
}

function timerJob() {
    // TODO 使用配置文件的方式加载不同的定时任务
    if (Game.time % 1000 === 0) {
        Database.setCreepDataFlag(false);
        Database.setRoomDataFlag(false);
    }
}

module.exports = function () {
    //检查计数器是否已初始化
    checkTimerStatus();

}