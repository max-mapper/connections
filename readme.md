# connections

Keeps track of connections to an http server and provides a way to close connections

By default, `require('http').createServer` provides no mechanism for tracking client connections and/or closing client connections

[![NPM](https://nodei.co/npm/connections.png)](https://nodei.co/npm/connections/)

## usage

```
var connections = require('connections')(httpServerInstance, onClose)
```

`connections` has `.sockets` and `.destroy`

`onClose` is an optional function that will get called as `onClose(socket)` every time a socket is closed

### connections.sockets

an array of open sockets (http clients)

### connections.destroy()

destroys/closes all active connections (calls .destroy() on each socket)
