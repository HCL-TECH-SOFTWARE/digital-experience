# Mashup integration

The mashup integration feature was removed in Portal Version 8.0 and is not included in later releases. If you used this feature in a previous release and you want to continue using it in HCL Digital Experience 8.5, you need to manually enable mashup integration after migration.

In previous versions of Portal and HCL Digital Experience, the MashupMaker\_Integration.ear was registered with the system in all cases. Even when it was only required in cases where the mashup integration feature was used actively in the system. To remove system overhead, the .ear file was removed from the portal configuration during migration.

-   To enable the mashup integration feature, register the .ear file with the following command:

    -   AIX® HP-UX Linux™ Solaris: `./ConfigEngine.sh action-create-ear-wp.mmi.deploy`
    -   IBM® i: `./ConfigEngine.sh action-create-ear-wp.mmi.deploy`
    -   Windows™: `ConfigEngine.bat action-create-ear-wp.mmi.deploy`

