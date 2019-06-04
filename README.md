# fab-serve-https-proxy

A simple https server (running on https://localhost:3001) that proxies requests to whatever fab-serve app is running (at http://localhost:3000), and allowing you to verify secure apps locally.

## Getting started

1. Install (`npm i`)
2. Generate cert, making sure to complete the following fields: \* (`openssl req -nodes -new -x509 -keyout server.key -out server.cert`)
   - Country Name
   - State or Province Name
   - Locality Name
   - Organization Name
   - Common Name = **localhost**
   - Email Address
3. Ensure you've started your `fab-serve`d app, then start this server (`npm start`)
4. The endpoint will open in your browser, so you can accept the SSL certificate exception
