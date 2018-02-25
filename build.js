const { removeSync } = require('remove')
const { exec } = require('child_process')
const { readdirSync } = require('fs')

const buildHome = cb => exec('mkdir -p dist && cp CNAME dist && cd eugenelyn.ch && npm run build && npm run dist && cp -r dist/* ../dist', cb)
const buildPage = (page, cb) => exec(`mkdir -p dist/${page} && cd pages/${page} && npm run build && npm run dist && cp -r dist/* ../../dist/${page}`, cb)

buildHome(err => {
  if (err) throw err
  readdirSync('pages').forEach(page => {
    buildPage(page, err => {
      if (err) throw err
    })
  })
})
