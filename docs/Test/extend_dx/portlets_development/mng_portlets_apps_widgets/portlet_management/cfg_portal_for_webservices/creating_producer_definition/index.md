# Creating a Producer definition



A Producer is a portal that provides portlets. Consumer portals can then consume remote portlets through WSRP. To enable your portal for consuming remote portlets, you create and configure a Producer definition.

To work with the **Web Service Configuration** portlet, click **Administration** \> **Portlet Management** \> **Web Services**.

If you want to consume remote portlets from a Producer, create a new Producer definition. To do so, proceed by the following steps:

1.  Click **New Producer**.

    Web Service Configuration displays the Create New Producer panel. Work with the fields and options as described in the following steps.

2.  Type a title for the new Producer in the **Title** field.

    This field is mandatory.

3.  Type a description for the new Producer in the **Description** field.

    This field is optional.

4.  Check whether the default **URL to WSDL service definitions** shows the correct URL. If not, change it and type the URL under which the WSDL service definitions of the new Producer can be accessed.

    This field is mandatory. You get this information from the Producer.

    For example, if the WSRP Producer is an HCL Digital Experience, you can access the WSDL document of the Producer at the following URL: `http://producer\_portal\_host:producer\_port/wp\_contextRoot/wsdl/wsrp_service.wsdl`. The host and port and the `wp\_contextRoot` directory must match those values of the Producer portal installation.

5.  You can specify user attributes that you want to be passed on to this Producer by proceeding as follows:

    1.  Click the link **I want to specify the user attributes that should be passed to this Producer**.

        The portal displays the panel for selecting user attributes.

    2.  Select user attributes as required by clicking the appropriate check boxes.

    3.  Click **OK** to save your selection or **Cancel** to return without saving.

        The portal returns to the panel for configuring the new Producer.

6.  Click **Next**.

    The portal shows the next panel. It shows the settings for the Service description, Management, Markup, and Registration ports:

    -   Whether this port supports HTTP.
    -   Whether this port supports HTTPS.
    -   Which transport protocol is selected.
    -   Which service reference is selected.

    You can edit the configuration for the ports by proceeding as follows:

    1.  Click the **Edit** icon for the port that you want to modify.

        The portal displays the panel for configuring the port.

    2.  Type HTTP or HTTPS URLs into the appropriate fields as required.

    3.  Select one of the options for the transport protocol:

        -   HTTP
        -   HTTPS
        -   Dynamic. This option is only available for the Markup port, and only if the Producer configured this port for both HTTP and HTTPS.

    4.  From the drop-down list, select a service reference as required.

    5.  Click **OK** to save your data or **Cancel** to return without saving.

        The portal returns to the panel for configuring the new Producer.

7.  Click **Next** to save your data and proceed creating the Producer, or click **Cancel** to return to the panel that shows the security information.

8.  This step applies only if the Producer supports registration. In this case, the portal displays the panel for setting registration information. Set the registration information as required.

    Depending on whether you want to register with the Producer offline or online, select one of the following options:

    -   For offline registration, enter the registration handle. You get the registration handle from the Producer. Only Consumers to whom the Producer gave a registration handle can consume the web services of that Producer. To enter the handle, proceed as follows:
        1.  Select the option **Enter a registration handle**. The portal displays the panel for entering the registration handle.
        2.  Type the registration handle into the input field.
        3.  Click **Next** to save your data and proceed creating the Producer, or click **Cancel** to return to the panel for selecting the type of registration without saving.
    -   If the Producer supports registration properties, you can add them for online registration. These properties are passed on to the Producer during the registration. To add them, proceed as follows:
        1.  Select the option **Enter registration properties**. The portal displays the panel for setting registration properties.
        2.  Type a new property and its value in the entry fields **New parameter** and **New value**.
        3.  To add the new property, click **Add**.
        4.  Edit or delete properties as required by clicking the **Edit** and **Delete** icons.
        5.  Click **Next** to save your data and proceed creating the Producer, or click **Cancel** to return to the panel for selecting the type of registration without saving.
    For more information about registration handles and properties, see to the section about WSRP in the portal information center.

9.  Depending on your previous steps and actions, you might have to click **Next** again to save the new Producer definition or **Cancel** to return without saving.

    The portal returns to the Producer list. The newly created Producer was added to the list.


Use the Manage Web Modules portlet to consume web services.

-   **[Setting registration properties for web service Producers](../creating_producer_definition/reg_prop/index.md)**  
On the Consumer portal, you can create registration properties for a web service Producer.
-   **[Setting user attributes to be passed to a web service Producer](h_wserv_set_user.md)**  
You can set user attributes that you want to be passed on to the web service Producer. The values for the selected attributes are passed on to the Producer when your portal users use the Producer's portlet. For example, if you select the attribute for user name, the user's name is passed on to the Producer. As a result, the Producer's portlet can address your portal users by their names. Setting user attributes is optional.

