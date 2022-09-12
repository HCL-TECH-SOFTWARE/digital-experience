# Creating a syndication relationship from the command line

You can set up syndication relationships by using the Administration Portlets or the command line. To set up a syndication relationship from the command line, use the XML configuration interface (XML access) and the ConfigEngine command to configure the subscriber.

Make sure that you have the appropriate configuration setup before you enable syndication.

-   **Disk space**

    Before you use syndication, you must ensure that your subscriber has sufficient memory to receive the data that is syndicated from the syndicator. For example, if you are going to syndicate all libraries, then you need at least as much space on your subscriber as the database used by your syndicator.

-   **Swap space**

    Ensure that you have at least as much swap space allocated on the subscriber server as you have physical memory.

-   **Cross version syndication**

    Cross-version syndication is supported between the following releases. Syndication from a newer release to an older release is not supported:

    -   HCL Portal version 7.0.0.2 with CF26 or higher.
    -   HCL Portal 8.0.0.1 with CF09 or higher.
    -   HCL Portal 8.5 or higher.
-   **Library already exists on the subscriber**

    First-time syndication to an existing library is not supported. If you attempt to syndicate a library to a subscriber that already has a library with the same name, an error results.

-   **Large library with more that 10000 items**

    To syndicate a library that contains more than 10000 items, update the maximum Java heap size that is used by the portal application server on the subscriber server:

    1.  In the WebSphere® Integrated Solutions Console, browse to the Java virtual machine settings.
        -   **Stand-alone server:**

            **Servers > Server Types > WebSphere application servers > HCL Digital Experience > Java and Process Management > Process definition > Java Virtual Machine**

        -   **Clustered server:**

            **System administration > Deployment manager > Java and Process Management > Process Definition > Java Virtual Machine**

    2.  Update the value in the **Maximum Heap Size** field. A value of at least 1024 MB is recommended.
    3.  Click **OK**, and then save your changes.

To set up syndication between web content libraries on two HCL Web Content Manager applications, establish a relationship between a syndicator and a subscriber. The syndicating server contains the data to be replicated, and the subscribing server receives the replicated data.

What can and cannot be syndicated:

-   Changes to only the library name or description are syndicated. Changes to other library properties, such as user access to a library, are not syndicated. If you want the same settings on all your syndicated libraries, you must manually make the same changes to any subscriber libraries.
-   If content from one library (Library A) uses an item from another library (Library B), you must include both libraries in the syndicator. Including both libraries ensures that all items are syndicated successfully.
-   If you include only Library A in the syndicator, any items in Library A that reference items in Library B are not syndicated. Syndication errors are also generated.
-   If you add a library to a syndicator after the initial syndication, you must click **Rebuild** to force the new library to be syndicated immediately.
-   If you are creating a two-way syndication relationship, you must use a consistent syndication strategy. For example, if you syndicate "All items", then both syndication relationships must be syndicating "All items".

1.  Ensure both the subscriber and syndicator are running and that they can access each other over a network.

2.  On the subscriber server, create a shared credential vault slot with the XML configuration interface.

    1.  Create the CreateVaultSlot.xml file using a text editor.

        This sample file uses the following values that you can change to reflect your environment:

        -   **syndication-slot**

            The name of the shared credential vault slot.

        -   **wpsadmin**

            The user ID for the portal administrator.

        -   **passw0rd**

            The password for the portal administrator.

        ```
        <?xml version="1.0" encoding="UTF-8"?>
        <request
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd"
            type="update" create-oids="true">
        
            <!-- Sample for creating a new credential vault slot. This script creates a     -->
            <!-- credential vault resource and a shared slot in the Default Admin Segment   -->
            <portal action="locate">
                 <credential-segment action="locate" adapter-type="default" name="DefaultAdminSegment" 
                     user-mapped="false">
                     <description>Default Admin Segment</description>
                     <credential-slot action="update" active="false" name="syndication-slot"
                         resource="syndication-resource" secrettype="userid-password" system="true">
                         <localedata locale="en">
                             <description>used for syndicator and subscriber pair</description>
                         </localedata>
                         <password-secret action="create" external-id="wpsadmin"
                             user="uid=wpsadmin,o=defaultWIMFileBasedRealm">passw0rd</password-secret>
                     </credential-slot>
                 </credential-segment>
            </portal>
        </request>
        ```

    2.  Run the xmlaccess command with the CreateVaultSlot.xml file.

        -   **AIX®,HP-UX, Linux™,Solaris**

            ./xmlaccess.sh -in CreateVaultSlot.xml -out slot-out.xml -url http://localhost:10039/wps/config -user wpsadmin -password passw0rd

        -   **IBM® i**

            xmlaccess.sh -in CreateVaultSlot.xml -out slot-out.xml -url http://localhost:10039/wps/config -user wpsadmin -password passw0rd

        -   **Windows™**

            xmlaccess.bat -in CreateVaultSlot.xml -out slot-out.xml -url http://localhost:10039/wps/config -user wpsadmin -password passw0rd

3.  This step is optional and only needed if syndicating to a virtual portal. If syndicating to the base portal, this step can be skipped. On the subscriber server, create a virtual portal on the subscriber with the create-virtual-portal task. See the Knowledge Center topic named **Task: create-virtual-portal** for further information.

4.  On the subscriber server, set up the syndication relationship with the `run-wcm-admin-task-subscribe-now` task. For example, to syndicate published items from the Web Content and Portal Site libraries, use this command:

    -   **AIX®,HP-UX, Linux™,Solaris**

        ./ConfigEngine.sh run-wcm-admin-task-subscribe-now -Dsyndicator=http://syndicator-hostname:10039/wps/wcm -DvaultSlotName=syndication-slot -DsyndicatorName=syndicator1 -DsubscriberName=subscriber1 -DVirtualPortalContext=sample -Dpublished-items="Web Content,Portal Site" -DPortalAdminPwd=passw0rd -DWasPassword=passw0rd

    -   **IBM® i**

        ConfigEngine.sh run-wcm-admin-task-subscribe-now -Dsyndicator=http://syndicator-hostname:10039/wps/wcm -DvaultSlotName=syndication-slot -DsyndicatorName=syndicator1 -DsubscriberName=subscriber1 -DVirtualPortalContext=sample -Dpublished-items="Web Content,Portal Site" -DPortalAdminPwd=passw0rd -DWasPassword=passw0rd

    -   **Windows™**

        ConfigEngine.bat run-wcm-admin-task-subscribe-now -Dsyndicator=http://syndicator-hostname:10039/wps/wcm -DvaultSlotName=syndication-slot -DsyndicatorName=syndicator1 -DsubscriberName=subscriber1 -DVirtualPortalContext=sample -Dpublished-items="Web Content,Portal Site" -DPortalAdminPwd=passw0rd -DWasPassword=passw0rd

    **Note:** If you are using the HTTPS protocol, you must add `-DWcmConfigClientProtocol=https` to the command line for the task.

    |Parameter|Details|
    |---------|-------|
    |-Dsyndicator=|The host name of the syndicator server.|
    |-DsyndicatorName=|This name is used for the syndicator item that is created on the syndicator server. Enter a name that helps identify the syndication relationship you are creating. This name must be unique and cannot be the same as an existing syndicator name.**Note:** To reuse syndicator names of previously deleted syndication relationships on a subscriber, you must also delete the same relationship on the syndicator.

|
    |-DsubscriberName=|This name is used for the subscriber item that is created on the subscriber server. Enter a name that helps identify the syndication relationship you are creating. This name must be unique and cannot be the same as an existing subscriber name.|
    |-DvaultSlotName=|The name of the syndication credential vault slot.|
    |-DupdateAfterCreation=|If set to true, a syndication update is run as soon as the syndication pair is successfully created. If not specified, the default setting is true. This is a one-off syndication event not related to any automatic configuration settings.|
    |-Dmode=|This parameter defines the syndication mode to be used:    -   **configured**: This uses the mode configured in the WCM WCMConfigService service.
    -   **automatic**: Syndication will be scheduled automatically based on the configured syndication interval.
    -   **manual**: Syndication will occur only when requested using the administration portlet.
|
    |-DVirtualPortalContext=|The portal context of the virtual portal if needed.If you set the host name parameter that is described later, the VirtualPortalContext parameter is ignored.

|
    |-DVirtualPortalHostName=|The host name of the virtual portal if needed. If you specify the host name, the portal uses the host name, and the VirtualPortalContextparameter is ignored.

|

    In addition, the following parameters are used to identify the libraries to be syndicated and the type of syndication that you want to perform. For each syndication relationship, you can specify only one type of syndication. Separate multiple libraries with commas.

    |Syndication type parameters. Use only one of these.|Details|
    |---------------------------------------------------|-------|
    |-Dpublished-items="library\_name\_1,library\_name\_2"|    -   **Published items:**

Published item syndication is mostly used when you syndicate to a staging or delivery server. The following items are syndicated:

        -   Published
        -   Expired
Draft items, projects, project templates, and items in a project are not syndicated.

|
    |-Dall-items="library\_name\_1,library\_name\_2"|    -   **All items:**

Use "All items" syndication to gradually syndicate projects to a staging or delivery server, rather than waiting until all items in a project achieve a published state. The following items are syndicated:

        -   Published
        -   Expired
        -   Draft items
        -   Projects that contain draft items saved in the configured library. See the Knowledge Center topic named **Projects and syndication** for further information.
Project templates are not syndicated.

|
    |-Dall-items-and-versions="library\_name\_1,library\_name\_2"|    -   **All items and versions:**

"All items and versions" syndication is mostly used when you syndicate between servers within an authoring environment. Selecting this option can increase the amount of time taken for syndication because it includes versions and deleted items.

The following items are syndicated:

        -   Published
        -   Expired
        -   Draft items
        -   Projects that contain draft items saved in the configured library. See the Knowledge Center topic named **Projects and syndication** for further information.
        -   Versions
        -   Deleted items
Project templates are not syndicated.

|



