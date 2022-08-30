# Hints and tips for developers and portal administrators

Learn about some hints and tips for administrators who work with tagging and rating.

-   **Using tagging and rating on a virtual portal**

    To use tagging and rating with your virtual portal, ensure that the **web resource v7.0** and **web content templates 3.0** libraries exist on the virtual portal.

-   **Administrators can assign access roles to users for tagging and rating content.**

    The portal user roles give users the following rights:

    -   **USER**

        The user can view tags and ratings that other users applied.

    -   **PRIVILEGED USER**

        The user can also apply private tags and ratings.

    -   **CONTRIBUTOR**

        The user can also apply public tags and ratings.

    -   ****MANAGER****

        The user can also modify tags and ratings that other users applied.

-   **Users can work only with tagging and rating according to their access rights on portal resources.**

    Examples:

    -   Users can tag and rate only portal resources that they can access.
    -   When users click a tag in the tag cloud, they can view only resources that they can access.
    **Limitation:** There is not security handling for tag clouds. When a user clicks a tag, the resources are filtered by the user's access rights and then listed for the user to view. Users might see tags even if they have no access rights on the tagged resources. When they click the tag, the list is empty.

-   **Tags in tag clouds do not reflect access rights.**

    The tags that are shown in tag clouds do not reflect the access rights that users have on the tagged resources. Resources are filtered by access rights only after the user clicks a tag. This action has the following consequences:

    -   **Users might see tags without underlying resources.**

        Users might see tags that are applied to resources to which the users have no access. If they click a tag that is applied only to resources to which they have no access, they view an empty resource list.

    -   **Tag size does not represent frequency of the tag on resources that a user can access.**

        When a user views a tag cloud, tag sizes in the tag cloud represent how often the tag is applied. It does not represent how often the tag is applied to resources that the user can access.

-   **Only portal content can be pre-tagged.**

    You can pre-tag only portal resources, such as pages and portlets. You cannot pre-tag custom content or Web Content Manager content.

-   **Tags in a virtual portal can be seen only in that virtual portal.**

    If your portal contains virtual portals, the tags and ratings are limited to the virtual portal in which they were created. It is not possible to share tags across several virtual portals. Tags that are created in a virtual portal cannot be seen anywhere else.

-   ****Tagspace cleanliness.****

    The portal implementation of tagging prevents tag space littering that is the inclusion of tags that do not contribute to categorizing content. It manifests mostly in the following two issues:

    -   Redundant tags that result from similar names or spelling variants, for example, web20 and Web 2.0. The portal reduces such duplicate tags by a syntactical type-ahead feature. This feature helps reduce tag space littering by suggesting tag name variants that other users already use. For example, if a user types web2 and other users already use Web 2.0 to tag portal resources, the type-ahead feature suggests Web 2.0, although web2 is not an exact partial string of the suggested tag name. It supports users to not use too many different variants of the same tag name when you tag portal resources.

        **Note:** The type-ahead feature works only with the dialog tag widget of the default tagging user interface of portal versions earlier than V 8.5. With HCL Portal V 8.5, the tag and rating widgets of earlier portal versions are deprecated.

    -   Tags pointing to resources that are deleted. You can use the portal administrative cleanup tool, SLChecker. Use it to check for invalid links that do not exist any more and for tags that someone applied who is no longer a portal user. The SLChecker tool can identify and delete tags for deleted resources and tags that are applied by deleted users. For information, read *Deleting orphaned data*.
-   **Staging and migrating **tagspaces**.**

    You can transfer the tag space from one portal to another, for example for staging or for migrating from one portal version to another. To do so, use the XML configuration interface \(XML Access\). For more information, read *Using the XML configuration interface to administer tags and ratings*.

    **Note:** Users can create private and public tags. Private tags are stored in the customization database, whereas public tags are stored in the community database. Only content of the community database is staged and migrated.

-   **Tagging custom content requires UI development.**

    If you want your users to tag and rate custom content, you must write code. The code must allow customers to find this content with the public APIs. You must also add the resources that you want your users to tag to the portal. Custom content is anything apart from portlets, portal pages, and Web Content Manager resources. For information, read *Enabling your own custom content to be tagged and rated*.

-   **Tag filtering.**

    You can apply tag filters to suppress words that you do not want to be used as tags in your portal. As you can have more multiple active filters, a tag must pass all filters to be applied. A simple filter is shipped with the portal. If you need more advanced filtering, you must provide your own filters. For more information about creating custom filters, read *Filtering content for tagging*.

-   **SQL Server URI length limit for custom resources.**

    For SQL Server, tags for custom resources with URIs of which the scheme-specific part in UTF-8 is larger than 850 bytes cannot be stored. As a workaround you can either use URIs with shorter scheme-specific parts or drop the respective index in the database table. Because of this limitation, a warning about the index key length is written when you transfer the database for SQL Server.

-   **Tag Cloud, Tag Center, and Results List portlets do not support WSRP.**

    The Tag Cloud and Tag Center portlets, including the Result List portlet, do not support WSRP. It is not possible for a Producer portal to provide these portlets as remote web services. It is not possible for a Consumer portal to consume them so that its users can use them.

-   **Maximum number of available tags.**

    By default the tag widget can show up to 50 different tag names. This limit applies separately to each kind of tags, **community** tags, **personal public**, and **personal private** tags. You can configure these maximum values by using the following two properties:

    -   For community tags: com.ibm.wps.cp.tagging.dialog.maxCommunityTags
    -   For personal tags:     com.ibm.wps.cp.tagging.dialog.maxPersonalTags.
    Increasing the 50 maximum figures can lead to slower responses of the user interface of the tag widget. The number of tags per resource averages 5-8. Users tend to reuse tag names that other users already used and that the tag widget then suggests by the type-ahead feature.

    You configure these two properties globally in the CP Configuration Service for tagging and rating or for individual widgets in the widget properties. For details, read *CP Configuration Service for tagging and rating* and *Setting service configuration properties*.

    **Note:** The type-ahead feature works only with the dialog tag widget of the default tagging user interface of portal versions earlier than V 8.5. With HCL Portal V 8.5, the tag and rating widgets of earlier portal versions are deprecated.

-   **Angled brackets are not allowed in tag names.**

    Angled brackets \(`<` and `>`\) are not allowed within tag names. Therefore, no matter how you customize the regular expression, angled brackets are not accepted.



**Related information**  


[CP Configuration Service for tagging and rating](../admin-system/srvcfg_cpcfg4tr.md)

[Setting service configuration properties](../admin-system/adsetcfg.md)

[Deleting orphaned data](../admin-system/adelorph.md)

[Using the XML configuration interface to administer tags and ratings](../admin-system/tag_rate_xml.md)

[Enabling your own custom content for tagging and rating](../admin-system/tag_rate_custom_content.md)

[Filtering content for tagging](../admin-system/tag_rate_adm_filtr_cont.md)

