var path = require('path');
module.exports = {
    // 打包起始的文件
    entry: './src/index.js',
    //配置环境
    mode: 'development',
    // 打包后的输出配置
    output: {
        // 打包后的保存文件目录，这里需要是个绝对路径（可手动指定），
        path: path.resolve(__dirname, 'dist'),
        // 打包输出后保存的文件名
        filename: 'main.js'
    }
}