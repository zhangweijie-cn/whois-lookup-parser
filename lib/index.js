"use strict";
const camelCase = require("camel-case");
function whoisParser(whoisData) {
    const lines = whoisData.split('\n');
    return lines.reduce((val, line) => {
        const index = line.indexOf(':');
        if (index !== -1) {
            val[camelCase(line.substr(0, index))] = line
                .substr(index + 1)
                .trim();
        }
        return val;
    }, {});
}
module.exports = whoisParser;
