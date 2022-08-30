# Configuring globally how social object links are resolved

You can include one or many attributes of social objects in the design component that defines the visual design of your social list. Among other features, social objects have different resolvable links that enable users to open details views of the social objects or the community to which the social objects belong. If you plan to add these links to your social list, you can decide how you want the social objects and their home community to be resolved when users click the corresponding links. HCL Digital Experience can either resolve the links in the context of the portal itself, or redirect the user to the HCL Connections user interface. You can globally configure how these types of links of social objects are resolved for the users. To do so, you use a setting in the WP Connections Integration Service resource environment provider in the WebSphere Integrated Solutions Console.

Social object links can be resolved for the users in the following two ways:

-   The linked resources can be rendered in the HCL Connections user interfaces.
-   The linked resources can be rendered on a portal page

You have two ways to specify how social object links are resolved:

-   You can globally configure in the WP Connections Integration Service resource environment provider how social object links are resolved by default. This setting sets the link resolution method for all social lists in your portal. As a result, all your design components that do not explicitly request a specific resource link resolution method use this default method for resolving links. You can use this configuration method to switch the link resolution method globally for all social lists.
-   You can explicitly override the default link resolution method in your individual design components. To override the default setting, you use specific attributeName values in the AttributeResource tags that you use in your design components. These values determine a specific link resolution method. This way, you can specify for individual types of links by which method you want them to be resolved.

For example, this configuration affects the `link` and `communityLink` attributes. For details about which attributes are available for a specific type of social object, read *Rendering profiles for social lists*.

To globally configure how social object links are resolved by default, you set the `resource.resolution.url.type` property of the WP Connections Integration Service resource environment provider. You can then still choose between using the default method or overriding it for individual data in individual design components:

-   To use the default method for resolving links, use the attribute names without any prefix. For example, such attribute names are `link` and `communityLink` values for the `attributeName`. The portal then generates links that resolve either to the HCL Connections user interface or to a portal page. The link resolution method depends on the value that you specified for the `resource.resolution.url.type` property.
-   To override the default method, you prefix the corresponding `attributeName` values in the design component with either of the following prefixes:
    -   `raw`. Use this prefix to resolve links directly in HCL Connections.
    -   `portal`. Use this prefix to resolve links in the portal.

Example: You want to generate a social object link that always points directly to the HCL Connections server, independently of the `resource.serving.url.type` setting. In this case, you add the `[AttributeResource attributeName="rawLink"]` tag to your design component instead of using the tag `[AttributeResource attributeName="link"]`. This option keeps the link resolution method switchable based on the `resource.resolution.url.type` setting.

You can specify one of the following values for the `resource.resolution.url.type` property:

-   **contextual**

    This value is the default value. Specify this value to determine that the portal sets the social object resolving mode to either `portal` or `connections`. The portal determines the setting, depending on whether the HCL Connections portlets "refresh" for HCL Portal are installed on your portal or not:

    -   If these portlets are installed, the portal uses the `portal` mode.
    -   If the portlets are not installed, the portal uses the `connections` mode.
    Therefore, if you install these portlets while the social object resolving mode is set to `contextual`, the social object resolving mode switches from `connections` to `portal`.

-   **portal**

    Specify this value to determine that the `link` and `communityLink` attributes contain URLs that display social objects in the context of the HCL Portal that renders the social list. In this case, their values equal the values of the corresponding `portalLink` and `portalCommunityLink` attributes for the design component. For details about the portal resolution mechanism, read *Social object resolution*. You can use this setting only if the HCL Connections portlets are installed.

-   **connections**

    Specify this value to determine that the `link` and `communityLink` attributes contain URLs that route the user to HCL Connections and resolve the links in the context of HCL Connections. In this case, their values equal the values of the corresponding `rawLink` and `rawCommunityLink` attributes for the design component.


To globally configure how social object links are resolved by default, proceed by the following steps:

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Select **WP ConnectionsIntegrationService**.

4.  Under **Additional properties**, click **Custom properties**.

5.  Set the `resource.resolution.url.type` property to a value of either contextual, connections, or portal as required.

6.  Save your changes.

7.  Restart your portal server for the changes to take effect.


To determine the default link resolution method that is currently in effect in your social list designs, check the value of the portlet request attribute `ibm.portal.default.social.object.resolution.mode`. This attribute is set to either `connections` or `portal`. This value indicates the default social object resolution mode.

You can disable this request attribute by setting the property `enable.default.social.object.resolution.mode.request.param` to the value `false` in WP Configuration Service resource environment provider. In this case, the attribute `ibm.portal.default.social.object.resolution.mode` is always set to the value `disabled`.


**Related information**  


[Configuration Service](../admin-system/srvcfgref_config.md)

[Concept of the lists of social objects provided with the social rendering feature](../social/soc_rendr_undrstd.md)

[Social object resolution](../social/soc_rendr_soc_obj_resltn.md)

[Digital Data Connector profiles for social rendering](../social/soc_rendr_lst_rndr_prfls.md)

