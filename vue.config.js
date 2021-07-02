module.exports = {
	assetsDir: "caesammiAssets",
	outputDir: "myBuild",
	publicPath: "/caesammi/",
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({ // 把px单位换算成rem单位
            rootValue: 32,// 结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
            propList: ['*'],
            selectorWhiteList: ['*'],
            selectorBlackList: ['el']
          })
        ]
      }
    }
  },
  configureWebpack: config => {
    config.name = 'caesammi'
    config.resolve.alias = Object.assign(config.resolve.alias, require('./aliases.config').webpack)
    // 生产环境去掉注释及相关控制台信息方法
    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.extractComments = true
      config.optimization.minimizer[0].options.terserOptions.output.comments = false
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = true
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
    }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch') // 移除 prefetch 插件
    config.plugins.delete('preload') // 移除 preload 插件
  },
  parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
  productionSourceMap: false,
	devServer: {
		open: true,
		overlay: {
			warnings: true,
			errors: true
		},
		proxy: {
			"/api/": {
				target: "http://10.238.235.190:8080/api/v1/",
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					"^/api": "api"
					// '^/api': '/' 这种接口配置出来     http://XX.XX.XX.XX:8083/login
				}

			}
		}
	},
	lintOnSave: false
};
