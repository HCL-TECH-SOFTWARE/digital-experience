# Configure Prereqs Checker For Core


## Introduction of Prereqs Checker:

The "Prereqs Checker" is a tool that runs a number of checks to confirm if the prerequisites for various components are met. Currently, these checks are implemented for the mounted volume's file system of DX Core. You get the result of these checks from the container logs of the `prereqs-checker` container in the Core Pod.
For these checks, one separate sidecar container is deployed along with the main application container. This is a lightweight container so the main application performance would not get affected.

The main objective is to read the log file and check if the specified prerequisites are met, i.e if the tests have passed or failed. It can also be used to check the basic information about the file system of the mounted volumes which would help to track the issues related to the file systems.

I think the main objective rather is to get informed in the logs if prerequisites are not met.
An additional helpful result is that you can get information about the results from there

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
Helm Chart contains a `values.yaml` file, within which the Prereqs Checker configurations are set. For changing the state enable/disable the value of `enable` can be set to `true` or `false`. The periodicity of running the cron jobs is set in `cronExpression` which by default is set to `0 8 */1 * *` i.e the cron job is run at 8AM everyday.

## How to manually trigger the checks:

The following command can be triggered to run the checks manually, once all the checks will get performed, results will be available in the logs

```shell
kubectl -n dxns exec --stdin --tty <deployment-name>-core-0 -c prereqs-checker -- /bin/bash /usr/local/sbin/run_test.sh
```

The following command can be run to print the logs:

```shell
kubectl -n dxns logs pod/<deployment-name>-core-0 prereqs-checker
```
