// webpack 配置文件使用 commonjs 标准

// 引用nedejs的路径模块
const { resolve } = require("path")


module.exports = {

    // 1、入口文件
    entry: "./src/index.js",

    // 2、输出
    output: {
        // 输出的文件名称
        filename: "index-new.js",

        // 输出的文件路径
        path: resolve(__dirname,"bulid")
    },

    // 3、loader的配置
    module: {
        rules: [

        ]
    },

    // 4、plugins的配置
    plugins:[],

    // 5、设置模式
    mode: "development"     // 开发模式 
    // mode: "production"      //删除模式

}