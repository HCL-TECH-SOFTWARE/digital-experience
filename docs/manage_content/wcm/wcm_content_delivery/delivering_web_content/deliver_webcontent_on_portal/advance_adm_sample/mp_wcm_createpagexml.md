# Creating a web content page with the XML configuration interface

As with other portal pages, you can create a web content page with the XML configuration interface \(xmlaccess command\). Page definition is similar to a standard portal page. However, there is an additional page parameter that specifies the site area that is associated with the web content page.

1.  When creating your xmlaccess command, specify your page parameters as you would for a standard portal page.

    The following block of code is an example of specified page parameters:

    ```
    <content-node action="update" content-parentref="parentOID" domain="rel" objectid="someOID" 
    preserve-old-layout="true" type="page">
      <content-mapping-info>
        <content-mapping content-id="/mylibrary2/sitearea2" default="true" 
    delegated-access-level="User"/>
        <content-mapping content-id="ddccb7ed-8485-48c8-b875-31d17d9da65b" 
    default="false"/>
      </content-mapping-info>
    </content-node> 
    ```

    !!! note
      The value of the content-id attribute can be either the ID or the path to the web content item. If you are using the content path, the value must begin with the forward slash character \(`/`\) followed by the library name. When creating a web content page using the content path, you cannot build the path from the **Display title** fields of the items in the path. Instead you must use the **Name** fields of the items when specifying the path.

2.  Because the web content viewer uses public render parameters to identify the content to render, include the page parameter param.sharing.scope when creating your xmlaccess command. Set the value for the parameter to ibm.portal.sharing.scope.page.

    The following block of code is an example parameter definition for web content pages when using the XML configuration interface:

    ```
       <parameter name="com.ibm.portal.wcm.contentroot" type="string" update="set">
          <![CDATA[/mylib/mysite/mysitearea]]>
       </parameter>
       <parameter name="param.sharing.scope" type="string" update="set">
          <![CDATA[ibm.portal.sharing.scope.page]]>
       </parameter>
    ```

3.  When creating your xmlaccess command, add at least one web content viewer that is configured to listen to other portlets and make dynamic broadcasts.

    Adding the viewer ensures that content selected for this page is rendered correctly and that links between pages work properly.

    The following block of code is an example of how to add the web content viewer using the XML configuration interface:

    ```
    <component action="update" active="true" deletable="undefined" domain="rel" 
    modifiable="undefined" objectid="7_U796BB1A0OS250IOS7F1BP3081" ordinal="100" 
    orientation="H" skinref="undefined" type="container" width="undefined">
      <component action="update" active="true" deletable="undefined" domain="rel" 
      modifiable="undefined" objectid="7_U796BB1A0OS250IOS7F1BP3085" ordinal="100" 
      orientation="V" skinref="undefined" type="container" width="undefined">
        <component action="update" active="true" deletable="undefined" domain="rel" 
        modifiable="undefined" objectid="7_U796BB1A0OS250IOS7F1BP3087" ordinal="100" 
        skinref="undefined" type="control" width="undefined">
          <portletinstance action="update" domain="rel" objectid="5_U796BB1A0OS250IOS7F1BP3083" 
           portletref="3_U796BB1A008OD0IOS2ODAD28U4">
            <preferences name="WCM_BROADCASTS_TO" update="set">
              <value><![CDATA[WCM_LINKING_DYNAMIC]]></value>
            </preferences>
            <preferences name="WCM_LISTENS_TO" update="set">
              <value><![CDATA[WCM_LINKING_OTHER]]></value>
            </preferences>
          </portletinstance>
        </component>
      </component>
    </component>
    ```

    **Migration note:** After Version 6.1.5, the format used by the XML configuration interface to represent content associations for a web content page has changed. Typically, the migration process automatically converts all existing web content pages to the updated format. However, if you create web content pages on the older portal after migration and then import the pages to the Version 8.5 portal, the page format is incompatible. In this case, you must manually run the `action-migrate-content-mappings` configuration task on the Version 8.5 portal to convert the new web content pages to the Version 8.5 format. To perform the conversion, run the following task from the [wp\_profile\_root](../../../../../../guide_me/wpsdirstr.md)/ConfigEngine directory:

    -   Windows™: ConfigEngine.bat action-migrate-content-mappings -DWasPassword=password -DPortalAdminPwd=password
    -   UNIX™Linux™: ./ConfigEngine.sh action-migrate-content-mappings -DWasPassword=password -DPortalAdminPwd=password
    -   IBM® i: ConfigEngine.sh action-migrate-content-mappings -DWasPassword=password -DPortalAdminPwd=password
    -   z/OS®: ./ConfigEngine.sh action-migrate-content-mappings -DWasPassword=password -DPortalAdminPwd=password


???+ info "Related information"
  - [Public render parameters](../../../../../../extend_dx/portlets_development/portlet_communication/pltcom_pubrndrprm.md)
  - [REST API and content associations](../advance_adm_sample/contentmap/mp_wcm_contentmap_restapi.md)
  - [Package com.ibm.portal.services.contentmapping](https://help.hcltechsw.com/digital-experience/8.5/dev/javadoc/vrm/850/spi_docs/com/ibm/portal/services/contentmapping/package-summary.html)

