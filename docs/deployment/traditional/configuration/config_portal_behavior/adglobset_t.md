# Setting the search engine that opens when users select Find

Specify the search engine that is used when users click Find with the Global Settings portlet.

The Global Settings portlet does not work in portal cluster configurations.

1.  Click the **Administration menu** icon. Then, click **Portal Settings** \> **Global Settings**.

2.  In the field **Use this URL for "Find:"**, enter the URL for the search engine that you want to open when a user selects **Find**.

3.  Restart the portal.

    The portal now displays a **Find:** button in the theme action bar of user pages.

    **Note:** If you use any themes with HCL Portal, you must modify these themes to make the Find function available. To complete this step, include the `<portal:find/>` tag in your theme.

4.  Click **Save**.



