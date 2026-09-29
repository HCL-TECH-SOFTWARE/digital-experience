# How to use a custom temporary directory with ConfigEngine

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

When running ConfigEngine tasks, such as applying a Cumulative Fix (CF) upgrade or running the Health Checker, the process fails if the default `/tmp` directory lacks sufficient space. For example, the Health Checker displays the following error message:

```text
 Test: Available temporary space  
   
 ERROR: There is not enough space in the /tmp/ directory  
 for the configuration tasks to run successfully.  
 At lease 1 GB of disk space in the /tmp/ directory is needed.  
```

This article describes how to specify a custom temporary directory when running ConfigEngine tasks in HCL DX.

## Instructions

To run ConfigEngine using a custom temporary directory, perform the following steps:

1. Open a command line interface and navigate to the ConfigEngine directory.
2. Execute the ConfigEngine task with the `-Djava.io.tmpdir=` parameter set to the custom directory path. For example:

    ```bash
    ./ConfigEngine.sh health-check-update -DPortalAdminPwd=wpsadmin -DWasPassword=wpsadmin -Djava.io.tmpdir=/xyz
    ```

!!!note
    Certain ConfigEngine tasks might still check or use the default `/tmp` directory depending on the task being executed. For example, the Health Checker verifies space in `/tmp` because it is the default directory used during the `applyCF` task. You can pass `-Djava.io.tmpdir=` when running `applyCF` or other ConfigEngine tasks.
