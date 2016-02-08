var events = require('events')

module.exports = function(servers) {
  var sockets = []

  if (!Array.isArray(servers)) servers = [servers]
  servers.forEach(function (server) {
    server.on('connection', function (socket) {
      obj.emit('connection', socket)
      obj.add(socket)
    })
  })

  var obj = new events.EventEmitter()
  obj.sockets = sockets
  obj.destroy = destroy
  obj.add = function (socket) {
    sockets.push(socket)
    socket.on('close', function () {
      sockets.splice(sockets.indexOf(socket), 1)
      obj.emit('close', socket)
      if (sockets.length === 0) obj.emit('idle')
    })
  }

  function destroy() {
    for (var i = 0; i < sockets.length; i++) {
      sockets[i].destroy()
    }
  }

  return obj
}
