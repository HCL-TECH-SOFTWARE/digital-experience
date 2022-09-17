# Filtering content for tagging

You can use filtering mechanisms to control which terms users can use and which terms they cannot use as tags. The portal provides both a blacklist and a whitelist filter.

You enable and disable both filters in the WebSphere® Integrated Solutions Console under the **Resource Environment Provider** \> **CPConfigService** for tagging and rating. For details see the topics about *Setting service configuration properties* and the *CP Configuration Service for tagging and rating*.

-   **Blacklist filter**

    The blacklist filter allows you to block selected terms from being used as tags, for example terms that could be perceived as offensive. If you enable the blacklist filter, the portal checks every term that users type as a tag before it is eventually applied and stored. If a user types a term listed on the blacklist, the portal blocks this tag and responds with a message. You can determine the terms that you want to be on the blacklist by using the XML configuration interface.

    To enable the blacklist filter, the following configuration property in the CP Configuration Service to true:

    ```
    com.ibm.wps.cp.filter.tagging.blacklist = true
    ```

-   **Whitelist filter**

    The whitelist filter allows you to limit the set of tags that users can apply. If you enable the whitelist filter, the portal checks every term that users type as a tag against the whitelist before it eventually applies and stores it. If a user types a term that is **not** listed on the whitelist, the portal blocks this tag and responds with a message. You can set the terms that you want to be on the whitelist by using the XML configuration interface.

    To enable the whitelist filter, add at least one entry to the whitelist filter database and set the following configuration property in the CP Configuration Service to `true`:

    ```
    com.ibm.wps.cp.filter.tagging.whitelist = true
    ```

    !!! note
        The portal applies the filter only if you activate it **and** add at least one entry to the whitelist filter database.


You can configure both filter lists by using the XML configuration interface. The following examples show how to add or remove terms to the blacklist. To work with the whitelist, adapt the examples by changing the ID of the filter from `DefaultBlacklistFilter` to `DefaultWhitelist Filter`. Sample scripts for the XML configuration interface are located under the directory `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/doc/xml-samples`.

Example: Creating new words to the blacklist filter:

```
<request
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd"
    type="update" create-oids="true">
    <!-- sample for creating a filter with some sample entries -->
    <portal action="locate">
        <filter-instance action="update" id="DefaultBlacklistFilter">
            <filter-data value="badword_1" action="update"/>
            <filter-data value="badword_2" action="update"/>        
        </filter-instance>
    </portal>
</request>
```

This sample snippet registers the two words `badword_1` and `badword_2` with the blacklist filter for all locales. Note that you must specify `DefaultBlacklistFilter` for the attribute `id` of the tag filter. You can optionally specify the attribute `locale` for the tag filter data. After you run this XML script, users will not be able to use `badword_1` or `badword_2` as tags.

Example: Creating or deleting individual words:

```
<request
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd"
    type="update" create-oids="true">
    <!-- sample for creating a filter with some sample entries -->
    <portal action="locate">
        <filter-instance action="update" id="DefaultBlacklistFilter">
            <filter-data value="badword_1" update="delete"/>
            <filter-data value="badword_3" update="update"/>
        </filter-instance
    </portal>
</request>
```

This sample snippet removes the term `badword_1` and adds `badword_3` from the blacklist.

Example: Deleting all terms from the blacklist filter:

```
<request
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd"
    type="update" create-oids="true">
    <!-- sample for deleting a whole filter -->
    <portal action="locate">
        <filter-instance action="delete" id="DefaultBlacklistFilter">
        </filter-instance>
    </portal>
</request>
```

This sample snippet deletes all terms from the blacklist.


???+ info "Related information"
    - [CP Configuration Service for tagging and rating](../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/cp_cfg_svc/index.md)
    - [Setting service configuration properties](../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)
    - [Working with the XML configuration interface](../../../extend_dx/development_tools/portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md)
    - [Hints and tips for developers and portal administrators](../hints_tips_tag_rate/tag_rate_ref_hintip_4admins.md)

