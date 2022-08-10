# People Finder

The People Finder portlet provides both quick search and advanced search options for locating people and information about people. Once found, a person is visible to other users as a person link that indicates online presence and displays a menu of instant messaging and other options.

Hovering over the person link provides an option to display the person's business card \(also known as person card\). To view the profile, select **Profile** on the business card. For more information on the business card, see the section "Person card" in the People Awareness topic.

You can add the People Finder portlet to a page in the same manner that you add any portlet. People Finder is then immediately available when the page is rendered. If you add **People Finder** to a page, you must configure the profile parameter of that page before you add the portlet.

1.  Turn **Edit Mode** on.
2.  Click **Page**.
3.  On the **General** tab, click **Edit Page Properties**.
4.  Click the **Advanced** tab.
5.  Scroll to the **Theme Settings** section.
6.  Select Basic Content with Dojo from the **Profile** menu.
7.  Click **Save**.
8.  Add the **People Finder** portlet to the page.

The **People Finder** portlet appears when users click the **Find a User** link that appears at the end of any HCL Digital Experience page when the back-end server is J2EE.

**People Finder** is supported as a remote WSRP service.

**People Finder** supports the Java Portlet Specification. For more information, read the information about developing portlets.

For information about the **People Finder** portlet, view the help that is available when you select Configure from the drop-down menu on the portlet title bar.

## Using the People Finder portlet

Users interact with the People Finder portlet through the following features, which appear in one or more views of the portlet:

-   Quick Search and Quick Search Results, including Business Card fields
-   Advanced Search and Advanced Search Results
-   Profile page, including Business Card fields
-   Organization view, including Business Card fields

## Setting up People Finder

Use the configuration mode to specify which fields to display in the **People Finder** portlet. The fields that are available for selection when configuring the portlet are based on a mapping of attributes from the user repository to the Member Manager component of HCL Portal. People Finder requires a mapping for the uid and mail attributes. To learn more about attribute mapping or how to determine which attributes are defined to the portal, see the section "Adding more attributes to VMM."

For People Finder, make sure your site meets the following client and server requirements.

## Client requirements

This portlet supports browsers capable of rendering HTML markup.

|Item|Description|
|----|-----------|
|Markup level|HTML 4.01 Transitional|
|Java applet|n/a|
|JavaScript|n/a|
|<iframe\>|No|
|Style sheets|Portal styles only|
|Software|The People Finder portlet is compatible with specific Web browser software releases. For details, see the *HCL Portal hardware and software requirements*.|
|Accessibility|Yes|

## Server requirements

There are no special server requirements for the People Finder portlet.

## Deployment/Installation

This portlet is installed automatically as part of HCL Portal installation.

## Configuration parameters

Config\_ResultSetLimit is the only parameter that you can edit. Use the **Configure** command. Do not modify any configuration parameter values for the **People Finder** portlet in the **Portlet Management**. Click the **Administration menu** icon. Then, click **Portlet Management** \> **Portlets**. Use this interface only for viewing parameters when troubleshooting portlet configuration.

|Parameter|Value|
|---------|-----|
|ConfigHelpURI|The location and name of the JSP containing topics launched from the Help command when configuring People Finder.Default: `/help/pfind\_config.jsp`

|
|SearchHelpURI|The location and name of the JSP containing topics launched from the Help command in the Profile page of the People Finder. Topics in this JSP include Help for person links, Quick Search, Quick Search Results, Advanced Search, and Advanced Search Results. Default: `/help/pfind\_view\_search\_for\_people.jsp`

|
|PersonRecordHelpURI|The location and name of the JSP containing topics launched from the Help command in the Profile page and Organization view of the People Finder.Default: `/help/pfind\_view\_display\_person\_info.jsp`

|
|Config\_PageIndexLimit|Specifies the maximum number of search results to be returned per page by Quick Search and Advanced Search. Default: 5

|
|Config\_RecursionSetLimit|Specifies the maximum number of recursions performed by search and retrieval on the manager attribute for a given person.The limit of recursions performed on the manager attribute determines the number of managers responsible for the found person that appear in the Organization View.|
|Config\_ActiveFieldsConfig\_Active\_Queries

Config\_VisualSets

Config\_Views

Config\_QuerySets

Config\_QueryViews

Config\_UpdateInfo

Config\_Complete

|These parameters appear in the portlet after fields are specified in configuration mode.Do not modify these parameters.

|

-   **[People Finder configuration reference](../collab/i_coll_r_porcc_pfnd_cfgmode.md)**  
The default fields of the People Finder portlet correspond to attributes defined by Member Manager, and enable the display of information about people in several views. As an administrator, you can determine the layout and content of portlet views by selecting and ordering the fields that appear in each view.
-   **[Paginating search results in the People Finder](../collab/i_coll_t_pag_query_results.md)**  
You can configure the People Finder portlet to display a maximum number of results found per page.
-   **[Enabling People Finder for anonymous users](../collab/i_coll_t_pfnd_enable_anon_users.md)**  
If you grant access to anonymous users for any page that contains the People Finder portlet, you must also grant them access to a hidden page, and to a dynamic person tag portlet that support awareness in People Finder. In addition, you must enable session use for anonymous users.
-   **[People Finder interaction with other portlets](../collab/i_coll_r_porcc_pfnd_click.md)**  
Other portlets can communicate with People Finder using URL addressability.
-   **[Member Manager and People Finder](../collab/i_coll_r_porcc_pfnd_wmm.md)**  
Member Manager is the component of IBM WebSphere Application Server and HCL Digital Experience that provides the common schema of attributes used by People Finder for people and their Profile pages.
-   **[Mapping VMM attributes to LDAP user attributes](../collab/i_domi_t_sv_domldap_mapvmm.md)**  
The collaboration integration relies on a predefined set of Virtual Member Manager \(VMM\) user and group attributes to function properly, while your LDAP server may use a different set of predefined user and group attributes. If a portal attribute is available under a different name on the LDAP server, you can map the portal attribute to the corresponding LDAP attribute. If you want to use an attribute as search attribute or you want to see its value in the search result, you must to map the attribute. Portal attributes that do not correspond to an LDAP attribute should be flagged as unsupported.

**Parent topic:**[Finding users](../collab/collab_pfind_dirs.md)

**Related information**  


[Adding more attributes to VMM](../install/manage_atts.md)

[System requirements](../overview/inst_req.md)

[Developing portlets](../dev-portlet/wpsdev.md)

[People awareness](../collab/i_coll_c_people_aw.md)

