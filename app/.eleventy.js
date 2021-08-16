module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("images");
	eleventyConfig.addPassthroughCopy('admin');
	eleventyConfig.addPassthroughCopy("js");
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy('scss');
	eleventyConfig.addPassthroughCopy({
		"node_modules/seamless-scroll-polyfill/dist/es5/seamless.js": "js/seamless.js"
	});
	eleventyConfig.addFilter('dump', obj => {
		return util.inspect(obj)
	});
};

const util = require('util')
