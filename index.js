module.exports = function(server) {
  var sockets = []

  server.on('connection', function (socket) {
    sockets.push(socket)
    socket.on('close', function () {
      sockets.splice(sockets.indexOf(socket), 1)
    })
  })
  
  var obj = {
    sockets: sockets,
    destroy: destroy
  }
  
  function destroy() {
    for (var i = 0; i < sockets.length; i++) {
      sockets[i].destroy()
    }
  }
  
  return obj
}