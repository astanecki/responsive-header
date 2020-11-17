const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackBase = require('./webpack.base');

module.exports = merge(webpackBase, {
	mode: 'production',
	output: {
		path: path.join(__dirname, '../public/'),
		filename: '[name].[contenthash].js',
	},
	optimization: {
		minimize: true,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		}),
	],
});