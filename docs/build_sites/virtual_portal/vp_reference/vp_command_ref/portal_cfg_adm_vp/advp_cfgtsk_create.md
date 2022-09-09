# Task: create-virtual-portal

Portal ConfigEngine task that creates a new virtual portal.

Use the create-virtual-portal task to create a new virtual portal. This task creates the virtual portal itself, but it does not create any default content for the virtual portal or grant any access permissions to the virtual portal administrators. You need to run these tasks separately after you create the virtual portal. For example, you can use the XML configuration interface create content and grant access permissions. For details, about the access permissions that are required for virtual portal administrators, see the section *Configuring the sub-administrators for virtual portals.*. For details about how to use the XML configuration interface see *The XML configuration interface*.

-   **VirtualPortalTitle**

    The title of the virtual portal.

    This option is required.

-   **VirtualPortalRealm**

    The realm of the virtual portal.

    This input is required if you have realms that are enabled in your portal installation. If you do not have realms that are enabled, do not specify a value for the realm.

-   **Virtual portal context or host name**

    You can address virtual portals by using either a portal context or a virtual host name. If you specify a host name, the context is ignored:

    -   **VirtualPortalContext**

        The portal context of the virtual portal. The context must be unique.

    -   **VirtualPortalHostName**

        The host name of the virtual portal.

        !!! note
            -   This URL is used internally to access the virtual portal instance, even if you specify a context URL that is easy to use. Make sure that the host name that you specify here is accessible.
            -   You cannot use the same virtual portal host name twice in the same portal installation. The host name must be unique for the portal installation. Host names must be valid host names that are either registered on your local DNS, or internally using the "hosts" file. Host names must be registered on your system before creating a virtual portal.
            -   After you create the virtual portal, you cannot change the host name that you specify for the virtual portal. If you must use a different host name for a virtual portal, see the topic about *Using a new host name for an existing virtual portal*.
            -   If you use web content libraries, do not specify a context URL for the new virtual portal that matches the name of a library on your server. If the name of a library and the URL context of a virtual portal have the same value, incorrect rendering of web content can result.
            -   If you use a host name for creating the virtual portal, you need to update the global web server plug-in configuration in the WebSphere® Integrated Solutions Console and restart the web server. If you have more than one virtual portal, you need to do this only once. For more information about updating the global web server plug-in configuration, read *Creating or updating a global web server plug-in configuration file* in the IBM® WebSphere® Application Server product documentation.

    -   You must specify either a host name or a context.
    -   If you specify both a host name and a context, the host name takes precedence and the context is ignored.
    -   There are some strings that you cannot use as URL mappings for virtual portals, for example `vp`. These strings are reserved names and correspond with URL codec names. For a list of these reserved strings, see *Shaping the user experience*.
    -   Use only ASCII characters for the URL Context. For example, you cannot use a URL Context such as språk. If you use non-ASCII characters, the portal shows an error message such as the following EJPAH2009E: Invalid characters were found in a context name or label. Similarly, you cannot use escaped URL encoding either. For example, a URL Context such as spr%E5k.

-   **VirtualPortalObjectId**

    The object ID that is used to reference the virtual portal. If you do not specify `VirtualPortalObjectId`, the portal generates a new virtual portal object ID.

-   **VirtualPortalId**

    The short numeric ID that is used to reference the virtual portal. It is good practice to explicitly set a value for `VirtualPortalId`. If you do not specify a value for the virtual portal ID, the portal generates a new virtual portal ID. However, that generated virtual portal ID might not be unique.

-   **VirtualPortalNlsFile**

    The national language support \(NLS\) file for the virtual portal. Provide the path and file name of your national language support file. This input is optional.

    You can create your own national language support file to specify more titles and descriptions in other languages for your virtual portal.

    If you specify an NLS file, the value that is given for the virtual portal title in that NLS file overrides the title that you specify by the `VirtualPortalTitle` input parameter.

    If you specify an NLS file, do not use prefixes in that NLS file.

    If you do not specify an NLS file, the virtual portal is created with the title that you give as the value to the `VirtualPortalTitle` input parameter only. But the virtual portal is created without titles in other languages and without descriptions. If you specify no NLS file, the value that you specify by the `VirtualPortalTitle` input parameter shows to users as the title of the virtual portal in all language environments. This action is independent of the system and browser locale and the user preferences.

    If you want to pass a description for the virtual portal to the configuration task, you must specify this action in the NLS file.

    For more information about the NLS file and its format, see the *Command reference for the Portal Scripting Interface* and then under the section *Property File Format*.

    For a list of the languages that are available with HCL Portal and their language codes refer to *Language support*.


## Syntax

You pass the parameters in the parameter list for each configuration task as appropriate. You do this by either of the following methods:

-   Specifying the parameter and value that is preceded by -D on the command line.
-   Defining them in the file wkplc.properties.

    !!! note
        The property file must be encoded in the ISO 8859-1 character encoding format.


-   **AIX®**

    ./ConfigEngine.sh create-virtual-portal -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalTitle=MyVirtualPortalTitle -DVirtualPortalContext=virtual\_portal\_context\_url

-   **HP-UX**

    ./ConfigEngine.sh create-virtual-portal -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalTitle=MyVirtualPortalTitle -DVirtualPortalContext=virtual\_portal\_context\_url

-   **IBM® i**

    ConfigEngine.sh create-virtual-portal -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalTitle=MyVirtualPortalTitle -DVirtualPortalContext=virtual\_portal\_context\_url

-   **Linux™**

    ./ConfigEngine.sh create-virtual-portal -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalTitle=MyVirtualPortalTitle -DVirtualPortalContext=virtual\_portal\_context\_url

-   **Solaris**

    ./ConfigEngine.sh create-virtual-portal -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalTitle=MyVirtualPortalTitle -DVirtualPortalContext=virtual\_portal\_context\_url

-   **Windows™**

    ConfigEngine.bat create-virtual-portal -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalTitle=MyVirtualPortalTitle -DVirtualPortalContext=virtual\_portal\_context\_url

-   **z/OS®**

    ./ConfigEngine.sh create-virtual-portal -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalTitle=MyVirtualPortalTitle -DVirtualPortalContext=virtual\_portal\_context\_url

<!--
-   **[Adding the Site Builder and Script Application libraries](../admin-system/advp_create_add_libs.md)**  
If you add virtual portals to your portal installation after you install CF09 or a later cumulative fix and you use Site Builder or the Script Application, you need to add the appropriate library or libraries to each new virtual portal.


**Related information**  


[Creating a virtual portal](../admin-system/advp_tsk_create_vp.md)

[Virtual portal roles and their capabilities](../admin-system/advppln_roles.md)

[The XML configuration interface](../admin-system/admxmlai.md)

[Command reference for the Portal Scripting Interface](../admin-system/adpsicrf.md)

[Language support](../admin-system/adintern.md)

[Creating or updating a global web server plug-in configuration file](https://www.ibm.com/docs/en/was-nd/8.5.5?topic=icwspi-creating-updating-global-web-server-plug-in-configuration-file)

[Using the XML configuration interface to work with virtual portals](../admin-system/advp_xml.md) -->

