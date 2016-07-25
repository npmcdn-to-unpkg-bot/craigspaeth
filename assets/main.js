const body = document.getElementById('body')

const attachMouseOver = (name) => {
  const el = document.getElementById(name)
  el.onmouseover = () => { body.className = name }
  el.onmouseout = () => { body.className = '' }
}

;['twitter', 'github', 'linkedin', 'artsy'].forEach(attachMouseOver)
