// const path = require("path");
// module.exports = {
// 	entry: {
// 		home: "./src/js/pages/home.js"
// 	},
// 	output: {
// 		path: path.resolve(__dirname, "assets/js"),
// 	},
// 	module: {
// 		rules: [{
// 			test: /\.js$/,
// 			exclude: /(node_modules)/,
// 			use: {
// 				loader: "babel-loader"
// 			}
// 		}]
// 	}
// };
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
	entry: SRC_DIR + "/js/App.js",
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/app"
	},
	module: {
		rules: [
			{
				test: /\.js?/,
				include: SRC_DIR,
				loader: "babel-loader",
				query: {
					presets: ["@babel/env", "@babel/react"]
				}
			}
		]
	}
};

module.exports = config