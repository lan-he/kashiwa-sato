const path = require('path')
module.exports = {
    webpack: {
        alias: {
            '@': path.join(__dirname, 'src'),
        },
    },
    devServer: {
        proxy: {
            '/api': {
                // target: 'http://192.168.0.15:8888', // 测试服务器
                target: 'http://192.168.0.11:5000', // 测试服务器
                changeOrigin: true,
                pathRewrite: { '/api': 'api' },
            },
            '/ws': {
                target: 'ws://192.168.0.15:30601', // 测试服务器ws
                changeOrigin: true,
                pathRewrite: { '/ws': 'ws' },
            },
        },
    },
}
