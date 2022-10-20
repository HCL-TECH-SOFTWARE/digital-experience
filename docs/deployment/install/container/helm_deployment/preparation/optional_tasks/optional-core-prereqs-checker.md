# Configure Prereqs Checker For DX Deployment

## Introduction of Prereqs Checker:

The "Prereqs Checker" is a tool that runs a number of checks to confirm if the prerequisites for various components are met.  
You can get the result of these checks from the container logs of the `prereqs-checker` container in the pod where Prereqs Checker is installed.
For these checks, one separate sidecar container is deployed along with the main application container. This is a lightweight container so the main application performance would not get affected.

The main objective is to check if the specified prerequisites are met and inform about the result in the logs, i.e. if the checks have passed or failed. It can also be used to check the basic information about the file system of the mounted volumes which would help to track the issues related to the file systems.

## Checks implemented in Prereqs Checker:

#### File Permission Check:
In these checks, the basic file access permission would get checked and according to the access, the result will get printed on the logs.

#### Latency Check for I/O:
These checks will give the result of the disk latency. This check will help to know the essential efficiency of the file system. This check would get fail if the measured latency will not match the threshold value (minimum requirement).

#### Soft Links and Hard Links Check:
This check will give the result of `Soft Links` and `Hard Links` creation capabilities on the file system.

#### Random Read/Write Checks
In this check, `IOPS` (Input/Output Operations per second) will get measured for the file system. This check is very essential to measure the performance of the file system. This check will get fail if the measured `IOPS` will not be higher or equal to the threshold value.

## Helm Chart `values.yaml`
Helm Chart contains a `values.yaml` file, within which the Prereqs Checker configurations are set. For changing the state enable/disable the value of `enable` can be set to `true` or `false`.
The checks are running periodically. The frequency can be configured using a value in cron syntax in `cronExpression` which by default is set to `0 8 * * *` i.e the cron job is run at 8AM every day.

## How to manually trigger the checks:

The following command can be triggered to run the checks manually, once all the checks will get performed, results will be available in the logs

Replace the `<application-name>` with the following depending on which application you want to run the checks.
- `core`
- `digital-asset-management`
- `open-ldap`
- `remote-search`
- `persistence-node`

```shell
kubectl -n <my-namespace> exec --stdin --tty <release-name>-<application-name>-0 -c prereqs-checker -- /bin/bash /usr/local/sbin/run_test.sh
```

The following command can be run to print the logs:

```shell
kubectl -n dxns logs pod/<release-name>-<application-name>-0 prereqs-checker
```
