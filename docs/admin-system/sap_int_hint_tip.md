# Hints and tips for Integrator for SAP 

Observe the following hints and tips in case of problems with Integrator for SAP.

## Autosizing the SAP navigation page does not work for all themes in client-side mode

The automatic resize feature for the SAP navigation iframe does not work for static pages in client-side rendering modewith the Page Builder theme. Under these conditions a height of 600 pixels applies to the SAP navigation page. Autosizing the SAP navigation page works for pages with all themes rendered in server-side mode.

This limitation does not apply to the integrator portlet HCL Portal Integrator for SAP.

## Replacement page in case of errors

If the SAP navigation retrieves an exception, it shows a replacement page as a child page to the navigation page. It shows a message such as the ones given in the following list. In this case check the system logs for the root cause of the exception. The following examples give some typical issues and their resolution.

-   **EJQIA0017E: The Ajax Proxy returned HTTP: \[403 Forbidden\] when trying to get the SSO Token from URL**

    **Reason:** The Ajax Proxy blocked the request.

    **Action:** Configure the Ajax Proxy. Verify the Ajax Proxy configuration by calling the Ajax Proxy directly: `http://your\_IBM\_HCL Portal and HCL Web Content Manager.domain.com:port/wps/your\_proxy/http/sap.ssoTokenURL-Value?hpaa.slotid=your\_Credential\_Vault\_Slot\_ID`

-   **EJQIA0017E: The Ajax Proxy returned HTTP: \[502 Bad Gateway\] when trying to get the SSO Token from URL**

    **Reason:** SAP NetWeaver Portal is not available.

    **Action:** Make sure that SAP NetWeaver Portal is available.



-   **EJQIA0017E: The Ajax Proxy returned HTTP: \[504 Gateway Timeout\] when trying to get the SSO Token from URL**

    **Reason:** SAP NetWeaver Portal is not available.

    **Action:** Make sure that SAP NetWeaver Portal is available.




**Parent topic:**[Integrating with SAP NetWeaver Portal ](../admin-system/sap_int.md)

**Related information**  


[Performance tuning for Integrator for SAP ](../admin-system/sap_int_perf_tun.md)

[Using HCL Web Application Bridge ](../admin-system/sap_int_use_wab.md)

