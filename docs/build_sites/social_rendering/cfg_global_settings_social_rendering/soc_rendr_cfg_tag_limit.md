# Configuring the tags transmission limit

You can configure your lists of social objects that retrieve data from the HCL Connections to transmit tags to the Tag Cloud portlet. You can limit the number of tag names that are loaded from HCL Connections. You configure this limit in the WP Connections Integration Service resource environment provider.

!!! note
    -   Loading too many tags can affect performance.
    -   You set this maximum limit in the WP Connections Integration Service. The Tag Cloud can further reduce the number of shown tag names. This reduction depends on the configuration of the tag cloud.

To configure the tags transmission limit, proceed by the following steps:

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Select **WP ConnectionsIntegrationService**.

4.  Under **Additional properties**, click **Custom properties**.

5.  Edit the value for the `transmitted.tags.limit` property as required.

    The default value is `100`.

6.  Save your changes.

7.  Restart your portal server for the changes to take effect.


For more information, see the topic about *Using the portal Tag Cloud with social lists*.

???+ info "Related information:" 
    - [Using the portal Tag Cloud with lists of social objects](../working_with_social_objects/using_portal_tagcloud_with_social_objects/index.md)

