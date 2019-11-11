const path = require('path')
const resolve = dir => {
    return path.join(__dirname, dir)
}
const config={
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_c', resolve('src/components'))
    },
}
module.exports=config