# Changing the error condition behavior

Update the PersonalizationService.properties file to override an error condition behavior globally.

The property rulesEngine.visibilityDefault specifies whether a page or portlet renders if there is a problem with the assigned rule. Changing the property value to show means the page or portlet will display even if the assigned rule cannot be found or if there is a problem with the rule.

The property rulesEngine.throwObjectNotFoundException specifies what happens if an object such as a user is not found when needed during rule execution. This may occur when Personalization cannot find the current user or when an expected application object does not exist on the session or request at the expected key. When set to false, a null user or object is not treated as an error but is instead only printed to the logs as a warning. Personalization will continue as if the requested attribute of the null object is itself null.

For example, if no user object is found and rulesEngine.throwObjectNotFoundException is set to false, a rule such as `Show page or portlet when user.name is null` would return `show`. A null user is treated as if the user name is null. However, if no user object was found and rulesEngine.throwObjectNotFoundException is set to true, this same rule would throw an exception. If this rule was used to determine the visibility of a page or portlet, the ultimate result would depend upon the value of the rulesEngine.visibilityDefault property, which would decide what occurs if an exception is thrown during processing of a rule in attribute based administration.

1.  Open the PersonalizationService.properties file. This file is located in the following directory:[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/config/services/PersonalizationService.properties.

2.  Find the rulesEngine.visibilityDefault property.

3.  Set the value of this property to show to enable portlets or pages to render if an error occurs.

4.  Fine the rulesEngine.throwObjectNotFoundException property.

5.  Set the value of this property to true to throw an exception if the object is not found.



