const cheerio = require('cheerio');
const babel = require('@babel/core');
const through = require('through2');
const PluginError = require('plugin-error');

const pkg = require('./package.json');

const selectors = [
    'script:not([type])',
    'script[type="text/javascript"]',
    'script[type="application/javascript"]',
].join(', ');

module.exports = (options) => {
    options = options || {};

    return through.obj((file, encoding, callback) => {
        if (file.isNull()) {
            return callback(null, file);
        }

        if (file.isStream()) {
            throw new PluginError(pkg.name, 'Streams are not supported!');
            return callback(null, file);
        }

        if (file.isBuffer()) {
            const $ = cheerio.load(String(file.contents));

            $(selectors).each((index, element) => {
                const script = $(element).html();
                const result = babel.transformSync(script, options);
                $(element).html(result.code);
            });

            file.contents = Buffer($.html());
        }

        return callback(null, file);
    });
};
