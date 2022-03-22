# Exporting content from the filestore

You must export content from the filestore to create your custom theme. There are different options available to export files from the portal file store.

Exporting content from the filestore is required in different scenarios, however with different files to be exported. See the concrete scenario description for the detailed list of files to export.

You can access the filestore by using the following URL:

-   http://<server\>:<port\>/wps/mycontenthandler/dav/fs-type1/

Use one of the following options to export the files stored there.

## Get a compressed file using your browser

You can obtain a compressed file of the content in the filestore using your browser. Enter the following url in your browser:

```
http://<server>:<port>/wps/mycontenthandler/dav/fs-type1/<folder-name>/?mime-type=application/zip
```

Where:

-   The <server\> value is the host name of the portal.
-   The <port\> value is the port number for HCL Portal.
-   The <folder-name\> value is the folder to be compressed. This value is optional.

**Note:** A / must follow the folder name.

The URL triggers a download of a compressed file. If you are prompted for a user and password enter the admin user ID and password for HCL Portal. Store the file on the local file system.

This following url downloads the complete content of the filestore:

```
http://<server>:<port>/wps/mycontenthandler/dav/fs-type1/<folder-name>/?mime-type=application/zip 
```

The following url downloads the content of the themes folder:

```
http://<server>:<port>/wps/mycontenthandler/dav/fs-type1/themes/?mime-type=application/zip
```

## Automate the export using an Ant task

If you want to automate the export, you can write an Ant task as depicted in the following example:

```
<target name="export-mytheme">
    <get src="http://<server>:<port>/wps/mycontenthandler/dav/fs-type1/<folder-name>/?mime-type=application/zip"
        username="PortalAdminID"
        password="PortalAdminPwd"
        dest="/tmp/mytheme.zip" />
</target>
```

Where:

-   The <server\> value is the host name of the portal.
-   The <port\> value is the port number for HCL Portal.
-   The <folder-name\> value is the folder to be compressed. This value is optional.

**Note:** A / must follow the folder name.

## Use WebDAV to connect to the filestore

Use a WebDav Client to connect to the filestore using the following url:

-   http://<server\>:<port\>/wps/mycontenthandler/dav/fs-type1/

Browse to the folder you need and copy the files to your local drive.

