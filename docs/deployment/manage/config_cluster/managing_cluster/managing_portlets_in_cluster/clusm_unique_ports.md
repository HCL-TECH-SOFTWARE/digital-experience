# Multiple clusters: deploying portlets unique to a cluster

You can deploy portlets that are unique to a multiple cluster environment using the Portal Administration User Interface or the XML Configuration Interface.

Choose one of the following two methods to deploy portlets unique to a multiple cluster environment:

-   **Portal Administration User Interface**

    Whenever the Portal Administration UI is used to deploy a new portlet, HCL Portal will automatically generate a unique object ID for this new portlet instance. The resulting enterprise application, whose name will include this new object ID, will not conflict with any other enterprise application already defined in the cell, even if another cluster was used to install the same portlet. In this case, there would be two enterprise application instances of the same physical portlet, with two different configurations.

-   **XML Configuration Interface**

    The XMLAccess application is used to configure HCL Portal by importing an XML configuration definition. In this XML, if the `web-app` element definition for a portlet application omits the objectid attribute, then a new object ID will be automatically generated, and like when using the Administration User Interface, the underlying enterprise application will be guaranteed to be unique in the cell. Thus, if the same XML definition for a portlet is imported into two different portal clusters within the same cell, there would be two independent enterprise applications representing the same portlet. To WebSphere® Application Server and HCL Portal, these are different portlet applications.


Here is an example of an XML definition for deploying a portlet without specifying the objectid attribute:

```
<web-app action="update" active="true" uid="com.ibm.wps.portlets.welcome">
    <url>file://c:/tmp/WelcomePortlet.war</url>
    <portlet-app action="update" active="true" uid="com.ibm.wps.portlets.welcome.1">
        <portlet action="update" active="true" objectid="theIbmPortletApiPortlet" name="Welcome Portlet"/>
    </portlet-app>
</web-app>

```


