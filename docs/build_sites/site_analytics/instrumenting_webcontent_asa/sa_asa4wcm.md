# Instrumenting web content for Active Site Analytics

You can collect information from web content for Active Site Analytics.

For collecting information about the web content that the portal renders, use the following microformat tags:

-   **asa.wcm.content\_item.path**

    Use this tag to identify the content path. The tag contains the unique identifier of the content item in HCL Web Content Manager.

-   **asa.wcm.content\_item.title**

    Use this tag to identify the content title. The tag contains the display title of the content item.

-   **asa.wcm.content\_item.authors**

    Use this tag to identify the authors of the content. The tag contains one of the authors of the content item.

-   **asa.wcm.content\_item.lastmodified**

    Use this tag to identify the last modification date of the content. The tag contains the date on which the content item was last modified.


Web Content Manager provides the following methods for collecting information about web content:

-   Using the analytics data rendering plug-in tag.
-   Using the sample HTML component for Active Site Analytics that is provided with Web Content Manager.
-   Using the default microformat tags that are supported by web content viewers.

-   **[Using the sample HTML component for Active Site Analytics](../admin-system/sa_asa4wcm_oobsmpl.md)**  
The HTML – Analytics component is a sample HTML component that you can use to instrument web content for Active Site Analytics. You can use this component to insert the supported microformat tags for web content into your content or presentation templates.
-   **[Enabling default microformat support in Web Content Viewers](../admin-system/sa_asa4wcm_tgs_wcvp.md)**  
Web Content Viewers provide support for Active Site Analytics microformats by default. You can use this support to inject microformats into your content design or presentation templates.

**Parent topic:**[Developing](../dev/developing_parent.md)

**Related information**  


[Setting up site analysis for the Web Content Viewer](../wcm/wcm_config_wcmviewer_sitean.md)

