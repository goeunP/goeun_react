const proxy = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        '/api',
        proxy({
            target:"http://localhost:5000",
            changeOrigin:true,
        }),
    )
}

//이 파일은 자동으로 적용되기에 다른 곳에 import 할 필요가 없습니다.