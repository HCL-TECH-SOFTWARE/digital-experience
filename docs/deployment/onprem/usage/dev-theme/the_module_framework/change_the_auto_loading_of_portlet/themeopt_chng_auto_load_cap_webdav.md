# Changing the auto-loading of portlet capabilities with WebDAV

You can change the auto-loading of portlet capabilities with WebDAV.

1.  Connect your WebDAV client to `http://server:port/wps/mycontenthandler/dav/themelist/`.

2.  Find the folder for your theme and copy the metadata.properties file to your local drive.

3.  Edit the local copy of the file and set the auto-loading property to true or false.

    For example:

    ```
    resourceaggregation.autoLoadPortletCapabilities=true
    ```

4.  Copy the local copy of the metadata.properties file back into the folder for your theme in the themelist folder.


**Parent topic:**[Change the auto-loading of portlet capabilities](../dev-theme/themeopt_chng_auto_load_cap.md)

