# How to enable Practitioner Studio

This section outlines how to enable Practitioner Studio in both base portal and virtual portal environments.

## Enabling Practitioner Studio in base portal

!!! note
    It is not necessary to stop or restart Portal when running these configuration tasks. To deploy Practitioner Studio to a virtual portal, first enable the 9.5 UI features in the base Portal.

1. Open a command line.
2. Change to the wp\_profile-root/ConfigEngine directory.
3. Run the **enable-v95-UI-features** config task.

    -   AIX: `./ConfigEngine.sh enable-v95-UI-features -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
    -   Linux: `./ConfigEngine.sh enable-v95-UI-features -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
    -   Windows: `ConfigEngine.bat enable-v95-UI-features -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
    !!! note 
        Any actions taken when using the **Preview As User** feature in DAM and CC shows the site as the original user, not the one that you are using to preview.


## Enabling Practitioner Studio in an existing virtual portal

1. Open a command line.
2. Change to the wp\_profile-root/ConfigEngine directory.
3. Run the **enable-v95-UI-features-virtual-portal** config task.

    -   AIX: `./ConfigEngine.sh enable-v95-UI-features-virtual-portal -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> -DVirtualPortalContext=`
    -   Linux: `./ConfigEngine.sh enable-v95-UI-features-virtual-portal -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> -DVirtualPortalContext=`
    -   Windows: `ConfigEngine.bat enable-v95-UI-features-virtual-portal -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> -DVirtualPortalContext=`

    !!! note
        -   To configure the virtual Portal Manager so that Practitioner Studio is deployed for the newly created virtual portals, see [How to configure Practitioner Studio](../../practitioner_studio/working_with_ps/config_prac_studio.md).

        -   To enable Practitioner Studio on all available Virtual Portals, you can use the following parameter: `-DUpdateVPs=true`

        -   If **-DVirtualPortalContext=** has a space in the context name, please add quotes around the name of the context.

## Enabling HCL DX site to be seen in SiteMap

Enabling Practitioner Studio via the enable task has the following effect to your previous view: The Administration pages will be disabled, the Home pages will be excluded from the SiteMap, and first-level navigation drop downs in the toolbar and Practitioner Studio.

Follow the steps to enable your site to be seen in SiteMap:

1. Navigate to **Administration** \> **Managed Pages**.
2. Click **Edit Page Properties** for your home page.
3. Expand **Advanced Options** and then click **I want to set parameters**.
4. Create a new parameter com.ibm.portal.Hidden with value false.
5. Save, then test.
