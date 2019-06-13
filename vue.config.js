module.exports = {
    // 关闭lint
    lintOnSave:false,
    // 反向代理
    devServer:{
        proxy: {
            '/api': {
                target: 'http://pmdb.dev.colyst.cn/',
                changeOrigin: true
            }
        }
    }
}