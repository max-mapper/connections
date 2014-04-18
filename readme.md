# connections

Keeps track of connections to an http server and provides a way to close connections

By default, `require('http').createServer` provides no mechanism for tracking client connections and/or closing client connections

[![NPM](https://nodei.co/npm/connections.png)](https://nodei.co/npm/connections/)

## usage

```
var connections = require('connections')(httpServerInstance)
```

`connections` has `.sockets` and `.destroy`

### connections.on('idle', function() {})

called whenever all active connections have closed

### connections.on('close', function(socket) {})

called whenever a socket closes

### connections.sockets

an array of open sockets (http clients)

### connections.destroy()

destroys/closes all active connections (calls .destroy() on each socket)
