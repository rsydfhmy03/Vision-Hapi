const Hapi = require('@hapi/hapi');const Vision = require('@hapi/vision');
const Handlebars = require('handlebars');
const path = require('path');
 
const init = async () => {
 const server = Hapi.Server({
   host: 'localhost',
   port: 5000,
 });
 
 await server.register(Vision);
 
 server.views({
   engines: {
     hbs: Handlebars
   },
   path: __dirname + '/views',
 })
 
 server.route({
   method: 'GET',
   path: '/',
  /**
   * Handler to render index view with Hapi.js
   * @param {Object} request - Hapi.js request object
   * @param {Object} h - Hapi.js response toolkit
   * @returns {Object} Hapi.js response object with rendered view
   */
   handler: (request : any, h : any) => {
     // Rendering an hbs view with Handlebars
     return h.view('index', {
       title: 'Hapi.js with Handlebars',
       message: 'Ini adalah template rendering engine menggunakan handlebars dan plugin vision'
     });
   },
 });
 
 await server.start();
 console.log('Server running on %s', server.info.uri);
};
 
init();