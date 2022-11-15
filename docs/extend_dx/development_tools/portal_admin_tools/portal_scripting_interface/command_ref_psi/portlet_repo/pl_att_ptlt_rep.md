# Plain attributes - Portlet repository

In addition to the default attributes, repository objects have some of the following attributes. Alternative, shorter names are documented in the bean help.

|Attribute|Description|
|---------|-----------|
|name|The name, for all object types.|
|version|The version number, for web modules only.|
|contextroot|The absolute path URI, for web modules only.|
|resourceroot|The relative directory, for web modules only.|
|defaultlocale|The default locale, for applications and portlets.|

These attributes are also available:

|Attribute|Description|
|---------|-----------|
|id, oid, guid|The identifier of the node. Suitable input for select.|
|uniquename, uname, un|The global unique name of the node.|
|type|The type of the node. Options: repository, web module, application, portlet|
|name|The name of the node.|
|commonname, cname, cn|The common name that is generated for the node.|
|version|The version number. Only for web modules.|
|contextroot, context, uri|The relative URI for addressing the web module. Only for web modules.|
|resourceroot, resdir, dir, war|The sub-directory where the web module resources can be found.|
|defaultlocale, dlocale, defloc|The default locale. Only for portlet applications and portlets.|
|servlet|The ID of the associated servlet. Only for portlets.|
|cachescope, cs|The remote cache scope of this repository node. Only portlet nodes can have this read-only flag. The attribute value can be empty. Valid attribute values are shared or s for a shared remote cache scope, nonshared, or ns for a non-shared remote cache scope.|
|cacheexpiration, cacheexp, cexp|The expiration value of the remote cache, in seconds. Only portlet nodes can have this read-only flag. The attribute value must be a numeric expression, where -1means that the cache never expires, 0 means that the cache expires at each request.|
|remotecachedynamic, rcd|Indicates whether the remote cache is dynamic or static. Only portlet nodes can have this read-only flag. A value of true indicates that the remote cache is dynamic. False indicates that the remote cache is a static cache.|

All attributes are read-only, there is no set command. The resourceroot attribute typically is the name of the WAR file of the web module.


