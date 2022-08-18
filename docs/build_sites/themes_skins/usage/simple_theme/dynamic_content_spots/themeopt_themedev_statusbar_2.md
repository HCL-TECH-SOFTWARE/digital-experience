# Adding a status bar to the Simple Theme

The status bar is an optional feature that displays system messages.

The status bar displays error, warning, and informational messages at the beginning of the page. For example, if you try to add restricted content to a page, a message appears in the status bar that explains the restriction. By default, the Simple Theme does not include the status bar, but you can add one in a new custom dynamic content spot.

1.  Create a WAR file by opening Eclipse and clicking **File** \> **New** \> **Dynamic Web Project**.

2.  Create the following directory structure beneath your WebContent directory: WebContent/themes/html/YourResourceRootDirectory. The resource root directory is referenced in the XML file that you use to deploy your new WAR file. In this example, the resource root directory is customDynamicSpots.

3.  Create a status JSP by using the following sample code:

    ```
    <%@ page session="false" buffer="none"%>
    <%@ page trimDirectiveWhitespaces="true"%>
    <%-- The div in which the statusbar prints out any message it receives --%>
    <div class="wpthemeInner">
       <div id="wpthemeStatusBarContainer" class="wpthemeStatusBarContainer">
          <%-- Renders a message in the status bar alerting the user that javascript is disabled. Javascript is required for the statusbar
                to work --%>
              <noscript>
                <div class="wpthemeMessage" role="alert" wairole="alert">
                  <img class="wpthemeMsgIcon wpthemeMsgIconError"
    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Error" />
                  <span class="wpthemeAltText">Error:</span><div class="wpthemeMessageBody"> Javascript is disabled. You need to enable javascript in order for this theme to operate properly.</div>
              </div>
          </noscript>
       </div>
    </div>
    ```

4.  Create a plugin.xml file in your WebContent directory by using the following sample code:

    **Note:** This sample code uses the dynamicContentSpots directory, which holds the JSP file.

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <plugin id="com.yourcompany.customtheme" name="Custom Theme Modules" provider-name="Your Company" version="1.0.0">
       <extension id="wp_dynamicContentSpots_custom"
    point="com.ibm.portal.resourceaggregator.module">
          <module id="wp_dynamicContentSpots_custom">
             <contribution type="dyn-cs">
                <sub-contribution type="markup" ref-id="theme_status">
                   <uri value="mc:wp_status_bar@res:{war:context-
    root}/themes/html/customDynamicSpots/status.jsp"/>
                </sub-contribution>
             </contribution>
          </module>
       </extension>
    </plugin>
    ```

5.  To create the WAR file, right-click on the project and select **Export** \> **WAR file**.

6.  Install the WAR file.

    1.  Log in to the WebSphere® Integrated Solutions Console.

    2.  Click **Applications** \> **Application types** \> **WebSphere enterprise application**. Then, click **Install**.

    3.  Select your WAR file and click **Next**.

    4.  Select **Fast Path** and click **Next**.

    5.  Click **Next** to accept the default settings that are presented in next several pages. Stop when you reach the page entitled Map context roots for web modules.

    6.  On the page entitled Map context roots for web modules, set your context root. You will refer to this context root when you deploy the WAR file. In this example, the context root is `/custom-dyn-cs`.

    7.  Save your changes. From the list of applications, select your WAR file and click **Start**.

7.  Deploy the WAR file by creating a new XML file. You can use the following sample code to create the file:

    1.  Create an XML file. You can use the following sample code to create the file:

        ```
        <?xml version="1.0" encoding="UTF-8"?>
        <request
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:noNamespaceSchemaLocation="PortalConfig_8.0.0.xsd"
           type="update" create-oids="true">
           <portal action="locate">
              <skin action="update" active="true" context-root="/wps/simpleTheme" default="false" domain="rel"
        objectid="ZK_00000000000000AQ78VEJK2001" resourceroot="Standard" type="default"
        uniquename="ibm.portal.SimpleStandard">
                 <localedata locale="en" prefix="skin.standard">
                    <title>Simple - Standard</title>
                 </localedata>
              </skin>
              <theme action="update" active="true" defaultskinref="ZK_00000000000000AQ78VEJK2001"
        uniquename="theme.dyn-cs.Custom" resourceroot="customDynamicSpots" context-root="/custom-dyn-cs">
                 <localedata locale="en">
                    <title>Custom Dynamic Content</title>
                 </localedata>
                 <parameter name="com.ibm.portal.Hidden" type="string" update="set"><![CDATA[true]]></parameter>
              </theme>
           </portal>
        </request>
        ```

    2.  Navigate to your Portal site. Click the **Administration menu** icon. Then, click **Portal Settings** \> **Import XML**.

    3.  Select your XML file and click **Import**.

8.  Add the new module to your profile.

9.  Add your new custom dynamic content spot to the theme template as the first element in the MainContent directory by using the following code string: `<a rel="dynamic-content" href="dyn-cs:id:theme_status"></a>`.


The status bar is now added to your Simple Theme.

**Parent topic:**[Dynamic content spots](../dev-theme/themeopt_themedev_dynamic_content_spots.md)

