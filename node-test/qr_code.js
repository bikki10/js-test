// 1. Generate QR code for the url on the terminal using package qrcode

// var QRCode = require('qrcode')

// QRCode.toDataURL('I am a pony!', function (err, url) {
//   console.log(url)
// })

const QRCode = require('qrcode')

QRCode.toString('Bikki is a damn good developer!',{type:'terminal'}, function (err, url) {
  console.log(url)
})