# How to stop a background WCM library delete

## Applies to

> HCL Digital Experience version 9.5

## Introduction

This article describes the procedure to stop the WCM Library deletion process that is running in the background.

This can also be used when the WCM deletion process is stuck in "Deleting" even after restarting the environment.

A WCM Library delete using the WCM Libraries portlet triggers an EJB that will lock the library (icon will be greyed out) prior to the start of the process.

## Instructions

To stop the deletion process you will need to find the EJB's, remove them, unlock the library and then restart the server.

1. Find the EJB id's by using the findEJBTimers script. You need the java server name for this:

```bash
findEJBTimers.sh WebSphere_Portal -all
```

2. Make a note of the list of timer numbers.

3. Run the script passing the timer number in as a parameter:

```bash
cancelEJBTimers.sh WebSphere_Portal -timer xxxx
```

4. Repeat for all timers previously listed

5. Unlock the libraries. Otherwise the EJB timers will simply restart again when the server restarts.

`http://host:port/wps/wcm/connect?MOD=UnlockLibrary&library=libraryname`

6. With the library unlocked, you can now restart the Portal.

The delete library task will now be terminated and the delete icon will display correctly.