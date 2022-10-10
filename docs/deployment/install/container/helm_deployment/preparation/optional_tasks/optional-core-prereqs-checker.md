# Configure Prereqs Checker For Core


## Introduction of Prereqs Checker:

There are some checks that are performed to check the efficiency of various components called Prereqs Checkers. Currently, these checks are implemented for the mounted volume's file system of the core. You get the result of these checks from the container logs (system-out-logs).
For these checks, one separate sidecar container would get deployed along with the main application container. This is a lightweight container so the main application performance would not get affected. The result of the checks would be extractable from container logs.

The main objective to enable these checks is to get basic information about the file system of the mounted volumes. The result of these checks is also helpful to track the issues related to file systems.


## Checks implemented in Prereqs Checker:

#### File Permission Check:
In these checks, the basic file access permission would get checked and according to the access, the result will get printed on the logs.

#### Latency Check for I/O:
On running the prereqs checks the latency i.e the read write speed of the filesystem are displayed. If the minimum latency speed recorded is lower than the threshold value, the latency test is passed. The success message, minimum latency speed and the threshold value is added to the system out log. If the minimum latency speed recorded is higher than the threshold value, the latency test is failed. The failure message, minimum latency speed and the threshold value is added to the system out log. 

#### Soft Links and Hard Links Check:
On running the prereqs checks the users permissions for Soft links or Hard links creation capabilities for the specified mounted volumes are displayed. If softlink/hardlink is created in the specified directory, the test is passed and the success message is added to the system out log. If softlink/hardlink is not created in the specified directory, the test is failed and the failure message is added to the system out log. 

#### Random Read/Write Checks
In this check, `IOPS` will get measured for the file system. This check is very essential to measure the performance of the file system. This check will get fail if the measured `IOPS` will not be higher or equal to the threshold value.

## How to manually trigger the checks:

The following command can be triggered to run the checks manually, once all the checks will get performed, results will be available in the logs

```shell
kubectl -n dxns exec --stdin --tty dx-deployment-core-0 -c prereqs-checker -- /bin/bash /usr/local/sbin/run_test.sh
```

The following command can be run to print the logs:

```shell
kubectl -n dxns logs pod/dx-deployment-core-0 prereqs-checker
```
