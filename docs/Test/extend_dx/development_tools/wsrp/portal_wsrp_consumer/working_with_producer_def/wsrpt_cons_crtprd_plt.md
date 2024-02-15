# Using the Web Service Configuration portlet to work with Producer definitions online

If you work online, you can use the Web Service Configuration portlet to create a Producer definition.

!!!note
    Creating the Producer definition by using the Web Service Configuration portlet works only if both the Producer portal and the Consumer portal are online. Under this condition, the Consumer portal can connect to the Producer portal and to all files that are referenced in the Producer's WSDL service definition. If one of the portals is offline and you want to create a Producer definition on the Consumer portal, you must use the XML configuration interface. For example, this case can occur if you prepare your Consumer portal in a staging environment and do not connect to the Producer portal to use WSRP services until you transfer your portal to the next stage.

When you create a new Producer definition, you do the following tasks:

1.  Define the name for the new Producer definition.
2.  Give a description for the Producer definition.
3.  Specify the URL for the WSDL service description document of the Producer portal.
4.  Specify the registration handle for the Producer.

Optionally, you can also do the following tasks:

-   Set registration properties for the Producer definition.
-   Set user attributes that you want to be passed on to the Producer.
-   Set language-specific names and descriptions for the Producer definition.
-   Assign access permission to your portal users on a Producer definition.
-   Delete a Producer definition from your portal.

After you create a Producer definition, you can proceed to using the portlets that are provided by that Producer, that is, integrating them into your Consumer portal as remote portlets.

To work with the **Web Service Configuration** portlet, click the **Administration menu** icon. Then, click **Portlet Management > Web Services**.

For details about how to work with the portlet, refer to the portlet help.


