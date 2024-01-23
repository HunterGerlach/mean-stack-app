# mean-stack-app

## Inner Loop

- Install Node/NPM latest versions
- Install Angular CLI via `npm install -g @angular/cli`
- Create a workspace via `ng new angular-app` and fill out the form questions
- Run `cd angular-app` to enter the application directory
- Run `ng serve --open` to open the sample application in a browser
- Run Jasmine tests via `ng test`

### Podman

We will be using `podman` instead of `docker` for local container management tooling. The commands are pretty much interchangeable (in case you were to find examples elsewhere on the internet).

### Containerfile

> Note: This section is currently incorrect until we adjust the new-app command to use the Containerfile instead of the Dockerfile.

We will be using `Containerfile` instead of `Dockerfile` for defining our containers. Again, the definitions are virtually the same.

We added a Containerfile to the directory to build the application and be used to serve the content once deployed to the OpenShift cluster.

## Nginx

Added a simple nginx.conf configuration file to tell the NGINX server where the content lives and how to serve it. This file is used inside the container.

### Building Containers Locally

- Go into the Angular directory `cd angular-app`
- Build the container image via `podman build -t angular-app:latest .`
-

> Note: My container DNS settings are currently borked from another effort, so I needed to also add `--dns=8.8.8.8` to my `podman build` command. You will not need to do this.

### Running Containers Locally

- Run the container locally via `podman run --rm -d -p 8080:8080 angular-app:latest` and a container id will be displayed.
- Visit http://127.0.0.1:8080 in your web browser and you should see the application.
- Stop the container via `podman stop {CONTAINER_ID_FROM_EARLIER}`

## Outer Loop

### OpenShift

We will be using OpenShift to deploy our application to a cluster. We will be using the `oc` command line tool to interact with the cluster.

### Deploying to OpenShift via the CLI

- Login to the cluster
- Create a new project via `oc new-project mean-stack-app`
- Create a new application via `oc new-app https://github.com/HunterGerlach/mean-stack-app.git --strategy=docker --context-dir=angular-app` where you replace the URL with your own repository URL and the context-dir with the directory containing your application
- Watch the build logs via `oc logs -f bc/mean-stack-app`
- Expose the application via `oc expose svc/mean-stack-app`
- Once the build is complete, you can view the application via `oc get route` and by visiting the URL in your browser
