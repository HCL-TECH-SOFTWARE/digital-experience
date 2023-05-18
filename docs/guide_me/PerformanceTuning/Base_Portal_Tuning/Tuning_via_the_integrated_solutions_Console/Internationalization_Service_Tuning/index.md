# Internationalization Service Tuning

An internationalized (i18n) application can be configured to interact with users from different regions in culturally appropriate ways. The internationalization service enables you to configure and manage an internationalization context for an application.

This feature is needed by the WebSphere i18n classes. If your application code is not using the following
classes, it is safe to disable this service.

-  com.ibm.websphere.i18n.context.UserInternationalization

-  com.ibm.websphere.i18n.context.Internationalization

-  com.ibm.websphere.i18n.context.InvocationInternationalization

!!! note
    Portal does not make use of these classes internally.

## How to Set

In the WebSphere Integrated Solutions Console Servers > Server Types > WebSphere application servers > WebSphere_Portal > Container Services:

- Internationalization service

- Uncheck “Enable service at server startup”.