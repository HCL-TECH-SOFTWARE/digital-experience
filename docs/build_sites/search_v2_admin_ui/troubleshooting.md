# Troubleshooting the Search Admin UI

HCL Digital Experience (DX) log files record application events used for troubleshooting. The following section describes how you can enable logging and tracing for the Search Admin UI to capture detailed information.

## Client-side tracing

You can enable logging through client-side tracing using your browser's developer tools.

1. Open your browser's **Developer Tools**.
2. Navigate to the **Applications** tab.
3. Under **Local storage**, select the page you want to trace.
4. Right-click and select **Add new**.
5. Enter the following **Key** and **Value** pair:

    |Type of logging|Key|Value|
    |---|---|---|
    |Logging the Search Admin UI|`debug`|`DEBUG:client:admin-ui:*`|
