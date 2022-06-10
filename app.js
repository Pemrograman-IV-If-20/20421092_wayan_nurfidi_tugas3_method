const express = require('express')
const { json } = require('express/lib/response')
const app = express()


app.use(express.json())

app.use(express.urlencoded({
    extended: true
}
))

app.get('/', function (req, res) {
  res.send('Hello World')
})

//localhost:3000/data-mahasiswa/wayan_nurfidi/08444-query?alamat=Rumbia

  app.post('/data-mahasiswa/:nama/:hp-query', function (req, res) {
    res.json({
        alamat: req.query.alamat,
        npm: req.body.npm,
        nama: req.params.nama,
        agama: req.body.agama,
        hobi: req.body.hobi,
        kampus: req.body.kampus,
        prodi: req.body.prodi,
        jenis_kelamin: req.body.jenis_kelamin,
        golongan_darah: req.body.golongan_darah,
        hp: req.params.hp
    })
  })

app.listen(4000)