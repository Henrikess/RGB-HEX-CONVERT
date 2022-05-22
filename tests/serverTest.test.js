const { assert, expect } = require('chai')

const request = require('request');

describe("SERVER - RGB to Hex", () => {

    const url = "http://localhost:8080";
    const urlRGBtoHEX = "http://localhost:8080/rgbToHex?r=255&g=5&b=255";
    const urlHEXtoRGB = "http://localhost:8080/hexToRgb?hex='11AB24'";

    it("should return status 200", (ok) => {
      request(url, (err, res) => {
        expect(res.statusCode).to.equal(200);
        ok()
      })
    });
    it("RGB para HEX retorno", (ok) => {
        request(urlRGBtoHEX, (err, res) => {
          expect(res.body).to.equal('#ff05ff');
          ok()
        })
      });
      it("HEX para RGB  retorno", (ok) => {
        request(urlHEXtoRGB, (err, res) => {
          expect(res.body).to.equal('17,171,36');
          ok()
        })
      });
    
      
});