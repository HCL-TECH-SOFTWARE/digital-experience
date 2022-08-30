# Modifier support profile

The modifier support profile provides general modifier aspects. These modifier aspects are available in various feeds that are served by HCL Connections. You can reuse them when you create your own profiles.

In contrast to the author information described in the *Common profile*, contributors of additional information to a social object who are not the initial authors are regarded as modifiers. As not all social objects have additional modifications, the modifier support profile is separate from the common profile.

The modifier support profile declares the following attribute names:

-   **Modifier's email address modifierEmail**

    This attribute references the email address of the modifier of the social object.

-   **Modifier's ID modifierID**

    This attribute references the internal ID of the modifier of the social object.

-   **Modifier's image URL modifierImageLink**

    This attribute specifies the link to the profile image of the modifier of the social object. The HCL Connections server that provides the social object also stores the profile image of the modifier. This attribute contains a URL from which users can download the image either directly from HCL Connections or by using the Ajax proxy of HCL Portal. For more information about this attribute, read *Configuring globally how social object data is served*. This attribute is computed by the social rendering bean list provider plug-in.

-   **Modifier's name modifierName**

    You can use this attribute to include the name of the modifier of the social object in the design of a social list.

-   **Modifier's object ID modifierObjectID**

    This attribute references the serialized object ID of the modifier of the social object. In contrast to the `modifierID` attribute, the `modifierObjectID` attribute represents an ID that is used by HCL Portal rather than by HCL Connections. This attribute is computed by the social rendering bean list provider plug-in.

-   **Modifier's UIDmodifierUID**

    This attribute specifies the value of the UID attribute of the modifier of the social object. This value reflects the UID user attribute that is defined by the user repository of the portal. This attribute is computed by the social rendering bean list provider plug-in.

-   **Modifier's raw Atom entry URL rawModifierEntryLink**

    This attribute specifies the link to the Atom entry that represents the modifier of this item. This URL addresses the HCL Connections server directly. This attribute is computed by the social rendering bean list provider plug-in.

-   **Modifier's raw image URL rawModifierImageLink**

    This attribute specifies the link to the profile image of the modifier of the social object. The HCL Connections server that provides the social object also stores the profile image of the modifier. This attribute contains a URL for downloading the image directly from HCL Connections. This attribute is computed by the social rendering bean list provider plug-in.

-   **Modifier's portal image URL portalModifierImageLink**

    This attribute specifies the link to the profile image of the modifier of the social object. The HCL Connections server that provides the social object also stores the profile image of the modifier. This attribute contains a URL where you can download the image from HCL Connections by using the Ajax proxy of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Modifier's portal URL portalModifierLink**

    This attribute specifies the link for rendering the details view of the modifier of this item in the context of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.



**Related information**  


[Configuring globally how social object data is served](../social/soc_rendr_cfg_data_serve.md)

