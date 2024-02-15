# Creating associations to existing communities during page instantiation

When you create a template for a community page, you can configure the template to associate the page created from the template with an existing community. In this case, the community is not modified in any way.

1.  Associate the new page with a specific community or with the community that is associated with the parent page of the new page.

    Define the association on the template page by setting page parameters in one of the following ways:

    -   Edit the page properties in the user interface.
    -   Use the XML configuration interface (xmlaccess command).
    -   To associate page instances that are created from this template with a specific community, set the ibm.portal.instantiation.community.ref parameter.

        The value of the parameter is the universally unique ID (UUID) of the target community. The UUID of the community is identified by the communityUuid parameter in the URL for the community in HCL Connections.

        For example, in the following URL:

        ```
        https://www.example.com:port\_number/communities/service/html/communityview?communityUuid=e9f88a24-3dec-446a-91f3-90118d7e22c3
        ```

        The community UUID is `e9f88a24-3dec-446a-91f3-90118d7e22c3`.

        !!!note
            You cannot use the ibm.portal.instantiation.community.ref parameter in combination with the ibm.portal.instantiation.community.create.new parameter. If both parameters are specified for a page template, the ibm.portal.instantiation.community.ref parameter takes precedence, and the ibm.portal.instantiation.community.create.new parameter is ignored.

    -   To associate page instances that are created from this template with the community that is associated with the parent page of the new page, set the ibm.portal.instantiation.community.parent parameter. Specify a value of true for the parameter.

        If there is no community association for the parent page, the new page is created without a community association.

        However, if you want to ensure that a community is created in this case, set the ibm.portal.instantiation.community.create.new parameter with a value of true. If the parent page has no community association, a new community is created with the same characteristics as described in [Creating communities during community page instantiation](commpages_create_mapping_newcomm.md).



???+ info "Related information"
    - [Creating communities during community page instantiation](commpages_create_mapping_newcomm.md)

