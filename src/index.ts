import camelCase = require('camel-case');

function whoisParser(whoisData: string): any {
    const lines = whoisData.split('\n');
    return lines.reduce((val, line) => {
        const index = line.indexOf(':');
        if (index !== -1) {
            val[camelCase(line.substr(0, index))] = line
                .substr(index + 1)
                .trim();
        }
        return val;
    }, {} as any);
}

export = whoisParser;
