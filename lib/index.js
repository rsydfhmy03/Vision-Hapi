"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');
const Handlebars = require('handlebars');
const path = require('path');
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    const server = Hapi.Server({
        host: 'localhost',
        port: 5000,
    });
    yield server.register(Vision);
    server.views({
        engines: {
            hbs: Handlebars
        },
        path: __dirname + '/views',
    });
    server.route({
        method: 'GET',
        path: '/',
        /**
         * Handler to render index view with Hapi.js
         * @param {Object} request - Hapi.js request object
         * @param {Object} h - Hapi.js response toolkit
         * @returns {Object} Hapi.js response object with rendered view
         */
        handler: (request, h) => {
            // Rendering an hbs view with Handlebars
            return h.view('index', {
                title: 'Hapi.js with Handlebars',
                message: 'Ini adalah template rendering engine menggunakan handlebars dan plugin vision'
            });
        },
    });
    yield server.start();
    console.log('Server running on %s', server.info.uri);
});
init();
