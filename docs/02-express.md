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

## Outer Loop -0 S2I Build Strategy

#### Deploying to OpenShift via the CLI

- Login to the cluster
- Create a new project via `oc new-project mean-stack-app`
- Create a new application via `oc new-app https://github.com/HunterGerlach/mean-stack-app.git#nodejs-express --strategy=source --context-dir=express-app` where you replace the URL with your own repository URL and the context-dir with the directory containing your application.
  - Note: The repository URL includes the branch name at the end of the URL. This was done as an exmaple during development of this feature. You can remove the branch name from the URL if you want to use the main branch.
  - Note: The repository name is used as the deployment name and is also used by the tigger_binding, so if you change the name in one place just make sure they are all consistent.
- Watch the build logs via `oc logs -f bc/mean-stack-app`
- Expose the application via `oc expose svc/mean-stack-app`
- Once the build is complete, you can view the application via `oc get route` and by visiting the URL in your browser

### OpenShift Deployment via the Web Console

- Visit the OpenShift Web Console and login
- Create a new project (e.g. `express-app`) or select an existing project
- Visit the Project Overview page and click Workloads and then select `Add page` link
- Select Import from Git and fill out the form
- Git Repository URL: `https://github.com/HunterGerlach/mean-stack-app`
- Click Show Advanced Git Options
- Git Reference: `main` (or whatever branch you want to deploy - I was temporarily using the `nodejs-express` branch during development of this feature)
- Build Strategy: `Node.js` (This option should default to Builder Image with a version of Node.js selected. You can change the version if you want, but I left it as the default.)
- Context Dir: `express-app`
- Name: `express-app`
- Click Create
