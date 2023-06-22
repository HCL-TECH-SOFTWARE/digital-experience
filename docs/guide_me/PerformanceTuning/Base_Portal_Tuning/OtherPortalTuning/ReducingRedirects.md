# Reducing Redirects

## Enabling Base URLs in Themes
Enabling base URLs reduces redirects and URL generation computations. This benefit is seen on the default
themes shipped with Portal 6.1.5 through 8.5, as well as themes derived from those.

When enabling base URLs, in many configurations the **host.name** property needs to be set in **WP ConfigService**. The host name should be set to the value that an end user knows Portal as. For example if a reverse proxy is used, or virtual portals are used, the host.name in **WP ConfigService** resource environment provider should be the name of the reverse proxy or virtual portal.

### How to Set

1. Create a file named redirectoff.xml with the following contents

<?xml version="1.0" encoding="UTF-8"?>
<request build="wpnext_372_01" type="update" version="8.0.0.0"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:noNamespaceSchemaLocation="PortalConfig_8.0.0.xsd">
<portal action="locate">
<theme action="update" uniquename="ibm.portal.85Theme">
<parameter name="com.ibm.portal.theme.hasBaseURL"
type="string"update="set">true</parameter>
</theme>
</portal>
</request>

2. From the command prompt use the XMLAccess tool to import the following xml file.

**Windows**: xmlaccess.bat -in redirectOff.xml -user <portal adminID> -password <portal admin
password> -url http://<hostname>:10039/wps/config

**Unix**: ./xmlaccess.sh -in redirectOff.xml -user <portal adminID> -password <portal admin
password> -url http://<hostname>:10039/wps/config

## Eliminate Redirect on the Login Form

To avoid redirect on the login form page it is necessary to modify a theme JSP file with a text editor.

If using authentication proxies or single sign on (SSO) solutions, the redirect should be left enabled. This will
ensure that the login is redirected to the correct 3rd party URL for user transparent authentication.

### How to Set

- Modify the content of the JSP file

<ServerRoot>/PortalServer/theme/wp.theme.themes/default85/installedApps/DefaultTheme85.ear/DefaultTheme85.war/themes/html/dynamicSpots/commonActions.jsp.

- Change the **highlighted** fields in this part of the file from this:

<portal-navigation:urlGeneration allowRelativeURL="true" keepNavigationalState="false"
contentNode="wps.content.root" home="protected" >

<a href='<% wpsURL.write(escapeXmlWriter); %>' ><portal-fmt:text key="link.login"
bundle="nls.engine"/></a>
</portal-navigation:urlGeneration>

- To this:

<portal-navigation:urlGeneration allowRelativeURL="true" keepNavigationalState="false"
contentNode="wps.Login" home="public" >

<a href='<% wpsURL.write(escapeXmlWriter); %>' ><portal-fmt:text key="link.login"
bundle="nls.engine"/></a>
</portal-navigation:urlGeneration>

If a custom login page is used, make sure the **contentNode** matches the unique name of your login page. In the previous example it was **wps.Login**. You can find the unique name of your login page under Portal Administration → Manage Pages. The login page is typically found in ‘Content Root’ → ‘Hidden Pages’.


