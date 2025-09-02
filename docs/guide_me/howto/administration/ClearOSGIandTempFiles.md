# How to clear the extension registry, the OSGI caches and temporary files

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

The HCL Digital Experience Server uses different kind of caches. This document explains how to clear the extension registry, the OSGI caches of the server and the temporary files used by the wp_profile.  

## Instructions

### Resetting extension registry

1. Stop the Digital Experience JVMs.  
2. Delete the contents of the following directory:  
   `<wp_profile_root>/temp/<nodeName>/WebSphere_Portal/_extensionregistry`  
3. Start the Portal server.  

### Clearing the temporary files of the DX profiles

1. Stop the HCL Digital Experience Environment completely. (All JVMs. On a clustered environment: Deployment Manager, Node Agents and Servers)  
2. For each WebSphere Application Server profile, delete the contents of the following directories:  

    ```folders
    <profile_root>/temp
    <profile_root>/wstemp
    <profile_root>/config/temp
    ```

    Before deleting the temporary files, please also read:  
    [Things to know before deleting temporary, cache and log files in WebSphere Application Server](https://www.ibm.com/support/pages/things-know-deleting-temporary-cache-and-log-files-websphere-application-server){target="_blank"}  

### Clearing the OSGi class caches of the DX profiles

For UNIX platforms, run the following script in each profile:  

```cmd
<profile_root>/bin/osgiCfgInit.sh
```

For Windows platforms, run the following script in each profile:  

```cmd
<profile_root>\bin\osgiCfgInit.bat
```

### Clearing the JVM's class cache (Windows, Linux and AIX only)

For UNIX platforms, run the following script:  

```cmd
<AppServer_root>/bin/clearClassCache.sh
```

For Windows platforms, run the following script:  

```cmd
<AppServer_root>\bin\clearClassCache.bat
```

### Clearing java shared resources

Depending on the operating system java shared resources are locate in different locations. On Windows usually it can be found in the following folder:

`<WinUsers_home>\Local Settings\ApplicationData\javasharedresources\`  
where <WinUsers_home\> is either `C:\Documents and Settings\DefaultUser` OR `C:\Users\<username>` depending on the current version of Windows.  

For Windows XP/Windows 2003:  
`C:\Documents and Settings\DefaultUser\Local Settings\ApplicationData\javasharedresources\`  

For Window Vista/Windows 7/Windows 2008:  
`C:\Users\<username>\AppData\Local\javasharedresources\`  

For AIX/Linux:  
`/tmp/javasharedresources`  

For Windows 2008/Windows 2012/Windows 2016:  
`C:\Windows\System32\config\systemprofile\AppData\Local\javasharedresources`  
or  
`C:\Windows\SysWOW64\config\systemprofile\AppData\Local\javasharedresources`  

When all JVMs are stopped, delete the content of that `javasharedresources` folder.  

Source: [How to clear the WebSphere class caches](https://www.ibm.com/support/pages/how-clear-websphere-class-caches){target="_blank"}

!!!note
    - Never delete the cache while any of the JVM's are running and using the cache. The server has to be stopped before clearing the cache.
    - Be logged in as the user that started the WebSphere Application Server.
    - For Windows, the clearClassCache.bat may not work when using Windows Services.
