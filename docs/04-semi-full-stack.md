# semi-full-stack

No persistence. Frontend (Angular) and backend (Express.js) are separate, but communicate via REST API.

### Angular Additional Setup

- Generated environments:

```bash
ng generate environments
```

- Updated `environment.development.ts` to point to the backend path (e.g. `http://0.0.0.0:8080`)
- Added `environment.production.ts` to point to the backend path (e.g. `http://TODO:8080`)
- Added api.service.ts to call the backend API
- Configured component to work with the service
- Updated the UI to display the data returned from the backend (a health check)

### Express.js Additional Setup

- Installed cors: `npm install cors`
- Configured cors in `index.js`
- Added a second route to the health check

### Running the App

- Run the backend: `node index.js`
- Run the frontend: `ng serve`
- Open the browser: `http://0.0.0.0:4200`
- Verify that the health check is working by obseving the `Health Check Status` block on the page.
