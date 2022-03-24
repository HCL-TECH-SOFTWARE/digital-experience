# XML configuration interface and managed pages

You can use the XML configuration interface \(XML Access\) to manipulate managed pages just as you can for other portal resources.

## Project scope

When you use the XML configuration interface with managed pages, processing occurs either completely within a project or completely outside a project.

When you import a published page and specify a project scope, the page is created as a draft page in the project.

**Important:** You cannot export a draft page and then import that page as a draft in another project.

**Important:** Web Content Manager items, such as workflow items, categories, or keywords, are not exported or imported by the XML configuration interface \(XML Access\). You need to use the XML configuration interface \(XML Access\) library export and import feature instead.

To run the xmlaccess command from within a project, specify the project either with the project name or with the object ID of the project. The command uses the following format, depending on how you identify the project:

```
xmlaccess -in input\_file -url http://hostname:port\_number/wps/config/$project/project\_name
```

```
xmlaccess -in input\_file -url http://hostname:port\_number/wps/config/$project/project\_object\_id
```

For example:

-   xmlaccess -in Export.xml -url http://www.example.com:10039/wps/config/$project/myproject
-   The following command must be entered all in one line:
    -   xmlaccess -in Export.xml -url
    -   http://www.example.com:10039/wps/config/$project/
    -   Z6QReDeN9E86O46P9CGJMK633P8JMG6J1P8MM47MPD6MMCC63PI3IL6GPD63R46J1

**Note:** AIX®HP-UXLinux™Solaris: You might have to precede the dollar sign \(`$`\) with a backslash \(`\`\) to prevent `$project` from being interpreted as an environment variable. For example:

```
xmlaccess -in Export.xml -url http://www.example.com:10039/wps/config/\$project/myproject
```

## Use transaction processing with the XML configuration interface

Because pages are stored in the Portal Site library in Web Content Manager, each page has corresponding objects in the JCR database. You must be aware of this relation when you create, update, or delete pages with the XML configuration interface. If xmlaccess processing is interrupted, it can result in a mismatch between the page state and database state.

**WARNING:** If you redeploy your site daily, your JCR size increases because of page versions. Periodically clean up your versions to reduce the JCR size. Go to [Clearing version history](wcm_admin_clear_versions.md) for information.

To ensure that page and database information for a page remain synchronized, use the `transaction-level` attribute of the `request` element in the XML file. For more information about using the `transaction-level` attribute, go to *XML configuration reference.*

Example:

```
<request 
    type="update" 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd"
    transaction-level="resource">
```

## Excluding pages from being managed in Web Content Manager

By default, you can manage all HCL Portal pages in Web Content Manager except for the portal administration pages. When an administrator creates or imports a page, the portal checks whether the parent page has a portal page site area in Web Content Manager. If it does, the portal creates a portal page site area for the new page in Web Content Manager as well.

You can exclude pages from being managed in Web Content Manager. You can prevent the creation of the corresponding page item in Web Content Manager. The page is then not available to be managed in managed pages. It is good practice to exclude only pages on first-level nodes, for example the Search or Applications pages. To do so, run an XML configuration interface script and use the `content-mapping-info` element with the attribute `has-system-mapping`:

-   **has-system-mapping=true\|false**

    Use this flag as follows:

    -   **true**

        When the XML script creates or imports a page, the portal creates a page item in Web Content Manager as well.

    -   **false**

        When the XML script creates or imports a page, the portal does not create a page item in Web Content Manager.

    -   **\(not specified\)**

        If you do not set a value for this flag in the XML script, it follows the portal where the page is imported:

        -   If managed pages are enabled, it creates a page item in Web Content Manager as well.
        -   If managed pages are disabled, it does not create a page item in Web Content Manager.

**Note:** There is no indication in the user interface whether a page is managed in Web Content Manager or not. Therefore, excluding parts of a site can lead to an inconsistent portal user experience for portal site visitors.

**Parent topic:**[Administering managed pages ](../wcm/wcm_mngpages_advadmin.md)

**Related information**  


[Changes to the XML configuration interface ](../admin-system/adxmlchg.md)

