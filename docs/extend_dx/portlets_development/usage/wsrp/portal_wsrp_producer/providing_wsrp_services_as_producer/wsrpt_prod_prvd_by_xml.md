# Using the XML configuration interface to provide or withdraw a portlet

A WSRP Producer can provide or withdraw portlets by using the XML configuration interface.

To provide or withdraw the portlet by using the XML configuration interface, specify the provided attribute to the portlet tag:

-   **provided = "true \| false"**

    Use this attribute with the portlet tag to specify providing or withdrawing a portlet:

    -   **true**

        To provide the portlet as a WSRP service, you set the provided attribute to true. When you run the XML script, the portlet is provided through WSRP. The portlet can now be consumed as a remote portlet by Consumer portals.

    -   **false**

        To withdraw the portlet, set the provided attribute to false. The portlet is withdrawn. It is no longer available for Consumer portals to consume.


-   **XML script examples:**

    The following two XML samples show you how to use the XML configuration interface to provide a portlet that complies with the standard portlet API. The examples show the provided attribute highlighted. If you want to withdraw a portlet by using the XML configuration interface, specify false instead of true for the provided tag.

-   **Providing a standard API portlet:**

    The following XML sample shows you how to provide a portlet that complies with the standard portlet API:

    ```
    
    <?xml version="1.0" encoding="UTF-8" ?>
    <request type="update" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:noNamespaceSchemaLocation="PortalConfig_1.4.xsd">
          <!-- 
              Sample for providing a standard API compliant portlet as a WSRP producer. 
              Be aware that this sample is provided as a sample only.
    		  It might or might not work, depending on the configuration of your portal. 
          --> 
       <portal action="locate">
          <!-- 
              uid must match the uid of the portlet application appended with .webmod 
          --> 
          <web-app action="locate" active="true" 
             uid="stdTestsuite.war.webmod">
                <!-- 
                    uid must match the optional portlet-app id attribute from the portlet.xml. 
                    If this is not set, the .war file name must be supplied here. 
                --> 
             <portlet-app action="update" uid="stdTestsuite.war">
                <!--
                    Name must match the portlet-name tag in the portlet.xml file. 
                --> 
                <portlet action="update" name="TestPortlet1" **provided="true"** /> 
             </portlet-app>
          </web-app>
       </portal>
    </request>
    
    ```



???+ info "Related information"
    -   [Working with the XML configuration interface](../../../../../../deployment/manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md)
    -   [The XML configuration interface](../../../../../../deployment/manage/portal_admin_tools/xml_config_interface/index.md)

