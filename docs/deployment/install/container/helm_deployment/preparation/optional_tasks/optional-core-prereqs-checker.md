# Configure Prereqs Checker For Core


## Introduction of Prereqs Checker:

There are some checks that are performed to check the efficiency of various components called Prereqs Checkers. Currently, these checks are implemented for the mounted volume's file system of the core. You get the result of these checks from the container logs (system-out-logs).
For these checks, one separate sidecar container would get deployed along with the main application container. This is a lightweight container so the main application performance would not get affected. The result of the checks would be extractable from container logs.

The main objective to enable these checks is to get basic information about the file system of the mounted volumes. The result of these checks is also helpful to track the issues related to file systems.


## Checks implemented in Prereqs Checker:

#### File Permission Check:
On running the prereqs checks, the read and write permissions for the files within the mounted volumes will be displayed. If you have read and write permissions the file within the mounted volumes is created and accessible, the success message and the users read and write access for the file is added to the system out logs. If you dont have read and write permissions the failure message is added to the system out log.

#### Latency Check for I/O:
On running the prereqs checks the latency i.e the read write speed of the filesystem are displayed. If the minimum latency speed recorded is lower than the threshold value, the latency test is passed. The success message, minimum latency speed and the threshold value is added to the system out log. If the minimum latency speed recorded is higher than the threshold value, the latency test is failed. The failure message, minimum latency speed and the threshold value is added to the system out log. 

#### Soft Links and Hard Links Check:
On running the prereqs checks the users permissions for Soft links or Hard links creation capabilities for the specified mounted volumes are displayed. If softlink/hardlink is created in the specified directory, the test is passed and the success message is added to the system out log. If softlink/hardlink is not created in the specified directory, the test is failed and the failure message is added to the system out log. 

#### Random Read/Write Checks
On running the prereqs checks the Random Read Write Test Check i.e the time take to send a specific amount of data for read and write capabilities within the mounted volumes are displayed
If the Read/Write IOPS is higher than the threshold value, the test is passed. The success message, Read/Write IOPS and the threshold value is added to the system out log. If the Read/Write IOPS is lower than the threshold value, the test is failed. The failure message, Read/Write IOPS and the threshold value is added to the system out log.

## How to manually trigger the checks:

The following command can be triggered to run the checks manually, once all the checks will get performed, results will be available in the logs

```shell
kubectl -n dxns exec --stdin --tty dx-deployment-core-0 -c prereqs-checker -- /bin/bash /usr/local/sbin/run_test.sh
```

The following command can be run to print the logs:

```shell
kubectl -n dxns logs pod/dx-deployment-core-0 prereqs-checker
```
