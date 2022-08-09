# Uninstalling UX Screen Flow Manager

If you are migrating from Portal 8.0.0.1 with the UX Screen Flow Manager \(UXFM\) enabled, then you must uninstall UXFM before migrating to Version 8.5.

You must remove the dialog definitions before you uninstall UXFM. If you do not remove the dialog definitions prior to completing the uninstall, it can have a catastrophic effect on your system rendering it unusable.

1.  If UXFM portlets are installed, run the following task:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh action-undeploy-pcm-portlets
    -   IBM® i: ConfigEngine.sh action-undeploy-pcm-portlets
    -   Windows™: ConfigEngine.bat action-undeploy-pcm-portlets
    -   z/OS®: ./ConfigEngine.sh action-undeploy-pcm-portlets
2.  Stop the Portal Server.

3.  Run the following task:

    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh uninstall-pcm
    -   IBM i: ConfigEngine.sh uninstall-pcm
    -   Windows: ConfigEngine.bat uninstall-pcm
    -   z/OS: ./ConfigEngine.sh uninstall-pcm

**Parent topic:**[Prepare UX Screen Flow Manager](../migrate/mig_pre_uxfm.md)

**Previous topic:**[Removing UXFM dialog definitions](../migrate/mig_pre_uxfm_remove.md)

**Related information**  


[Exporting UXFM dialog definitions](../migrate/mig_pre_uxfm_exportdialog.md)

