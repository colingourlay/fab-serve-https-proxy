<h1><large>This is no longer required. `@fab/serve` supports https since `v0.2`</large></h1>

# fab-serve-https-proxy

A simple https server (running on https://localhost:3001) that proxies requests to whatever [fab-serve](https://github.com/fab-spec/fab/tree/master/packages/fab-serve) app is running (at http://localhost:3000), and allowing you to verify secure apps locally.

## Getting started

1. Clone this project
2. Install dependenceies (`npm i`)
3. [Generate a SSL certificate](#generating-your-ssl-certificate), making sure to complete the following fields:
   - Country Name
   - State or Province Name
   - Locality Name
   - Organization Name
   - Common Name = **localhost**
   - Email Address
4. Start your FAB (`npx @fab/serve fab.zip` in your app directory, or whatever script you use)
5. Start this server (`npm start`)
6. The server root will open in your browser, so you can accept the SSL certificate exception (if you haven't already)

### Generating your SSL certificate

This command should work if you have OpenSSL installed:

```
openssl req -nodes -new -x509 -keyout server.key -out server.cert
```
