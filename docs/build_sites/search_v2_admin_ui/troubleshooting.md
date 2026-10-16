# Troubleshoot the Search Admin UI

HCL Digital Experience (DX) log files record application events used for troubleshooting. Enable logging and tracing for the Search Admin UI to capture detailed diagnostic information.

## Enabling client-side tracing

1. Open your browser's developer tools.
2. Select the **Applications** tab.
3. Under **Local storage**, select the page you want to trace.
4. Right-click and select **Add new**.
5. Enter the key and value:
    - In the **Key** field, enter `debug`.
    - In the **Value** field, enter `DEBUG:client:admin-ui:*`.
