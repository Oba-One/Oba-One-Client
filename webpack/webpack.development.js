/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = () => ({
	output: {
		publicPath: '/',
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
	},
	devServer: {
		port: 3005,
		stats: 'minimal',
		noInfo: true,
		hot: true,
		open: true,
		compress: true,
		overlay: true,
		clientLogLevel: 'none',
		historyApiFallback: true,
		publicPath: '/',
	},
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			appMountId: 'app',
		}),
		new FriendlyErrorsWebpackPlugin({
			compilationSuccessInfo: {
				messages: ['You application is running here http://localhost:3005'],
				notes: ['Start Flying! '],
			},
		}),
	],
});
