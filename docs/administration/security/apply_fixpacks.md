# Applying fix packs to your portal

Applying fix packs to HCL Digital Experience is a two-step process. At every portal start, a portal routine checks for the completion.

To apply fix packs or cumulative fixes to HCL DX, you complete the following two steps:

1.  You update the portal server files by using the Installation Manager.
2.  You update every deployed profile by using a portal configuration engine task.

If you do only the first step, or if the second step fails to complete, the portal does not run properly. To prevent problems, the portal StartupCheck routine checks that the portal server files and the profiles have the same update level. Possible results are as follows:

-   **If the update levels match:**

    Portal start continues. StartupCheck writes the following message to the SystemOut.log:

    `EJPCA2701I: Confirmed: Portal product code and Portal profile are at the same maintenance level.`

-   **If the update levels do not match:**

    Portal start does not continue. StartupCheck writes the following message and the explanation for resolving the problem to the SystemOut.log:

    `EJPCA2702E: Maintenance level of Portal profile does not match that of Portal product code.`


This problem can be caused by one of the following two conditions:

-   A cumulative fix or fix pack was installed on the portal, but was not applied to this profile.
-   A cumulative fix or fix pack was rolled back from the portal, but was not rolled back from the profile.

You resolve the problem by using the following procedure.

1.  Determine the maintenance levels:

    1.  To determine the maintenance level of the Portal product code, read the wps.properties file in the `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)` directory.

    2.  To determine the maintenance level of the profile, read the wps.properties file in the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer` directory.

2.  Run the appropriate portal configuration command:

    1.  If the profile is at a lower maintenance level than the portal, run the `applyCF` script from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root) /PortalServer/bin directory.

        Use the following syntax:

        -   **AIX®**

            ./applyCF.sh -DWasPassword=password -DPortalAdminPwd=password

        -   **HP-UX**

            ./applyCF.sh -DWasPassword=password -DPortalAdminPwd=password

        -   **IBM® i**

            applyCF.sh -DWasPassword=password -DPortalAdminPwd=password

        -   **Linux™**

            ./applyCF.sh -DWasPassword=password -DPortalAdminPwd=password

        -   **Solaris**

            ./applyCF.sh -DWasPassword=password -DPortalAdminPwd=password

        -   **Windows™**

            applyCF.bat -DWasPassword=password -DPortalAdminPwd=password

        -   **z/OS®**

            ./applyCF.sh -DWasPassword=password -DPortalAdminPwd=password

    2.  If the profile is at a higher maintenance level than the product, run the `rollbackCF` script from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root) /PortalServer/bin directory.

        Use the following syntax:

        -   **AIX®**

            ./rollbackCF.sh -DWasPassword=password -DPortalAdminPwd=password

        -   **HP-UX**

            ./rollbackCF.sh -DWasPassword=password -DPortalAdminPwd=password

        -   **IBM® i**

            rollbackCF.sh -DWasPassword=password -DPortalAdminPwd=password

        -   **Linux™**

            ./rollbackCF.sh -DWasPassword=password -DPortalAdminPwd=password

        -   **Solaris**

            ./rollbackCF.sh -DWasPassword=password -DPortalAdminPwd=password

        -   **Windows™**

            rollbackCF.sh -DWasPassword=password -DPortalAdminPwd=password

        -   **z/OS®**

            ./rollbackCF.sh -DWasPassword=password -DPortalAdminPwd=password


**Related information**  


[Changing the HCL Digital Experience administrator password](../security/wpsadmin.md)

[Changing the WebSphere Application Server administrator password in the file registry](../security/was_filereg.md)

[Changing the WebSphere Application Server administrator password in the LDAP server using the LDAP administration interface](../security/wpsbindldap.md)

[Replacing the WebSphere Application Server administrator user ID](../security/rep_was_id.md)

[Replacing the HCL Digital Experience administrator user ID](../security/portalid.md)

[Changing the LDAP bind password](../security/bind.md)

[Changing database passwords that are used by HCL Portal](../config/db_passwords.md)

