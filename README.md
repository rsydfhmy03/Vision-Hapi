# Vision-Hapi

This repository demonstrates how to use an external plugin (`@hapi/vision`) with the Hapi framework to enable template rendering using Handlebars.

## Project Setup

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository or download the project files.
2. Install dependencies by running:
   ```bash
   npm install
   ```

### Project Structure
```plaintext
vision-hapi/
├── src/
│   ├── index.ts    # Main application entry point
│   ├── views/      # Directory containing template files
├── lib/            # Compiled output directory
├── package.json    # Project configuration and dependencies
├── tsconfig.json   # TypeScript configuration file
```

## Usage

### Development
To run the application in development mode with automatic reloading:
```bash
npm run dev
```
This command:
- Compiles the TypeScript code (`npm run dev:tsc`).
- Starts the server with `nodemon` watching for changes (`npm run dev:serve`).

### Production
To build and start the server in production:
1. Build the project:
   ```bash
   npm run build
   ```
2. Start the server:
   ```bash
   npm start
   ```

## Application Features

### Template Rendering with Vision and Handlebars
This project uses the `@hapi/vision` plugin to render templates with Handlebars.

### Endpoints
#### `GET /`
- **Description**: Renders the `index` template with dynamic data.
- **Response**:
  ```html
  <html>
    <head>
      <title>Hapi.js with Handlebars</title>
    </head>
    <body>
      <h1>Hapi.js with Handlebars</h1>
      <p>Ini adalah template rendering engine menggunakan handlebars dan plugin vision</p>
    </body>
  </html>
  ```

## How to Add New Templates
1. Create a new `.hbs` file in the `src/views` directory.
2. Define your Handlebars template.
3. Add a new route to the server to render the new template, similar to how the `/` route is implemented.

## Example Code (src/index.ts)
```typescript
const Hapi = require('@hapi/hapi');
const Vision = require('@hapi/vision');
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
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request: any, h: any) => {
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
```

## License
This project is licensed under the ISC License. See the LICENSE file for details.

---

If you have any questions or need further assistance, feel free to reach out to the author:
**mitahudev03**.

