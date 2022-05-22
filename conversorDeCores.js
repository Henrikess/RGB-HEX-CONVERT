

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')
 // console.log(rgbToHex(255, 5, 255)); // #FF05FF

 const hexToRgb = (hex) => {

  const array = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
  
    if(array) {
    return array.map(x => parseInt(x, 16))
    console.log(hexToRgb("#11AB24")) // [17, 171, 36]
  // console.log(hexToRgb("#A13")) // [170, 17, 51]
  }
  }
  console.log(hexToRgb("#11AB24"))

module.exports = {
    rgbToHex,hexToRgb
  }

  //console.log(hexToRgb("#11AB24")) // [17, 171, 36]


