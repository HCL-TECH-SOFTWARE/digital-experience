# Other Portal Tuning

## Reducing Redirects

### Enabling Base URLs in Themes

Enabling base URLs reduces redirects and URL generation computations. This benefit is seen on the default themes shipped with Portal 6.1.5 through 9.5, as well as themes derived from those.

When enabling base URLs, it is often necessary to configure the `host.name` property in the `WP ConfigService`. This property should reflect the host name that end users use to access the portal.

For example, if a reverse proxy or virtual portals are in use, the `host.name` value should match the domain name of the reverse proxy or virtual portal (not the internal server name).

**How to Set** 

1. Create a file named `redirectoff.xml` with the following contents:

    ```
    xml
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

    ```
    ./xmlaccess.sh -in redirectOff.xml -user <portal adminID> -password <portal admin password> -url http://<hostname>:10039/wps/config
    ```

#### Eliminate Redirect on the Login Form

To prevent a redirect on the login form page, you must edit a theme JSP file using a text editor.

If using authentication proxies or single sign on (SSO) solutions, the redirect should be left enabled. This will ensure that the login is redirected to the correct `3<sup>rd</sup>` party URL for user transparent authentication.

**How to Set**

### Modifying the JSP File

1. Locate the JSP file at the following path:

    ```
    <ServerRoot>/PortalServer/theme/wp.theme.themes/default85/installedApps/DefaultTheme85.ear/DefaultTheme85.war/themes/html/dynamicSpots/commonActions.jsp
    ```

2. Modify the highlighted fields in this part of the file from this:

    ```
    jsp
    <portal-navigation:urlGeneration allowRelativeURL="true" keepNavigationalState="false"
    contentNode="wps.content.root" home="protected">
        <a href='<% wpsURL.write(escapeXmlWriter); %>' >
            <portal-fmt:text key="link.login" bundle="nls.engine"/>
        </a>
    </portal-navigation:urlGeneration>
    ```

    To this:

    ```
    jsp
    <portal-navigation:urlGeneration allowRelativeURL="true" keepNavigationalState="false"
    contentNode="wps.Login" home="public">
        <a href='<% wpsURL.write(escapeXmlWriter); %>' >
            <portal-fmt:text key="link.login" bundle="nls.engine"/>
        </a>
    </portal-navigation:urlGeneration>
    ```

If you're using a custom login page, ensure that the `contentNode` property is set to the unique name (identifier) of that specific login page.



In the previous example it was `wps.Login`. You can find the unique name of your login page under **Portal Administration** > **Manage Pages**. The login page is typically found in **Content Root** > **Hidden Pages**.

### Personalization (PZN)

Some personalization (PZN) features require processing on every page request. If these are not needed, they can be disabled for better performance. Note that even with the below features disabled, WCM will still process PZN rules since it calls the PZN API directly. If PZN is not being used for WCM content, the APIs are not called and there is no additional overhead.

#### Disable PZN Visibility Rules

If your Portal installation does not use PZN (Personalization) rules on individual pages or portlets, you can achieve up to a 25% performance improvement by disabling rule processing. However, note that the toolbar *does* rely on visibility rules. If the toolbar is enabled as described in this document, do not apply this tuning adjustment.

**Disabling Visibility Rules Without Virtual Portals**

To disable visibility rules (PZN) for pages and portlets when **no virtual portals** are used, run the following `ConfigEngine` command:

```
ConfigEngine.sh action-disable-pzntrans \
  -DPortalAdminPwd=<portal admin password> \
  -DWaspassword=<websphere admin password>
```

**Disabling Visibility Rules for a Virtual Portal (Context Path)**

To disable visibility rules (PZN) for pages and portlets when a **virtual portal is created using a context path**, run the following `ConfigEngine` command:

```
ConfigEngine.sh action-disable-pzntrans \
  -DVirtualPortalContext=<context path> \
  -DPortalAdminPwd=<portal admin password> \
  -DWaspassword=<websphere admin password>
```

**Disabling Visibility Rules for Pages & Portlets when a virtual portal is created using a hostname:**

To disable visibility rules (PZN) for pages and portlets when a **virtual portal is created using a hostname**, run the following `ConfigEngine` command:

```
ConfigEngine.sh action-disable-pzntrans \
  -DVirtualPortalHostName=<virtual portal hostname> \
  -DPortalAdminPwd=<portal admin password> \
  -DWaspassword=<websphere admin password>
```

#### Reenabling PZN:

Run the `ConfigEngine` command:

`ConfigEngine.sh action-enable-pzntrans`.

#### Disabling PZN Referrer Headers

PZN also has the ability to use referrer headers to make decisions. If that feature is not used by an installation, it can be disabled for a performance benefit.

**Disabling Personalization Processing of Referrer Headers**

1. Edit `<wp_profile_root>/PortalServer/config/services/PersonalizationService.properties`.

2. Set `rulesEngine.preprocessor.enabled=false`. 
3. Restart the Portal server.

## Portal Theme Profiles 

A new modularized theme design became available with WebSphere Portal version 8.0. This design was continued for the version 9.5 theme. These themes permit easier inclusion or exclusion of components. In general it is best to include components that are used, and exclude components that are not used. For more information, see [The module framework](../../../../build_sites/themes_skins/the_module_framework/index.md).

For our evaluation, we used a theme profile based on `profile_deferred.json` included with **Portal 9.5**.

To better compare performance with earlier releases, we **removed** the following theme modules:

- `wp_toolbar_host`  
- `wp_toolbar_actionbar`  
- `wp_analytics_aggregator`  
- `wp_analytics`  
- `wp_analytics_tags`  
- `wcm_inplaceEdit`  
- `wp_sametime_proxy`  
- `getting_started_module`  
- `wp_toolbar_host_view`  
- `wp_tagging_rating_light`  
- `wp_toolbar_host_edit`  

Additionally, we **added** a custom module to enable top navigation functionality.The theme profile is a WebDAV resource. WebDAV resources are stored in the database, not on the file system. A WebDAV client is needed to add or modify the contents of a theme profile. The topic [Working with WebDAV clients](../../../../manage_content/wcm_delivery/webdav/administer_webdav/webdav_client.md) discusses the settings needed to connect to Portal using a WebDAV client.

TTheme profiles are configured in JSON format. If you need to change one, you'll have to download the file using a WebDAV tool, edit it, and then save the updated file back to the Portal database. You can find detailed instructions on how to modify the theme profile by [Adding or removing a module from a profile](../../../../build_sites/themes_skins/the_module_framework/add_remove_oob_modules/index.md) has instructions on how to change the theme profile.

!!! Note 
    hen removing the last item in a section, always remember to also remove the comma from the preceding item to keep your JSON valid.

### Pages with Different Theme Profiles 

While it is a good idea to include only the theme profile elements that a page actually uses, there is a performance penalty for using different theme profiles on different pages if many pages include the same base profiles, especially if the base includes larger CSS or Javascript files. This is due to the fact that each profile bundles all modules into a single set of Javascript and CSS files. Each bundle has a separate URL. So, each bundle requires a separate download to the user’s browser.

For example, consider **Dojo**, a large theme module in terms of download size.  If two pages require Dojo but each needs different extensions, you have two primary options:


#### Option 1: Two Separate Profiles


- **Page 1 Profile**: Includes Dojo plus Page 1’s specific extensions.  
- **Page 2 Profile**: Includes Dojo plus Page 2’s specific extensions.





**A single profile including Dojo and the extensions needed for both pages**

Option 1 will require a user to download a large amount of content (Dojo) on both pages. Option 2 will only require a single Dojo download. Since the bundles are cacheable in the browser, Option 2 will perform better for users visiting the second page since there will only be one download.

### Out of the Box Portal Themes

Portal 9.5 ships with some useful profiles. profile_lightweight performs even better than the custom profile we used in our test. If that profile contains all the function necessary for your site, we recommend you use `profile_lightweight` for your site. The `profile_deferred` theme profile also performs very well, but we found that for rendering sites, where the toolbar function is typically disabled, it still makes sense to remove `wp_toolbar_host and wp_toolbar_actionbar from the theme` profile. For rendering-only environments, where only ‘active content, not drafts’ are published, a further response time improvement can be achieved by removing `wp_draft_page_ribbon` from the theme profiles.

In addition it makes sense to make sure the login portlet uses the same theme profile as the other pages. By default, login uses `profile_deferred`.

### Theme Analyzer Tool 

Portal 9.5 includes a Theme Analyzer tool that can be used to analyze theme profiles, modules and dependencies. This tool is useful for determining which modules will be loaded by each profile and can help diagnose performance issues with custom themes. This tool can also show the Cache-Control headers that will be applied for each theme module. This is useful in determining why theme resources (ra:collection URLs) are not being cached by web browsers. See [Theme Optimization Analyzer](../../../../build_sites/themes_skins/the_module_framework/themeopt_analyzer/index.md) for more information.

## Federated LDAP

### Disabling Nested Group Searches

For environments where federated LDAP is used, throughput can be improved by disabling nested group caches. For more information about nested group caches, see [Disabling nested group searches](https://www.ibm.com/docs/en/was-zos/9.0.5?topic=limitations-disabling-nested-group-searches){target="_blank"}.

**How to Set**

**Running Commands** in `wsadmin`

1. Navigate to the `wsadmin` tool:

    ```
        <WASRoot>/bin/wsadmin.sh
    ```

2. Run the following commands:

    ```
    wsadmin>$AdminTask configureAdminWIMUserRegistry {-customProperties {"com.ibm.ws.wim.registry.grouplevel=1"} }
    wsadmin>$AdminConfig save
    wsadmin>exit
    ```

### Enabling WebSphere and VMM to share group info

In a federated LDAP environment, WebSphere and VMM can share cached information about groups. Setting this up is described in [Reusing group information](../../../../deployment/manage/security/people/authorization/users_and_groups/reuse_group_info.md).

**How to Set**

In the WebSphere Integrated Solutions Console

**Resources** > **Resource Environment** > **Resource Environment Providers** > WP **PumaStoreService** > **Custom properties**

Create a new custom property:

**Name**: `store.puma_default.filter.assertionFilter.classname`

**Value**: `com.ibm.wps.um.AssertionFilter`

## Alternative Configuration Without UX Screen Flow Manager

IIf your deployment does not use the Screen Flow Manager, it can be safely removed. In our testing, removing it resulted in approximately a 2% improvement in throughput. The process for disabling it is described in [Configuration options](../../../../extend_dx/screenflow/cfg_opt.md).
