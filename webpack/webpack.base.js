const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
	entry: './src/main.js',
	output: path.resolve(__dirname, '../docs/'),
	module: {
		rules: [
			{
				test: /\.(js)?$/,
				include: [path.resolve(__dirname, '../src/')],
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					ignore: [path.resolve(__dirname, '../src/main.js')],
				},
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.s[ac]ss$/i,
				include: [path.resolve(__dirname, '../src/')],
				use: [
					"style-loader",
					"css-loader",
					{
						loader: 'sass-loader',
						options: {
							sassOptions: {
								includePaths: ['/home/adrian/Desktop/projects/fifa/src/assets/scss/variables.scss']
							},
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: ["css-loader"],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'@src': path.resolve(__dirname, '../src/'),
		},
	},
	plugins: [
		new MiniCssExtractPlugin(),
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(path.resolve(__dirname, '../src/'), 'index.html'),
		}),
	],
};

module.exports = webpackConfig;
