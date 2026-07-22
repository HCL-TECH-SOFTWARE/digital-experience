# How to Configure WCM Feed Import File Size Settings

## Applies to

> HCL Digital Experience 9.5

## Introduction

When using HCL Web Content Manager, packaged with HCL Portal it is possible to import Feeds using the WCM feed import functionality. 

With that functionality it is possible to import a large amount of files into an WCM content library. For files that are less than 10 MB the import should work fine. The following kind of error-message may occur, when it will be tried to import larger files: 

```text
[date&timestamp] 00000253 HTTPFileRetri E The content-length reported by the web server: 19,221,288 exceeds the maximum allowable file size: 10,485,760
[date&timestamp] 00000253 FileComponent E The binary file myDocument.pdf is either too large or could not be retrieved.
```

## Instructions

The error above indicates that the **max.filesize.mb** variable needs to be increased in the WCMConsumerPlugin.properties file. The file is located in the following directories:

```text
..\wp_profile\PortalServer\wcm\shared\app\config\WCMConsumerPlugin.properties
..\wp_profile\installedApps\<cellname>\wci.ear\config\plugins\WCMConsumerPlugin.properties
..\WebSphere\PortalServer\wcm\prereq.wcm\wcm\config\templates\shared\app\config\WCMConsumerPlugin.properties
```

- The maximum file size (in MB) for any image or file resources that the Consumer will attempt to store in WCM
- This value should be equal to, or less than, the jdbc.resources.maxSize setting in the aptrixjpe.properties file.max.filesize.mb=10

A restart of the WCM/Portal Server should be done to ensure that the new parameter will be used. 

Additional parameters about WCM file size settings can be found at URL:

[Importing large files and images](https://help.hcl-software.com/digital-experience/9.5/CF236/manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_importbuffer/)