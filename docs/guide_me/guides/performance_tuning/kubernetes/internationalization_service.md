# Internationalization Service Tuning

An internationalized (`i18n`) application can be configured to interact with users from different regions in culturally appropriate ways. The **Internationalization service** allows you to configure and manage an internationalization context for an application.

This feature is required only if your application uses WebSphere i`i18n` classes. If your application code does **not** use the following classes, it is safe to disable this service:

- `com.ibm.websphere.i18n.context.UserInternationalization`
- `com.ibm.websphere.i18n.context.Internationalization`
- `com.ibm.websphere.i18n.context.InvocationInternationalization` 

!!! note
    Portal does not use these classes internally.

## Configuring the Internationalization Service

1. In the the WebSphere Integrated Solutions Console (ISC), go to **Servers > Server Types > WebSphere application servers > WebSphere_Portal > Container Settings: Container Services > Internationalization service**.

2. Uncheck **Enable service at server startup**.

3. Click **Apply**.
