const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
	template: "./src/index.html",
	filename: "./index.html",
});

module.exports = {
	entry: "./src",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.css/,
				use: ["style-loader", "css-loader"],
			},
			{
				test:/\.jpg/,
				use: ["url-loader"]
			}
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
	plugins: [htmlPlugin],
};
