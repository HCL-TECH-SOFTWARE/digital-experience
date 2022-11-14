# Lookup of portal resources

XML elements with locate, export, update and delete actions need to refer to existing resources in the portal. Those resources must be identified by specific attributes.

The relevant attribute to identify a resource in the portal is its object ID. Every resource must have an object ID and it must always be unique. Therefore, if you specify an objectid attribute for a resource, and you do not use symbolic object IDs as described earlier, the resource is looked up by that object ID.

Of course, there are cases where you do not have literal object ID values available when you write your scripts, especially if you are writing scripts that are executed on installations that you are not administering yourself. Therefore you can also specify other identifying attributes to look up resources. If the lookup by object ID fails, the XML processing also attempts to find the resource using other attributes.

An alternative method for looking up portal resources is to use a unique name. Every resource that has an object ID can also have an optional unique name, and the unique name must unambiguously identify the resource. Unique names are useful if you need a symbolic way to identify certain resources. They allow easy porting of configurations between portal installations. In contrast to object IDs, it is possible to modify unique names of resources, which can be an advantage in certain situations. To set a unique name for a resource, use the Custom Unique Names portlet under Administration, Portal Settings.

If a unique name is not given or cannot be found, some resources can also be searched using other attributes. Some resources can be looked up without any attribute information, because they exist only once in their context.

The following table shows the relationship between resources and the attributes you can use for locating them:

|Resource key|Attributes used for locating the resources|
|------------|------------------------------------------|
|portal, global-settings, services-settings|None; these items always exist only once.|
|markup, virtual-resource, user, group, credential-segment, credential-slot, portlet|name|
|web-app, portlet-app|uid|
|servlet|name **Note:** The refid is used as fallback for XML imports from earlier portal versions that do not contain the name attribute.

|
|portletinstance|None; there is at most one portlet instance per component.|
|url-mapping-context|label|

In any case, the lookup process first tries to find the resource by its object ID, if specified, and then by its unique name, if that is specified. Only when those attempts fail, other attributes are used for locating the resource.

**Note:** If an objectid attribute is specified in the XML input, but the corresponding resource cannot be found by that object ID but only by another attribute, and if that object ID is used in other parts of the XML script as a reference, those references are mapped to the actual object ID for the resource that was found. In this case the objectid attribute behaves like a symbolic object ID as described earlier.


