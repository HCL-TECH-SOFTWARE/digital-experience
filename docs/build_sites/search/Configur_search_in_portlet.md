# Configuring Search in a Portlets on Pages

In this section you can configure the search and filter the Portlets by defining a portlet property setting.

## Portlets

The “INCLUDE_IN_SEARCH_INDEX” is a portlet property setting with the following available values:

`false` - the portlet will not be published in the seedlist
`true` - the portlet will be considered for indexing - this is the default image

!!! note
    The WCM Web Content Viewer portlet is set to “INCLUDE_IN_SEARCH_INDEX=false". The reason is that in the past not having had this filter option, this had accounted for duplicate result list entries - one from processing the portlet with the default content, the second coming from WCM library which delivered the default content item once again.

!!! note 
    If the portlet property is neglected (this is the default), that portlet will be indexed by the search engine.

!!! important
    This property is only applicable to portlets and not available for Portal pages. If none of the portlets on a Portal page will get indexed, then that page will not appear in any search result.

 
 ## Pages

The following is a way to make the static information of a page searchable. This setting is added to the page parameters.

For more information, refer: https://www.ibm.com/support/pages/apar/PH00477.

## Problem conclusion:

To create a fix where the customer can set the page parameter `index.static.page.content = always` to add the page to the index, although all portlets have the parameter setting:

`INCLUDE_IN_SEARCH_INDEX = false`

The page setting will be inherited to child pages also, but it can be overwritten at child page level if needed.

