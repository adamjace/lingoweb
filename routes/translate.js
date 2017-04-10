const express = require('express')
const router = express.Router()
const languages = require('../lib/lang')
const _ = require('lodash')

// eg: /english
router.get('/:from', function(req, res, next) {

  if (!isValidRoute([req.params.from])) {
    const err = new Error('Not Found')
    err.status = 404
    return next(err)
  }

  const from = _.capitalize(req.params.from)
  res.render('language', {
    showHeader: true,
    showFooter: false,
    title: `Translate from ${from} | Mucho Lingo`,
    description: `Translate from ${from} on Messenger with Mucho Lingo`,
    keywords: `translate, ${from}, free, online, languages, learn, foreign, study, facebook, messenger, bot`,
    from: from,
    languages: buildLanguagesList(from)
  })
})

// eg: /english/to-spanish
router.get('/:from/:to', function(req, res, next) {

  if (!isValidRoute([req.params.from, req.params.to])) {
    const err = new Error('Not Found')
    err.status = 404
    return next(err)
  }

  const from = _.capitalize(req.params.from)
  const to = _.capitalize(req.params.to)
  res.render('translate', {
    title: `Translate ${from} to ${to} | Mucho Lingo`,
    showHeader: true,
    showFooter: false,
    description: `Translate ${from} to ${to} on Messenger with Mucho Lingo`,
    keywords: `translate, ${from}, ${to}, free, online, languages, learn, foreign, study, facebook, messenger, bot`,
    from: from,
    to: to
  })
})

// isValidRoute
// check that the route context matches languages in our dict
function isValidRoute(words) {
  const count = words.length
  let matches = []
  words.forEach((word) => {
    languages.filter(item => item.name === _.lowerCase(word)).map((lang) => {
      if (matches.length === count) return
      matches.push(lang)
    })
  })
  return matches.length === count
}

// buildLanguagesList
function buildLanguagesList(exclude) {
  let list = []
  exclude = _.lowerCase(exclude)
  languages.filter(item => item.name !== exclude).map((lang) => {
    list.push({
      'name': _.capitalize(lang.name),
      'urlFrom': exclude.replace(' ', '-'),
      'urlTo': lang.name.replace(' ', '-')
    })
  })
  return list
}

module.exports = router
