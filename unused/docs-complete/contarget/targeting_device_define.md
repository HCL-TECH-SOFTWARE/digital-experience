# Defining your device classes 

When you target content to a segment based on device classes, ensure that the device classes are installed and enabled in portal.

By default, the smartphone and tablet device classes are already defined for you. You can use these device classes in rules that you create. If your mobile device is not recognized by using the default smartphone or tablet device classes, you can add your device as a client to these default classes. To add your device go to **Add new client**. Click the **Administration menu** icon. Then, click **Portal Settings** \> **Supported Clients**. Then, click **Add new client**. You can also create an XML script to add your device.

When you add your device to the default classes, your device inherits and uses the responsive web design theme when it displays content. You can import the XML file. Click the **Administration menu** icon. Then, click **Portal Settings** \> **Import XML**. You can also run the XML access directly to import the XML file.

You can also create custom device classes rather than using the default classes. Clients that are assigned to custom classes use the desktop theme. For custom classes to have a responsive theme based on the type of device, you must develop custom themes for your class. For more information, see the *Responsive Web Design* section.

To add a client to a device class, you need, at a minimum, the following information about your device:

-   User-agent pattern
-   Manufacturer
-   Model
-   Client capability

Use the table to learn more about the options available to you for defining device classes.

|Option|Description|
|------|-----------|
|Add client definitions to already defined device classes. The smartphone and tablet device classes are examples of device classes that are provided to you by default.|1.  Click the **Administration menu** icon. Then, click **Portal Settings** \> **Supported Clients**.Then, click **Add new client** to enter information about the client.

**Note:** Refer to the product help for more detailed instructions for adding new clients.

2.  In the**User Agent** field, enter the name of the client. For example, enter \*.useragent.\*
3.  In the **Manufacturer** field, enter the name of the company that manufactured the client.
4.  In the **Model** field, enter the model number or name of the client.
5.  In the **Capabilities** field, enter the specific capabilities of the client, and click **Add**.

To add tablet capabilities, enter the following information:

    ```
com.ibm.portal.devicesupport.deviceclass=tablet
HTML_4_0 
    ```

To add smartphone capabilities, enter the following information:

    ```
com.ibm.portal.devicesupport.deviceclass=smartphone 
HTML_4_0 
    ```

6.  From the **Position** menu, select the order in which you want this client to be entered in the client registry. It is recommended to place the most specific user agent patterns at the beginning of the list.
7.  Click **OK** to save the new client that you added.

|
|Create client definitions, and add to existing device classes.|You can also create client definitions through an XML file that contains the device information. For more information, see the *Device classes* topics in the *Developing Themes and Skins* section for more information and examples.|
|Create custom class definitions, and add client information to your class definitions.|Class definitions might also be created through an XML file that contains the class information. After you create your device class, you must add appropriate clients by using XML. You might need to create a custom theme for this class. For more information, see the *Device classes* topics in the *Developing Themes and Skins* section for more information and examples.|

**Parent topic:**[Device class attribute ](../contarget/targeting_device.md)

**Parent topic:**[Device class attribute ](../contarget/targeting_device.md)

