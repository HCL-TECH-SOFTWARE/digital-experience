# Configuring cookies and active content filtering 

You can configure the Syndicated Feed portlet to forward HTTP cookies with outbound requests to feed sources, or restrict the portlet to forward cookies only to specific domain names. You can also enable active content filtering for all feeds to remove active content such as Java script from the feed text.

1.  Log in to HCL Digital Experience as an administrator.

2.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Portlets**.

3.  Locate the Syndicated Feed portlet.

4.  Click the **Configure portlet** icon in the **Syndicated Feed Portlet** row.

5.  Add the following preference and value pairs as appropriate to configure the portlet:

    |Preference|Value|
    |----------|-----|
    |cookiesToForward|Specify one or more HTTP cookie names. Use a space to separate multiple cookie names. This preference forwards the specified cookies with the outbound portlet request when you connect to the feed source.**Note:** You can specify cookies to forward for a given feed when you add feeds to the portlet. The cookies that you specify as the value for cookiesToForward are appended to the list of cookies you specified when you added the feed.

|
    |limitCookiesToForward|Specify one or more domain names to which you want to forward cookies. This preference restricts cookie forwarding to only the domain names that you specify.You can specify a fully qualified domain name or a partially qualified domain name. For example,

    -   Fully qualified domain name: www.ibm.com
    -   Partially qualified domain name: ibm.com
|
    |useACF|Specify one of the following values:    -   **true**

Enables active content filtering for all feeds. This value removes any active content from the feed text; for example, embedded Java™ scripts.

    -   **false**

Disables active content filtering for all feeds.

|

6.  Click **OK** to save your changes.


**Parent topic:**[Syndicated Feed Portlet for HCL Digital Experience](../admin-system/ic_syndfeed_features.md)

