/**
 * PRESET WEBPACK CONFIGURATION
 */

const webpackMerge = require('webpack-merge');

const applyPresets = (env = { presets: [] }) => {
	const presets = env.presets || [];
	const flattenPresets = [].concat(...[presets]);
	const mergedConfigs = flattenPresets.map(presetName =>
		require(`./presets/webpack.${presetName}`)(env),
	);

	return webpackMerge({}, ...mergedConfigs);
};

module.exports = applyPresets;
