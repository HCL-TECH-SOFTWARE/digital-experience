# How to disable Practitioner Studio 

This section outlines how to disable Practitioner Studio and Woodburn Studio in both base Portal and virtual portal environments.

## Disabling Practitioner Studio and Woodburn Studio on base portal

**Note:** You need to disable Practitioner Studio and Woodburn Studio on your virtual portals before disabling on the base Portal.

1.  Open a command line.
2.  Change to the wp\_profile-root/ConfigEngine directory.
3.  Run the **disable-v95-UI-features** config task.
    -   AIX: `./ConfigEngine.sh **disable-v95-UI-features** -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
    -   Linux: `./ConfigEngine.sh **disable-v95-UI-features** -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
    -   Windows: `ConfigEngine.bat **disable-v95-UI-features** -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`

## Disabling Practitioner Studio and Woodburn Studio in a virtual portal

1.  Open a command line.
2.  Change to the wp\_profile-root/ConfigEngine directory.
3.  Run the **disable-v95-UI-features-virtual-portal** config task.
    -   AIX: `./ConfigEngine.sh **disable-v95-UI-features-virtual-portal** -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> **-DVirtualPortalContext=**`
    -   Linux: `./ConfigEngine.sh **disable-v95-UI-features-virtual-portal** -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> **-DVirtualPortalContext=**`
    -   Windows: `ConfigEngine.bat **disable-v95-UI-features-virtual-portal** -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> **-DVirtualPortalContext=**`

**Parent topic:**[Working with Practitioner Studio ](../practitioner_studio/working_prac_studio.md)

