# Creating communities during community page instantiation

When you create a template for a community page, you can configure the template to create a community when you create a page from the template.

In this case, when the page is created, a community is created in HCL Connections, and the new page is associated with the new community. The name of the new community is derived from the title of the new page.

**Important:** To create communities automatically when creating pages from a template, the user creating the page must be authorized on the HCL Connections server to create communities.

-   There are two ways to specify that a page template requires a community association.
-   Add a community association to the page template by editing the page associations in the user interface or by using the XML configuration interface.

    See [Managing community associations](commpages_create_mapping.md) for details.

    The new community has the following characteristics:

    -   The same title as the new page.
    -   The same community description as the community that is associated with the page template.
    -   The same **Access** setting as the community that is associated with the page template.
    -   The user who creates the page is designated as the owner of the new community.
-   Define parameters on the template page.

    1.  Set the ibm.portal.instantiation.community.create.new parameter on the template page with a value of true.

        You can set this parameter by editing the page properties in the user interface or by using the XML configuration interface \(xmlaccess command\).

        The new community has the following characteristics:

        -   The same title as the new page.
        -   An empty community description.
        -   An **Access** setting of public.
        -   The user who creates the page is designated as the owner of the new community.
    2.  Optionally, you can specify the **Access** setting for the community by specifying the ibm.portal.instantiation.community.access.type parameter on the template page.

        You can specify one of the following values: public, restricted, moderated.



**Related information**  


[Creating associations to existing communities during page instantiation](../admin-system/commpages_create_mapping_exist.md)

