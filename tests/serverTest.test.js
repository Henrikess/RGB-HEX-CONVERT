const { assert, expect } = require('chai')

const request = require('request');

describe("SERVER - RGB to Hex", () => {

    const url = "http://localhost:8080";
  
    it("should return status 200", (ok) => {
      request(url, (err, res) => {
        expect(res.statusCode).to.equal(200);
        ok()
      })
    });
      
});