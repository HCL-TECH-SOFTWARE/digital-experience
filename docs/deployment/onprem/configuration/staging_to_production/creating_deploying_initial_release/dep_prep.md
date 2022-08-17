# Preparing the servers for initial staging

You must set up your production servers before you move content from the staging server to the production server. The steps remove any release content from these servers to prepare them for the following import of the release data. It is assumed that these servers are fresh installed servers. The servers must not contain any customization data. Complete all database and security configurations.

1.  Install and configure HCL Portal on the production server. This step includes database and security configurations.

    **Attention:** Ensure that your security configurations and context root URLs match on the staging and production servers. Also, ensure that the production server is configured with the wanted external database.

2.  Log on to the production server and delete all existing Web Content Manager Libraries.

    Click the **Administration menu** icon. Then, click **Portal Content** \> **Web Content Libraries**. Click **Delete library** for each library on the system.

    **Attention:** Edit any libraries that have the option **Prohibit library from being deleted**. Clear that option before you delete them.

3.  If you use the Web Application Bridge feature, set the context root for the **wp.vwat.servlet.ear** application:

    1.  Log on to the WebSphere® Integrated Solutions Console.
    2.  Go to **Applications** \> **Application Types** \> **WebSphere enterprise applications**.
    3.  Find and click the **wp.vwat.servlet.ear** application link.
    4.  Under the **Web Module Properties** heading, click **Context Root For Web Modules**.
    5.  Change the context root to /. This step can create name conflicts. Add a rewrite rule to avoid these conflicts. For more information read *Apache Module mod\_rewrite* and *Providing short vanity URLs*.
    6.  Click **OK**.
    7.  Click **Save** to save your changes to the master configuration.
    8.  Stop and restart the **wp.vwat.servlet.ear** application.
4.  If you have a clustered environment, turn off automatic node synchronization on all secondary nodes.


**Parent topic:**[Creating and deploying the initial release](../deploy/dep_initial.md)

**Previous topic:**[Creating the initial release](../deploy/dep_cir.md)

**Next topic:**[Deploying the initial release](../deploy/dep_deploy.md)

**Related information**  


[Exporting and importing a web content library](../wcm/wcm_config_wcmlibrary_export.md)

