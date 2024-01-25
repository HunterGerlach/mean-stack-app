# express

## Inner Loop

### Local Development

[Official Express.js Getting Started Guide](https://expressjs.com/en/starter/installing.html)

- Install Node/NPM latest versions
- Create a new directory for the application, enter it, and initialize a new Node.js project

```bash
mkdir express-app
cd express-app
npm init
npm install express --save
```

- Create `index.js` with the recommended Hello World example from the Express documentation

> Note: We're using port 8080 instead of the recommended port 3000 because there was already a service running on port 3000.

- Run `node index.js` to start the application

### Containerized Development with Podman

Unlike the angular-app, we will attempt to use S2I to build the application and run it in a container. This means that we will not need to create a Dockerfile or Containerfile. Instead, we will simply change the build strategy to `nodejs` and let OpenShift handle the rest.

## Outer Loop
