# Using HCL Web Application Bridge 

If you plan to use HCL Web Application Bridge, you need to configure all remote context roots.

For the detailed steps see [HCL Web Application Bridge](../panel_help/h_wab_first.html).

**Note:** Web Application Bridge does not support SAML \(Security Assertion Markup Language\) unless the SAML token is inside a cookie, and the Portal server and the target server \(SAP Netweaver portal in this case\) are in the same domain. The client-side cookie forwarding feature can be used in such a scenario. For example, the name of the cookie must be specified in the **Policy** \> **HTTP Cookies** section of the VWA Manager portlet.

To identify the context root on SAP NetWeaver Portal, consult your SAP NetWeaver Portal administrator. Note that the context roots depend on your environment and usage scenario. You can use the following list as a starting point in a review meeting with your SAP administrator.

```
/irj
/com.sap.portal.navigation.afp.tln
/com.sap.portal.navigation.afp.resources
/com.sap.portal.navigation.afp.pagetoolbar
/com.sap.portal.navigation.afp.masthead
/com.sap.portal.navigation.afp.layout
/com.sap.portal.navigation.afp.dynamicnavigation
/com.sap.portal.navigation.afp.dtn
/com.sap.portal.epcf.loader
/com.sap.portal.dsm
/com.sap.portal.design.urdesigndata
/com.sap.portal.design.portaldesigndata
/classes
/AFPServlet
/wsnavigator
/webdynpro
/utl
/useradmin
/ur
/sr_central
/rtmfCommunicator
/resources
/nwa
/logon_ui_resources
/js
/irj
/htmlb
/ejbexplorer
/common
/com.sap.ui.lightspeed
/com.sap.portal.runtime.gwtintegration
/com.sap.portal.pagebuilder
/com.sap.portal.navigation.objbased
/com.sap.portal.navigation.helperservice
/com.sap.portal.navigation.contentarea
/com.sap.portal.navigation.afp.widgets
```

**Parent topic:**[Integrating with SAP NetWeaver Portal ](../admin-system/sap_int.md)

**Related information**  


[Hints and tips for Integrator for SAP ](../admin-system/sap_int_hint_tip.md)

