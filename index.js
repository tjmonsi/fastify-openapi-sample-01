import { build } from './src/app.js';

const server = await build();
const addr = await server.listen({ port: '8080', host: 'localhost' });
console.log(`Listening on ${addr}`)