# About the XML configuration interface

The XML configuration interface provides a batch processing interface for portal configuration updates. It allows you to export an entire portal configuration or parts of a configuration, for example specific pages, to an XML file. You can then re-create the exported configuration from such a file on another portal.

## How do I access the XML configuration interface?

You access the XML configuration interface using a command line tool. This command line client is a small separate program that connects to the server using an HTTP connection or a secure HTTPS connection with SSL. It is therefore possible to configure the portal remotely.

## Tasks that you can perform with the XML configuration interface

These are typical tasks for which you use the XML configuration interface:

-   Copy parts of a configuration, such as specific pages, from one portal to another. This usage scenario includes the case where you try out a new portal configuration on a test portal for evaluation, and then transfer it to a production portal in a separate step using the portal configuration interface.
-   Install additional resources on a portal.
-   Perform recurring administration tasks in an automated and reproducible manner.

Use of the XML configuration interface for backing up or restoring complete portal configurations is restricted by the following limitations:

1.  A complete XML export of a portal configuration is not sufficient to re-create the portal. You also need the WAR files for your portlets and possibly additional file resources, such as theme files if they are not part of the standard portal installation.
2.  The XML configuration interface is not designed to deal efficiently with large volumes of data. For a backup and restore solution on a production server, you should rely on low-level database and file system backups.

## Access and security considerations

To be able to use the XML configuration interface, you need to have the manager role on the virtual resource XML_ACCESS and the security administrator role on the virtual resource PORTAL. This implies that you must be a super administrator of the portal, who can perform any action. Consequently, there are no further access control checks that could restrict your actions when you use the XML configuration interface; you may view all resources in the portal and you may update and delete all resources.

When you run the XML command line tool, you must authenticate yourself by specifying your portal user ID and password. When you use an HTTP connection, the user and password are sent to the server unencrypted, therefore you should only connect to the XML configuration interface from inside a protected intranet where you can be sure that the HTTP connection is not compromised. In all other networks configure SSL and use a secure HTTP**S** connection to connect to the XML configuration interface.

## Overall structure of the XML input and output

There are two main types of requests that can be sent to the XML configuration interface:

-   **Export requests**

    An export request triggers the export of complete or partial portal configurations into XML. It does not modify the configuration of the portal. It results in a response file.

-   **Update requests**

    An update request modifies the configuration of the portal according to the values found in the XML script.


A third request type is available for preparing the deletion of orphaned data:

-   **Export-orphaned-data requests**

    An export-orphaned-data request exports the complete portal configuration into XML, including orphaned data. It results in a response file.


Requests to and responses from the XML configuration interface use the same XML format. An export request generates an XML response that contains all the configuration data required to re-create the exported configuration part. This means that you can export a portal configuration, save the XML output file and, without modification, send it to another portal to re-create the same configuration there.

Use the XML schema for the XML format that HCL Digital Experience provides for reference. You will find it in the JAR file wp.xml.jar in the HCL Portal installation directory:

-   UNIX™ and Linux™: PortalServer_root/base/wp.xml/shared/app
-   Windows™: PortalServer_root\base\wp.xml\shared\app`

Unpack the JAR file and you will find the file with the XML schema under the path `com/ibm/wps/command/xml/PortalConfig_8.5.0.xsd`. An XML request contains the following:

-   A mandatory portal section; it describes the parts of the portal configuration that should be exported or updated
-   An optional status section. In an XML response it indicates the success or failure of the requested operation. During the import of configuration data the XML processing ignores this section of the XML input file.

## Representation of a portal configuration in XML

The XML hierarchy that is found under the portal section in the XML request file represents the structure of a portal as an XML tree. This tree contains resources in the portal, such as portlets or pages, and their configuration data. The XML hierarchy of all supported portal resources is shown in the following table:

|XML element|Description|
|-----------|-----------|
|`portal`|Main element of every XML request|
|`global-settings`|Global portal settings|
|`services-settings`|Global portal settings for portal services|
|`language`|Languages that are defined in portal|
|`task`|Tasks that can be used to schedule programs|
|`action`|Actions that can be used to create action sets|
|`action-set`|Action sets that can be used to create roles. They are also known as Role Types.|
|`virtual-resource`|Virtual resources that have associated access control settings|
|`resource-type`|Resource types that you can use to create custom resources.|
|`protected-resource`|A resource instance that is protected by Portal Access Control (PAC).|
|`user`|Users defined in the portal user management system|
|`group`|Groups defined in the portal user management system|
|`markup`|Markups that can be supported by portal pages|
|`client`|Client devices (browsers) that the portal knows about|
|`device-class`|Device class information|
|`skin`|Visual appearance settings that can be applied to user interface elements|
|`theme`|General visual settings that can be applied to the user interface|
|`wsrp-producer`|Producer of web services as defined in the consumer portal|
|`wsdl-url`|The URL to the Producer's WSDL document|
|`porttype`|The URL to the service description, markup, registration, or portlet management of the Producer|
|`web-app`|Web modules containing portlets|
|`url`|The WAR file that contains the web application|
|`context-root`|The context root that is assigned to the web application of the portlet application in the predeployed EAR file (reference: application.xml)|
|`display-name`|The name that is assigned to the application in the predeployed EAR file (reference: application.xml)|
|`servlet`|Servlets that are defined in the web module|
|`portlet-app`|Portlet applications that are defined in the web module|
|`portlet`|Portlets that are defined in the portlet application|
|`federation-server`|The federation server definition. This server is used to retrieve content nodes.|
|`content-node`|Elements of the portal content tree (pages or labels)|
|`supported-markup`|The markups that are supported by this content node|
|`allowed-portlet`|The portlets that are allowed on this page|
|`component`|Layout components of pages|
|`component`|Subcomponents in the structure of the page|
|`portletinstance`|Occurrences of a portlet on a page with customized settings|
|`cross-page-wire`|Property broker wiring between two portlet instances. **Note:** The `wire` tag has been deprecated with HCL Portal Version 7, as it supports property broker wiring between two portlets *on the same page* only. Use the `cross-page-wire` tag as it supports property broker wiring between portlets on the same page and on different pages.|
|`credential-segment`|Segments for storing credentials in the credential vault|
|`credential-slot`|Slots in a credential segment that hold a credential|
|`url-mapping-context`|User defined URLs that map to pages in the portal|
|`user-resource`|Allows exporting and deletion of a specific user resources.|
|`policy-node`|Policies that are defined in the portal|
|`application-role`|A named set of authorization roles that can be assigned to users or groups.|
|`wsrp-customized-portletinstance`|A customized occurrence of a portlet provided by WSRP on a Producer portal|
|`custom-resource`|A custom resource that can be tagged or rated by users|
|`category-instance`|A category assigned to a custom resource|
|`tag`|A tag applied to a resource by a user|
|`rating`|A rating applied to a resource by a user|
|`filter-instance`|A filter for preprocessing data before the data is finally stored.|

Depending on the content of an XML request, these resources can be created, modified, deleted or exported. An XML request can contain any number of such resource definitions. It can therefore create hundreds of new resources in one step or modify only a single configuration setting of one existing resource.

## Request Types

XMLAccess allows to specify special processing parameters as part of the request tag like e.g.:

```
<request
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:noNamespaceSchemaLocation="PortalConfig_8.0.0.xsd"
    type="update"
    create-oids="true">
```

More information on these can be found in the table below:

|XML element|Description|
|-----------|-----------|
|create-oids|If true, this turns on ID generating mode, where object IDs from the input XML are not stored to the database, but new object IDs are generated instead. Default is false.|
|require-defined-oids|If true resources need to have defined object IDs. In contrast to create-oids IDs are never created dynamically. Default is false.|
|export-users|If true, a full export of the portal will also include the complete user repository. Default is false. The members of a group can be suppressed, if you specify 'no-member'.|
|export-release|If true, a full export of the portal will only include public resources. The resulting xml file is intended to be processed by the ReleaseBuilder tool. Default is false.|
|cleanup-users|If 'invalid', users that are deleted from an external directory will be exported such that they can be deleted in a next step. If 'obsolete', External Users that have no application role assignment will be exported such that they can be deleted in a next step. Default is 'none'.|
|dam-collections|If true, DAM Collections access control is exported.|


???+ info "Related information"  
    -   [Portal administration tools](../../../../extend_dx/development_tools/index.md)
    -   [Setting up SSL](../../../../deployment/manage/security/information/confidentiality/configuring_ssl/setup_ssl/index.md)
    -   [Deleting orphaned data](../../../../deployment/manage/config_portal_behavior/adelorph.md)

