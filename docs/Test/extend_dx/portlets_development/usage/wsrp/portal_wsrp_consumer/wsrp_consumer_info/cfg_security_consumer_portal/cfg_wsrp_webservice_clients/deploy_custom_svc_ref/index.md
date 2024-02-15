# Creating and deploying custom service references

In your WSRP Consumer portal, you can deploy extra service references for the WSRP service clients.

The service clients and service references are defined in the web.xml deployment descriptor of the wps.war web application that is contained in the portal enterprise application archive wps.ear. To add service references, you export the portal enterprise application, modify the web.xml deployment descriptor, and update the portal enterprise application. To add service references for your WSRP Consumer portal, proceed by the steps that are given in the following.

1.  Export the portal application EAR file.

    You start with this step so that you can later add the service references in the web.xml deployment descriptor. To export the portal application wps.ear to a temporary portal EAR file, use a WebSphere® Application Server administrative client, for example, the WebSphere Integrated Solutions Console. For details about exporting an enterprise application, read the WebSphere Application Server documentation.

2.  Modify the web.xml deployment descriptor.

    To import the portal EAR file and to edit the web.xml deployment descriptor, you can either use an assembly tool, or you can extract or open the portal EAR file and edit the web.xml deployment descriptor file directly.

3.  Add service references to the `web.xml` deployment descriptor.

    You can add one or multiple service references for the WSRP service clients to the web.xml. For more information, read the following topic about *Adding service references to the wps.war web application*.

4.  Update the portal application.

    After you modified the web.xml deployment descriptor, proceed by one of the following options:

    -   Export the portal EAR file from the assembly tool.
    -   Save the modified web.xml file, and save or compress the portal EAR file. Then, update the portal application from the modified portal EAR file. To do so, you use a WebSphere Application Server administrative client, for example, the WebSphere Integrated Solutions Console. For details about updating an enterprise application, read the WebSphere Application Server documentation.
5.  Restart your portal.

    In a stand-alone installation, restart the portal server. In a cluster configuration, restart the portal on each node.



