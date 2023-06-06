# Configure Prereqs Checker For DX Deployment

## Introduction of Prereqs Checker:

The "Prereqs Checker" is a tool that runs a number of checks to confirm if the prerequisites for various components are met.  

You can get the result of these checks from the container logs of the `prereqs-checker` container in the pod where Prereqs Checker is installed [(more info)](#how-to-manually-trigger-the-checks)  

For these checks, one separate sidecar container is deployed along with the main application container. This is a lightweight container so the main application performance would not get affected.

The main objective is to check if the specified prerequisites are met and inform about the result in the logs, i.e. if the checks have passed or failed. It can also be used to check the basic information about the file system of the mounted volumes which would help to track the issues related to the file systems.

## Checks implemented in Prereqs Checker:

#### File Permission Check:
In these checks, the basic file access permission would get checked and according to the access, the result will get printed on the logs.

#### Latency Check for I/O:
This check measures the `Latency` of the file system and evaluate it's efficiency by comparing the actual measured `Latency` with the [threshold value](#threshold-values). This check will print the results on logs according to the comparison. 

#### Soft Links and Hard Links Check:
This check will give the result of `Soft Links` and `Hard Links` creation capabilities on the file system.

#### Random Read/Write Checks
In this check, `IOPS` (Input/Output Operations per second) is measured for the file system. This check is essential to evaluate the performance of the file system and prints the result on the logs after comparing the actual measured `IOPS` with the threshold value. For the `IOPS` threshold value, refer to [threshold value](#threshold-values).

#### Storage Space Check
In this check, the `Storage Capacity` will be measured for the mounted volumes. This check is essential to evaluate that the system still have a healthy amount of space. 
This check computes the total consumed space against the total allocated space for that specific volume mount, the resulting percentage consumed is then check against the [threshold value](#threshold-values) and the result is printed in the logs

##### Core Profile Check
This check is specific to `core` pod and `profile` mounted volume only. This checks the number of old profile in the volume, the result is compared to the [threshold value](#threshold-values). This also checks if the system still has healthy amount of space left for upgrade, taking into account the size of the most recent profile version plus a headroom value. 

#### Threshold Values
The threshold values for `prereqs-checker` are used as a benchmark to evaluate the disk latency and random RW (read/write) efficiency of a file system. These values will be compared to the actual test results  of [disk latency (ms)](#latency-check-for-io) and [random read/write (IOPS)](#random-readwrite-checks). From there the check can evaluate if the file system pass or fail the test.

`Threshold values` are derived from computing the average result of testing disk latency (MS) and random RW (IOPS) efficiency from different cloud platforms with respective file system and storage types.

**Concluded Threshold Values**

-   `3 ms` - concluded threshold value for latency check.
-   `1800 IOPS` - concluded threshold value for random read check.
-   `600 IOPS` - concluded threshold value for random write check.
-   `5` - concluded number of old profiles for core profile check. 
-   `80%` - concluded threshold value for storage space consumed.
-   `500 MiB` - concluded amount of headroom for core profile check. 

## Prereqs Checker configuration options

The Prereqs Checker can be configured and enabled/disabled in the `custom-values.yaml` file.

The checks are running periodically. The frequency can be configured using a value in cron syntax in `checkSchedule` which by default is set to `0 8 * * *` i.e the cron job is run at 8AM every day.

```yaml
# Application configuration
configuration:
  # Prereqs Checker configurations
  prereqsChecker:
    # For changing the state enable/disable
    enabled: true
    # Cronjob expression to run the checks periodically
    checkSchedule: "0 8 * * *"
```

## Automatic Running of Checks
Prereqs Checker by default would be deployed as a sidecar container for each of the applications mentioned [below](#how-to-manually-trigger-the-checks), scaling the StatefulSet would also create a sidecar container per pod instance.

Prereqs Checker would only run periodically in the first pod of the `StatefulSet` since it is not required that all pods (for the same application or `StatefulSet`) should perform the checks as all the pods would have similar configuration.

Persistence Node for example will have the checks running periodically based on the `checkSchedule` on the **first pod** but not on the subsequent ones.

First Pod (`dx-deployment-persistence-node-0`)
```console
$ kubectl -n dxns logs dx-deployment-persistence-node-0 -c prereqs-checker
Checks are scheduled */5 * * * *.
[2022-10-28 07:25:00]: == File permission check for /mnt/prereqs-checks-volumes/database/ ==
[2022-10-28 07:25:00]: dx_user is current user.
[2022-10-28 07:25:00]: dx_user has a write permission on /mnt/prereqs-checks-volumes/database/.
[2022-10-28 07:25:00]: dx_user has read permission on /mnt/prereqs-checks-volumes/database/.
...
```
Second Pod (`dx-deployment-persistence-node-1`)
```console
$ kubectl -n dxns logs dx-deployment-persistence-node-1 -c prereqs-checker
Prereqs checker will NOT run.
Hostname "dx-deployment-persistence-node-1" ends with a number greater than 0 so we assume this is a subsequent Pod in a Helm deployment. Checks are only scheduled on the first Pod.
If this is not a Helm deployment and you need to have the test running please change "dx-deployment-persistence-node-1" to something that ends with 0 or that doesn't end with a number.
```

Subsequent pod(s) would still have the `prereqs-checker` container so you can still [trigger the checks](#how-to-manually-trigger-the-checks) manually for the other pods.

```console
$ kubectl -n dxns exec --stdin --tty dx-deployment-persistence-node-1 -c prereqs-checker -- /bin/bash /usr/local/sbin/run_test.sh
```

## How to manually trigger the checks:

The following command can be triggered to run the checks manually, once all the checks will get performed, results will be available in the logs

Replace the `<application-name>` with the following depending on which application you want to run the checks.
- `core`
- `digital-asset-management`
- `remote-search`
- `persistence-node`

```shell
kubectl -n <my-namespace> exec --stdin --tty <release-name>-<application-name>-0 -c prereqs-checker -- /bin/bash /usr/local/sbin/run_test.sh
```

The following command can be run to print the logs:

```shell
kubectl -n dxns logs pod/<release-name>-<application-name>-0 prereqs-checker
```
