# The Atom list-rendering profile

Digital Data Connector \(DDC\) for HCL Portal provides a list-rendering profile that is ready to use for access to feeds that comply with the Atom syndication format standard.

This profile is named ibm.portal.atom. The profile is deployed as custom properties of the WP List Rendering Profile Service resource environment provider in the WebSphere® Integrated Solutions Console. To display the profile, open the Custom Properties view of that resource environment provider in the WebSphere Integrated Solutions Console and activate a key filter by specifying `atom.*`.

To use this profile in your lists, set the profile attribute of the `ListRenderingContext` rendering plug-in tag to the value `ibm.portal.atom`. Example:

```
[Plugin:ListRenderingContext action="set" extension-id="ibm.portal.ddc.xml" 
   profile="ibm.portal.atom" 
   attribute="source=https://www.cntserv_exmp.com/connections/communities/service/atom/catalog/public"
   compute="always"]
```

The Atom list-rendering profile declares the following attributes:

-   **Alternate URLalternateLink**

    Link to an alternate representation of the entry or feed, for example a permalink to the HTML version of the entry, or the front page of the weblog.

-   **Author's email addressauthorEmail**

    Email address of the feed entry author.

-   **Author's NameauthorName**

    Name of the feed entry author.

-   **Author URLauthorUri**

    URL of the feed entry author.

-   **Category LabelscategoryLabels**

    Provides a human-readable label for display of the categories.

-   **Category SchemescategorySchemes**

    Identifies the categorization schemes via a URI.

-   **Category TermscategoryTerms**

    Identifies the categories.

-   **Contentcontent**

    The feed entry content.

-   **nullcontributorEmail**

    null

-   **Contributor's email addressauthorEmail**

    Email address of the feed entry contributor.

-   **Contributor's NamecontributorName**

    Name of the feed entry contributor.

-   **Contributor URLcontributorUri**

    URL of the feed entry contributor.

-   **Edit URLeditLink**

    Link to edit the feed entry.

-   **Enclosure URLenclosureLink**

    Link to a related resource that might be large and might require special handling, for example an audio or video recording.

-   **IDid**

    Identifier of the feed entry.

-   **Published Datepublished**

    The date on which the feed entry was published.

-   **Feed URLselfLink**

    Link to the feed itself.

-   **Subtitlesubtitle**

    Subtitle of the feed entry.

-   **Summarysummary**

    Summary of the feed entry.

-   **Titletitle**

    Title of the feed entry.

-   **Updated Dateupdated**

    The date when the feed entry was last updated.



???+ info "Related information"
    - [The Atom Syndication Format](http://www.ietf.org/rfc/rfc4287)

