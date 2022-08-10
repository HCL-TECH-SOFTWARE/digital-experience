# Configuring display attributes in the directory search portlet

You can configure the display attributes in the directory search dialog.

1.  Log on to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Find and click the **WP PeopleService** resource environment provider. The resource environment provider name is case sensitive.

4.  Click **custom properties**.

5.  Click the custom properties page and configure the values for following property:

    -   **`pickerDisplayAttribute`**

        Governs the display attributes for the Portal People Picker UI.

        Use two attributes at a time, supported by both users and groups.

        default value : cn,displayName

6.  Restart HCL Digital Experience server to reflect the changes.


**Parent topic:**[Directory Search](../collab/i_coll_r_por_dirs.md)

