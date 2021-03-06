/**
 * ROOT WEBPACK CONFIGURATION
 **/

const path = require('path');
const webpackMerge = require('webpack-merge');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const ImageminWebP = require('imagemin-webp');
const Dotenv = require('dotenv-webpack');

const presetConfig = require('./webpack/presetConfig');
const modeConfig = env => require(`./webpack/webpack.${env.mode}.js`)(env);

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
	return webpackMerge(
		{
			mode,
			module: {
				rules: [
					{
						test: /\.(js|jsx)$/,
						exclude: /node_modules/,
						loader: 'babel-loader',
					},
					{
						test: /\.(png|svg|jpe?g|gif)$/,
						loader: 'file-loader',
					},
					{
						test: /\.png$/,
						use: [
							{
								loader: 'url-loader',
								options: {
									limit: 4096,
									mimetype: 'image/png',
								},
							},
						],
					},
				],
			},
			resolve: {
				alias: { 'react-dom': '@hot-loader/react-dom' },
			},
			plugins: [
				new ImageminPlugin({
					pngquant: { quality: [0.5, 0.5] },
					plugins: [
						ImageminWebP({ quality: 50 }),
						ImageminMozjpeg({ quality: 50 }),
					],
				}),
				new Dotenv(),
			],
		},
		modeConfig({ mode, presets }),
		presetConfig({ mode, presets }),
	);
};
