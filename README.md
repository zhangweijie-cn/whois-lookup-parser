# whois-lookup-parser

Parse whois lookup string

## Installation

```bash
npm install whois-parser
```

or

```bash
yarn add whois-parser
```

## Usage

```javascript
const whois = require('whois');
const whoisParser = require('whois-parser');

whois.lookup('google.com', function(err, data) {
    console.log(whoisParser(data))
})
```