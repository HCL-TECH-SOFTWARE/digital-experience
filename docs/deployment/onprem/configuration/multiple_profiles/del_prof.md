# Deleting a profile

If your business needs change, you can delete a profile from the profiles that you created.

Complete the following steps to delete a profile.

1.  Stop all server instances in the profile that you plan to delete.

2.  Run the following task:

    -   AIX®, Linux™, Solaris:- `./manageprofiles.sh -delete -profileName profilename` from the [AppServer\_root](../reference/wpsdirstr.md#was_root)/bin directory, where profilename is the name of the profile that you are deleting.
    -   IBM® i:- `manageprofiles -delete -profileName profilename` from the [AppServer\_root](../reference/wpsdirstr.md#was_root)/bin directory, where profilename is the name of the profile that you are deleting.
    -   Windows™:- `manageprofiles.bat -delete -profileName profilename` from the [AppServer\_root](../reference/wpsdirstr.md#was_root)\\bin directory, where profilename is the name of the profile that you are deleting.
    **Note:** Deleting a profile takes several minutes to complete.

3.  Delete the profile directory because it contains files that the manageprofiles command cannot delete, such as extraneous log files.


**Parent topic:**[Supporting multiple profiles](../install/sup_mult_prof.md)

