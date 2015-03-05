express = require("express")
http = require("http")
path = require("path")
app = express()
global.nap = require 'nap'
_ = require 'underscore'

# Config
app.set "port", process.env.PORT or 3000
app.set "views", __dirname + "/views"
app.set "view engine", "jade"
app.use express.static(path.join(__dirname, "public"))
app.locals.nap = nap

# Nap
nap
  embedFonts: true
  assets:
      js:
        all: ['/assets/main.coffee']
      css:
        all: ['/assets/main_embed.styl']

# Routes
app.get "/", (req, res) -> res.render 'index'

# Init
nap.package() if process.env.NODE_ENV is 'production'
http.createServer(app).listen app.get("port"), ->
  console.log "Express server listening on port " + app.get("port")