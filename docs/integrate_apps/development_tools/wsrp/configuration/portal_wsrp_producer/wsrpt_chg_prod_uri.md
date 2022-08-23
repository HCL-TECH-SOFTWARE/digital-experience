# Changing the WSRP Producer context root

The context root for the WSRP Producer references the context root for the WSRP Producer facade servlet. This context root is the entry point for all WSRP protocol traffic, and you can change the context root as required to support your environment. This customization is optional.

The facade servlet is provided with the wps.ear enterprise application in the `HCL Portal Server WSRP Facade` web module wps\_facade.war and controls access to the WSRP Web Service engine.

1.  To change the context root for the WSRP Producer, run the `modify-servlet-path` configuration task, as described in *Changing the portal URI*.



**Previous topic:**[Exporting customized WSRP portlet instances by using the XML configuration interface](../admin-system/wsrpr_prod_xmlxp_custplt.md)

