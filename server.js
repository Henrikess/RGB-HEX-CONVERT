const express = require('express');
const { rgbToHex,hexToRgb } = require('./conversorDeCores');
const request = require('request');
const { response } = require('express');

const port = 8080;

const app = express();

app.use(express.json({limit: '1mb'}));
app.use(express.static('public'));

app.get('/status', (req, res) => {
  res.send('Servidor Funcionando Normalmente')
})

app.get(`/rgbToHex`, (req, res) => {  
  let r = parseInt(req.query.r)  
  let g = parseInt(req.query.g)
  let b = parseInt(req.query.b)
  console.log(r,g,b)
  console.log(rgbToHex(r,g,b))
  res.send(rgbToHex(r,g,b))
})

app.get('/hexToRgb', (req, res) => {
  let hex = req.query.hex
  let rgb = hexToRgb(hex)
  res.send(hexToRgb(hex).toString())
  console.log((hexToRgb(hex)))
})

app.post('/apiRGBtoHEX', (req, res) => {
  console.log('Requisição recebida')
  console.log(req.body)
  const {r,g,b} = req.body;
  
  console.log("RGB to HEX: " + rgbToHex(parseInt(r),parseInt(g),parseInt(b)))  

});

app.post('/apiHEXtoRGB', (req, res) => {
    console.log('Requisição recebida')
    console.log(req.body)
    const {hex} = req.body;

    console.log("HEX to RGB: " + hexToRgb(hex))

  })

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})



