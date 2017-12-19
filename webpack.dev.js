const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./app/javascripts/dist",
		hot: true
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	}
});
