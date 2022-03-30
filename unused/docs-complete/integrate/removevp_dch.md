# Removing Watson Content Hub from a Virtual Portal 

You can remove the Watson Content Hub integration from a virtual portal. You must run the task on each virtual portal that you ran the setup-ch-integ-vp task on.

1.  Open a command prompt.

2.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

3.  Run the remove-ch-integ-vp only on the virtual portals where you configured the content hub integration.

    -   AIX®: `./ConfigEngine.sh remove-ch-integ-vp -DVirtualPortalContext=vp\_context-DWasPassword=password`
    -   Linux™: `./ConfigEngine.sh remove-ch-integ-vp -DVirtualPortalContext=vp\_context-DWasPassword=password`
    -   Windows™: `ConfigEngine.bat remove-ch-integ-vp -DVirtualPortalContext=vp\_context-DWasPassword=password`
4.  Restart the HCL Portal and HCL Web Content Manager server.


**Parent topic:**[Integrating with Watson Content Hub ](../integrate/int_dch.md)

