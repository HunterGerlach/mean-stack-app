# mean-stack-app

## Overview

todo: high-level overview of the project

## Architecture

todo: architecture diagram

For the sake of completeness of examples, we have chosen to use the Docker build strategy for the Angular application and the S2I build strategy for the Express application. This is not a recommendation for how to build your applications. You should choose the build strategy that best fits your needs.

Additionally, the angular application was primarily built off of the `main` branch and the express application was primarily built off of the `nodejs-express` branch. This was done to demonstrate how to use different branches for different applications. You can use whatever branch you want for your applications.

Finally, the OpenShift Pipelines method for the angular-app was to explicitly add tasks to the pipeline. This was done to demonstrate how to add tasks to a pipeline. For the express-app, we used pre-existing ClusterTasks whenever possible. This was done to demonstrate how to use pre-existing ClusterTasks and keep the pipeline definition as simple as possible.

## Getting Started

todo: getting started instructions

## Documentation

Links to detailed guides in the `docs` directory:

- [Angular Application Setup](docs/01-angular.md)
- [Node.js/Express Backend Setup](docs/02-express.md)
- [MongoDB Database Setup](docs/03-mongodb.md)
- [Semi-Stack Deployment with Frontend and Backend](docs/04-semi-full-stack.md)
- [Full-Stack Integration with Frontend, Backend, and Database](docs/05-full-stack.md)

## Contribution

todo: contribution guidelines
