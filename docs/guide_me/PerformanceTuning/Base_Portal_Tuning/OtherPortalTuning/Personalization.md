# Personalization (PZN)

Some personalization (PZN) features require processing on every page request. If these are not needed, they can be disabled for better performance. Note that even with the below features disabled, WCM will still process PZN rules since it calls the PZN API directly. If PZN is not being used for WCM content the APIs are not called and there is no additional overhead.

## Disable PZN Visibility Rules

If a Portal installation is not using PZN rules on individual pages and portlets, a 25% performance gain can
be achieved by disabling the processing of these rules. The toolbar does use visibility rules. If the toolbar is
enabled, as described in this document, do not apply this tuning.

**How to Disable Visibility Rules for Pages & Portlets when no virtual portals used**

Run the ConfigEngine command:

ConfigEngine.sh action-disable-pzntrans -DPortalAdminPwd=<portal admin password> -DWaspassword=<websphere admin password>

**How to Disable Visibility Rules for Pages & Portlets when a virtual portal is created using a context path:**

Run the ConfigEngine command:

ConfigEngine.sh action-disable-pzntrans -DVirtualPortalContext=<contextpath> -DPortalAdminPwd=<portal admin password> -DWaspassword=<websphere admin password>

**How to Disable Visibility Rules for Pages & Portlets when a virtual portal is created using a hostname:**

Run the ConfigEngine command:

ConfigEngine.sh action-disable-pzntrans -DVirtualPortalHostName=<virtual portal hostname> -DPortalAdminPwd=<portal admin password> -DWaspassword=<websphere admin password>

**How to reenable PZN:**

Run the ConfigEngine command:

ConfigEngine.sh action-enable-pzntrans.

## Disable PZN Referrer Headers

PZN also has the ability to use referrer headers to make decisions. If that feature is not used by an installation, it can be disabled for a performance benefit.

**How to Disable Personalization Processing of Referrer Headers**

Edit <wp_profile_root>/PortalServer/config/services/PersonalizationService.properties.

Set rulesEngine.preprocessor.enabled=false

Restart the Portal server.