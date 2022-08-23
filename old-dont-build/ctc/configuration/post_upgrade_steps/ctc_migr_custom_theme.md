# How to upgrade a custom theme

When upgrading, only the default HCL Portal theme is upgraded. If you have previously created any custom themes, you need to make these changes to access the new features in Content Template.

Copy the following files into your custom theme:

-   Copy profile\_ctc\_deferred.json from **themes** \> **Portal8.5** \> **profiles** to **themes** \> **custom\_theme\_name** \> **profiles**.
-   Copy ctc.json from **themes** \> **Portal8.5** \> **profiles** \> **contributions** to **themes** \> **custom\_theme\_name** \> **contributions**.
-   Copy all files and folders from **themes** \> **Portal8.5** \> **CTC** to **themes** \> **custom\_theme\_name** \> **CTC**.
-   Copy the file CtcLayouts.json from **themes** \> **Portal8.5** \> **system** to **themes** \> **custom\_theme\_name** \> **system**.
-   Copy the file CtcStyles.json from **themes** \> **Portal8.5** \> **system** to **themes** \> **custom\_theme\_name** \> **system**.
-   Copy the file ctc.json from **themes** \> **Portal8.5** \> **contributions** to **themes** \> **custom\_theme\_name** \> **contributions**.
-   Copy the file profile\_ctc\_deferred.json from **themes** \> **Portal8.5** \> **profiles** to **themes** \> **custom\_theme\_name** \> **profiles**.

**Note:** When you copy these files and folders, they overwrite any changes that are already made to existing files.

A new "ctc" module now references all the dependencies for Content Template. You can replace the following modules with "ctc" in your custom profile:

-   ctc\_theme
-   ctc\_content
-   ctc\_theme\_responsive
-   ctc\_content\_responsive
-   ctc\_theme\_devices
-   ctc\_content\_devices
-   ctc\_content\_script


