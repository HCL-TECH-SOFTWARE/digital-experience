# Troubleshooting Search V2 Authoring

HCL Digital Experience (DX) log files record application events that are used for troubleshooting. The following sections describe two methods to enable logging and tracing for Search V2 Authoring to capture detailed information.

## Server-side tracing

You can use a DX trace string to enable logging on the WebSphere Application Server for all users. The following trace strings can be used for different levels of logging. Keep in mind that DEBUG includes all INFO and ERROR messages, and INFO includes ERROR messages.

1. Log in to your HCL DX environment as an administrator (wpdadmin).
2. Navigate to **Administration > Tracing**.
3. In the **Current trace settings:** text box, enter the following tracing string based on your troubleshooting needs:
    - **Full logging**: `hcl.logging.search-v2.DEBUG.client.*=all`
    - **Logging all Search V2 components only**: `hcl.logging.search-v2.DEBUG.client.ui.*=all`
    - **Logging all AC web components only**: `hcl.logging.search-v2.DEBUG.client.web-components-lib.*=all`

    ![](../../assets/HCL_SearchV2_Authoring_Advance_Search_Filter_Logs.png)

## Client-side tracing

You can also enable logging through client-side tracing using your browser's developer tools.

1. Open your browser's developer tools.
2. Navigate to the **Applications** tab.
3. Under **Session storage**, select the page you want to trace.
4. Right-click and select **Add new**.
5. Enter the following **Key** and **Value** pairs depending on your troubleshooting needs:

    |Type of logging|Key|Value|
    |---|---|---|
    |Full logging|`debug`|`DEBUG:client:`|
    |Logging all search V2 components only|`debug`|`DEBUG:client:ui:`|
    |Logging all AC web components only*|`debug`|`DEBUG:client:web-components-lib:`|

    ![](../../assets/HCL_SearchV2_Authoring_Advance_Search_Filter_Logs_Using_Session_Storage.png)