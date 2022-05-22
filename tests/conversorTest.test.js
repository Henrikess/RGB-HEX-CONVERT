const { assert, expect } = require('chai')
// const assert = require('chai').assert

const conversor  = require('../conversorDeCores')


describe("Testes do conversor", () => {

  it("HEX para RGB", () =>{
    let valorEsperado = [17, 171, 36];
    const valorConvertido = conversor.hexToRgb('#11AB24')
    console.log('Convertido: #11AB24 Para:'+ valorConvertido)

    assert.equal(valorEsperado.toString, valorConvertido.toString)
  })

  it("RGB para HEX", () =>{
    const valorEsperado = '#FF05FF';
    const valorConvertido = conversor.rgbToHex(255, 5, 255)
    console.log('Convertido: 255, 5, 255 Para:'+ valorConvertido)

    assert.equal(valorEsperado.toString, valorConvertido.toString)
  })
})
