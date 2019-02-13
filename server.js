const express = require('express')
const app = express()
const https = require('https')
const fs = require('fs')

const Figma = require ('figma-js')

const FILE_FORMAT = 'svg'
const FILENAME = 'photo.svg'

const client = Figma.Client({
  personalAccessToken: process.env.FIGMA_TOKEN
})

app.use(express.static('public'))

const onGetFileImages = (response, fileImages) => {
  let ids = process.env.FIGMA_IDS.split(' ')
  let images = fileImages.data.images
  let url = images[ids[0]]

  let request = https.get(url, (res) => {
    let imagedata = ''
    res.setEncoding('binary')

    res.on('data', function(chunk){
      imagedata += chunk
    })

    res.on('end', function(){
      fs.writeFile(`${__dirname}/public/${FILENAME}`, imagedata, 'binary', (err) => {
        if (err) {
          throw err
        }
        response.send('File saved!')
      })
    })
  })
}

const onGetError = (e) => {
  console.error(e)
}

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html')
})

app.get(`/refresh/${ process.env.SECRET }`, (request, response) => {
  let format = FILE_FORMAT
  let ids = process.env.FIGMA_IDS.split(' ')
  let options = { format, ids }

  client.fileImages(process.env.FIGMA_FILE, options).then((fileImages) => {
    onGetFileImages(response, fileImages)
  }).catch(onGetError)
})

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port)
})