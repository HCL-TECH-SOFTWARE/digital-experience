# Hardware considerations

There might be cases where you are completing a remote migration to a new hardware configuration. This new server might have different requirements from the current environment you are migrating from. Generally, here are some key points to consider.

Source environment:

-   Revisit the hardware the software requirements for the platform you are migrating from. Ensure that you are still in a fully supported environment.
-   Make sure that you are current with, at least, the last two maintenance levels for that platform.
-   Be aware of the current overall performance and throughput. Know what the current activity is on your HCL Portal server.
-   Make sure that you have detailed information about your entire environment.
    -   Identify all the systems your HCL Portal server connects to.
    -   Keep a detailed list of all the credentials and connection information as well as the services provided by the other systems.
    -   If firewalls are involved, make sure that you note ports, IP addresses, and host names used.

Target environment:

-   Review the system requirements for your new environment.
-   Review the supported migration paths.
-   Will this new system be dedicated as a HCL Portal server or it will be shared with other services?
    -   If shared, be aware of potential resource conflicts such as ports as well as overall system performance.
-   Make sure that you are at a supported maintenance level.
-   Be mindful of the projected HCL Portal server activity. Once migrated, or even during the testing phase of your migration, you should be able to compare performance data between your current and new HCL Portal servers.

Architecture:

-   Your target environment must be on the same system architecture than your source environment for migration. Migrating to a different architecture is not supported.


**Related information**  


[HCL Portal detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=ba230c701b983c50f37655352a4bcb29)

