# Hints and tips for using the portal XML configuration interface

In an example configuration, you might have two HCL Digital Experience environments that are both configured for security with an LDAP server. However, the two LDAP servers have different directory structures.

For example, this can be different LDAP suffixes for the users or groups. To transfer such a portal configuration from one portal to the other, you can use the following XML script:

```

     <?xml version="1.0" encoding="UTF-8"?>
     <request
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd"
         type="export"
         export-users="false">
         <portal action="export"/>
     </request>

```

When you use this XML script to transfer the configuration data between these two environments, be aware of the following:

1.  By setting the tag export-users to false you only prevent the export of the LDAP hierarchy. Ownership and access control rules are still exported.
2.  During the transfer all user-related information is lost, as the target portal does not know the user information from the source portal. For example, this affects access rights or ownership of private pages. You might see a warning about missing user or group information, but it should not prevent a successful import.
3.  If you use this script for your export, you might find that your XML import fails with an exception and references one of the following two items:
    -   Credential slots and segments. To avoid exceptions centering around the credential slots and segments, remove the references to these elements from your XML prior to running your XML import.
    -   Private pages. The destination server cannot use information about private pages. To address exceptions centering around the private pages, use the following script for the XML export:

        ```
             <?xml version="1.0" encoding="UTF-8"?>
             <request type="update"
                 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xsi:noNamespaceSchemaLocation="PortalConfig_8.5.0.xsd">
                 <portal action="locate">
                 <content-node action="export" name="*" create-type="explicit"/>
             </portal>
             </request>
        ```

        This procedure exports all pages which are not private, along with the information that is required to put the portlets on the pages. However, you must either deploy the portlet applications on the target portal prior to running the XML import, or you must modify the XML script to deploy the portlets in the same run.



