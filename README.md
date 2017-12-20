# text-parser-url
text parser to parse url

---

## Install

```bash
npm i text-parser-url
```

## quick start

```javascript
const textParserUrl = require('text-parser-url')

const result = textParserUrl('project address: https://github.com/heineiuo/text-parser-url, author: https://github.com/heineiuo enjoy it!')
// =>
// [ 
//   { type: 'raw', value: 'project address: ' },
//   { type: 'url', value: 'https://github.com/heineiuo/text-parser-url' },
//   { type: 'raw', value: ', author: ' },
//   { type: 'url', value: 'https://github.com/heineiuo' },
//   { type: 'raw', value: ' enjoy it!' } 
// ]

```

## Options

1. `onToken`

```javascript
const textParserUrl = require('text-parser-url')

let len = 0
const result = textParserUrl('project address: https://github.com/heineiuo/text-parser-url, author: https://github.com/heineiuo enjoy it!', {
  onToken: token => {
    token.len = len
    len += token.value.length
    return token
  }
})
// =>
// [ 
//   { type: 'raw', value: 'project address: ', len: 0 },
//   { type: 'url', value: 'https://github.com/heineiuo/text-parser-url', len: 17 },
//   { type: 'raw', value: ', author: ', len: 60 },
//   { type: 'url', value: 'https://github.com/heineiuo', len: 70 },
//   { type: 'raw', value: ' enjoy it!', len: 97 } 
// ]

```

2. `requireProtocol`
```javascript
const textParserUrl = require('text-parser-url')

textParserUrl('www.github.com', {
  requireProtocol: true
})
// =>
// [ 
//   { type: 'raw', value: 'project address: ', len: 0 },
// ]

textParserUrl('www.github.com', {
  requireProtocol: false
})
// =>
// [ 
//   { type: 'url', value: 'project address: ', len: 0 },
// ]


## License

MIT
