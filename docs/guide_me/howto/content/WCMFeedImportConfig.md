# How to increase WCM feed import file size settings

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

When importing feeds using the default configuration of Web Content Manager (WCM) in HCL Digital Experience (DX), files larger than 10 MB cause the following error:

```log
[date&timestamp] 00000253 HTTPFileRetri E The content-length reported by the web server: 19,221,288 exceeds the maximum allowable file size: 10,485,760
[date&timestamp] 00000253 FileComponent E The binary file myDocument.pdf is either too large or could not be retrieved.
```

This article explains how to configure the WCM feed import size settings for larger files.

## Instructions

To increase WCM feed import file size settings, perform the following steps:

1. Locate the `WCMConsumerPlugin.properties` file in one of the following directories:

    ```shell
    <wp_profile_root>\PortalServer\wcm\shared\app\config\WCMConsumerPlugin.properties
    <wp_profile_root>\installedApps\<cellname>\wci.ear\config\plugins\WCMConsumerPlugin.properties
    <PortalServer_root>\wcm\prereq.wcm\wcm\config\templates\shared\app\config\WCMConsumerPlugin.properties
    ```

2. Open `WCMConsumerPlugin.properties` and update the `max.filesize.mb` property to the required maximum file size in megabytes (for example, `max.filesize.mb=20`).

    !!!note
        Ensure that `max.filesize.mb` is set equal to or less than the `jdbc.resources.maxSize` setting in `aptrixjpe.properties`.

3. Save the file.
4. Restart your DX environment to apply the changes.

For more information about additional WCM file size parameters, refer to [Importing large files and images](../../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_importbuffer.md).  
