// Official Eleventy Plugins
const pluginNavigation = require("@11ty/eleventy-navigation");
//const pluginRSS = require("@11ty/eleventy-plugin-rss");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

// markdown-it plugins
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItFigures = require('markdown-it-image-figures');

module.exports = function(config) {
	
	// Plugins
	config.addPlugin(EleventyHtmlBasePlugin);
	config.addPlugin(pluginNavigation);
	//config.addPlugin(pluginRSS);

	// Passthrough
	config.addPassthroughCopy({"src/_": "."});
	config.addPassthroughCopy("src/img");

	return {
		markdownTemplateEngine: 'njk',
		dir: {
			input: "src",
			data: "_includes/_data",
			output: "build"
		}
	}
}