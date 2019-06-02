module.exports = {
    devServer: {
        host: 'localhost',
        disableHostCheck: true,
        proxy: {
            'tkzs': {
                target: 'http://api.taokezhushou.com', // 要跨域的域名
                changeOrigin: true, // 是否开启跨域
                pathRewrite: {
                    '^/tkzs': '/' // 在请求的时候 凡是/api开头的地址都可以跨域
                }
            },
            'sms': {
              target: 'http://api.smsbao.com', // 要跨域的域名
              changeOrigin: true, // 是否开启跨域
              pathRewrite: {
                '^/sms': '/' // 在请求的时候 凡是/api开头的地址都可以跨域
              }
            }
        }
    }
}
