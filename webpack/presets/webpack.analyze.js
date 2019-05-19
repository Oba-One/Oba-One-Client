const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = env => ({
	plugins: [
		new WebpackBundleAnalyzer(),
		new DashboardPlugin({
			port: 3002,
		}),
	],
});
