# Configuring portal user ID conversion based on directory service 

When you use social rendering with an HCL Connections server, you must configure both HCL Digital Experience and HCL Connections against the same directory service. Depending on the directory service that you use, HCL Portal needs to convert the user IDs of portal users to a format that the HCL Connections server accepts. For example, this conversion is required if both HCL Portal and HCL Connections are configured against a Domino Directory service or a Microsoft Active Directory.

To configure the user ID conversion, set the following custom property in the WP Connections Integration Service Resource Environment Provider in the WebSphere® Integrated Solutions Console:

-   **use.userid.conversion**

    Set this property to one the following values:

    -   **true**

        Specify this value if you want to apply the user ID conversion.

    -   **false**

        Specify this value if you do not want the user ID conversion to be applied. This value is the default value.


Supported values for this property are as follows:

1.  Log in to the WebSphere Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Select **WP ConnectionsIntegrationService**.

4.  Under **Additional properties**, click **Custom properties**.

5.  Locate the property `use.userid.conversion`. If this property is not listed yet, create it new.

6.  Set the value for the property `use.userid.conversion` to one of the values that are listed earlier.

7.  Save your changes.

8.  Restart your portal server for the changes to take effect.


**Parent topic:**[Configuring global settings for social rendering ](../social/soc_rendr_cfg_global.md)

