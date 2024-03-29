function formatTime (time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }

  var hour = parseInt(time / 3600)
  time = time % 3600
  var minute = parseInt(time / 60)
  time = time % 60
  var second = time

  return ([hour, minute, second]).map(function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join(':')
}

function formatLocation (longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}

function wx (url,data=[],header={"Content-Type":"application/json"}){
  console.log(data)
  // console.log(data.get('mobile'))
  console.log(header)
  return new Promise((resolve,reject) => {
    ui.request({
      url:'https://server.agamchain.com/api'+url,
      header:header,
      data:data,
      processData:false,
      contentType:false,
      method:'POST',
      success(res){
        resolve(res.data)
      },
      fail(res){
        reject(res)
      }
    })
  })
}
var params = query();
function query() {
  var url = window.location.href;
  console.log(url)
}

module.exports = {
  formatTime: formatTime,
  formatLocation: formatLocation,
  wx:wx,
  $_GET:params
}
