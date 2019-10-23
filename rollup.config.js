const replace = require("rollup-plugin-replace");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const babel = require("rollup-plugin-babel");

const NODE_ENV = process.env.NODE_ENV || "development";
const outputFile =
	NODE_ENV === "production" ? "./dist/index.js" : "./dist/index.dev.js";
export default {
	input: "src/index.js",
	output: {
		file: outputFile,
		format: "cjs",
	},
	plugins: [
		replace({
			"process.env.NODE_ENV": JSON.stringify(NODE_ENV),
		}),
		babel({
			exclude: "node_modules/**",
		}),
		resolve(),
		commonjs(),
	],
	external: id => /^react|styled-jsx/.test(id),
};
