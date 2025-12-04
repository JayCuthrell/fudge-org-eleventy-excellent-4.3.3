import minifyHtml from '@minify-html/node';
import { Buffer } from 'node:buffer';

const isProduction = process.env.ELEVENTY_ENV === 'production';

export const htmlConfig = eleventyConfig => {
  eleventyConfig.addTransform('html-minify', (content, path) => {
    // Only run on HTML files in production
    if (path && path.endsWith('.html') && isProduction) {
      try {
        // The library exports an object, so we access .minify() on the default import
        const minified = minifyHtml.minify(Buffer.from(content), {
          keep_closing_tags: true,
          keep_comments: false,
          keep_spaces_between_attributes: true,
          keep_ssi_comments: false,
          preserve_brace_template_syntax: false
        });

        return minified.toString('utf-8');
      } catch (err) {
        console.error("Error minifying HTML:", err);
        return content;
      }
    }

    return content;
  });
};
