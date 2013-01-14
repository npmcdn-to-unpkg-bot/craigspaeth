body = document.getElementById('body')
attachMouseOver = (name) ->
  el = document.getElementById(name)
  el.onmouseover = -> body.className = name
  el.onmouseout = -> body.className = ''
attachMouseOver(name) for name in ['twitter', 'github', 'linkedin', 'tumblr', 'artsy']