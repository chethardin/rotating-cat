const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
    eleventyConfig.addDataExtension("yaml", (contents) =>
        yaml.safeLoad(contents)
    );
    eleventyConfig.addPassthroughCopy("admin/config.yml");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy('admin');
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy('scss');
    eleventyConfig.addFilter('dump', obj => {
        return util.inspect(obj)
    });
};

const util = require('util')
