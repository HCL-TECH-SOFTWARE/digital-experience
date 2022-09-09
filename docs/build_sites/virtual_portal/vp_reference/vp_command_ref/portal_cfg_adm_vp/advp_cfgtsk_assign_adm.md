# Task: assign-virtual-portal-admin-group

Portal ConfigEngine task that assigns a group of administrators to a virtual portal.

Use this task after the creation of a virtual portal to assign a subadministrator group to the virtual portal. This task gives this group permission on the root content node of the virtual portal and all its child pages. The task also gives Editor role access to the administration portlets of the virtual portal. This group must be within the realm that is specified for the virtual portal.

## Parameters

-   **VirtualPortalAdminGroup**

    The full DN \(distinguished name\) of the administrator group.

-   **Virtual portal context or host name**

    You address the virtual portal by using either the portal context or the virtual host name, depending on what you specified when you created the virtual portal. If you specified both, specify the host name here.

    -   **VirtualPortalContext**

        The portal context of the virtual portal.

    -   **VirtualPortalHostName**

        The host name of the virtual portal.


## Syntax

You pass the parameters in the parameter list for each configuration task as appropriate. You do this by either of the following methods:

-   Specifying the parameter and value that is preceded by -D on the command line.
-   Defining them in the file wkplc.properties.

    **Note:** The property file must be encoded in the ISO 8859-1 character encoding format.


-   **AIX®**

    ./ConfigEngine.sh assign-virtual-portal-admin-group -DVirtualPortalAdminGroup=cn=vpadmins,o=defaultwimfilebasedrealm -DVirtualPortalContext=mynewvp -DPortalAdminPwd=password -DWasPassword=password

-   **HP-UX**

    ./ConfigEngine.sh assign-virtual-portal-admin-group -DVirtualPortalAdminGroup=cn=vpadmins,o=defaultwimfilebasedrealm -DVirtualPortalContext=mynewvp -DPortalAdminPwd=password -DWasPassword=password

-   **IBM® i**

    ConfigEngine.sh assign-virtual-portal-admin-group -DVirtualPortalAdminGroup=cn=vpadmins,o=defaultwimfilebasedrealm -DVirtualPortalContext=mynewvp -DPortalAdminPwd=password -DWasPassword=password

-   **Linux™**

    ./ConfigEngine.sh assign-virtual-portal-admin-group -DVirtualPortalAdminGroup=cn=vpadmins,o=defaultwimfilebasedrealm -DVirtualPortalContext=mynewvp -DPortalAdminPwd=password -DWasPassword=password

-   **Solaris**

    ./ConfigEngine.sh assign-virtual-portal-admin-group -DVirtualPortalAdminGroup=cn=vpadmins,o=defaultwimfilebasedrealm -DVirtualPortalContext=virtual\_portal\_context\_url -DPortalAdminPwd=password -DWasPassword=password

-   **Windows™**

    ConfigEngine.bat assign-virtual-portal-admin-group -DVirtualPortalAdminGroup=cn=vpadmins,o=defaultwimfilebasedrealm -DVirtualPortalContext=virtual\_portal\_context\_url -DPortalAdminPwd=password -DWasPassword=password

-   **z/OS®**

    ./ConfigEngine.sh assign-virtual-portal-admin-group -DVirtualPortalAdminGroup=cn=vpadmins,o=defaultwimfilebasedrealm -DVirtualPortalContext=virtual\_portal\_context\_url -DPortalAdminPwd=password -DWasPassword=password


!!! note
    You can create a virtual portal and assign the administrator group in the same command. For example, you can specify it as: ./ConfigEngine.sh create-virtual-portal assign-virtual-portal-admin-group -DVirtualPortalAdminGroup=cn=vpadmins,o=defaultwimfilebasedrealm -DVirtualPortalContext=virtual\_portal\_context\_url -DVirtualPortalTitle=mynewvptitle -DPortalAdminPwd=password -DWasPassword=password


