var events = require('events')

module.exports = function(server, onClose) {
  var sockets = []

  server.on('connection', function (socket) {
    sockets.push(socket)
    socket.on('close', function () {
      sockets.splice(sockets.indexOf(socket), 1)
      obj.emit('close', socket)
      if (sockets.length === 0) obj.emit('idle')
    })
  })
  
  var obj = new events.EventEmitter()
  obj.sockets = sockets
  obj.destroy = destroy
  
  function destroy() {
    for (var i = 0; i < sockets.length; i++) {
      sockets[i].destroy()
    }
  }
  
  return obj
}