module.exports = {
	entry: './src/js/app.jsx',
	output: {
		filename: './root/js/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react', "stage-1"]
				}
			},
			{
				test: /.css$/,
				loader: 'style-loader!css-loader?camelCase&modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
			}
		]
	},
	postcss: () => {
		return [
			require('autoprefixer'),
			require('precss')
		];
	},
	resolve: {
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js', '.jsx']
	}
};
