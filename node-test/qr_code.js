// var QRCode = require('qrcode')

// QRCode.toDataURL('I am a pony!', function (err, url) {
//   console.log(url)
// })

const QRCode = require('qrcode')

QRCode.toString('Bikki is a damn good developer!',{type:'terminal'}, function (err, url) {
  console.log(url)
})