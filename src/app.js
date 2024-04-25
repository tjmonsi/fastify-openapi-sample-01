import Fastify from 'fastify';

export async function build () {
  const fastify = Fastify({ logger: true });

  fastify.get('/', async function (req, res) {
    return {
      hello: 'world'
    };
  });

  return fastify;
}
