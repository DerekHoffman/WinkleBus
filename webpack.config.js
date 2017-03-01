const webpack = require('webpack');
const postcssImport = require("postcss-import");
const postcssNext = require('postcss-cssnext');
const gulpDeployFtp = require('gulp-deploy-ftp');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './app/dev/dev.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
  entry: {
		App: './app/dev/_global/App.jsx'
	},
  output: {
    path: __dirname+'/app/build',
    filename: '[name].js'
  },
  devServer: {
    inline: true,
    contentBase: __dirname+'/app/build',
    port: 8100
  },
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
  module: {
		preLoaders: [
			{
				test: /\.jsx$/,
				exclude: /\node_modules/,
				loader: 'eslint-loader'
			}
		],
    loaders: [
			{
				test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
				loader: 'url-loader'
			}, {
				test: /\.css$/,
				exclude: /\node_modules/,
				loader: 'style-loader!css-loader!postcss-loader'
			}, {
        test: /\.jsx$/,
				exclude: /\node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
	postcss: function() {
		return [
			postcssImport({
				addDependencyTo: webpack
			}),
			postcssNext({
				browsers: ['last 3 versions']
			})
		];
	},
	plugins: [HTMLWebpackPluginConfig]
};
