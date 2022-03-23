# Configuring search attributes in the directory search portlet 

You can configure the search attribute in the directory search dialog.

1.  Log on to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Find and click the **WP PeopleService** resource environment provider. The resource environment provider name is case sensitive.

4.  Click **custom properties**.

5.  Click the custom properties page and configure the values for the following properties:

    -   **`pickerPeopleSearchAttribute`**

        Governs the Portal People Picker search attributes for a user. Use four attributes at a time.

        default value : cn,displayName,sn,givenName

    -   **`pickerGroupSearchAttribute`**

        Governs the Portal People Picker search attributes for a group. Use one attribute at a time.

        default value : cn

6.  Restart HCL Digital Experience server to reflect the changes.


**Parent topic:**[Directory Search ](../collab/i_coll_r_por_dirs.md)

