# Adding service references to the wps.war web application

The WSRP service clients and service references are defined in the web.xml deployment descriptor of the wps.war web application. That web application that is contained in the portal enterprise application archive wps.ear. To add service references, you modify the web.xml deployment descriptor.

The following excerpt from file web.xml shows the definition of the default WSRP service references:

```
<service-ref>
    <description>WSRP 1.0 Default Service Reference</description>
    <service-ref-name>service/wsrp/WSRPService</service-ref-name>
    <service-interface>javax.xml.ws.Service</service-interface>
    <service-qname xmlns:pfx="http://www.ibm.com/xmlns/prod/websphere/portal/wsrp/wsdl/v1">
        pfx:WSRPService
    </service-qname>
</service-ref>
<service-ref>
    <description>WSRP 2.0 Default Service Reference</description>
    <service-ref-name>service/wsrp/WSRPService_v2</service-ref-name>
    <service-interface>javax.xml.ws.Service</service-interface>
    <service-qname xmlns:pfx="http://www.ibm.com/xmlns/prod/websphere/portal/wsrp/wsdl/v2">
        pfx:WSRPService_v2
    </service-qname>
</service-ref>

```

You can define extra service references by adding one or more `service-ref` elements. The following list shows the subelements that a new `service-ref` element must define:

-   **description**

    The value for this subelement is user-defined. Specify a text string of your choice.

-   **service-ref-name**

    The value for this subelement is partly user-defined. Specify `service/wsrp/service-ref-id`, where the prefix `service/wsrp/` is fix, and `service-ref-id` is the user-defined ID of the service reference.

-   **service-interface**

    The value for this subelement is fix. Specify `javax.xml.ws.Service`.

-   **service-qname**

    For the value of this subelement, you can specify one of two options. Depending on your requirements, specify the service Qname for WSRP 1.0 or 2.0 as in one of the examples that are given here:

    ```
    <service-qname xmlns:pfx="http://www.ibm.com/xmlns/prod/websphere/portal/wsrp/wsdl/v1">
       pfx:WSRPService
    </service-qname>
    
    ```

    or:

    ```
    <service-qname xmlns:pfx="http://www.ibm.com/xmlns/prod/websphere/portal/wsrp/wsdl/v2">
       pfx:WSRPService_v2
    </service-qname>
    ```


The following code sample shows how you can add two new service references to the web.xml file. Note the position of the new `service-ref` elements immediately after the default service references:

```
service-ref>
    <description>WSRP 1.0 Default Service Reference</description>
    <service-ref-name>service/wsrp/WSRPService</service-ref-name>
    <service-interface>javax.xml.ws.Service</service-interface>
    <service-qname xmlns:pfx="http://www.ibm.com/xmlns/prod/websphere/portal/wsrp/wsdl/v1">
        pfx:WSRPService
    </service-qname>
</service-ref>
    <service-ref>
    <description>WSRP 2.0 Default Service Reference</description>
    <service-ref-name>service/wsrp/WSRPService_v2</service-ref-name>
    <service-interface>javax.xml.ws.Service</service-interface>
    <service-qname xmlns:pfx="http://www.ibm.com/xmlns/prod/websphere/portal/wsrp/wsdl/v2">
        pfx:WSRPService_v2
    </service-qname>
</service-ref>
    <service-ref>
    <description>WSRP 2.0 Alternative Service Reference 1</description>
    <service-ref-name>**service/wsrp/AlternativeWSRPService\_v2**</service-ref-name>
    <service-interface>javax.xml.ws.Service</service-interface>
    <service-qname xmlns:pfx="http://www.ibm.com/xmlns/prod/websphere/portal/wsrp/wsdl/v2">
        pfx:WSRPService_v2
    </service-qname>
</service-ref>
    <service-ref>
    <description>WSRP 2.0 Alternative Service Reference 2</description>
    <service-ref-name>**service/wsrp/WSRPService\_v2\_Second\_Alternative**</service-ref-name>
    <service-interface>javax.xml.ws.Service</service-interface>
    <service-qname xmlns:pfx="http://www.ibm.com/xmlns/prod/websphere/portal/wsrp/wsdl/v2">
        pfx:WSRPService_v2
    </service-qname>
</service-ref>
```

The example defines two new service references: `service/wsrp/AlternativeWSRPService_v2` and `service/wsrp/WSRPService_v2_Second_Alternative`. After you updated the portal application, you can configure the new service references in a WebSphere® Application Server administrative client. After you restart your portal, the WSRP Consumer can find the service references. When you create or edit a Producer definition, you can assign the new service references to Producer ports. For the WSRP Consumer to find the service references, you must name the service reference name according to the following syntax:

-   **service/wsrp/service-ref-id**

    where the prefix `service/wsrp/` is fixed, and the `service-ref-id` is user-defined.


As the administrator of the Consumer portal, you can assign a service reference to a Producer port of a Producer definition. Use the `service-ref-id` as the identifier for selecting that service reference. If a service reference name of a new service reference does not contain the prefix `service/wsrp/`, the WSRP Consumer cannot find the service reference. When you assign a service reference to a Producer port, the Web Services Configuration portlet shows the list of all defined service references. The list shows only the service reference IDs of the service reference without the common prefix `service/wsrp`.

**Parent topic:**[Creating and deploying custom service references](../admin-system/wsrpt_cons_crt_cust_wsrvc_refs.md)

