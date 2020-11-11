const logger = require('Log').getLogger("System");
const Tower = require('Construction_Tower');
const Link = require('Construction_Link');
const ExtensionLoader = require('ExtensionLoader');
const DataCleaner = require('DataCleaner');
const Timer = require('Timer');
const Database = require('Database');
const creepManager = require('creepManager');
const tool = require('utils.tools');
const Watcher = require('Watcher');

//系统启动
function boot() {
    //挂载各原型扩展
    ExtensionLoader();
    //清理内存以及global储存空间
    DataCleaner();
    //检查数据库是否需要刷新
    Database.checkDatabaseFlag();
    //计时器开始运作检查本tick工作
    Timer();
    //Creep管理
    creepManager.creepManager();

}

//系统关闭
function end() {
    //Watcher.beginWatch();

    // TODO 添加能量短缺计数器
    tool.endLog()
    tool.test();
    //Game.cpu.generatePixel();
}

//系统运作
function work() {

    for (let name in Game.creeps) {
        Game.creeps[name].work();
    }
    Tower.towerWork();
    Link.linkTransfer();
}

module.exports = {
    boot: boot,
    end: end,
    work: work
}