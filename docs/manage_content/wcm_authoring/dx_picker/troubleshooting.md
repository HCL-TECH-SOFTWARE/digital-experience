# Troubleshooting DX Picker

HCL Digital Experience (DX) log files record application events that are used for troubleshooting. The following section describe the method to enable logging and tracing for DX Picker to capture detailed information.

## Client-side tracing

You can enable logging through client-side tracing using your browser's developer tools.

1. Open your browser's developer tools.
2. Navigate to the **Applications** tab.
3. Under **Local storage**, select the page you want to trace.
4. Right-click and select **Add new**.
5. Enter the following **Key** and **Value** pairs depending on your troubleshooting needs:

    |Type of logging|Key|Value|
    |---|---|---|
    |Full logging|`debug`|`DEBUG:client:*`|
    |Logging main components in DX Picker only|`debug`|`DEBUG:client:dx-picker:*`|
    |Logging all search V2 components only|`debug`|`DEBUG:client:ui:*`|
    |Logging all AC web components only*|`debug`|`DEBUG:client:web-components-lib:*`|