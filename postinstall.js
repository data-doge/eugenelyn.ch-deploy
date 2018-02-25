const { exec } = require('child_process')
const { readdirSync } = require('fs')


exec('cd eugenelyn.ch && npm i', err => {
  if (err) throw err
  readdirSync('pages').forEach(page => {
    exec(`cd pages/${page} && npm i`, err => {
      if (err) throw err
    })
  })
})
