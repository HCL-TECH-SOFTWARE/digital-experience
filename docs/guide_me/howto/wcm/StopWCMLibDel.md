# How to stop a background WCM library delete

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Deleting a WCM library using the WCM Libraries portlet triggers an Enterprise Java Bean (EJB) that locks the library, indicated by a grayed-out icon, prior to starting the operation. If a library deletion process becomes stuck in a "Deleting" state, even after restarting the environment, you can manually stop the task and release the lock. This article describes how to stop a background WCM library deletion process and restore normal library status in HCL Digital Experience (DX).

## Instructions

To stop the deletion process, perform the following steps:

1. Locate the EJB IDs by running the `<wp_profile_root>/bin/findEJBTimers.sh` script with your server name:

    ```bash
    ./findEJBTimers.sh WebSphere_Portal -all
    ```

2. Note the list of timer numbers returned in the output.

3. Cancel each timer using the `<wp_profile_root>/bin/cancelEJBTimers.sh` script, replacing `xxxx` with the target timer number:

    ```bash
    ./cancelEJBTimers.sh WebSphere_Portal -timer xxxx
    ```

4. Repeat Step 3 for all timer numbers identified in Step 2.

5. Unlock the library by making a request to the following URL pattern, replacing `host`, `port`, and `libraryname` with your environment details:

    `http://host:port/wps/wcm/connect?MOD=UnlockLibrary&library=libraryname`

    !!!note
        Unlocking the library is mandatory before restarting. If left locked, the EJB timers restart automatically when the server comes back online.

6. Restart the server.
