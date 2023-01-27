const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        createProxyMiddleware("/api4", {
            target: "http://localhost:5001",
            changeOrigin: true,
            pathRewrite: { "^/api4": "" }
        }),
        createProxyMiddleware("/api2", {
            target: "http://localhost:5001",
            changeOrigin: true,
            pathRewrite: { "^/api2": "" }
        }));
};
