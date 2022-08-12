# To register predefined public render parameters in portlet.xml

To use these predefined public render parameters in your portlet, declare each of them in your portlet deployment descriptor \(portlet.xml\) as specified in the Java Portlet specification.

The following example shows how to register the parameters that hold the portal page selection and locale information. In this case, the prefix mapping for the portal namespace is defined on the root portlet-app element of the deployment descriptor.

**Note:** The portlet itself does not need to deal with the qualified names of the respective render parameters in its implementation. It can use local identifiers instead, which are defined as part of the respective public-render-parameter element at the end of the descriptor. In this specific case, the page selection parameter is mapped to the local identifier pageID whereas the locale parameter is mapped to the local identifier locale.

Code Sample:

```
<?xml version="1.0" encoding="UTF-8"?>
<portlet-app id="my.sample.portlet"
     xmlns="http://java.sun.com/xml/ns/portlet/portlet-app_2_0.xsd"
     xmlns:portal="http://www.ibm.com/xmlns/prod/websphere/portal/publicparams"
     version="2.0">
     <portlet>
          <portlet-name>My sample portlet</portlet-name>
          ...
          <supported-public-render-parameter>pageID</supported-public-render-parameter>
          <supported-public-render-parameter>locale</supported-public-render-parameter>
     </portlet>
     <public-render-parameter>
          <identifier>pageID</identifier>
          <qname>portal:selection</qname>
     </public-render-parameter>
     <public-render-parameter>
          <identifier>locale</identifier>
          <qname>portal:locale</qname>
     </public-render-parameter>
</portlet-app>
```

**Parent topic:**[Predefined public render parameters](../dev-portlet/predef_pub_ren_param.md)

