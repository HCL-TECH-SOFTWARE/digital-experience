# Common profile

The common profile provides general aspects that are available in various feeds that are served by HCL Connections. You can use the common profile when you create your own custom profiles.

!!! note
    You cannot use the common profile as is. Therefore, the common profile is not available to the Tag Helper.

For more information about how to extend this profile, read *XPath list-rendering profile keys*.

The common profile defines the following attributes:

-   **Author's email addressauthorEmail**

    This attribute references the email address of the author of the social object.

-   **Author's ID authorID**

    This attribute references the internal ID of the author of the social object. It represents the author ID from the HCL Connections server where the social object is stored.

-   **Author's image URLauthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL where you can download the image either directly from HCL Connections or by using the Ajax proxy of the portal. This attribute is computed by the social rendering Digital Data Connector \(DDC\) for HCL Portal plug-in. For more information about this attribute, read *Configuring globally how social object data is served*.

-   **Author's nameauthorName**

    You can use this attribute to include the name of the author of the social object in the design of a social list.

-   **Author's object IDauthorObjectID**

    This attribute references the serialized object ID of the author of the social object. In contrast to the authorID attribute, the authorObjectID attribute represents an ID that is used by HCL Digital Experience rather than by HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's UIDauthorUID**

    This attribute specifies the value of the UID attribute of the author of the social object. This value reflects the UID user attribute as defined by the user repository of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Body HTMLbody HTML**

    The HTML content of this item.

-   **Body plainbody plain**

    The plain content of this item.

-   **Body content typebodyContentType**

    This attribute specifies the content type identifier for the body attribute of this item.

-   **Feed entryentry**

    The original feed entry of this item.

-   **IDid**

    The unique identifier for this item.

-   **Author's portal image URLportalAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL where you can download the image from HCL Connections by using the Ajax proxy of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's portal URLportalAuthorLink**

    This attribute specifies the link for rendering the details view of the author of this item in the context of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Published datepublished**

    This attribute indicates the time when the social object was published. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Author's raw Atom entry URLrawAuthorEntryLink**

    Link to the Atom entry that represents the author of this item. This URL directly addresses the HCL Connections server. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's raw image URLrawAuthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL for downloading the image directly from HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Summarysummary**

    A summary of the content of this item.

-   **Titletitle**

    The title of this item.

-   **Updated dateupdated**

    This attribute indicates the time of the last update of the social object. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.


In addition to these attributes, the common profile also provides access to the following list properties:

-   **Updated dateupdated**

    This list property indicates the time of the last update of the list that is represented by the feed at hand. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Raw URL to this feedselfLink**

    This list property specifies the link to this feed.

-   **Feed titletitle**

    This list property specifies the link to this feed.



???+ info "Related information"
    - [XPath list-rendering profile keys](../../../../../../extend_dx/ddc/integrating_remote_xml_data/syntax_xpath_based_list_rendering_profiles/plrf_lr_profl_keys.md)
    - [Configuring globally how social object data is served](../../../../cfg_global_settings_social_rendering/soc_rendr_cfg_data_serve.md)

