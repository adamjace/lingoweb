const endOfLine = require('os').EOL
const express = require('express')
const router = express.Router()
const languages = require('../lib/lang')

const base = 'http://mucholingo.me'

router.get('/', function(req, res, next) {
  let output = base + endOfLine
  buildPageList().forEach((page) => {
    output += page + endOfLine
  })
  res.send(output);
})

// buildPageList
function buildPageList() {
  let list = []
  languages.forEach((from) => {
    list.push(`${base}/translate/${from.name.replace(' ', '-')}`)
    languages.filter(lang => lang.name !== from.name).map((to) => {
      list.push(`${base}/translate/${from.name.replace(' ', '-')}/${to.name.replace(' ', '-')}`)
    })
  })
  return list
}

module.exports = router
