# Task: modify-virtual-portal

Portal ConfigEngine task that modifies a virtual portal.

Use this task to modify a virtual portal by using its object ID. To determine the correct object ID of the virtual portal, use the task `list-all-virtual-portals`.

## Parameters

-   **VirtualPortalObjectId**

    The object ID of the virtual portal. This input is mandatory for identification of the virtual portal that you want to modify.

-   **VirtualPortalRealm**

    The realm of the virtual portal. You can and must specify a realm only if you have realms that are enabled in your portal installation.

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

    `./ConfigEngine.sh modify-virtual-portal -DPortalAdminPwd=password -DWasPassword=password`

-   **Linux™**

    `./ConfigEngine.sh modify-virtual-portal -DPortalAdminPwd=password -DWasPassword=password`

-   **Windows™**

    `ConfigEngine.bat modify-virtual-portal -DPortalAdminPwd=password -DWasPassword=password`



???+ info "Related information"
    - [Modifying a virtual portal](../../../adm_vp_task/vp_adm_task/advp_tsk_modify.md)
    - [Command reference for the Portal Scripting Interface](../../../../../extend_dx/development_tools/portal_admin_tools/portal_scripting_interface/command_ref_psi/index.md)
    - [Language support](../../../../../extend_dx/development_tools/portal_admin_tools/language_support/index.md)

