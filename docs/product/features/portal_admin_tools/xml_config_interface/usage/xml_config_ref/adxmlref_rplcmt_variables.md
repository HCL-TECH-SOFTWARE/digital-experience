# Replacement variables in XML configuration interface script files

XML script files that were created by an XML configuration interface export or that can be imported by the XML configuration interface can contain URLs to portal files. These URLs reference files that are in HCL Portal server directories. Depending on the installation directory of your HCL Digital Experience installation, these file locations can differ. You can avoid the dependency on the file location by using variables.

For example, the web application of the portal login module contains the following XML element:

```
<url>file://localhost/$archive_root$/login.war.webmod/login.war</url>
```

On a Linux installation of HCL Portal, this URL might be interpreted as follows:

```
<url>file://localhost//opt/WebSphere/PortalServer/login.war.webmod/login.war</url>
```

On other HCL Portal installations, the login.war file can be in a different directory.

As the XML configuration interface uses different values for the variable replacement, the XML input file is independent of the specific HCL Portal installation directories.

The following table shows the available variables and provides examples of the replacement values they might have on a Linux installation of HCL Portal:

|Variable for HCL Portal installation directory|Example replacement value|
|----------------------------------------------|-------------------------|
|`$app_install_root$`|/opt/WebSphere/wp\_profile/installedApps|
|`$archive_root$`|/opt/WebSphere/wp\_profile/PortalServer/deployed/archive|
|`$predeployed_root$`|/opt/WebSphere/wp\_profile/installedApps/wpsbvt|
|`$profile_install_root$`|/opt/WebSphere/wp\_profile/installedApps|
|`$server_root$`|/opt/WebSphere/PortalServer|
|`$user_install_root$`|/opt/WebSphere/wp\_profile|
|`$wp_profile_root$`|/opt/WebSphere/wp\_profile|

**Parent topic:**[XML configuration reference](../admin-system/adxmlref.md)

