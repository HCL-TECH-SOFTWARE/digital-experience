---
audience: [, , ]
---

# Packaging, deploying and compiling cooperative portlets

When packaging, deploying, and compiling cooperative portlets, refer to these considerations on aspects of the process such as creating deployment descriptors and packaging the WAR file.

## Creating the deployment descriptors

A WAR must have a `web.xml` and a `portlet.xml` file in order to comply with J2EE specifications. For standard portlets, `web.xml` needs to contain only servlet information, not portlet information. If the standard portlet does not contain servlets, `web.xml` must still be present, though the content of the file will be empty.

The `portlet.xml` file must specify the location of the WSDL file associated with each portlet. To achieve this, you must modify `portlet.xml` to add a configuration parameter to each concrete portlet that exposes actions to the property broker through the WSDL file.

-   Standard portlet examples

    Sample `web.xml` file for standard portlet with empty content:

    ```xmp
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE web-app PUBLIC "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN" 
                             "http://java.sun.com/dtd/web-app_2_3.dtd">
    <web-app>
        <display-name>Shipping Portlets - Standard Version</display-name>
    </web-app>
    
    ```

    Sample standard `portlet.xml` file

    ```xmp
    <?xml version="1.0"?>
    <portlet-app 
       xmlns="http://java.sun.com/xml/ns/portlet/portlet-app_1_0.xsd"
       version="1.0"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://java.sun.com/xml/ns/portlet/portlet-app_1_0.xsd
                           http://java.sun.com/xml/ns/portlet/portlet-app_1_0.xsd">
        <portlet>
            <description xml:lang="en">
               Displays details for a particular order
            </description>
            <portlet-name>StandardOrderDetail</portlet-name>
            <display-name xml:lang="en">Standard Order Detail</display-name>
            <portlet-class>
               com.ibm.wps.portlets.shipping.OrderDetailPortlet
            </portlet-class>
            <expiration-cache>3600</expiration-cache>
            <supports>
                <mime-type>text/html</mime-type>
            </supports>
            <supported-locale>en</supported-locale>
            <resource-bundle>nls.StandardOrderDetail</resource-bundle>
            <portlet-preferences>
                <preference>
                    <name>
                       com.ibm.portal.propertybroker.wsdllocation
                    </name>
                    <value>/wsdl/OrderDetail.wsdl</value>
                </preference>
                <preference>
                    <name>com.ibm.portal.context.enable</name>
                    <value>true</value>
                </preference>
            </portlet-preferences>        
        </portlet>
    	
    	...
    	
    </portlet-app>
    
    
    ```

    **Note:** For standard portlets, you must use a special `<preference>` entry to specify the application portlet class.

    ```xmp
    <portlet-preferences>
       <preference>
          <name>com.ibm.portal.propertybroker.wsdllocation</name>
          <value>/wsdl/OrderDetail.wsdl</value>
       </preference>
    </portlet-preferences>
    
    ```


## WAR file considerations

Once the code and deployment changes have been made for using the property broker, additional libraries and files must be packaged along with the application. After you package the WAR file, it is ready to be installed. Use the following table to package the files in the correct location.

|Portlet type|Standard portlets|
|------------|-----------------|
|File name|WSDL file|
|Path|relative to the root of the WAR file or an absolute URL|

## Additional considerations for compiling

If you are using your own development environment, make sure to add the wp.propertybroker.standard.api.jar file to your class path for standard portlets. These JAR files can be found in the `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/base/wp.propertybroker.standard.api/shared/app` directory.

**Parent topic:**[JSR 168 HCL extension for cooperative portlets ](../dev-portlet/pltcom_ptlt_coop.md)

