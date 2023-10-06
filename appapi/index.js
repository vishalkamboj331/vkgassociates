const express = require('express')
const app = express()
const port = 5000

app.use('/images', express.static('./images'));

// /template-list
// image, name, url

// /template-list/:id
// images, name, descrtion, url, download_link

// /template-download/:id
// return zip file

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})