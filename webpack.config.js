let Encore = require('@symfony/webpack-encore')

Encore
  .disableSingleRuntimeChunk()
  .setOutputPath('theme/')
  .setPublicPath('/theme')
  .addStyleEntry('slides', './assets/css/tailwind.pcss')
  .enablePostCssLoader()

process.env.NODE_ENV =
  process.env.NODE_ENV || Encore.isProduction() ? 'production' : 'development';

module.exports = Encore.getWebpackConfig()
