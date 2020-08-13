const path = require('path');

module.exports = {
    publicPath: '/vue-gallery/',
    devServer: {
        proxy: {
            "/": {
                target: "http://localhost:8080"
            }
        }
    }
}