# How to clear the extension registry, OSGi caches, and temporary files

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

The HCL Digital Experience (DX) server uses different kind of caches. This document explains how to clear the extension registry, the Open Services Gateway initiative (OSGi) caches of the server and the temporary files used by DX profiles.  

## Instructions

### Resetting extension registry

To reset the extension registry:

1. Stop the DX JVMs.  
2. Delete the contents of the following directory:  
   `<wp_profile_root>/temp/<nodeName>/WebSphere_Portal/_extensionregistry`  
3. Start the Portal server.  

### Clearing the temporary files of the DX profiles

To clear the temporary files:

1. Stop the HCL DX Environment completely, including all JVMs. On a clustered environment, you also need to stop the Deployment Manager, Node Agents, and servers.  
2. For each WebSphere Application Server profile, delete the contents of the following directories:  

    ```folders
    <profile_root>/temp
    <profile_root>/wstemp
    <profile_root>/config/temp
    ```

    Before deleting the temporary files, refer to the following topic:  
    [Things to know before deleting temporary, cache and log files in WebSphere Application Server](https://www.ibm.com/support/pages/things-know-deleting-temporary-cache-and-log-files-websphere-application-server){target="_blank"}

### Clearing the OSGi class caches of DX profiles

For UNIX platforms, run the following script in each profile:  

```cmd
<profile_root>/bin/osgiCfgInit.sh
```

For Windows platforms, run the following script in each profile:  

```cmd
<profile_root>\bin\osgiCfgInit.bat
```

### Clearing JVM class caches (Windows, Linux and AIX only)

For UNIX platforms, run the following script:  

```cmd
<AppServer_root>/bin/clearClassCache.sh
```

For Windows platforms, run the following script:  

```cmd
<AppServer_root>\bin\clearClassCache.bat
```

### Clearing Java shared resources

Java shared resources can be found in different locations depending on the operating system.

On Windows, these resources are usually found in `<WinUsers_home>\Local Settings\ApplicationData\javasharedresources\`, where <WinUsers_home\> is either `C:\Documents and Settings\DefaultUser` or `C:\Users\<username>` depending on the current version of Windows.  

For AIX or Linux:

- `/tmp/javasharedresources`

For Windows XP or Windows 2003:  

- `C:\Documents and Settings\DefaultUser\Local Settings\ApplicationData\javasharedresources\`  

For Window Vista, Windows 7, or Windows 2008:  

- `C:\Users\<username>\AppData\Local\javasharedresources\`  

For Windows 2008, Windows 2012, or Windows 2016:

- `C:\Windows\System32\config\systemprofile\AppData\Local\javasharedresources`  
- `C:\Windows\SysWOW64\config\systemprofile\AppData\Local\javasharedresources`  

When all JVMs are stopped, delete the content of that `javasharedresources` folder.  

For more information, refer to [How to clear the WebSphere class caches](https://www.ibm.com/support/pages/how-clear-websphere-class-caches){target="_blank"}.

!!!note
    - Never delete the cache while any of the JVMs are running and using the cache. The server has to be stopped before clearing the cache.
    - Be logged in as the user that started the WebSphere Application Server.
    - For Windows, the `clearClassCache.bat` file may not work when using Windows Services.
