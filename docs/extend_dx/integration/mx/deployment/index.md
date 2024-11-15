# Install MX Foundry with DX 
This topic covers steps to install MX Foundry in the same environment where DX is deployed.

### Configure Ingress for DX

As a pre-requisite, DX needs to be installed already. Use the below link to configure ingress for DX

[Configure Ingress](https://opensource.hcltechsw.com/digital-experience/CF220/deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress/)

### Set up MySql which will be consumed by MX Foundry as DB

There are two ways to use mysql.
First method is to have mysql running independently hosted in any environment and pass access details to MX Foundry set up.
Second method is deploying mysql as container in the same kubernetes cluster where DX is deployed.

Example of deployment file (deploy-mysql) for Mysql in the kubernetes cluster:-

``` yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: mysql
  labels:
    app: mysql
spec:
  replicas: 1
  selector:
    matchLabels:
      app: mysql
  template:
    metadata:
      labels:
        app: mysql
    spec:
      containers:
      - name: mysql
        image: mysql:latest
        env:
        - name: MYSQL_ROOT_PASSWORD
          value: <MYSQL_PASSWORD>
        - name: MYSQL_DATABASE
          value: <MYSQL_DB_NAME>
        ports:
        - containerPort: 3306
          name: mysql
        volumeMounts:
        - name: mysql-storage
          mountPath: /var/lib/mysql
      volumes:
      - name: mysql-storage
        persistentVolumeClaim:
          claimName: mysql-pvc
---
apiVersion: v1
kind: Service
metadata:
  name: mysql
spec:
  selector:
    app: mysql
  type: ClusterIP
  ports:
    - protocol: TCP
      port: 3306
      targetPort: 3306
---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: mysql-pv
  labels:
    type: local
spec:
  storageClassName: manual
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: "/mnt/data"
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mysql-pvc
spec:
  storageClassName: manual
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
```

Command to deploy mysql:-

```
$ kubectl -n <namespace> apply -f deploy-mysql.yaml
```

### Pull MX Foundry from Harbor

Commands to fetch MX Foundry from Harbor:-

```
$ set +x -e
$ helm repo add hclcr https://hclcr.io/chartrepo/voltmx-qa --username <harbor_username> --password <harbor_password>
$ helm repo update
$ helm pull hclcr/voltmx-foundry
$ tar -xzf voltmx-foundry-*.tgz
```

### Install MX Foundry

We need to add Harbor credentials and mysql DB details in values.yaml file and run below commands install MX Foundry:-

* Navigate to voltmx-foundry

```
$ cd voltmx-foundry
```

* Edit values.yaml

```
$ vi values.yaml
```

* Add username and password

```yaml
imageCredentials:
  username: <harbor_username>
  password: <harbor_password>
```

* Set values for Ingress

```yaml
ingress:
  # Set to true or false
  enabled: true

  # Note: If tls is enabled this setting should be https or Foundry setup will fail.
  protocol: "https"

  # Note: If tls is enabled this setting should be 443.
  port: "443"
  class: "nginx"
  annotations:
```
* Provide secret name which has tls.crt and tls.key:-

```yaml
customCertSecretName: "<cert_file>"
```

* Add domain name for Volt Foundry (String):-

```yaml
serverDomainName: "<domain_name>"
```

### Update DB details:-

* Possible values, "mysql" for MySQL DB server, "sqlserver" for Azure MSSQL or SQLServer "oracle" for Oracle DB server

```yaml
dbType: "mysql"
```

* "cluster" for a cluster database server. "standalone" for a standalone database server.

```yaml
isCluster: "cluster"
```

```yaml
dbHost: mysql
dbPort: 3306
dbUser: <db_username>
dbPass: <db_password>
dbPrefix: ""
dbSuffix: ""
```

* Set GUIDs

```yaml
accountsEncryptionKey: 
waasMasterKey: 
waasMasterKeyId: 
authMasterKey: 
authMasterKeyId: 
```

* Go back to the root directory
```
$ cd ..
```

### Install MX Foundry by applying helm chart from Harbor.

```
$ helm install -n <namespace> foundry hclcr/voltmx-foundry -f voltmx-foundry/values.yaml
```

* Check if the Ingress controller pod and service are deployed

```
$ kubectl get pod -n <namespace>
$ kubectl get service -n <namespace>
```

* Once all services and pods are up and running, the MX Foundry can be accessed by following url like below:-

protocol://domain_name/mfconsole