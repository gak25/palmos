const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		entry: './app/javascript/packs/index.js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '/app', '/javascript', '/dist')
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	}
};
