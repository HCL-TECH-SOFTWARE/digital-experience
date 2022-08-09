# Cache scope and expiry time settings

There are resources that contribute to the overall remote cache information on a page.

The following information lists the resources that contribute to the overall remote cache information on a **Page**:

-   **remote cache scope**

    -   **Key**

        com.ibm.portal.remote-cache-scope

    -   **Possible values**

        SHARED, NON\_SHARED

    -   **Set with XML Access**

        Yes

    -   **Set with user interface**

        Yes

-   **remote cache expiry**

    -   **Key**

        com.ibm.portal.remote-cache-expiry

    -   **Possible values**

        Time in seconds, given as an integer between -1 and the value \(\(2 to the power of 31\)-1\)

        **Note:** Use the value -1 if you never want the cache to expire.

    -   **Set with XML Access**

        Yes

    -   **Set with user interface**

        Yes

-   **Ignore Access Control in Caches**

    -   **Key**

        com.ibm.portal.IgnoreAccessControlInCaches

    -   **Possible values**

        True false

    -   **Set with XML Access**

        Yes

    -   **Set with user interface**

        Yes


Example for XML access:

```
	<parameter update="set" name="com.ibm.portal.remote-cache-scope" type="string">SHARED</parameter>
	<parameter update="set" name="com.ibm.portal.remote-cache-expiry" type="string">3000</parameter>
	<parameter update="set" name="com.ibm.portal.IgnoreAccessControlInCaches" type="string">true</parameter>

```

The following information lists the resources that contribute to the overall remote cache information for **Themes**:

-   **remote cache scope**

    -   **Key**

        com.ibm.portal.remote-cache-scope

    -   **Possible values**

        SHARED NON\_SHARED

    -   **Set with XML Access**

        Yes

    -   **Set with user interface**

        No

-   **remote cache expiry**

    -   **Key**

        com.ibm.portal.remote-cache-expiry

    -   **Possible values**

        Time in seconds, given as an integer between -1 and the value \(\(2 to the power of 31\)-1\)

        **Note:** Use the value -1 if you never want the cache to expire.

    -   **Set with XML Access**

        Yes

    -   **Set with user interface**

        No


Example for XML access:

```
	<parameter update="set" name="com.ibm.portal.remote-cache-scope" type="string">SHARED</parameter>
	<parameter update="set" name="com.ibm.portal.remote-cache-expiry" type="string">3000</parameter>

```

The following information lists the resources that contribute to the overall remote cache information on a **Portlet Definition**:

-   **remote cache scope**

    -   **Key**

        remote-cache-scope

    -   **Possible values**

        SHARED NON\_SHARED

    -   **Set with XML Access**

        Yes

    -   **Set with user interface**

        No

-   **expiration cache**

    -   **Key**

        EXPIRATION\_CACHE

    -   **Possible values**

        Time in seconds, given as an integer between -1 and the value \(\(2 to the power of 31\)-1\)

        **Note:** Use the value -1 if you never want the cache to expire.

    -   **Set with XML Access**

        Yes

    -   **Set with user interface**

        Yes

-   **remote cache dynamic**

    -   **Key**

        remote-cache-dynamic

    -   **Possible values**

        True falso

    -   **Set with XML Access**

        Yes

    -   **Set with user interface**

        No


**Note:** The Standard Portlet API specification defines the meaning of the `EXPIRATION_CACHE` value. HCL Portal uses this value to determine the lifetime of the portlet's output in a remote cache, just like the remote cache expiry for themes. The remote cache dynamic setting is an optimization to notify the container whether a portlet window can publish remote cache information at render time. The deployment descriptor specification shows how to deal with these settings.

The following information lists the resources that contribute to the overall remote cache information on a **Portlet Window**:

-   **remote cache scope**

    -   **Key**

        remote-cache-scope

    -   **Possible values**

        SHARED NON\_SHARED

    -   **Set with XML Access**

        No, only published during render time

    -   **Set with user interface**

        No

-   **expiration cache**

    -   **Key**

        EXPIRATION\_CACHE

    -   **Possible values**

        Time in seconds, given as an integer between -1 and the value \(\(2 to the power of 31\)-1\).

        **Note:** Use the value -1 if you never want the cache to expire.

    -   **Set with XML Access**

        No, only published during render time.

    -   **Set with user interface**

        No


**Note:** The portlet definition describes the portlet at a deployment time level given in the portlet deployment descriptor. Thus, attributes specified in the deployment descriptor are valid on all occurrences on all pages of this portlet. The portlet window describes the runtime entity for a portlet. While in the rendering phase of a portlet, the portlet can publish values or attributes via an API. Thus, attributes specified while rendering the portlet is portlet instance specific.

Example code snippet for publishing the information at render time:

```
	String paramExpiry = "3000";
	String paramScope = "SHARED";
	renderResponse.setProperty( "portlet.remote-cache-scope", paramScope );
	renderResponse.setProperty( RenderResponse.EXPIRATION_CACHE, paramExpiry );

```

The following information lists the resources that contribute to the overall remote cache information on **Portlet Wide Settings**:

-   **remote cache expiration**

    -   **Key**

        remote.cache.expiration

    -   **Possible values**

        no, property in `WP NavigatorService`

    -   **Set with XML Access**

        No

    -   **Set with user interface**
-   **vary**

    -   **Key**

        vary

    -   **Possible values**

        List of HTTP header fields that can be put into the vary response header

    -   **Set with XML Access**

        No, property in `WP NavigatorService`

    -   **Set with user interface**

        No


**Parent topic:**[Caching](../security/tune_cache.md)

