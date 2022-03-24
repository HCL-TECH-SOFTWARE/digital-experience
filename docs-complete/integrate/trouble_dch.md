# Troubleshooting Watson Content Hub 

The troubleshooting information is useful for planning and implementing your Watson Content Hub integration.

## Limitation: Mismatch in language support

The Asset Picker on Watson Content Hub picks up the language from the browser. It does not acknowledge the user preferred language in portal. Asset Picker on Watson Content Hub supports only group 1 languages. Portal supports more language groups. Therefore, a mismatch of languages exists when the browser is using one and the user has a different preferred language set in portal. Also, the Asset Picker on Watson Content Hub does not currently support right-to-left languages.

## Problem: A non-administrative user tries to select an asset and receives message EJQHT0006E

**Problem:** A non-administrative user tries to select an asset, the picker does not open. They receive the **EJQHT0006E: Unable to connect to the Content hub. Try again in a few minutes.** message.

**Solution:** The user might not have access to Portal Credential Vault. Verify that the user has a minimum of "User" access to the **dx2dch** credential vault.

## Unsupported profile after uninstalling HCL Digital Experience

**Problem:** After you uninstall HCL Portal V9, some pages have the following error message: "The profile assigned to this page is not supported by the theme".

**Solution:** The pages with the message still have the old content hub profile assigned to it. Complete the following steps to change the profile:

1.  Log on to HCL Digital Experience.
2.  Turn on **Edit Mode** from the action bar. Site Manager opens automatically.
3.  Locate the page with the unsupported profile.
4.  Click your page template in the Site Manager and click the ![Screen capture of the context menu](../images/toolbar_context_menu.jpg) icon. Click **Open Page Settings**.
5.  Click **Edit Page Properties**.
6.  Click the **Advanced** tab.
7.  In the **Theme Settings** section, select a different profile for your page.
8.  Save your changes.

## Enable log tracing for Watson Content Hub integration

Add the following strings to your trace log to help you troubleshoot issues with the Watson Content Hub integration:

**Integration issues:** `com.ibm.workplace.dch.integ.*=all;`

**HTTP Outbound related issues:** `com.ibm.mm.proxy.*=all:com.ibm.wps.proxy.*=all:com.ibm.mashups.proxy.*=all:com.ibm.wps.outbound.*=all:com.ibm.portal.auth.tai.*=finest:com.ibm.mm.proxy.connection.filter.endpoint.*=all:com.ibm.mashups.outbound.*=all:com.ibm.mm.connection.filter.endpoint.*=all`

**Credential Vault related issues:**

```
com.ibm.wps.sso.credentialvault.*=all:
com.ibm.wps.command.credentialvault.*=all:
com.ibm.wps.portletservice.credentialvault.*=all:
com.ibm.wps.services.credentialvault.*=all:
com.ibm.portal.portlet.service.credentialvault.*=all
```

The information is logged to the trace.log, SystemOut.log, and browser logs files.

**Parent topic:**[Integrating with Watson Content Hub ](../integrate/int_dch.md)

