const express = require('express')
// const addSong = require('./controllers/addSong')
// const getSongs=require('./controllers/getSongs')
const app = express()
const port = 3000
const cors=require('cors')
// const addToPlaylist = require('./controllers/addToPlaylist')
// const getPlaylist = require('./controllers/getPlaylist')
// const albumData = require('./controllers/albumData')
// const deleteFromPlaylist = require('./controllers/deleteFromPlaylist')
// const displaySongs = require('./controllers/displaySongs')
// const getFavArt = require('./controllers/getFavArt')
// const barData = require('./controllers/barData')
// const pieData = require('./controllers/pieData')
const bareRoutes=require('./routes/bare')
const albumRoutes=require('./routes/album')
app.use(cors())
app.use(express.json())
// app.get('/', (req, res) => res.json('TrackByte API'))
// app.post('/add',addSong)
// app.get('/getSongs',getSongs)
// app.post('/addToPlaylist',addToPlaylist)
// app.get('/getPlaylist',getPlaylist)
// app.get('/displaysongs',displaySongs)
// app.delete('/delfromplaylist',deleteFromPlaylist)
// app.get('/getbardata',barData)
// app.get('/getpiedata',pieData)
// app.get('/getFavArt',getFavArt)
// app.get('/album/:albumname',albumData)
app.use('/',bareRoutes)
app.use('/album',albumRoutes)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))