module.exports = {
	assetsDir: "caesammiAssets",
	outputDir: "myBuild",
	publicPath: "/caesammi/",
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