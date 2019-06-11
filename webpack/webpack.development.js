/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();

module.exports = () =>
	smp.wrap({
		output: {
			publicPath: '/',
			path: path.resolve(__dirname, 'public'),
			pathinfo: false,
			filename: '[name].js',
			chunkFilename: '[name].chunk.js',
		},
		optimization: {
			splitChunks: {
				chunks: 'all',
			},
		},
		watchOptions: {
			poll: true,
		},
		devServer: {
			port: 3005,
			stats: 'none',
			noInfo: true,
			hot: true,
			open: true,
			compress: true,
			overlay: true,
			clientLogLevel: 'none',
			historyApiFallback: true,
			publicPath: '/',
		},
		devtool: 'cheap-module-eval-source-map',
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
		performance: {
			hints: false,
		},
	});
