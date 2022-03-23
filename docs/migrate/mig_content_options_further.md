# Preventing items from being expired during migration 

By default, items with no expiration date defined are automatically expired. Change this setting to prevent automatic expiration from occurring.

1.  Log in to the WebSphere® Integrated Solutions Console.
2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.
3.  Select **WCM WCMConfigService.**
4.  In the **Additional Properties** section, select **Custom Properties**.
5.  Locate the `expire.blankdate.immediately` setting.
    -   If the setting does not exist, add it by clicking **New**. Enter expire.blankdate.immediately for **Name** and false for **Value.** Click **OK** to save the changes.
    -   If the setting does exist, ensure that it is set to `false`. Click to edit the setting. Enter false for **Value.** Then, click **OK** to save the changes.

When you click **OK**, a message box appears that prompts you either to save your changes directly to your master configuration or to review your changes before you save them. Click **Save** to save your changes directly or **Review** to review them before saving.

**Parent topic:**[Preparing Web Content Manager content ](../migrate/wcm_specific_steps.md)

