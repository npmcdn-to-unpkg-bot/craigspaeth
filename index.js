const express = require('express')
const path = require('path')
const app = express()
const _ = require('underscore')
const babelify = require('babelify')
const PORT = process.env.PORT || 3000

// Config
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'jade')
app.locals.captions = [
  'Screenshot of the first level, Narcia.',
  'Screenshot of the first level, Narcia.',
  'Screenshot of the second level, Macho Man Cave.',
  'Screenshot of the second level, Macho Man Cave.',
  '3d model of Mr. Macho, a non-player character in Macho Man Cave.',
  '3d model of Mr. Macho in the Mirror World. When the player warps to the Mirror World,<br>Mr. Macho transforms to the above appearance and iniates alternate dialog.',
  '3d model of Miranda, the player-character and protagonist.'
]
app.locals._ = _

// Compile middleware
app.use(require('stylus').middleware({
  src: path.join(__dirname, '/assets'),
  dest: path.join(__dirname, '/public')
}))
app.use(require('browserify-dev-middleware')({
  src: path.join(__dirname, '/assets'),
  transforms: [babelify],
  insertGlobals: true
}))

// Routes
app.get('/', (req, res) => res.render('index'))
app.get('/mirror', (req, res) => res.render('mirror'))
app.use(express.static(path.join(__dirname, 'public')))

// Init
app.listen(PORT, () => console.log('Listening on port ' + PORT))
