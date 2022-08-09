# URL normalization for search of portal pages by external search engines

You can configure the normalization of the URL of your portal. URL normalization is required to enable external search engines to crawl the content of your portal.

For this purpose, URL normalization runs the following actions:

-   It removes all elements from a portal page URL that are used for portal internal purposes. For example, it removes actions that are coded into the URL and change the portal state.
-   It reduces the portal page URL to those elements that are required for a crawler to read the URL and crawl the portal page.

You can use the following properties to configure the normalization of the URL of your portal.

-   **com.ibm.wps.state.outputmediators.OutputMediatorFactory.normalization\_xsl\_file =     \( UrlNormalization\_MIN.xsl \)**

    Use this property to specify the XSL style sheet file that defines the transformation that you want to use to normalize the portal URL. This property needs to be set all on one line and concatenated. The default value is `UrlNormalization_MIN.xsl`. The following two files are available to allow for a minimum or maximum transformation:

    -   **UrlNormalization\_MIN.xsl**

        This XSL style sheet contains the states for `portlet-mode, window-state, renderparameters, selection`, and `locale` in the normalized URL. This transformation represents the minimum set of states that must be defined in the URL. All other states are removed from the URL. This value is the default.

    -   **UrlNormalization\_MAX.xsl**

        This XSL style sheet contains the states for `portlet-mode, window-state, renderparameters, selection, solo, locale`, and `screen-template`. This maximum transformation represents the set of states that can be defined in a normalized URL for a web crawler. All other states are removed from the URL.


The meaning of the different states that are listed for the minimum and maximum normalization style sheets is as follows:

-   **portlet-mode**

    Portlet modes allow a portlet to display a different user interface, depending on the task that the user performs with the portlet. A portlet has five modes of display: `view, help, edit, edit_defaults, config`.

-   **window-state**

    Portlet states allow users to change how the portlet window is displayed within the portal. Users can choose from three different states: maximized, minimized, normal.

-   **renderparameters**

    Parameters set to render a portal page.

-   **selection**

    Defines the selected portal page.

-   **solo**

    A portlet can also be displayed in solo state. Solo state hides the portal theme elements, such as a banner, page navigation, or toolbar.

-   **locale**

    Defines the language in which the page is presented.

-   **screen-template**

    Defines the screen that is used on the portal page.

-   **theme-template**

    Defines the theme that is used on the portal page.


You can also set up your own URL normalization. You can implement a URL normalization that is different from the URL normalization that is provided by the two XSL style sheets that come with the portal. To do so, create your own XSL style sheet and set it as the value for the URL normalization parameter:

1.  Here is an example for creating your own XSL style sheet:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    	    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes"/>
    
         <xsl:template match="text()">
         </xsl:template>
    
         <!-- Traverse through the tree starting at the root element -->
         <xsl:template match="root">
              <xsl:copy>
                   <xsl:copy-of select="@*"/>
         <!-- Search for the state node with the attribute type = navigational -->
                   <xsl:apply-templates select="state[@type='navigational']"/>
              </xsl:copy>
         </xsl:template>
    
         <!-- Selection of all states which should stay coded in the URL -->
         <!-- Allowed States: portlet-mode, window-state, renderparameters (param, value, text), 
            selection, solo, locale , screen-template -->
         <xsl:template match="state">
              <xsl:copy>
                   <xsl:copy-of select="@*"/>
                   <xsl:apply-templates select=" . . . "/>
    . . .
              </xsl:copy>
         </xsl:template>
    
    . . . 
    . . . 
    . . . 
    
    </xsl:stylesheet>
    
    ```

2.  Set the name of the new XSL style sheet as the value for the URL normalization parameter:

    ```
    com.ibm.wps.state.outputmediators.OutputMediatorFactory.normalization_xsl_file = 
         UrlNormalization_Your\_Own\_Style\_Sheet\_File\_Name.xsl
    ```


**Parent topic:**[State Manager Service](../admin-system/srvcfgref_state_mgr.md)

