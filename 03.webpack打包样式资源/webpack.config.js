// 引入path模块
const { resolve } = require('path');

// 曝出模块
module.exports = {
    entry: "./index.js",
    output: {
        filename: "index-new.js",
        path: resolve(__dirname,"bulid")
    },
    module:{
        rules:[
            {
                // 匹配.css文件
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins:[],
    mode: "development"
}
