const defaultOnToken = function (e) {
  return e
}

const textParserUrl = function (input, options) {
  const regex = /((?:https?(?::\/\/))(?:www\.)?[a-zA-Z0-9-_.]+(?:\.[a-zA-Z0-9]{2,})(?:[-a-zA-Z0-9:%_+.~#?&//=@]*))/
  options = options || {}
  const onToken = options.onToken || defaultOnToken
  const ast = []
  let step = input.match(regex)
  let str = input
  while (!!step) {
    if (step.index > 0) {
      ast.push(onToken({
        type: 'raw',
        value: step.input.substring(0, step.index)
      }))
      str = str.substr(step.index)
      step.index = 0
    }
    ast.push(onToken({
      type: 'url',
      value: step[0]
    }))
    str = str.substr(step[0].length)
    step = str.match(regex)
  }
  if (str.length > 0) {
    ast.push(onToken({
      type: 'raw',
      value: str
    }))
    str = ''
  }
  return ast
}

module.exports = module.exports.default = textParserUrl