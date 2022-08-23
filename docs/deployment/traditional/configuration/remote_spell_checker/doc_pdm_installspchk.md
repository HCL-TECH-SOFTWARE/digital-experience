# Installing a remote spell checker

If you plan to use a spell checker, you must install it remotely.

You must also have the most recent version of IBM® WebSphere® Application Server installed on the server and create an AppServer profile.

1.  Copy the SpellChecker.ear file from the following directory to any directory on the remote server:

    -   AIX® HP-UX IBM i Linux™ Solaris: [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/lwo/prereq.odc/odc/spellchecker/remoteSpellchecker
    -   Windows™: [PortalServer\_root](../reference/wpsdirstr.md#wp_root)\\lwo\\prereq.odc\\odc\\spellchecker\\remoteSpellchecker
    -   z/OS®: SMP/E-root/PortalServer/lwo/prereq.odc/odc/spellchecker/remoteSpellchecker
2.  Use the WebSphere Integrated Solutions Console to deploy SpellChecker.ear onto the remote server. Specify /wps/spellcheck as the context root.

    You can also use a context root other than the default. To use a different context root, before you deploy SpellChecker.ear, change the following line in the application.xml file:

    ```
    <context-root>/anydirectory/spellcheck</context-root>
    
    ```

    For example, to change the context root for spell checker to /test/, change the line in application.xml to `<context-root>/test/spellcheck</context-root>`. Also, update the context root value in the SpellCheckconfig.properties file of the Portal server.

3.  Copy the following files and folder to the remote server:

    -   The [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/lwo/prereq.odc/odc/spellchecker/lib/spcommon.jar file to [AppServer\_root](../reference/wpsdirstr.md#was_root)/lib/ext/
    -   The [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/lwo/prereq.odc/odc/spellchecker/lib/com directory to [AppServer\_root](../reference/wpsdirstr.md#was_root)/lib/ext/
4.  Restart the remote server.



