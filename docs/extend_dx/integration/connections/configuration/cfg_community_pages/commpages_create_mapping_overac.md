# Overriding access control integration during community page instantiation

The Restrict view access to this page to community members setting on a community page automatically grants access to the page to members of the associated community. When specified on a page template, the setting is also applied to any pages that are created from the template. However, you can override this setting on a page template by defining a page parameter.

1.  To override the **Restrict view access to this page to community members** setting for pages created from the template, set the ibm.portal.instantiation.community.access.control.integration parameter on the template.

    You can set this parameter by editing the page properties in the user interface or by using the XML configuration interface \(xmlaccess command\).

    !!! important
        When specified, this parameter defines the behavior of the **Restrict view access to this page to community members** setting for pages that are created from the template. The corresponding setting in the Page Associations window for the page template is disregarded.

    Specify one of the following values:

    -   **true**

        The **Restrict view access to this page to community members** setting is enabled for all pages that are created from this template.

    -   **false**

        The **Restrict view access to this page to community members** setting is disabled for all pages that are created from this template.



