// var path = require('path');

module.exports = {
    entry: './script.js',
     module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
             test: /\.css?$/,
             exclude: /node_modules/,
             loader: 'style-loader!css-loader'
         }
      ]
   },
   output: {
      path:'./',
      filename: 'index.js',
   },
}