# Other Portal Tuning

## Reducing Redirects

### Enabling Base URLs in Themes

Enabling base URLs reduces redirects and URL generation computations. This benefit is seen on the default themes shipped with Portal 6.1.5 through 9.5, as well as themes derived from those.

When enabling base URLs, in many configurations the **host.name** property needs to be set in **WP ConfigService**. The host name should be set to the value that an end user knows Portal as. For example if a reverse proxy is used, or virtual portals are used, the host.name in **WP ConfigService** resource environment provider should be the name of the reverse proxy or virtual portal.

**How to Set** 

1. Create a file named `redirectoff.xml` with the following contents:

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <request build="wpnext_372_01" type="update" version="8.0.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="PortalConfig_8.0.0.xsd">
        <portal action="locate">
            <theme action="update" uniquename="ibm.portal.85Theme">
                <parameter name="com.ibm.portal.theme.hasBaseURL"
                type="string" update="set">true</parameter>
            </theme>
        </portal>
    </request>
    ```

2. From the command prompt, use the XMLAccess tool to import the `redirectoff.xml` file:

    ```bash
    ./xmlaccess.sh -in redirectOff.xml -user <portal adminID> -password <portal admin password> -url http://<hostname>:10039/wps/config
    ```

#### Eliminate Redirect on the Login Form

To avoid redirect on the login form page it is necessary to modify a theme JSP file with a text editor.

If using authentication proxies or single sign on (SSO) solutions, the redirect should be left enabled. This will ensure that the login is redirected to the correct 3<sup>rd</sup> party URL for user transparent authentication.

**How to Set**

### Modifying the JSP File

1. Locate the JSP file at the following path:

    `<ServerRoot>/PortalServer/theme/wp.theme.themes/default85/installedApps/DefaultTheme85.ear/DefaultTheme85.war/themes/html/dynamicSpots/commonActions.jsp`

2. Modify the highlighted fields in this part of the file from this:

    ```jsp
    <portal-navigation:urlGeneration allowRelativeURL="true" keepNavigationalState="false"
    contentNode="wps.content.root" home="protected">
        <a href='<% wpsURL.write(escapeXmlWriter); %>' >
            <portal-fmt:text key="link.login" bundle="nls.engine"/>
        </a>
    </portal-navigation:urlGeneration>
    ```

    To this:

    ```jsp
    <portal-navigation:urlGeneration allowRelativeURL="true" keepNavigationalState="false"
    contentNode="wps.Login" home="public">
        <a href='<% wpsURL.write(escapeXmlWriter); %>' >
            <portal-fmt:text key="link.login" bundle="nls.engine"/>
        </a>
    </portal-navigation:urlGeneration>
    ```

If a custom login page is used, make sure the contentNode matches the unique name of your login page.

In the previous example it was wps.Login. You can find the unique name of your login page under Portal Administration → Manage Pages. The login page is typically found in ‘Content Root’ → ‘Hidden Pages’.

### Personalization (PZN)

Some personalization (PZN) features require processing on every page request. If these are not needed, they can be disabled for better performance. Note that even with the below features disabled, WCM will still process PZN rules since it calls the PZN API directly. If PZN is not being used for WCM content the APIs are not called and there is no additional overhead.

#### Disable PZN Visibility Rules

If a Portal installation is not using PZN rules on individual pages and portlets, a 25% performance gain can be achieved by disabling the processing of these rules. The toolbar _does_ use visibility rules. If the toolbar is enabled, as described in this document, do not apply this tuning.

**How to Disable Visibility Rules for Pages & Portlets when no virtual portals used** 

Run the ConfigEngine command:

ConfigEngine.sh action-disable-pzntrans -DPortalAdminPwd=&lt;portal admin password&gt;\-
DWaspassword=&lt;websphere admin password&gt;

**How to Disable Visibility Rules for Pages & Portlets when a virtual portal is created using a context path:**

Run the ConfigEngine command:

ConfigEngine.sh action-disable-pzntrans -DVirtualPortalContext=&lt;contextpath&gt;
\-DPortalAdminPwd=&lt;portal admin password&gt; -DWaspassword=&lt;websphere admin password&gt;

**How to Disable Visibility Rules for Pages & Portlets when a virtual portal is created using a hostname:**

Run the ConfigEngine command:

ConfigEngine.sh action-disable-pzntrans -DVirtualPortalHostName=&lt;virtual portal hostname&gt;
\-DPortalAdminPwd=&lt;portal admin password&gt; -DWaspassword=&lt;websphere admin password&gt;

**How to reenable PZN:**

Run the ConfigEngine command

ConfigEngine.sh action-enable-pzntrans.

#### Disable PZN Referrer Headers

PZN also has the ability to use referrer headers to make decisions. If that feature is not used by an installation, it can be disabled for a performance benefit.

**How to Disable Personalization Processing of Referrer Headers**

Edit &lt;wp_profile_root&gt;/PortalServer/config/services/PersonalizationService.properties.

Set rulesEngine.preprocessor.enabled=false 
Restart the Portal server.

## Portal Theme Profiles 

A new modularized theme design became available with WebSphere Portal version 8.0. This design was continued for the version 9.5 theme. These themes permit easier inclusion or exclusion of components. In general it is best to include components that are used, and exclude components that are not used. For more information, see [The module framework](../../../../build_sites/themes_skins/the_module_framework/index.md).

In our evaluation, we used a theme profile based on profile_deferred.json that ships with Portal 9.5. To allow easier comparison to earlier releases, we removed the following theme modules: wp_toolbar_host, wp_toolbar_actionbar, wp_analytics_aggregator, wp_analytics, wp_analytics_tags, wcm_inplaceEdit, wp_sametime_proxy, getting_started_module, wp_toolbar_host_view, wp_tagging_rating_light, wp_toolbar_host_edit. In addition we added a custom module that allowed top navigation to work.

The theme profile is a WebDAV resource. WebDAV resources are stored in the database, not on the file system. A WebDAV client is needed to add or modify the contents of a theme profile. The topic [Working with WebDAV clients](../../../../manage_content/wcm_delivery/webdav/administer_webdav/webdav_client.md) discusses the settings needed to connect to Portal using a WebDAV client.

The theme profile is specified in JSON format. Changing it requires downloading the file using a WebDAV tool, editing and saving the file back to the Portal database. [Adding or removing a module from a profile](../../../../build_sites/themes_skins/the_module_framework/add_remove_oob_modules/index.md) has instructions on how to change the theme profile.

Note that if removing the last item in a section be sure to remove the comma from the previous item.

### Pages with Different Theme Profiles 

While it is a good idea to include only the theme profile elements that a page actually uses, there is a performance penalty for using different theme profiles on different pages if many pages include the same base profiles, especially if the base includes larger CSS or Javascript files. This is due to the fact that each profile bundles all modules into a single set of Javascript and CSS files. Each bundle has a separate URL. So, each bundle requires a separate download to the user’s browser.

For example, Dojo is a large theme module in terms of download size. So, if there are two pages that need Dojo but each needs different extensions, there are two options:

**Two Profiles**

Page 1 Profile with Dojo plus Page 1’s extensions.

Page 2 Profile with Dojo plus Page 2’s extensions.

**A single profile including Dojo and the extensions needed for both pages.**

Option 1 will require a user to download a large amount of content (Dojo) on both pages. Option 2 will only require a single Dojo download. Since the bundles are cacheable in the browser, Option 2 will perform better for users visiting the second page since there will only be one download.

### Out of the Box Portal Themes

Portal 9.5 ships with some useful profiles. profile_lightweight performs even better than the custom profile we used in our test. If that profile contains all the function necessary for your site, we recommend you use profile_lightweight for your site. The profile_deferred theme profile also performs very well, but we found that for rendering sites, where the toolbar function is typically disabled, it still makes sense to remove wp_toolbar_host and wp_toolbar_actionbar from the theme profile. For rendering-only environments, where only ‘active content, not drafts’ are published, a further response time improvement can be achieved by removing wp_draft_page_ribbon from the theme profiles.

In addition it makes sense to make sure the login portlet uses the same theme profile as the other pages. By default, login uses profile_deferred.

### Theme Analyzer Tool 

Portal 9.5 includes a Theme Analyzer tool that can be used to analyze theme profiles, modules and dependencies. This tool is useful for determining which modules will be loaded by each profile and can help diagnose performance issues with custom themes. This tool can also show the Cache-Control headers that will be applied for each theme module. This is useful in determining why theme resources (ra:collection URLs) are not being cached by web browsers. See [Theme Optimization Analyzer](../../../../build_sites/themes_skins/the_module_framework/themeopt_analyzer/index.md) for more information.

## Federated LDAP

### Disabling Nested Group Searches

For environments where federated LDAP is used, throughput can be improved by disabling nested group caches. For more information about nested group caches, see [Disabling nested group searches](https://www.ibm.com/docs/en/was-zos/9.0.5?topic=limitations-disabling-nested-group-searches){target="_blank"}.

**How to Set**

**Running Commands** in `wsadmin`

1. Navigate to the `wsadmin` tool:

    ```bash
    <WASRoot>/bin/wsadmin.sh
    ```

2. Run the following commands:

    ```bash
    wsadmin>$AdminTask configureAdminWIMUserRegistry {-customProperties {"com.ibm.ws.wim.registry.grouplevel=1"} }
    wsadmin>$AdminConfig save
    wsadmin>exit
    ```

### Enabling WebSphere and VMM to share group info

In a federated ldap environment, WebSphere and VMM can share cached information about groups. Setting this up is described in [Reusing group information](../../../../deployment/manage/security/people/authorization/users_and_groups/reuse_group_info.md).

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP PumaStoreService → Custom properties

Create a new custom property:

**Name**: store.puma_default.filter.assertionFilter.classname

**Value**: com.ibm.wps.um.AssertionFilter

## If not using UX Screen Flow Manager

If a deployment is not using screen flow manager, it can be removed. We saw about a 2% improvement in throughput with it removed. The process for disabling it is described in [Configuration options](../../../../extend_dx/screenflow/cfg_opt.md).
