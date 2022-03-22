# JavaServer Faces implementation

The default JavaServer Faces \(JSF\) implementation has changed starting in WebSphere Application Server 8.

When you are migrating JSF portlets from an earlier version of HCL Digital Experience, be aware that WebSphere® Application Server has changed the default JSF implementation starting in WebSphere Application Server 8. For more information, see *JavaServer Faces migration* in the WebSphere Application Server documentation.

## Replacement of IBM JSF Bridge with HCL Digital Experience JSF Bridge

With [HCL Digital Experience 9.5 CF171 Container Update and later release](https://help.hcltechsw.com/digital-experience/9.5/containerization/limitations_requirements.html?hl=java%2Cserver%2Cfaces), IBM WebSphere Application Server 9.0.5.2 is included and that IBM fix pack removed the IBM JSF portlet bridge

With HCL Digital Experience 9.5 CF18 update and Container Update releases, an updated JSF portlet bridge is introduced and installed in the HCL Digital Experience software. Customers installing HCL Digital Experience 8.5, 9.0, 9.5 CF18, or Container Update release CF18, using an IBM Websphere Application Server version later than 8.5.5.17 or 9.0.5.2, will have the JSF portlet bridge installed automatically.

If customers install HCL Digital Experience 9.5 CF18 and upgrade the IBM WebSphere Application Server to 8.5.5.17 and higher, or 9.0.5.2 and higher, to the required level at a later point, HCL provides the following config task to enable the HCL JSF portlet bridge.

For IBM WebSphere Application Server 8.5.5.x:

-   To deploy:

    ```
    ConfigEngine.sh/bat update-jsfportletbridge8x
    ```

-   To remove:

    ```
    ConfigEngine.sh/bat rollback-jsfportletbridge8x
    ```


For IBM WebSphere Application Server 9.0.5.x:

-   To deploy:

    ```
    ConfigEngine.sh/bat update-jsfportletbridge9x
    ```

-   To remove:

    ```
    ConfigEngine.sh/bat rollback-jsfportletbridge9x
    ```


For additional information on the use of the JavaServer Faces portlet bridge, see [Configuring Portlet Bridge for JavaServer Faces](https://www.ibm.com/support/knowledgecenter/SSAW57_9.0.5/com.ibm.websphere.nd.multiplatform.doc/ae/tweb_portletbridge.md).

## JSF 2.2 Support with HCL DX Portlet Bridge

The JSF implementation which supports the DX Portlet Bridge is provided by IBM’s WAS product. Currently WAS provides the following:

-   WAS 8.5 provides support for JSF 2.0
-   WAS 9.0 provides support for JSF 2.2

Prior to HCL taking ownership of the Portlet Bridge IBM claimed support for JSF 2.2 in the Portlet Bridge. Upon further review HCL has determined that the IBM implementation of JSF 2.2 in the Portlet Bridge was incomplete. As a result, we recommend customers utilizing JSF 2.2 applications to continue coding to the JSF 2.0 specifications and not use the new JSF 2.2 features.

**Note:** JSF 2.2 claims backward compatibility so JSF 2.0 applications should work with potentially minor if any modifications.

HCL remains committed to providing ongoing support for customers running portlets for many years to come as this is a key capability of the DX product. While HCL is investigating what is required to complete the JSF 2.2 bridge, we do not anticipate a solution being available in the short-term. HCL will update this statement as soon as we have determined a solution for the portlet bridge JSF 2.2 implementation.

