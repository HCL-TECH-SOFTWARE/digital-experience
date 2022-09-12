# Installing the Unica Discover module for Digital Experience integration

Learn how to install the Unica Discover module for HCL Digital Experience integration.

## Prerequisites

Before you can integrate HCL Digital Experience with HCL Unica Discover, you must install and configure the following:

-   HCL Utica Discover
-   HCL Digital Experience 9.5 Container Update CF192 and later

You can configure your HCL Digital Experience site theme integration with HCL Unica Discover depending on your deployed Unica Discover architecture. You have the following options:

-   **Option 1 – Integration without a proxy**

    For this option, you set up a theme module that uses a JavaScript file that posts all the needed data on an HCL DX page to Unica Discover.

-   **Option 2 – Integration using a proxy**

    For this option, a proxy between the HCL Digital Experience and Unica Discover servers is established. This uses the HCL DX Discover.ear as well as the additional theme module. You also need to set up a proxy in HCL Digital Experience, follow the instructions in the HCL Digital Experience Help Center topic: [Outbound HTTP connection](https://help.hcltechsw.com/digital-experience/9.5/dev-portlet/outbound_http.html).


## Install the HCL Discover.ear file

You would install the HCL DX Discover.ear only if you want to set up a proxy between HCL DX and Unica Discover. Follow these steps to install the HCL Discover.ear file.

1.  From an HCL Digital Experience 9.5 Container Update CF192 and later, get the Discover.ear file from the PortalServer/doc/discover folder and install it using the HCL Digital Experience WebSphere Application Server console. The Unica Discover.ear file contains the application that installs the DiscoverUIPost.JSP file required by Unica Discover for the proxy architecture.
2.  After getting the Discover.ear file, upload the file and install it using the WebSphere Application Server console:
    1.  Navigate to the WebSphere Application Server console.
    2.  Navigate to **Applications** \> **Application Types** \> **WebSphere Enterprise Applications**.
    3.  Click install, and select and open the Discover.ear file. Follow the prompts to complete the installation.

        ![Select and start the Discover module from the administration panel](../../../images/Select%20and%20start%20the%20Discover%20module%20from%20the%20administration%20panel.png)

3.  When completed, select the **Discover** module and start it from the WebSphere Application Server console.

    ![Upload the HCL DX Discover.ear file and install using WebSphere Enterprise Applications](../../../images/WebSphere%20Enterprise%20Applications.png "Select and start the Discover module from the administration panel")


## Enable HCL Unica Discover integration in the Digital Experience Theme

Follow these steps to enable HCL Unica Discover integration with HCL Digital Experience Theme.

1.  Copy the **discover** and **pako** simple modules from PortalServer\_root/doc/Discover folder to the theme modules.

    **For WebDAV-based themes:**

    ```
    Mycontenthandler/dav/fs-type1/theme/{custom-theme]/modules
    ```

    **Example:**

    ![Copy the Discover integration modules to the DX theme modules](../../../images/Copy%20the%20Discover%20integration%20modules%20to%20the%20DX%20theme%20modules.png)

    **For WAR-based themes:**

    Include it in the WAR file. Restart the server after installation.

2.  After copying the folder with the JS files, update the Theme profile JSON file as follows:

    Add the `Unica Discover_[versionnumber]` in `modulesIDs`. It should be the first item. You can find the Unica Discover release version number by finding the `Discover_v.xx` module in the PortalServer/doc/Discover folder.

    -   **Tip**: Open the Discover.js file and search for `“getLibraryVersion”`.

    ![Add the Unica Discover version number to the DX Theme profile](../../../images/Add%20the%20Unica%20Discover%20version%20number%20to%20the%20DX%20Theme%20profile%20.png "Add the Unica Discover version number to the DX Theme profile ")

3.  After adding the HCL Unica Discover version number ID to the profile JSON file, proceed to invalidate the theme cache.

    Go to the Practitioner Studio menu and navigate to **Theme** \> **Analyzer** \> **Utilities** \> **Control Center** page in Practitioner Studio as shown below. Select the **Click to invalidate** link under **Invalidate Cache**.

    ![Invalidate the Theme Cache using Practitioner Studio](../../../images/Invalidate%20the%20Theme%20Cache%20using%20Practitioner%20Studio.png "Invalidate the Theme Cache using Practitioner Studio")


## Troubleshooting

Verify the integration between the HCL Unica Discover and HCL Digital Experience Theme by using the Network Tab Tools from your browser.

1.  After you execute the **Invalidate Cache** step outlined in the previous section, proceed to turn on Remote Debugging. Refer to the previous figure example for the Remote Debugging command interface.
2.  Go to the HCL Digital Experience Theme and open a Google Chrome browser Network tab.

    **Example:**

    ![Open a browser Network tab to view activity](../../../images/Open%20a%20browser%20Network%20tab%20to%20view%20activity2.png "Open a browser Network tab to view activity")

    Any event or DOM changes made sends a network request to the DiscoverUIPost.jsp \(if using proxy\) or the configured endpoint in the Discover.js. This means the HCL DX Discover module is installed successfully and is sending data to the configured endpoint.


## Additional Setup Considerations

Additional information and modifications to the HCL Digital Experience Discover.js file may be required depending on the environment setup for the HCL DX site and the Unica Discover server communications.

As noted in **Option 2**, for example, you may need to add a proxy in the HCL DX environment to connect to the Unica Discover server. To set up a proxy in HCL Digital Experience, follow the instructions in the HCL Digital Experience Help Center topic: [Outbound HTTP connection](../../../extend_dx/portlets_development/web2_ui/outbound_http_connection/index.md).

Additional configuration for appropriate HCL Unica Discover capture and replay may also be required.

See the [HCL Unica Discover Help Center](https://help.hcltechsw.com/UnicaDiscover/12.1.0/en/index.html) for information on Unica Discover services, including session replay to assess the effectiveness of your DX site pages with end user audiences.

**Example:**

![Review Digital Experience session replay from Unica Discover](../../../images/Review%20Digital%20Experience%20session%20replay%20from%20Unica%20Discover%20DX-updated.png "Review Digital Experience session replay from Unica Discover")


