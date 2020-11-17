const path = require('path');
const { merge } = require('webpack-merge');
const port = process.env.PORT || 8080;

const webpackBase = require('./webpack.base');

module.exports = merge(webpackBase, {
	target: 'web',
	mode: 'development',
	cache: true,
	optimization: {
		minimize: false,
	},
	devServer: {
		contentBase: path.resolve(__dirname, '../src/'),
		compress: true,
		port,
		hot: true,
	},
});