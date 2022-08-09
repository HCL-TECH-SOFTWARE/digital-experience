# Profiles and profiles connections profiles

These profiles provide access to HCL Connections profile related feed data.

## Profiles profile

The profiles profile provides access to HCL Connections profile feed data. It declares the following attribute names:

-   **Assistant's IDassistantID**

    This attribute specifies the internal ID of the assistant of the user who represented by this profile.

-   **Assistant's profile URLassistantLink**

    This attribute specifies the URL of the user profile that represents the assistant of the user who is represented by this profile. This attribute is computed by the social rendering Digital Data Connector \(DDC\) for HCL Portal plug-in.

-   **Assistant's nameassistantName**

    This attribute specifies the name of the assistant of the user who is represented by this profile.

-   **Blog URLblogURL**

    This attribute specifies the URL of the current profile.

-   **Buildingbuilding**

    This attribute specifies the building identifier for this profile.

-   **Emailemail**

    This attribute specifies the email address of this profile.

-   **Alternate emailemailAlternate**

    This attribute specifies the alternate email address of this profile.

-   **Fax numberfaxNumber**

    This attribute specifies the FAX number of this profile.

-   **Floorfloor**

    This attribute specifies the floor identifier for this profile.

-   **IDid**

    The unique identifier for this profile.

-   **Image URLimageLink**

    This attribute specifies the URL of the photo of this profile. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Is activeisActive**

    This attribute indicates whether the user represented by this profile is currently available.

-   **Is managerisManager**

    If the user represented by this profile is a manager, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Job titlejobTitle**

    This attribute specifies the job title of this profile.

-   **UID of the manager of this usermanagerUID**

    This attribute specifies the UID of the profile that represents this user's manager.

-   **Namename**

    This attribute specifies the name of this profile.

-   **Office numberofficeNumber**

    This attribute specifies the office number of this profile.

-   **Organization unitorganizationUnit**

    This attribute specifies the organization unit identifier of this profile.

-   **Pager numberpagerNumber**

    This attribute specifies the pager number of this profile.

-   **Assistant's profile URLportalAssistantLink**

    This attribute specifies the HCL Portal URL of the user profile that represents the assistant of the user who is represented by this profile. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal image URLportalImageLink**

    This attribute specifies the HCL Portal URL of the photo of this profile. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Portal VCard URLportalVCardLink**

    This attribute specifies the HCL Portal URL of the VCard that describes this user profile. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Profile keyprofileKey**

    This attribute specifies the key of this profile.

-   **Profile typeprofileType**

    This attribute specifies the profile type of this profile.

-   **Raw assistant's entry URLrawAssistantEntryLink**

    This attribute specifies the HCL Connections URL of the user profile entry that represents the assistant of the user who is represented by this profile.

-   **Raw assistant's URLrawAssistantLink**

    This attribute specifies the HCL Connections URL of the user profile that represents the assistant of the user who is represented by this profile. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw Atom entry URLrawEntryLink**

    This attribute specifies the HCL Connections URL of the Atom entry that represents this profile.

-   **Raw image URLrawImageLink**

    This attribute specifies the HCL Connections URL of the photo of this profile. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Raw view URLrawLink**

    This attribute specifies the URL of the details view of this profile on the HCL Connections server.

-   **Raw profile type URLrawProfileTypeLink**

    This attribute specifies the URL of the profile type resource that is associated with this profile.

-   **Raw pronunciation URLrawPronunciationLink**

    This attribute specifies the HCL Connections URL of the pronunciation resource of this profile.

-   **Raw VCard URLrawVCardLink**

    This attribute specifies the HCL Connections URL of the VCard resource that is associated with this profile.

-   **Summarysummary**

    This attribute specifies the summary information for this profile.

-   **Tagstags**

    This attribute specifies the tags that are associated with this item.

-   **Phone number IPtelephoneNumberIP**

    This attribute specifies the IP phone number of this profile.

-   **Phone number mobiletelephoneNumberMobile**

    This attribute specifies the mobile phone number of this profile.

-   **Phone number officetelephoneNumberOffice**

    This attribute specifies the office phone number of this profile.

-   **Titletitle**

    The display name of this profile.

-   **Updated dateupdated**

    This attribute indicates the time of the last update of this profile. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **User's IDuserID**

    This attribute specifies the internal ID of this profile.

-   **Raw user network connection linkrawUserNetworkConnectionLink**

    This attribute specifies the URL to the user network connection entry that contains data about whether the current user and the selected user are colleagues. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **User network statususerNetworkStatus**

    This attribute specifies the status of the connection between the current user and a selected user. This attribute can take the following values:

    -   **accepted**

        This value means that the logged in user accepted an invitation.

    -   **pending**

        This value means that the logged in user can accept an invitation.

    -   **unconfirmed**

        This value means that the invited user did not yet accept the invitation of the current user.

-   **User's UIDuserUID**

    This attribute specifies the UID of this profile.

-   **VCard URLvCardLink**

    This attribute specifies the URL of the VCard that describes this user profile. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Organization codexOrganizationCode**

    This attribute specifies the organization code of this profile.


In addition to these attributes, the profiles profile also provides access to the following list properties:

-   **Raw tags link rawTagsLink**

    This list property specifies the URL of the Atom feed that represents the tags for this list of profiles.

-   **Raw colleague link rawColleagueLink**

    This list property specifies the URL of the Atom feed that represents the colleagues for the user that is represented by the current feed.


## Profiles connections profile

The profiles connections profile provides access to HCL Connections profiles connections feed data. It declares the following attribute names:

-   **Author's email addressauthorEmail**

    This attribute references the email address of the author of the social object.

-   **Author's IDauthorID**

    This attribute references the internal ID of the author of the social object. It represents the author ID from the HCL Connections server where the social object is stored.

-   **Author's image URLauthorImageLink**

    This attribute specifies the link to the profile image of the author of the social object. The HCL Connections server that provides the social object also stores the profile image of the author. This attribute contains a URL where you can download the image either directly from HCL Connections or by using the Ajax proxy of the portal. For more information about this attribute, read *Configuring globally how social object data is served*. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's nameauthorName**

    You can use this attribute to include the name of the author of the social object in the design of a social list.

-   **Author's object IDauthorObjectID**

    This attribute references the serialized object ID of the author of the social object. In contrast to the `authorID` attribute, the `authorObjectID` attribute represents an ID that is used by HCL Portal rather than by HCL Connections. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Author's UIDauthorUID**

    This attribute specifies the value of the UID attribute of the author of the social object. This value reflects the UID user attribute as defined by the user repository of the portal. This attribute is computed by the social rendering Digital Data Connector plug-in.

-   **Body HTMLbody HTML**

    The HTML content of this item.

-   **Body plainbody plain**

    The plain content of this item.

-   **Body content typebodyContentType**

    This attribute specifies the content type identifier for the body attribute of this item.

-   **Is connection pendingconnectionIsPending**

    If this profile connection is pending, this attribute returns the string `true`. Otherwise, it returns `false`.

-   **Connection messageconnectionMessage**

    This attribute specifies the connection request message.

-   **Connection statusconnectionStatus**

    This attribute specifies the status information of this profile connection.

-   **Connection typeconnectionType**

    This attribute specifies the type information of this profile connection.

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

-   **Raw edit URLrawEditLink**

    This attribute specifies the URL of the editable resource that represents this profile connection.

-   **Raw Atom entry URLrawEntryLink**

    This attribute represents the HCL Connections link to the Atom resource that represents this social object. This attribute contains a URL where you can access the feed directly from HCL Connections. To retrieve the feed from HCL Connections by using the Ajax proxy of the portal, use the `portalEntryLink` attribute instead.

-   **Summarysummary**

    A summary of the content of this item.

-   **Titletitle**

    The title of this item.

-   **Updated dateupdated**

    This attribute indicates the time of the last update of the social object. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.


In addition to these attributes, the profiles connections profile also provides access to the following list properties:

-   **Updated dateupdated**

    This list property indicates the time of the last update of the list that is represented by the feed at hand. To display the date in the format of your choice, you can use all date format options that Web Content Manager provides.

-   **Raw URL to this feedselfLink**

    This list property specifies the link to this feed.

-   **Feed titletitle**

    This list property specifies the link to this feed.


**Parent topic:**[Digital Data Connector profiles for social rendering](../social/soc_rendr_lst_rndr_prfls.md)

**Related information**  


[Configuring globally how social object data is served](../social/soc_rendr_cfg_data_serve.md)

