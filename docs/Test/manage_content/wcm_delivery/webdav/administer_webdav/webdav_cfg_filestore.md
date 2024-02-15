# Configuring the WebDAV file store

By default only administrative users can perform write operations on specific folders of the WebDAV file store. This affects public and user owned folders. You can enable write access for all authenticated users on WebDAV file stores folders.

To enable write access for all authenticated users, proceed as follows:

1.  Add the following property to the WP ConfigService resource environment provider in the WebSphere® Integrated Solutions Console: filestore.writeaccess.allowed.

2.  Set the value for the property to true.

3.  Restart the portal server for the new setting to take effect.


!!! note
    -   There are several WebDAV entry points. However, the property filestore.writeaccess.allowed applies to the filestore entry points for home directories for each user located at: http://server\_name:WC\_default\_host/wps/mycontenthandler/dav/fs-type1/users/user\_name
    -   Users can modify only their own directories. You must grant additional permissions for users to modify other directories.


