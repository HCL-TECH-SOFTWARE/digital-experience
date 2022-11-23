---
id: h_rperm_resource_type
title: Resource types
---




Resource types are broad categories that contain resource instances. Resource instances are specific resources, such as a single portlet or page. Each resource instance belongs to only one resource type. For example, the resource instance Market News Page would belong to the Page resource type.

Virtual resources are a unique resource type. Virtual resources contain the parent resources for all other HCL Portal resources.

By default, roles on a resource propagate to all of its child resources. For example, if a user has the Editor role on the Market News Page, then by default that user also has the Editor role on all pages that are children of the Market News Page. You can assign roles on virtual resources and on resource instances. Using virtual resources saves time administering access control because child resources inherit parent resource roles. Using resource instances allows you to specify which individual resources users can access. Although this process can be time-consuming, it provides more flexibility when assigning roles.

The following table provides a brief description of resource types:

|Resource type|Description|
|-------------|-----------|
|Web Modules|Portlet WAR files that are installed on WebSphere® Application Server. Web modules can contain multiple portlet applications.|
|Portlet Applications|Parent containers for portlets.|
|Portlets|The portlet objects. Multiple instances of the portlet object can exist on multiple pages in the portal. Users have the same access to all instances of a portlet.|
|Pages|The content that determines the portal navigation hierarchy.|
|User Groups|Groups of portal users.|
|URL Mapping Contexts|User-defined definitions of URL spaces that map to portal content.|
|Virtual Resources|Virtual resources have two functions: -   Protecting sensitive operations that affect the entire portal. For example, the XmlAccess virtual resource protects the ability to execute XmlAccess scripts.
-   Grouping resources of the same resource type. For example, the Web Modules virtual resource is the root node of all Web Modules within the portal. Role assignments on the Web Modules virtual resource permit access to all Web Modules in the portal.

|
|WSRP Producers|Remote Producer instances that a Consumer portal uses to consume remote portlets.|
|PSE Sources|Represents the root node of all Portal Search Collections. For additional information refer to the Portal Search section.|
|Policies|Use policies to specify and apply common and specialized settings that determine how portal resources function for different classes of users. For additional information about policies collections refer to the Managing portal resources with policies section.|

