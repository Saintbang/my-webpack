function add(x,y) {
    return x + y;
}
console.log(add(10, 20));

// 可使用两个命令执行
// 1、开发模式
// webpack .\src\index.js -o ./bulid/index-news2.js --mode=development

// 2、生产模式
// webpack .\src\index.js -o ./bulid/index-news2.js --mode=production

// 两种模式都可以运行，生产模式是压缩版，占用存储小
