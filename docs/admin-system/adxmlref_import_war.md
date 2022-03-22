# Importing WAR files

To create new portlet applications, you need additional resources, the WAR files.

You cannot include those WAR files in the XML input. Instead, you can add references to external URL locations to the XML input. See the following example:

```

     <web-app uid="MySpecialPortlet" action="create">
             <url>file://localhost/C:/myportlets/Special.war</url>
     </web-app>

```

The WAR files are not used in the running portal. However, when you process the XML request, the WAR files referenced in the XML script must be accessible to the portal. When you update a package and specify a URL subelement, the WAR file is re-deployed, just as if you had selected the update of a portlet application in the browser. If you intend to deploy the same configuration into several new portals, you can set the URL to http://deploymentserver/path/filename.war. This way there is no need to copy all WAR files to each server machine. The deploymentserver machine needs to be set up properly so that the WAR files can be accessed by HTTP.

An XML export request does not create any archive files that might be required. Instead, it only creates pseudo-references in the form of file URLs that rely on the assumption that the file resides in the /installableApps/ sub-directory of the portal installation. If these assumptions are not met, an exported portal configuration cannot be successfully re-created without editing the generated URLs manually. A back up of a portal configuration requires that the WAR files required for redeployment are saved in addition to the XML export.

