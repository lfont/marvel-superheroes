import * as Hapi from 'hapi';
import * as vision from 'vision';
import * as handlebars from 'handlebars';
import * as inert from 'inert';

import { port } from './config';
import { fetchHeroes, fetchHero } from './api';

const server = new Hapi.Server();

server.register([vision, inert], (err: Hapi.IBoom) => {
  server.views({
    engines: {
      html: handlebars
    },
    relativeTo: __dirname + '/../',
    path: 'templates'
  });
});

server.connection({
  port
});

server.route({
  method: 'GET',
  path: '/v1/public/characters',
  handler: (request: Hapi.Request, reply: Hapi.IReply): Hapi.Response => {
    const heroes = fetchHeroes()
      .catch(error => {
        // The error will be handled client side in the redux flow.
        return error;
      });
    return reply(heroes);
  }
});

server.route({
  method: 'GET',
  path: '/v1/public/characters/{id*}',
  handler: (request: Hapi.Request, reply: Hapi.IReply): Hapi.Response => {
    const id = parseInt(request.params['id'], 10);
    const hero = fetchHero(id)
      .catch(error => {
        // The error will be handled client side in the redux flow.
        return error;
      });
    return reply(hero);
  }
});

server.route({
  method: 'GET',
  path: '/assets/{param*}',
  handler: {
    directory: {
      path: 'dist'
    }
  }
});

server.route({
  method: 'GET',
  path: '/{path*}',
  handler: (request: Hapi.Request, reply: Hapi.IReply): Hapi.Response => {
    return reply.view('index', {
      cssBundle: 'index.css',
      jsBundle: 'index.js'
    });
  }
});

server.start((err: Hapi.IBoom) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
