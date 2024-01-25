# mongodb

[Community Image Installation Instructions](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-community-with-docker/#std-label-docker-mongodb-community-install)

## Outer Loop

### Deploying MongoDB to OpenShift via the Web Console

- Create a new project
- Click on `Add to Project` and select Container Image
- Enter the following details:
- Image Name: `mongodb/mongodb-community-server`
- Tag: `latest`
- Name: `mongodb`
- Deployment Configuration: `mongodb`
- Click on `Create`

### Deploying MongoDB to OpenShift via the CLI

```bash
oc new-project mongodb
cd 03-mongodb # the directory where the yaml manifests are located
oc apply -f 01-mongodb-statefulset.yaml
```

### Validate the deployment is successful by the following steps:

Get the name of the desired pod:

```bash
oc get pods
```

Enter the pod:

```bash
oc exec -it mongodb-community-server-0 -- mongosh
```

Run the `Hello` command from inside the pod:

```bash
db.runCommand({ hello: 1 })
```

or run the `ping` command from inside the pod:

```bash
db.runCommand({ ping: 1 })


The result should describe the mongodb deployment.

```
