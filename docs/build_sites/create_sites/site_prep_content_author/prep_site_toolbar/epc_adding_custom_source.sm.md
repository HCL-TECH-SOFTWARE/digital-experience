# Configuring the behavior of toolbar tabs

You can use the following page parameters to configure the main properties of your toolbar tabs.

The page parameters can either be set through the **Manage Pages** admin portlet or by using the XML configuration interface. If you want to use the **Manage Pages** admin portlet, you need to go to the respective toolbar page first. Toolbar pages are listed as children pages to the hidden page Toolbar Content Root. To set the parameters, select the **Edit Page Properties** icon, expand the Advanced options, and select the **I want to set parameters** link. Close and reopen the toolbar to implement and view your changes.

-   **`ibm.portal.toolbar.reloadOnResize = true | false`**

    This page parameter indicates whether you want your toolbar tab to be reloaded automatically if a resize event occurs in your browser window. Depending on how your content is rendered, it might be useful to set this parameter to true. Defaults are set to false.

    If you are using the XML configuration interface, you can set the parameter as follows:

    ```
    <parameter name=“ibm.portal.toolbar.reloadOnResize“ type=“string“ update=“set“>true</parameter>
    ```

-   **`com.ibm.portal.Hidden = true | false`**

    This page parameter shows or hides the toolbar page in the toolbar navigation. If you want to hide the toolbar page, you need to set the value to true. Defaults are set to false.

    If you are using the XML configuration interface, you can set the parameter as follows:

    ```
    <parameter name=“com.ibm.portal.Hidden“ type=“string“ update=“set“>true</parameter>
    ```

-   **`ibm.portal.toolbar.target = "primary" | "secondary"`**

    This page parameter specifies the target toolbar frame that your toolbar page should be displayed in. By default, toolbar pages are displayed in the secondary toolbar frame that overlays the main page. The Site Manager is displayed in the primary frame. This setting might be set for only the first-level toolbar pages, which are direct children of the toolbar content root.

    If you are using the XML configuration interface, you can set the parameter as follows:

    ```
    <parameter name=“ibm.portal.toolbar.target“ type=“string“ update=“set“>primary</parameter>
    ```

-   **`ibm.portal.toolbar.disableStateSynchronization = true | false`**

    The special setting that disables the context synchronization feature for a toolbar tab. If this feature is unavailable, your toolbar page is not reloaded in case of context or navigational state changes in the view frame. Typically, toolbar pages depend on the context, for example on the page that is displayed in the view frame. If your toolbar page displays content that is independent of the current context, you can set the value of this parameter to true to prevent the reloading in case of context changes. Defaults are set to false, which means that the context synchronization feature is enabled.

    If you are using the XML configuration interface, you can set these parameters as follows:

    ```
    <parameter name=“ibm.portal.toolbar.disableStateSynchronization“ type=“string“ update=“set“>true</parameter>
    ```

-   **`ibm.portal.toolbar.width = value`**

    The page parameters specify the width of your toolbar tab. The value of these parameters can either be a floating point number, for example 0.5, or a pixel or percentage value in CSS syntax, for example 300px or 80%. Relative values are relative to the markup container, the toolbar tab is displayed in. For example, if you set the width to 100%, your tab content spans the entire width between the Site Manager and the opposite end of your browser window.

    You can set the width parameters only for toolbar tabs that are displayed in the secondary frame container. The parameters are optional. If you do not set them, the following default values are applied:

    -   ibm.portal.toolbar.width = 100%
    -   ibm.portal.toolbar.minWidth = 360px
    If you are using the XML configuration interface, you can set these parameters as follows:

    ```
    <parameter name=“ibm.portal.toolbar.width“ type=“string“ update=“set“>30%</parameter>
    ```

-   **`ibm.portal.toolbar.minWidth = value`**

    The page parameters specify the width of your toolbar tab. The value of these parameters can either be a floating point number, for example 0.5, or a pixel or percentage value in CSS syntax, for example 300px or 80%. Relative values are relative to the markup container, the toolbar tab is displayed in. For example, if you set the width to 100%, your tab content spans the entire width between the Site Manager and the opposite end of your browser window.

    You can set the width parameters only for toolbar tabs that are displayed in the secondary frame container. The parameters are optional. If you do not set them, the following default values are applied:

    -   ibm.portal.toolbar.width = 100%
    -   ibm.portal.toolbar.minWidth = 360px
    If you are using the XML configuration interface, you can set these parameters as follows:

    ```
    <parameter name=“ibm.portal.toolbar.minWidth“ type=“string“ update=“set“>320px</parameter>
    ```

-   **`ibm.portal.toolbar.maxWidth = value`**

    The page parameters specify the width of your toolbar tab. The value of these parameters can either be a floating point number, for example 0.5, or a pixel or percentage value in CSS syntax, for example 300px or 80%. Relative values are relative to the markup container, the toolbar tab is displayed in. For example, if you set the width to 100%, your tab content spans the entire width between the Site Manager and the opposite end of your browser window.

    You can set the width parameters only for toolbar tabs that are displayed in the secondary frame container. The parameters are optional. If you do not set them, the following default values are applied:

    -   ibm.portal.toolbar.width = 100%
    -   ibm.portal.toolbar.minWidth = 360px
    If you are using the XML configuration interface, you can set these parameters as follows:

    ```
    <parameter name=“ibm.portal.toolbar.maxWidth“ type=“string“ update=“set“>1024px</parameter>
    ```

-   **`ibm.portal.toolbar.height = value`**

    The page parameters specify the height of your toolbar tab. The value of these parameters can either be a floating point number, for example 0.5, or a pixel or percentage value in CSS syntax, for example 800px or 100%. Relative values are relative to the markup container that the toolbar tab is displayed in. For example, if you set the height to 100%, your tab content spans the entire height between the Action bar and the end of your browser window.

    You can set the height parameters only for toolbar tabs that are displayed in the secondary frame container. The parameters are optional. If you do not set them, the following default values are applied:

    -   ibm.portal.toolbar.height = 50%
    -   ibm.portal.toolbar.minHeight = 300px
    If you are using the XML configuration interface, you can set these parameters as follows:

    ```
    <parameter name=“ibm.portal.toolbar.height“ type=“string“ update=“set“>80%</parameter>
    ```

-   **`ibm.portal.toolbar.minHeight = value`**

    The page parameters specify the height of your toolbar tab. The value of these parameters can either be a floating point number, for example 0.5, or a pixel or percentage value in CSS syntax, for example 800px or 100%. Relative values are relative to the markup container that the toolbar tab is displayed in. For example, if you set the height to 100%, your tab content spans the entire height between the Action bar and the end of your browser window.

    You can set the height parameters only for toolbar tabs that are displayed in the secondary frame container. The parameters are optional. If you do not set them, the following default values are applied:

    -   ibm.portal.toolbar.height = 50%
    -   ibm.portal.toolbar.minHeight = 300px
    If you are using the XML configuration interface, you can set these parameters as follows:

    ```
    <parameter name=“ibm.portal.toolbar.minHeight“ type=“string“ update=“set“>320px</parameter>
    ```

-   **`ibm.portal.toolbar.maxHeight = value`**

    The page parameters specify the height of your toolbar tab. The value of these parameters can either be a floating point number, for example 0.5, or a pixel or percentage value in CSS syntax, for example 800px or 100%. Relative values are relative to the markup container that the toolbar tab is displayed in. For example, if you set the height to 100%, your tab content spans the entire height between the Action bar and the end of your browser window.

    You can set the height parameters only for toolbar tabs that are displayed in the secondary frame container. The parameters are optional. If you do not set them, the following default values are applied:

    -   ibm.portal.toolbar.height = 50%
    -   ibm.portal.toolbar.minHeight = 300px
    If you are using the XML configuration interface, you can set these parameters as follows:

    ```
    <parameter name=“ibm.portal.toolbar.maxHeight“ type=“string“ update=“set“>800px</parameter>
    ```


**Note:**

If you do not set the height parameter, but only the minHeight and maxHeight parameters, the toolbar framework resizes the outer toolbar frame to match the height of the rendered content if it is greater than the specified minimum height and less than the specified maximum height.

If the values of the configuration parameters `ibm.portal.toolbar.minHeight` and `ibm.portal.toolbar.maxHeight` are equivalent, the toolbar framework enforces this height, regardless of the size of the tab content that is being loaded.


