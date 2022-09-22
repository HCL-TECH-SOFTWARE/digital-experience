# Types of portal resources

The portal resources are represented by the following XML tags.

-   **request**

    The main tag of every XML request. This element must always appear exactly once and must enclose the request. You can use this attribute to export release data from the portal database to later feed that data it into the staging process.

-   **portal**

    The main element of every XML request. This element must always appear exactly once and supports only locate and export actions.

-   **global-settings, services-settings**

    Settings for global portlet configuration values and for specific portal services. These elements support only locate and export actions.

    !!!note
        Leave the XML scripts for exporting and updating these settings unchanged. Do not manually change the values in the XML scripts, as this action might result in invalid portal configurations. To modify these settings, use the appropriate administration portlets instead after the XML update of a configuration.

-   **language**

    Use this tag to add languages to the list of supported languages that are defined in the portal or to delete languages from that list. Use the following attribute for bidirectional languages.

    -   **bidi**

        For bidirectional languages, specify this attribute as true.

-   **task**

    Schedules the cleanup of portal resources and the administration of federated tags. Cleanup refers to the deletion of portal pages and all page-dependent resources that are marked for deletion. Specify one or more tasks to be run immediately or at specified intervals. The scheduling interval parameters dayOfMonth and dayOfWeek are optional and are mutually exclusive. Each scheduling interval parameter requires a value for the parameter startTime. If you want to run a task daily, use only the parameter startTime.

    -   **name**

        Specifies the scheduling task to be run:

        -   **com.ibm.portal.datastore.task.ResourceCleanup**

            This task cleans up portal resources. If you specify this task without a scheduling interval parameter, portal resource cleanup is done immediately when you run the XML script.

        -   **com.ibm.portal.cp.SynchronizationTask**

            This task synchronizes collaborative data, including tag categorization information that is provided by Web Content Manager tagging. If you specify this task without a scheduling interval parameter, the portal does a resource cleanup immediately when you run the XML script.

        -   **com.ibm.portal.services.RefreshIWidgetDefinitionsTask**

            This task refreshes iWidget definitions that are stored in HCL Portal. Refreshing iWidget definitions refers to reloading the iWidget definition XML files and updating the corresponding iWidget Wrapper portlet clones.

            **Tip:** To call this task directly, run the following portal configuration task: refresh-iwidget-definitions. See the topic about the *Task refresh-iwidget-definitions* for instructions.

        -   **com.ibm.portal.cmis.TransientSlotCleanupTask**

            This task removes temporary credential vault slots that were created by the federated documents wizard and were not used for at least 3 hours.

        -   **com.ibm.wps.cp.tagging.federation.taskhandler.FederationTaskHandler**

            This task retrieves tags and related data from federated tagging providers. HCL Connections is an example of a federated tagging provider.

        -   **com.ibm.wps.cp.tagging.federation.taskhandler.FederationDeleteTaskHandler**

            This task removes federated tags and related data from HCL Portal. It is recommended to start the task when federation of tasks is no longer required.

    -   **dayOfMonth**

        If you want the task to run monthly, specify a number from 1 to 31. If the number you specify is higher than the last day of the month, the cleanup is done on the last day of the month. For example, specifying a value of 31 sets the task to run on January 31, the last day of February, March 31, April 30, and so on.

    -   **dayOfWeek**

        If you want the task to run weekly, specify a number from 1 to 7, where 1 is equivalent to Monday and 7 is equivalent to Sunday.

    -   **startTime**

        If you specified a scheduling interval of dayOfMonth or dayOfWeek, you must specify the time of day at which you want the task to start. Use the format HH:MM to specify a value from 0:00 to 23:59. You do not need to include leading zeros, for example 4:45. To run the task daily, use this parameter only; do not use the parameters dayOfMonth or dayOfWeek.

    The Task.xml sample shows you how to schedule the cleanup of portal resources.

    !!!note "Notes"
        1.  When you delete a page with an object ID, and re-create the same page by using the XML configuration interface. If you use the same object ID, you might receive an error message. The error message indicates that the operation was canceled because these actions created a duplicate key value.
        2.  When you run a cleanup task, the XML configuration interface schedules only the task to be run in IBM® WebSphere® Application Server. This action does not necessarily mean that WebSphere® Application Server runs the task immediately. To determine when a task started and ended, check the portal log SystemOut.log for the EJPDE0005I and JPDE0006I messages. These messages confirm that the task was successfully completed. After you confirmed the completion of the task, you can run the XML script for re-creating a page with the same object ID that it had before the deletion.

-   **action**

    Use this tag to define the required action. For more information about actions, see the topic about *Actions on portal resources*.

-   **virtual-resource**

    Virtual resources in the access control subsystem. Virtual resources have access control definitions that are attached, but are not otherwise represented in the portal. The virtual resource PORTLET_APPLICATIONS, for example, allows you to give users access to all installed portlets, but does not correspond to an actual portlet. The virtual resource element supports only update and export actions.

-   **user**

    Users in the portal user repository. The definitions include their properties, for example the user's preferred language, and portal access control settings that apply to users, for example, who is allowed to administer them. The XML configuration interface allows setting the password for a user, but it does not export the password. The password attribute is required for creating new users. Therefore, you cannot directly use the response file from an XML export request to create new users; you need to add a password attribute to the XML first.

    You can specify the name attribute of users and groups with a full DN (distinguished name) as in uid=wpsadmin,cn=users,.... Or you can specify the name attribute with a short ID as it is used for portal login, for example wpsadmin. An XML response file from a portal export request always contains full DNs.

    With regards to the user tag, there are two special cases for which you must specify particular attributes, depending on the task you want to do:

    -   Exporting users and groups
    -   Deregistering users and groups from the portal.
    Both cases are described in the following sections.

    Exporting users and groups: A full portal export does not normally include user and group information, but only if you explicitly specify in your XML request that the user is to be exported. If you want to export all user and group information, set the export-users flag on the main request tag to true as follows:

    ```
          <request . . . export-users="true" . . .>
    ```

    If you want to export groups without the members, set the export-users flag to no-member.

    **Notes:**

    1.  Searching for users or groups is a time consuming task. A search might time out or return more results than the system can handle or the user might expect. To prevent this behavior, you can limit searches for users or groups by setting a timeout or a maximum number of search results.
    2.  The values of some attributes of the tag user correspond to settings in included parameter tags. If you include both in your export request, but specify different values for them, then the value set by the parameter tag overwrites the value set by the attribute, and is exported as the attribute. The values of the attributes of the user tag correspond to the included parameter tags as follows:

        |Attribute|parameter tag with name=" "|Comments|
        |---------|---------------------------|--------|
        |firstname|givenName| |
        |lastname|sn| |
        |name|uid| |
        |n/a|cn|This tag is a mandatory parameter tag for representing the LDAP attribute.|

        Example: You can define the first name of a user at creation by using either the attribute firstname or the parameter tag with the givenName attribute. If you use both and specify two different names, then the value that is specified by givenName is exported as the attribute firstname. Example XML export request:

        ```
        
        <?xml version="1.0" encoding="UTF-8"?>
        <!-- Description of this command file: Create 1 users -->
        <request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                 xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd" 
                 type="update" create-oids="true">
             <portal action="locate">
                 <user action="update" firstname="**John_1**" password="password" 
                       lastname="Miller" name="John's name">
                     <description>John Miller</description>
                     <parameter name="cn" type="string" update="set">John Miller</parameter> 
                     <parameter name="givenName" type="string" update="set">**John_2**</parameter>
                 </user>
             </portal>
        </request>
        
        ```

        This request sets the value John_2 for the firstname attribute.

        On some LDAP servers, where the cn is part of the distinguished name, you might not be able to update the cn.

    **Deregistering users and groups from the portal:** If portal users or groups are removed from the user registry, but not from the portal database, or if users are muted, for example after too many wrong password attempts, you can export these users and groups for later removal. They can be removed later by using the cleanup-users attribute with the request tag. To export these users and groups, set the cleanup-users flag on the main request tag to true as follows:

    ```
          <request . . . cleanup-users="true" . . .>
    
    ```

    If you set this property to true, all users and groups that no longer exist in the configured user repository, such as LDAP, are exported with their action set to delete. You also need to set the export-users attribute to true.

    Before you reimport the file, you need to review and edit the result file and remove all users and groups that you want to keep in the portal database. During XML import, all users and groups that remain listed in the file are removed from the portal database.

    !!!note
        After you delete these entries through the modified XML script, all customization is lost for the deleted users and groups.

    The sample XML file CleanupUsers.xml is an example of exporting users and groups.

-   **group**

    Groups in the portal user database. The definitions include portal access control settings and membership information, for example, which users belong to the group. For more information about how to handle groups in XML, see the preceding tag user.

-   **markup**

    Definition of markup types that the portal pages support.

-   **client**

    Definition of client devices, how they are detected, and which markups and features they support.

-   **device-class**

    Definition of a device class.

-   **skin**

    Describes the visual appearance, for example, the border of individual user interface elements, for example, of portlets on a page. Skins can be assigned to content nodes and components.

-   **theme**

    Describes basic properties, for example, colors and font type, of the appearance of an entire group of pages. Themes might restrict the selection of possible skins on the associated pages. Themes can be assigned to content nodes.

-   **wsrp-producer**

    The wsrp-producer is the Producer definition on the Consumer side for Web Services for Remote Portlets (WSRP). It allows an administrator to use and integrate remote portlets that are provided by the WSRP Producer.

    After you integrate a WSRP service, the portal handles it like a regular local portlet. For example, you can add the portlet to pages.

-   **web-app**

    Web modules, which correspond to a deployed WAR file. To use them in the portal, one or more (concrete) portlet applications must be defined that describe specific settings. In a portlet.xml deployment descriptor, this element corresponds to the portlet-app tag.

    Web modules for standard API-compliant portlets can contain only one single portlet application, whereas web modules for IBM API-compliant portlets can contain more than one portlet application. For IBM API portlets, the uid attribute must match theuid attribute that is defined in the deployment descriptor.

    !!!note
        IBM API portlets are deprecated since HCL Portal Version 7.0, but are still supported.

    For standard portlets, the uid attribute must be constructed by the id attribute of the portlet-app subelement and a .webmod suffix. If the id attribute is not specified, then the uid attribute is constructed by the WAR file name and a .webmod suffix. Example:

    ```
        <web-app action="update" active="true" removable="true" uid="jsr_bookmarks_id001a.webmod"> 
             . . . . .
        <portlet-app action="update" active="true" uid="jsr_bookmarks_id001a">	  
    ```

    Depending on the path location of your WAR files, previously exported WAR files might not be found during an XML import due to incorrect path information. For information about how to use the <url\> subtag with the <web-app\> tag see the topic about *Importing WAR files*.

-   **servlet**

    Servlets that are defined in the web module. They are created as part of the WAR file deployment and cannot be created or deleted explicitly, therefore the create and delete actions are not supported. In a standard portlet.xml deployment descriptor, this element corresponds to the portlet tag. In an IBM portlet.xml, one servlet is created for each concrete-portlet tag.

-   **portlet-app**

    Portlet applications that are contained in a web module and contain specific settings. Usually, applications and their contained portlets are defined in the WAR file of the web module and are created by the portal during deployment. For IBM API-compliant portlets, this element corresponds to the concrete-portlet-app tag of the portlet deployment descriptor.

    For standard compliant portlets, the uid attribute must match the id attribute of the portlet-app element that is defined in the deployment descriptor. If the id attribute is not set in the deployment descriptor, specify the WAR file name.

    When the application is used in a WSRP context, the portlets that are contained in the application are defined remotely and can be integrated by using the XML configuration interface. In this case, portlet applications need to define a groupid attribute.

    After you deploy a WAR file locally or integrated a WAR file as a WSRP service, you can also create more portlet applications (and the contained portlets) with different settings. This action is also known as copying or cloning the portlet application.

-   **portlet**

    Portlets that can be placed on a page and contain specific settings. Normally, portlets are defined in the WAR file of the web module and are created by the portal during deployment. When the portlets that are contained in the web module are used in a WSRP context, they are defined remotely and are integrated by the XML configuration interface. In this case, portlet applications need to define a handle attribute. A new flag, provided, is introduced for providing portlets for remote invocation and withdrawing them.

    When you create a new portlet in an extra application, it must refer to one of the servlets that was defined in the web module. In a portlet.xml deployment descriptor, this element corresponds to the concrete-portlet tag.

    !!!note
        If you write standard API-compliant portlets, you must not use the parameter tag to add parameters; use the preferences tag instead.

-   **content-node**

    An element in the content hierarchy of the portal. The portal supports several types of content nodes:

    -   A page is a content node that is made up of nested layout elements and displays portlets.
    -   A label is a content node that serves for organizing the content hierarchy but does not display portlets.
    -   A static page is a content node that contains a static HTML file or an HTML fragment.
    -   An internal URL is a content node that points to other portal content by referencing a URL.
    -   An external URL is a content node that points to a web page outside the portal.
    
    All content nodes in the portal are organized in a hierarchy; at the root of this hierarchy is the special content node wps.content.root. A content node of the type page can be derived from another parent content node so that it partially overrides or extends the layout of its parent. The portal and the portlet for Working with pages always display an aggregation of a composition layer and all of its ancestors. But the XML configuration interface must manage every layer separately.

    !!!note
        It is recommended to always export and replace an entire stack of page layers and not to use XML requests to modify individual layout components or derived page layers. In particular, do not try to manually create XML scripts for the definition of derived pages, as the reference structure is complex. Instead, use the portlet for Working with pages to edit page layouts, and then export the result into an XML response file.

-   **component**

    A layout component inside a page. The portal supports two types of components:

    -   A container is a row or column container that aggregates child containers.
    -   A control component contains a portlet instance.
    If you update an existing page with an XML script and the script specifies components inside that page, the layout-processing attribute of that page defines how those new components interact with the existing layout of the page.

-   **portletinstance**

    An individual occurrence of a portlet on a page. The portlet instance includes the user-defined portlet data that was set by using the edit mode of the portlet.

    !!!note
        1.  A portlet instance is always contained in a component of type control; deleting a portlet instance automatically deletes the component in which the portlet was contained.
    
        2.  Instances of standard portlet API-compliant portlets must not use the parameter tag to add parameters; they must use the preferences tag instead.
    
    For personalized content, where only portlet parameters but no page structure is changed, use the following attributes with the portletinstance tag:

    -   **owner**

        Use this attribute to define the owner of the portletinstance.

    -   **parentref**

        Use this attribute to define the parent of the portletinstance.

-   **cross-page-wire**

    Represents a property broker wiring between two portlet instances on either the same page or on different pages. A wire connects a source and a target portlet instance so that values that change in the source are propagated to the target. This tag has the `source-pageref` and `target-pageref` as the only extra attributes to the wire tag. When you export a page with cross-page wires that are connected, then the `cross-page-wire` tag is exported, even if there is no direct reference to or from the page or the wire.

    !!!note
        A wire can be created only if the wiring endpoints of the corresponding portlets exist. Legacy portlets that are not compliant with JSR 168 or 286 might create those endpoints programmatically on their first rendering. Therefore, the XML configuration interface cannot create a new wire for those portlets unless they are rendered the first time. To create this wire, first view the page that contains the portlet with a web browser and then create the wire by using the XML configuration interface.

-   **wire**

    Represents a property broker wiring between two portlet instances on a page. A wire connects a source and a target portlet instance so that values, which change in the source are propagated to the target.

    !!!ote "Notes"
        1.  The `wire` tag is deprecated with HCL Portal Version 7.0, as it supports property broker wiring between two portlets on the same page only. Use the `cross-page-wire` tag as it supports property broker wiring between portlets on the same page and on different pages.
    
        2.  A wire can be created only if the wiring endpoints of the corresponding portlets exist. Legacy portlets that are not compliant with JSR 168 or 286 might create those endpoints programmatically on their first rendering. Therefore, the XML configuration interface cannot create a new wire for those portlets unless they are rendered the first time. To create this wire, first view the page that contains the portlet with a web browser and then create the wire by using the XML configuration interface.

-   **credential-segment**

    Groups a collection of credential entries for a specific back-end credential store (vault). The configuration of credential segments cannot be modified after they are created.

-   **credential-slot**

    A single credential entry that describes information that is required to connect to a protected resource outside the portal. The XML configuration interface covers only the definition of the credential slot. The actual credential, for example the password for an application, is stored in the back-end credential store. It can be set or updated, but not exported by using the XML configuration interface.

    For more information about setting user credentials by using the XML configuration interface, see the XML sample file UpdateVault.xml provided with the portal.

-   **url-mapping-context**

    Use this tag to define arbitrary URL spaces that map to portal content.

-   **user-resources**

    Use this tag to do export or delete actions for specific users.

-   **policy-node**

    Use this tag to define arbitrary URL spaces that map to portal content. When you use the XML configuration interface to work with policies, some limitations apply.

-   **application-role**

    Use this tag to define a compound role that combines multiple authorization roles and is specific for a set of users.


The following tags and attributes are for portal internal use only. If you encounter these tags or attributes in an XML export script that you want to use for later update, do not change these tags or their content in any way.

-   **action-set**

    This tag is for portal internal use only.

-   **category**

    This tag is for portal internal use only.

-   **federation-server**

    This tag is for portal internal use only.

-   **protected-resource**

    This tag is for portal internal use only.

-   **resource-type**

    This tag is for portal internal use only.

-   **transformation**

    This tag is for portal internal use only.

-   **transformation-app**

    This tag is for portal internal use only.

-   **transformationinstance**

    This tag is for portal internal use only.

-   **serverref**

    The serverref is an attribute for the `content-node` tag; it is for portal internal use only.


-   **content**

    This tag is for portal internal use only.

-   **supported-processing-event**

    This tag is for portal internal use only.

-   **supported-publishing-event**

    This tag is for portal internal use only.

-   **qname**

    This tag is for portal internal use only.

-   **alias**

    This tag is for portal internal use only.

-   **class-name**

    This tag is for portal internal use only.


The following tags are available for portal resources for tagging and rating: `tag`, `rating`, `custom-resource`, and `category-instance`. For more information about these tags, see the topic about *Using the XML configuration interface to administer tags and ratings*.

The XML configuration interface manages only resources of the portal core and not the resources of extra components, such as Portal Personalization.


???+ info "Related information"  
    -   [Transferring portal configuration data by using the XML configuration interface](../../../../portal_admin_tools/xml_config_interface/working_xml_config_interface/using_xml_config_cmd_line/transfer_portal_cfg_using_xml_config_int/index.md)
    -   [Task register-iwidget-definition](../../../../../portlets_development/mng_portlets_apps_widgets/managing_iwidgets/csa2r_cfgtsk_regwidgdef.md)
    -   [Actions on portal resources](../../../../portal_admin_tools/xml_config_interface/xml_config_ref/types_portal_resources/adxmlref_actions.md)
    -   [Importing WAR files](../../../../portal_admin_tools/xml_config_interface/xml_config_ref/adxmlref_import_war.md)
    -   [Sample XML configuration files](../../../../portal_admin_tools/xml_config_interface/xml_config_ref/admxmsmp.md)
    -   [Using the XML configuration interface to administer tags and ratings](../../../../../../build_sites/tagging_rating/tag_rate_xml.md)

