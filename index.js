const fs = require('fs');
const got = require('got').extend({
  baseUrl: `http://localhost:3000`,
  throwHttpErrors: false
});
const fastify = require('fastify')({
  https: {
    key: fs.readFileSync(`${__dirname}/server.key`),
    cert: fs.readFileSync(`${__dirname}/server.cert`)
  },
  logger: true
});

fastify.register(require('fastify-cors'));

fastify.get('*', async (request, reply) => {
  const response = await got(request.raw.url);

  reply.type(response.headers['content-type']);

  return response.body;
});

const HOSTNAME = 'localhost';
const PORT = 3001;

(async () => {
  try {
    await fastify.listen(PORT, HOSTNAME);
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
    require('open')(`https://${HOSTNAME}:${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();
