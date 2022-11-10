# Installation options

You can customize your installation with the following options.

|Property|Value|
|--------|-----|
|-DPaaRootPath|The location of the paa root directory where all PAA archive assemblies are copied when they are installed. In HCL DX 7.0.0.2, the path is\[websphere-home-path\]/paa For example, C:\\IBM\\WebSphere\\paa. In HCL DX 8, the path is \[WasUserHome\]/paa. For example, C:\\IBM\\WebSphere\\wp\_profile\\paa.|
|-DPAALocation|The location to the SNPortlets.paa archive on the Portal Server file system. -DWasPassword is the WebSphere® Application Server admin password.|
|-DPortalAdminPwd|The HCL DX admin password.|
|-DappName|The name of the application to install. This property must always be set to SNPortlets.|
|-DICversion|The version number of the HCL Connections server the portlets connect to. Allowed values are '4.0' or '4.5'.|
|-DICblogsHomepageHandle|The Blogs home page handles for your HCL Connections deployment. The default is home page.|
|-DICemailSetting|Set to email-exposed or email-hidden depending on whether the HCL Connections server is configured to show user email addresses or to hide them.|
|-DICtagSearchType|Set to search or mysearch, depending on how you want the tag cloud to display tags. You can display tags only for public content or for both public content and for content the logged-in user contributed.|
|-DICdsxAdminId|The user ID that is set in the **dsx-admin** role for the Profiles and Communities services.|
|-DICdsxAdminPwd|The password for the **dsx-admin** user.|
|-DICbaseURLunsecured|The unsecured base URL for the HCL Connections server|
|-DICbaseURL|The secured base URL for the HCL Connections server.|
|-DICpersonCorrelationAttribute|Specify the corresponding person relative distinguished name attribute.|
|-DICpersonCorrelationAttributeType|Assign a value of mail or uniqueId to specify whether the correlation attribute represents an email address or unique identifier.|
|-DICpersonCorrelationAttributeSyntax|Assign a value of String or octetString to specify the syntax of the correlation attribute. You need to set the value only if you use Microsoft™ Active Directory, IBM® Domino®, or Novell Directory Services for which you need to specify octetString. You also need to set the value if you explicitly changed the syntax attribute for the externalIdAttributes element in the virtual member manager configuration. In the latter case, the value of this property must match the value of that syntax attribute.|
|-DICcommunityRdnAttribute|Specify the corresponding community relative distinguished name attribute. For example, cn.|
|-DICmaxSearchResults|A maximum of results the connections repository returns on a single query. For example, 120.|
|-DICldapTypeTDS|Specify true if you are using Tivoli Directory Server as your LDAP, or specify false if you are using a different LDAP. For example, Microsoft Application Dictionary Services or Novell Data Studio.|
|-DICrunAsAdmin|The default is false. This attribute determines whether adapter runs in admin mode or non-admin mode.|
|-DICpumaFilterClassname|Always set to com.ibm.connections.vmm.adapter.filter.VMMPrincipalFilter|
|-DICpumaFilterPosition|Set to 120.|
|-Drepository.id|The LDAP repository identifier from the federated repository to configure the group repository relationship. To determine what repository identifier is set for a particular LDAP: 
1.  Log in to the WebSphere Application Server administration console and go to **Security** \> **Global Security**.
2.  Under the **User account repository** section, click **Configure** for **Federated repositories**.
3.  In the **Related Items** section, select **Manage repositories**. All of the LDAP repositories are listed on the page and the repository IDs are listed under the **Repository Identifier** column.|



|Property|Value|
|--------|-----|
|-DICportletWebapp|The name of the HCL Connections Portlets web application that is deployed after you run the deploy-paa command. You can log in to the WebSphere Application Server admin console under the enterprise applications screen to determine the correct setting. The default value is PA\_icWEFPtlts.|
|-DICshowContentTitleInPortlet|true|
|-DICshowForumSummaryFiltersInCommunity|false|
|-DICshowResponseFormInline|false. When set to true, displays the input form for forum topic replies and blog comments inline.|
|-DICdojoLayers| |
|-DICconnectionsContextRoot|The connections context root that is used for making requests for resources by the Activity Stream portlet.  The default is connections.|
|-DICwebResourcesURL|https://connections-webresources.example.com|
|-DICwebResourcesURLUnsecured|http://connections-webresources.example.com|
|-DICwebResourcesContextRoot|The context root that is used for making requests for resources by the Activity Stream and Library portlets.  The default is connections/resources.|
|-DICdateType|Possible value is client \(the default\) or server. This property is used to handle the date conversion in portlets for the client timezone or server timezone.|
|-DICdateFormat|Used to define the target date pattern when the server timezone setting is applied.|
|-DICshowICIconForMobile|This option enables the **Connections** icon to take the user to the HCL Connections Mobile Application when the user accesses the portlets on mobile devices. The default value is false.|

|Property|Value|
|--------|-----|
|-DICactivitiesURL|https://connections-activities.example.com|
|-DICprofilesURL|https://connections-profiles.example.com|
|-DICcommunitiesURL|https://connections-communities.example.com|
|-DICblogsURL|https://connections-blogs.example.com|
|-DICbookmarksURL|https://connections-bookmarks.example.com|
|-DICforumsURL|https://connections-forums.example.com|
|-DICwikisURL|https://connections-wikis.example.com|
|-DICsearchBaseURL|https://connections-search.example.com|

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

|Property|Value|
|--------|-----|
|-DICcommunitiesCacheSize|1024|
|-DICcommunitiesCacheLifetime|600|
|-DICmembersCacheSize|1024|
|-DICmembersCacheLifetime|600|
|-DICentitiesCacheSize|1024|
|-DICentitiesCacheLifetime|86400|
|-DICinterServiceCommunitiesURL|When this URL is specified, VMM uses the URL for interservice communication.|
|-DICserverType|Set to on-premise when you deploy with HCL Connections \(on-premises\) and set to SC4SB when you deploy to HCL Connections Cloud.|
|-DICinterServiceURL|The interServiceURL is used in the SiteMinder and SPNEGO configuration. To get the value of the interservice URL, open the file LotusConnections-config.xml in the HCL Connections deployment and get the value of the href attribute in the element **<sloc:interService\>**. For example, if the element looks like the following `<sloc:interService href="https://<host\>:<port\>"/>`, the value you must pick is <host\>:<port\>.

 For more configuration changes needed for SiteMinder and SPNEGO configuration, see the topic [Configuring common directory services for your security configuration](../../connections/configuration/cfg_portal_with_cnx/cfg_common_dir/t_connections_portlets_common_directory.md).



