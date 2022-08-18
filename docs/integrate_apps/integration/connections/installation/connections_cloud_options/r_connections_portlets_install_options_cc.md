# Installation options \(Cloud\)

These options allow you to customize your installation.

|Property|Value|
|--------|-----|
|-DICURL|The unsecured base URL for your HCL Connections Cloud instance.|
|-DPAALocation|The location to the SNPortlets.paa archive on the Portal Server file system. -DWasPassword is the WebSphere Application Server admin password.|
|-DPortalAdminPwd|The HCL Portal admin password.|
|-DappName|The name of the application to install. This must always be set to SNPortlets.|
|-DICtagSearchType|Set to search or mysearch, depending on whether you want the tag cloud to display tags only for public content or tags for public content as well as for content the logged-in user contributed.|
|-DICserverType|Set to SC4SB when deploying on HCL Connections Cloud.|

|Property|Value|
|--------|-----|
|-DICportletWebapp|The name of the Connections Portlets web application that is deployed after you execute the deploy-paa command. You can log in to the WebSphere Application Server admin console under the enterprise applications screen to determine the correct setting. The default value is PA\_icWEFPtlts.|
|-DICshowContentTitleInPortlet|true|
|-DICshowForumSummaryFiltersInCommunity|false|
|-DICshowResponseFormInline|false When set to true, display the input form for forum topic replies and blog comments inline.|
|-DICdojoLayers| |
|-DICconnectionsContextRoot|The connections context root used for making requests for resources by the Activity Stream portlet.  The default is connections.|
|-DICwebResourcesURL|https://connections-webresources.example.com|
|-DICwebResourcesURLUnsecured|http://connections-webresources.example.com|
|-DICwebResourcesContextRoot|The context root used for making requests for resources by the Activity Stream and Library portlets.  The default is connections/resources.|
|-DICdateType|Possible values are client \(the default\) or server. This is used to handle the date conversion in portlets for the client timezone or server timezone, respectively. **Note:** The server option is only supported on WebSphere Portal 8.0.01 with CF12 applied, or greater.

|
|-DICdateFormat|Used to define the target date pattern when the server timezone setting is applied. For examples of date formats, find information about *Setting parameters to format dates* at [HCL Software Support](https://support.hcltechsw.com/csm).|

|Property|Value|
|--------|-----|
|-DICprofilesContextRoot|profiles|
|-DICactivitiesContextRoot|activities|
|-DICcommunitiesContextRoot|communities|
|-DICblogsContextRoot|blogs|
|-DICbookmarksContextRoot|dogear|
|-DICforumsContextRoot|forums|
|-DICwikisContextRoot|wikis|
|-DICsearchContextRoot|search|
|-DICfilesContextRoot|files.|

**Parent topic:**[Deploying the HCL Connections Portlets for HCL Connections Cloud](../connect/c_connections_portlets_deploying_portlets_cc.md)

