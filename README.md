###check-proxy-server

Simple, `npm i -g`-able implementation of the of the [check-proxy](https://www.npmjs.com/package/check-proxy) server component. 

Important env vars:
* `CHECKPROXY_IP`
  * Defaults to 127.0.0.1
* `CHECKPROXY_PORT`
  * Defaults to 8080

#### Usage:

```bash
npm i -g check-proxy-server && check-proxy-server
```

Env vars will be used to determine listening IP/port.

Set `DEBUG='check-proxy-server' to enable logging`.

#### Acknowledgements
Thanks to the creator of [check-proxy](https://github.com/256cats/check-proxy)! 
If you want the npm package name to publish your own default server implementation, let me know :)
