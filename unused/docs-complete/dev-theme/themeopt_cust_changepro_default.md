# Changing the theme default profile 

You can change the profile for the theme or a specific page to define the modules loaded.

**Parent topic:**[Specify profiles ](../dev-theme/themeopt_define_mod_files.md)

## WebDAV

1.  Connect your WebDAV client to http://<server\>:<portal\>/wps/mycontenthandler/dav/themelist/.

2.  Navigate to the folder for your theme and copy the metadata.properties file to your local drive.

3.  Edit the local copy of the file and modify it to point to the profile desired.

    For Example:

    ```
    com.ibm.portal.themetype=CSA2
    resourceaggregation.profile=profiles/profile_lightweight.json
    
    ```

4.  Copy the local copy of the metadata.properties file back into the folder for your theme in the themelist folder.


## XMLAccess

1.  Export the theme.

    You can export all themes defined for HCL Portal using the following script, or insert the specific theme object ID you want to export:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <request
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd" type="export"
    create-oids="true">
        <portal action="locate">
           <theme action="export" objectid="*" />
        </portal>
    </request>
    ```

2.  Modify the parameter resourceaggregation.profile to point to the new profile.

    For Example:

    ```
    <parameter name="resourceaggregation.profile" type="string" update="set"><![CDATA[profiles/profile_lightweight.json]]></parameter>
    ```

3.  Import the XML file using the command line or **Import XML**.

4.  Restart HCL Portal.


