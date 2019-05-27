const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = ({ cache, env }) => {
	const NODE_ENV = env();
	console.log(NODE_ENV);
	cache.using(() => process.env.NODE_ENV === 'development');
	return {
		presets: [
			[
				'@babel/preset-env',
				{
					targets: {
						esmodules: true,
					},
					modules: isTest ? 'commonjs' : false,
				},
			],
			'@babel/preset-react',
		],
		plugins: [
			'babel-plugin-styled-components',
			'@babel/plugin-proposal-class-properties',
			'@babel/plugin-syntax-dynamic-import',
			isTest ? 'dynamic-import-node' : null,
		].filter(Boolean),
		env: {
			development: {
				only: ['src'],
				plugins: ['babel-plugin-styled-components', 'react-hot-loader/babel'],
			},
			production: {
				only: ['src'],
				plugins: ['babel-plugin-styled-components'],
			},
		},
	};
};
